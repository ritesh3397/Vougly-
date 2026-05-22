import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Supabase lazy client
  let supabaseClient: any = null;

  function getSupabase() {
    if (!supabaseClient) {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!url || !key) {
        throw new Error("SUPABASE_KEY_MISSING");
      }
      supabaseClient = createClient(url, key);
    }
    return supabaseClient;
  }

  // API router
  app.post("/api/waitlist", async (req, res) => {
    try {
      const { name, email } = req.body;
      if (!email || !name) {
        return res.status(400).json({ error: "Name and email are required" });
      }

      // Check format
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Invalid email address format" });
      }

      let supabase;
      try {
        supabase = getSupabase();
      } catch (e: any) {
        if (e.message === "SUPABASE_KEY_MISSING") {
          console.warn("Supabase credentials not configured in environment.");
          // Graceful local memory fallback when keys are not set up yet
          return res.status(200).json({ 
            success: true, 
            warning: "unconfigured",
            message: "Credentials are not set up yet, registered locally in browser!" 
          });
        }
        throw e;
      }

      // Insert waitlist directly to support "Public Select Blocked" RLS configurations and query-less unique checks
      const { error: insertError } = await supabase
        .from("waitlist")
        .insert([{ name, email }]);

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        
        // Check for Postgres unique constraint violation (code "23505")
        if (
          insertError.code === "23505" || 
          (insertError.message && insertError.message.toLowerCase().includes("duplicate")) ||
          (insertError.details && insertError.details.toLowerCase().includes("already exists"))
        ) {
          return res.status(409).json({ error: "You're already on the list!" });
        }

        // Check for Row-Level Security (RLS) permission error (code "42501")
        if (insertError.code === "42501") {
          return res.status(403).json({ 
            error: "RLS policy restricts access. Please run this SQL in Supabase dashboard to allow public submissions: \nCREATE POLICY \"Allow public insert\" ON waitlist FOR INSERT WITH CHECK (true);" 
          });
        }

        return res.status(500).json({ 
          error: `Supabase Insert Failed: ${insertError.message}. Code: ${insertError.code || "unknown"}` 
        });
      }

      return res.json({ success: true });
    } catch (err: any) {
      console.error("Waitlist error:", err);
      return res.status(500).json({ error: err.message || "Something went wrong on the server" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
