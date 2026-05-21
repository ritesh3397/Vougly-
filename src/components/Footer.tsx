import { Heart, Github, Twitter, Linkedin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Col left */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 p-[1px]">
                <div className="h-full w-full bg-zinc-950 rounded-lg flex items-center justify-center text-teal-400">
                  <Heart className="h-4.5 w-4.5 fill-current" />
                </div>
              </div>
              <span className="text-xl font-display font-medium tracking-tight text-white">
                Vouchly
              </span>
            </a>
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
              Convert happy customers into professional audio, video, or text social proof. Collect feedback with simple modern share links, embed beautiful Wall of Love masonry widgets completely code-free.
            </p>
            {/* Social Icons list */}
            <div className="flex gap-4 text-zinc-650 hover:text-teal-400">
              <span className="cursor-pointer hover:text-white transition-colors duration-200" title="Twitter channel">
                <Twitter className="h-4 w-4" />
              </span>
              <span className="cursor-pointer hover:text-white transition-colors duration-200" title="Linkedin handle">
                <Linkedin className="h-4 w-4" />
              </span>
              <span className="cursor-pointer hover:text-white transition-colors duration-200" title="GitHub repository source">
                <Github className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* Nav Links Column lists */}
          <div className="md:col-span-7 col-span-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {/* Group 1 */}
            <div className="space-y-4">
              <h5 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Product</h5>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li><a href="#how-it-works" className="hover:text-teal-400 transition-colors">How it works</a></li>
                <li><a href="#features" className="hover:text-teal-400 transition-colors">Features grid</a></li>
                <li><a href="#ai-showcase" className="hover:text-teal-400 transition-colors">AI prompt model</a></li>
                <li><a href="#widget-preview" className="hover:text-teal-400 transition-colors text-emerald-400">Live widgets builder</a></li>
              </ul>
            </div>

            {/* Group 2 */}
            <div className="space-y-4">
              <h5 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Pricing & Docs</h5>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li><a href="#pricing" className="hover:text-teal-400 transition-colors">Pricing tiers</a></li>
                <li><a href="#faq" className="hover:text-teal-400 transition-colors">Documentation</a></li>
                <li><span className="hover:text-teal-400 transition-colors cursor-pointer">API Webhooks</span></li>
                <li><span className="hover:text-teal-400 transition-colors cursor-pointer">Changelog v2.1</span></li>
              </ul>
            </div>

            {/* Group 3 */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h5 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Legal & Contact</h5>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li><span className="hover:text-teal-400 transition-colors cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-teal-400 transition-colors cursor-pointer">Terms of Service</span></li>
                <li><span className="hover:text-teal-400 transition-colors cursor-pointer">GDPR Compliance</span></li>
                <li><a href="mailto:support@vouchly.co" className="hover:text-teal-400 transition-colors font-bold">support@vouchly.co</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright elements */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 space-y-4 sm:space-y-0">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>© 2026 Vouchly Inc. Handcrafted with</span>
            <Heart className="h-3 w-3 text-emerald-400 fill-current" />
            <span>for the SaaS founders.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-teal-400" />
            <span>Convert happy customers on autopilot</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
