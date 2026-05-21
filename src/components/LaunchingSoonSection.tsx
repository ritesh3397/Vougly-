import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Flame, Users, Sparkles } from 'lucide-react';

export default function LaunchingSoonSection() {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&fit=crop&q=80',
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&fit=crop&q=80'
  ];

  return (
    <section id="launching-soon" className="relative py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-white/5">
      {/* Absolute background mesh glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-4 py-1.5 text-xs font-semibold text-teal-300 border border-teal-500/20 uppercase tracking-widest font-mono">
          <Flame className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
          Pre-Launch Status
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white leading-none">
            Launching Soon
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Be the first to share your experience — launching soon. Early users are booking custom review pipelines today.
          </p>
        </div>

        {/* Small placeholder avatars with "Early users joining now" theme */}
        <div className="p-6 max-w-md mx-auto glass-card rounded-2xl border-white/5 bg-zinc-950/40 relative overflow-hidden space-y-4">
          <div className="flex items-center justify-center -space-x-3">
            {avatars.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Early user"
                referrerPolicy="no-referrer"
                className="h-10 w-10 rounded-full object-cover border-2 border-zinc-950 hover:scale-105 transition-transform"
              />
            ))}
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center border-2 border-zinc-950 text-black text-xs font-bold shadow-md">
              +500
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-center items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4.5 w-4.5 fill-teal-400 stroke-teal-400 text-teal-400" />
              ))}
            </div>
            <p className="text-xs font-mono font-bold text-teal-300">
              Early users joining now
            </p>
            <p className="text-[11px] text-zinc-500 font-sans">
              Top SaaS founders, digital creators & marketing agencies trust our system
            </p>
          </div>
        </div>

        {/* Decorative connection indicator */}
        <div className="flex justify-center items-center gap-3 pt-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-zinc-700" />
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
            <Users className="h-3 w-3 text-teal-500" /> No fake metrics, only authentic growth
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-zinc-700" />
        </div>
      </div>
    </section>
  );
}
