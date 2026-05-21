import { motion } from 'motion/react';
import { Play, Sparkles, Star, Heart, Video, ArrowRight, ShieldCheck, Database, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenSubmissionModal: () => void;
  onScrollToPreview: () => void;
}

export default function HeroSection({ onOpenSubmissionModal, onScrollToPreview }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-black">
      
      {/* Absolute futuristic abstract lighting setups (orbs + grids) */}
      <div className="absolute inset-0 bg-grid-pattern-hero opacity-80 pointer-events-none" />
      <div className="absolute top-1/6 left-1/4 -translate-y-1/2 h-[400px] w-[400px] bg-teal-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] bg-emerald-500/20 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Headline Area */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Animated custom badging */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 px-3.5 py-1 text-xs text-teal-300 font-mono tracking-wide"
          >
            <Zap className="h-3.5 w-3.5 text-teal-400 animate-pulse" />
            <span>Convert Customer Love Into Revenue</span>
          </motion.div>

          {/* Headline and alternate subheadline with Hinglish localization */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Social Proof Collect Karna <br />
            <span className="text-gradient-accent font-extrabold text-transparent bg-clip-text">Ab Easy Hai.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg md:text-xl font-sans leading-relaxed max-w-2xl"
          >
            Collect text & video testimonials with one simple link — aur unhe beautiful widgets mein website pe show karo. <strong className="text-teal-400 font-medium">No coding required.</strong>
          </motion.p>

          {/* CTA Buttons with responsive behaviors */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onOpenSubmissionModal}
              className="relative group rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 p-[1px] font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg flex-shrink-0"
              id="hero-primary-cta"
            >
              <div className="relative flex items-center justify-center gap-2 rounded-xl bg-zinc-950/95 group-hover:bg-transparent px-8 py-3.5 transition-all font-display font-bold">
                <span>Free Mein Start Karo</span>
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button
              onClick={onScrollToPreview}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 font-display font-semibold text-white transition-all active:scale-95 shadow-md flex-shrink-0"
              id="hero-secondary-cta"
            >
              <Play className="h-4 w-4 fill-white text-white" />
              <span>Live Demo Dekho</span>
            </button>
          </motion.div>

          {/* Trust badges representing standard SaaS target markets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 border-t border-white/5 space-y-3"
          >
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
              Loved by founders & operators at modern SaaS brands
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-60">
              <span className="text-sm font-semibold text-zinc-400 tracking-tight flex items-center gap-1.5"><Heart className="h-4 w-4 text-rose-500 fill-current" /> Stark.io</span>
              <span className="text-sm font-display font-bold text-zinc-400 tracking-tight">linear.so</span>
              <span className="text-sm font-sans font-extrabold text-zinc-400 tracking-wider font-mono">FRAME</span>
              <span className="text-sm font-display font-medium text-zinc-400 tracking-tight italic">Stripe Pay</span>
              <span className="text-sm font-sans font-bold text-teal-400 tracking-tight">ListingGennie</span>
            </div>
          </motion.div>

        </div>

        {/* Right Layout with Perspective Transforms, Fake-3D layered dashboard widgets */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 6, rotateY: -6 }}
            transition={{ duration: 1 }}
            className="relative transform-3d aspect-[4/5] sm:aspect-square w-full max-w-md mx-auto xl:max-w-lg bg-zinc-950/30 border border-white/5 rounded-3xl p-6 shadow-2xl overflow-visible flex flex-col justify-between"
          >
            
            {/* Overlay grid patterns for visual complexity */}
            <div className="absolute inset-0 bg-zinc-950 bg-grid-pattern opacity-10 rounded-3xl" />

            {/* Float 1: Dynamic star rating tracker on top-left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 glass-card p-4 rounded-xl border border-teal-500/20 shadow-lg flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">4.9/5 Rating</p>
                <p className="text-[9px] text-zinc-400 font-mono">ProductHunt #1 Social platform</p>
              </div>
            </motion.div>

            {/* Float 2: Floating text testimonial element with simulated avatar top-right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -right-10 z-15 glass-card p-4 rounded-xl border border-white/10 shadow-xl max-w-xs space-y-2 hidden sm:block"
            >
              <div className="flex items-center gap-1.5 text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3 w-3 fill-current" />)}
              </div>
              <p className="text-[10px] text-zinc-300 italic">"Vouchly ne hamare organic signups 42% badha diye."</p>
              <div className="flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&fit=crop&q=80" alt="avatar" className="h-5 w-5 rounded-full object-cover" />
                <span className="text-[9px] text-zinc-400">Ritesh, Marketer</span>
              </div>
            </motion.div>

            {/* Float 3: Fake Video Testimonial Player main central canvas element */}
            <div className="relative w-full aspect-video rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-inner group cursor-pointer" onClick={onOpenSubmissionModal}>
              
              {/* Overlay simulation display filters */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 z-10 flex flex-col justify-between p-4">
                <div className="flex justify-between items-center w-full">
                  <span className="inline-flex items-center gap-1 rounded bg-teal-500/10 px-1.5 py-0.5 text-[9px] font-bold text-teal-400 font-mono">
                    <Video className="h-3.5 w-3.5" /> VIDEO PROOF
                  </span>
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Client Submission</span>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-white">Pradeep S. (SaaS Marketer)</p>
                  <p className="text-[10px] text-zinc-300 block">"Vouchly screen recorder works direct in browser!"</p>
                  
                  {/* Fake wave simulator */}
                  <div className="flex gap-0.5 pt-1.5 items-center">
                    <span className="h-3.5 w-0.5 bg-teal-400 rounded animate-pulse" />
                    <span className="h-2 w-0.5 bg-teal-500 rounded animate-pulse" />
                    <span className="h-5 w-0.5 bg-emerald-400 rounded animate-pulse" />
                    <span className="h-4 w-0.5 bg-teal-300 rounded animate-pulse" />
                    <span className="h-2.5 w-0.5 bg-zinc-600 rounded" />
                    <span className="h-4 w-0.5 bg-teal-400 rounded animate-pulse" />
                    <span className="h-1.5 w-0.5 bg-zinc-600 rounded" />
                    <span className="text-[9px] text-zinc-400 ml-2 font-mono">0:14 duration</span>
                  </div>
                </div>
              </div>

              {/* Video background image placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=450&fit=crop&q=80" 
                alt="Founder Video Testimonial" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700"
              />

              {/* Centered play mockup bubble */}
              <div className="absolute inset-0 z-15 flex items-center justify-center">
                <span className="h-12 w-12 rounded-full bg-teal-500/20 group-hover:bg-teal-500/40 border border-teal-400 flex items-center justify-center text-teal-300 transition-all" title="Submit your review">
                  <Play className="h-5 w-5 fill-current text-teal" />
                </span>
              </div>
            </div>

            {/* Float 4: AI Intelligent Suggestion popup left bottom */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 bottom-1/4 z-20 glass-card p-3 rounded-xl border border-emerald-500/20 shadow-lg max-w-[190px] space-y-1"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-[9px] font-mono text-emerald-300 font-bold uppercase tracking-widest">AI Prompt Assistant</span>
              </div>
              <p className="text-[10px] text-zinc-300">"Pehle conversions manual thi, ab 32% growth lift..."</p>
              <span className="inline-block text-[8px] bg-emerald-500/10 text-emerald-400 py-0.5 px-1.5 rounded-full font-semibold">Metrics Added!</span>
            </motion.div>

            {/* Float 5: Tiny analytics Conversion Dashboard widget right bottom */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -bottom-6 z-20 glass-card p-4 rounded-xl border border-white/10 shadow-xl w-48 space-y-2"
            >
              <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                <span>CONVERSIONS</span>
                <span className="bg-emerald-500/10 text-emerald-400 py-0.5 px-1 rounded animate-pulse">LIVE</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold font-display text-white">+35%</span>
                <span className="text-[10px] text-emerald-400 font-semibold">Before: 11%</span>
              </div>
              {/* Mock minimalist bar chart */}
              <div className="flex gap-1 h-8 items-end pt-1">
                <span className="w-full bg-white/10 h-[20%] rounded" />
                <span className="w-full bg-white/10 h-[35%] rounded" />
                <span className="w-full bg-white/10 h-[45%] rounded" />
                <span className="w-full bg-gradient-to-t from-teal-500 to-emerald-400 h-[100%] rounded" />
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
