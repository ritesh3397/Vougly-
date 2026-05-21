import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Star, Users } from 'lucide-react';

interface FinalCTAProps {
  onOpenSubmissionModal: () => void;
}

export default function FinalCTA({ onOpenSubmissionModal }: FinalCTAProps) {
  return (
    <section id="final-cta" className="relative py-28 px-4 md:px-8 bg-black overflow-hidden border-t border-white/5">
      
      {/* Background massive glowing green rings and lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-gradient-to-tr from-teal-500/10 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Glow-box Card Container */}
        <div className="relative rounded-3xl border border-teal-500/20 bg-zinc-950 p-8 md:p-16 text-center shadow-2xl overflow-hidden">
          
          {/* Subtle decoration elements */}
          <div className="absolute -top-10 -left-10 h-40 w-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-15">
            
            <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 px-3 py-1 text-xs text-teal-300 font-mono">
              <Sparkles className="h-4 w-4 text-teal-400 rotate-12" />
              <span>Instant social proof embed pipeline</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Customer Love Ko <br />
              <span className="text-gradient-accent font-extrabold text-transparent bg-clip-text">Revenue Mein Convert Karo.</span>
            </h2>

            <p className="text-zinc-400 text-sm md:text-base font-sans leading-relaxed">
              Join 2,400+ marketing executives, SaaS founders, agency directors, high-ticket tutors and freelancers collecting trusted customer feedback on autopilot daily.
            </p>

            {/* Main Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenSubmissionModal}
                className="w-full sm:w-auto relative group rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 p-[1px] font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <div className="relative flex items-center justify-center gap-2 rounded-xl bg-zinc-950/95 group-hover:bg-transparent px-8 py-3.5 transition-all font-display font-bold">
                  <span>Free Mein Start Karo</span>
                  <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Micro details indicator */}
            <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-[10px] font-mono text-zinc-500">
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-teal-500" /> No credit card required</span>
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-500 fill-current" /> 14-Day Free Starter trial</span>
              <span>Cancel any time</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
