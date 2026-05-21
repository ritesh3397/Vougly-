import { HOW_IT_WORKS_STEPS } from '../data.ts';
import { Link2, Smartphone, Monitor, ChevronRight } from 'lucide-react';

export default function StepSection() {
  
  // Custom stepper icon resolver
  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Link2 className="h-6 w-6 text-teal-400" />;
      case 2:
        return <Smartphone className="h-6 w-6 text-emerald-400" />;
      case 3:
        return <Monitor className="h-6 w-6 text-teal-300" />;
      default:
        return <Link2 className="h-6 w-6 text-teal-300" />;
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-white/5">
      
      {/* Background visual neon connecting accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Topic Title Area */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-300 border border-teal-500/20 uppercase tracking-widest font-mono">
            How it works in seconds
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Sifar 3 Steps Mein <span className="text-gradient font-bold text-transparent bg-clip-text">Social Proof</span> Embed Banao
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans">
            Humne automated collection system ko design kiya hai taaki bina technical knowledge ke high conversions visual widgets deploy kiye ja sakein.
          </p>
        </div>

        {/* 3 Step flex/grid container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div key={step.id} className="relative group">
              
              {/* Floating connector arrows for desktop */}
              {idx < 2 && (
                <div className="hidden md:flex absolute top-12 -right-6 z-20 h-6 w-6 text-zinc-700 items-center justify-center pointer-events-none group-hover:text-teal-400 transition-colors">
                  <ChevronRight className="h-5 w-5 animate-pulse" />
                </div>
              )}

              {/* Step Card Inner Layout */}
              <div className="glass-card rounded-2xl p-6 md:p-8 space-y-4 relative overflow-hidden flex flex-col justify-between h-full hover:border-teal-500/30 transition-all duration-300">
                {/* Accent neon horizontal line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 opacity-20 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 group-hover:border-teal-400/50 flex items-center justify-center transition-all shadow">
                      {getStepIcon(step.id)}
                    </div>
                    <span className="text-xs font-mono text-zinc-500 font-bold bg-zinc-950 px-2 py-0.5 rounded border border-white/5">
                      0{step.id}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-teal-400 tracking-widest uppercase block">
                      {step.badge}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-teal-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono italic">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center text-[10px] text-zinc-500 font-mono">
                  <span>Automated setup verified</span>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
