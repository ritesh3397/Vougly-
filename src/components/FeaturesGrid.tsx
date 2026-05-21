import { PRODUCT_FEATURES } from '../data.ts';
import { 
  Video, Brain, Heart, MessageSquare, Mail, 
  Share2, ShieldCheck, Database, Globe, Layers, ArrowUpRight 
} from 'lucide-react';

export default function FeaturesGrid() {
  
  // Custom Icon Selector
  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Video':
        return <Video className="h-6 w-6 text-teal-400" />;
      case 'Brain':
        return <Brain className="h-6 w-6 text-emerald-400" />;
      case 'Heart':
        return <Heart className="h-6 w-6 text-pink-400 fill-pink-500/10" />;
      case 'MessageSquare':
        return <MessageSquare className="h-6 w-6 text-emerald-500" />;
      case 'Mail':
        return <Mail className="h-6 w-6 text-purple-400" />;
      case 'Share2':
        return <Share2 className="h-6 w-6 text-teal-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-teal-400" />;
      case 'Database':
        return <Database className="h-6 w-6 text-teal-200" />;
      case 'Globe':
        return <Globe className="h-6 w-6 text-teal-300" />;
      default:
        return <Layers className="h-6 w-6 text-teal-400" />;
    }
  };

  return (
    <section id="features" className="relative py-24 px-4 md:px-8 bg-zinc-950/80 bg-grid-pattern overflow-hidden border-t border-white/5">
      
      {/* Background radial soft lights */}
      <div className="absolute top-1/4 right-10 h-80 w-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 h-80 w-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Topic Title Area */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300 border border-teal-500/20 uppercase tracking-widest font-mono">
            Feature Set Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Premium Social <span className="text-gradient-accent font-bold text-transparent bg-clip-text">Utilities</span> Built For Fast-Growth SaaS
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans max-w-2xl mx-auto">
            Vouchly packs powerful automation tools, AI prompt engines, custom widgets branding, and seamless platform embeds to turn customer love into revenue.
          </p>
        </div>

        {/* 9-Grid Layout representing the primary features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_FEATURES.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group h-full relative"
            >
              
              {/* Perspective glowing light outline layout */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent group-hover:via-teal-400 transition-all duration-300" />
              <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-teal-500/5 to-transparent group-hover:via-teal-400/20 transition-all duration-300" />

              <div className="space-y-4">
                
                {/* Header icons + dynamic tags */}
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-teal-400/30 group-hover:bg-teal-950/20 flex items-center justify-center transition-all shadow-inner">
                    {getFeatureIcon(item.iconName)}
                  </div>
                  
                  {item.badge ? (
                    <span className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-[9px] font-mono font-semibold text-teal-300 tracking-wider">
                      {item.badge}
                    </span>
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-teal-400 transition-colors" />
                  )}
                </div>

                {/* Info titles */}
                <div className="space-y-1">
                  <h3 className="text-base md:text-lg font-display font-bold text-white group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Card footer details representing high completeness */}
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Production ready embed</span>
                <span className="group-hover:text-emerald-400 transition-colors">100% automated</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
