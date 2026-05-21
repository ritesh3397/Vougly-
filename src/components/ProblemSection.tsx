import { PAIN_POINTS } from '../data.ts';
import { AlertCircle, Sliders, PlayCircle, EyeOff, LayoutTemplate } from 'lucide-react';

export default function ProblemSection() {
  
  // Custom helper to render distinct negative warning icons
  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertCircle className="h-6 w-6 text-orange-500" />;
      case 'Sparkles':
        return <EyeOff className="h-6 w-6 text-red-500" />;
      case 'VideoOff':
        return <PlayCircle className="h-6 w-6 text-zinc-500" />;
      case 'FolderMinus':
        return <Sliders className="h-6 w-6 text-yellow-500" />;
      default:
        return <LayoutTemplate className="h-6 w-6 text-red-400" />;
    }
  };

  return (
    <section id="problem-insights" className="relative py-24 px-4 md:px-8 bg-zinc-950 border-t border-white/5 overflow-hidden">
      
      {/* Background warning reddish glow orbs */}
      <div className="absolute top-1/2 left-10 h-72 w-72 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 h-80 w-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Topic Intro block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400 border border-rose-500/20 uppercase tracking-widest font-mono">
            The Reality Check
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Manual Review Collect <br className="hidden sm:block" />
            Karna <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-400 font-bold">Painful Hai.</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Customer reviews build massive conversion momentum, par manual workflows break user experience. Traditional forms look unprofessional and kill response rates.
          </p>
        </div>

        {/* Display problematic aspects in a nice bento-style fluid layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl border border-white/5 bg-zinc-900/40 p-6 shadow-md transition-all duration-300 hover:border-rose-500/20 hover:bg-zinc-900/70"
            >
              
              {/* Subtle top edge custom crimson warning glow on card hover */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-rose-500/0 via-rose-500/40 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex justify-between items-start mb-4">
                <div className="h-11 w-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-rose-500/10 group-hover:border-rose-500/20 transition-all">
                  {getProblemIcon(item.iconName)}
                </div>
                {item.stat && (
                  <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-mono font-semibold text-rose-400">
                    {item.stat}
                  </span>
                )}
              </div>

              <h3 className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors font-display">
                {item.problem}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
