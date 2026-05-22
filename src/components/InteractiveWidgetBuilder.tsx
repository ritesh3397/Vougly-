import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Video, ShieldCheck, Code, Settings, Eye, RefreshCw, Sparkles, Copy } from 'lucide-react';
import { Testimonial } from '../types.ts';

interface InteractiveWidgetBuilderProps {
  testimonials: Testimonial[];
  onOpenSubmissionModal: () => void;
}

export default function InteractiveWidgetBuilder({ testimonials, onOpenSubmissionModal }: InteractiveWidgetBuilderProps) {
  const [theme, setTheme] = useState<'carousel' | 'grid' | 'minimal' | 'dark_mode'>('grid');
  const [columns, setColumns] = useState<number>(3);
  const [copiedCode, setCopiedCode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Embed script simulation tag text for Wallovo social proof widgets
  const embedCode = `<script src="https://cdn.wallovo.com/widget.js" async></script>\n<wallovo-wall id="wal-embed-9z" theme="${theme}" layout="${theme}" cols="${columns}"></wallovo-wall>`;

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Filter testimonials by search
  const filteredTestimonials = testimonials.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="widget-preview" className="relative border-y border-white/10 bg-zinc-950 bg-grid-pattern py-24 px-4 md:px-8 overflow-hidden">
      {/* Background soft lighting blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[550px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            <Eye className="h-3 w-3" /> Live Widget Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mt-4 leading-tight">
            Interactive Testimonial <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-bold">Wall Previews</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-base md:text-lg font-sans leading-relaxed">
            Choose your layout, copy-paste 1-line script. Wall of love layout instantly adapts with matching brand look. No complex designs required.
          </p>
        </div>

        {/* Layout split: Configuration Sidebar left & Simulated Embedded Wall right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Configuration Sidebar controls */}
          <div className="lg:col-span-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <Settings className="h-4.5 w-4.5 text-indigo-400" />
                <h4 className="text-sm font-mono font-bold text-white tracking-widest uppercase">Widget Layouts</h4>
              </div>
              <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-[10px] font-mono text-indigo-400">V2.1 active</span>
            </div>

            {/* Layout selector options */}
            <div className="space-y-3">
              <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">1. Select Layout Style</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'carousel', name: 'Carousel Layout', label: 'Horizontal slideshow' },
                  { id: 'grid', name: 'Grid Layout', label: 'Standard masonry layout' },
                  { id: 'minimal', name: 'Minimal Layout', label: 'Border-only classic look' },
                  { id: 'dark_mode', name: 'Dark Mode Layout', label: 'Premium high-contrast dark' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id as any)}
                    className={`relative p-3 rounded-lg border text-left transition-all ${theme === t.id ? 'border-indigo-450 bg-indigo-950/20 text-white shadow-md' : 'border-white/5 bg-zinc-950 text-zinc-400 hover:border-white/10 hover:text-white'}`}
                  >
                    <p className="text-xs font-bold font-display">{t.name}</p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">{t.label}</p>
                    {theme === t.id && (
                      <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-md animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop column size selection */}
            <div className="space-y-3">
              <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">2. Grid Size Columns</label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-zinc-950 rounded-lg border border-white/5">
                {[1, 2, 3].map((col) => (
                  <button
                    key={col}
                    onClick={() => setColumns(col)}
                    className={`py-1.5 px-3 rounded text-xs font-mono font-bold transition-all ${columns === col ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
                  >
                    {col} {col === 1 ? 'Col' : 'Cols'}
                  </button>
                ))}
              </div>
            </div>

            {/* Search filter preview */}
            <div className="space-y-3">
              <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">3. Live Search Filter</label>
              <input
                type="text"
                placeholder="Search reviewer or text..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass-input rounded-lg px-3 py-2 text-xs text-white"
              />
            </div>

            {/* Simulated Live Submission Button */}
            <div className="bg-zinc-950 border border-white/5 rounded-xl p-4 text-center space-y-3">
              <p className="text-[11px] text-zinc-400 font-sans">Check submission system manually in real time:</p>
              <button
                onClick={onOpenSubmissionModal}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-xs text-white font-bold transition-all shadow-md active:scale-95"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Try Submitting a Testimonial
              </button>
            </div>

            {/* Generated copy code */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">Ready Code Integration</label>
              <div className="relative rounded-lg bg-zinc-950 p-3 border border-white/5 overflow-hidden">
                <pre className="text-[9px] font-mono text-teal-300 no-scrollbar overflow-x-auto whitespace-pre-wrap">{embedCode}</pre>
                <button
                  onClick={copyEmbedCode}
                  className="absolute right-2 top-2 p-1 rounded bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-all shadow-md active:scale-90"
                  title="Copy Code"
                >
                  {copiedCode ? (
                    <span className="text-[9px] px-1 font-sans text-emerald-400 font-bold">Copied!</span>
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Simulated Live Embedded Website Viewport right */}
          <div className="lg:col-span-8 space-y-4">
            {/* Fake browser bar */}
            <div className="relative rounded-t-xl bg-zinc-900/90 border-t border-x border-white/10 p-3 flex items-center justify-between shadow-lg">
              <div className="flex gap-1.5 items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="w-1/2 rounded bg-zinc-950 py-1 text-center text-[10px] text-zinc-500 border border-white/5 font-mono truncate">
                https://yourwebsite.com/solutions (Wall Embed Preview)
              </div>
              <span className="h-4.5 w-4.5 text-zinc-500">
                <Code className="h-3.5 w-3.5" />
              </span>
            </div>

            {/* Main embedded window simulator background based on theme configuration */}
            <div 
              className={`rounded-b-xl border-b border-x border-white/10 p-6 md:p-8 min-h-[460px] max-h-[600px] overflow-y-auto transition-all ${
                theme === 'light' 
                  ? 'bg-zinc-150 text-slate-800' 
                  : theme === 'neon' 
                    ? 'bg-zinc-950 border border-teal-500/20 shadow-[inset_0_0_20px_rgba(45,212,191,0.05)]' 
                    : theme === 'mono' 
                      ? 'bg-black text-green-500 font-mono' 
                      : 'bg-gradient-to-b from-zinc-950 to-zinc-900'
              }`}
            >
              <div className="text-center mb-8 border-b border-white/5 pb-4">
                <h4 className={`text-sm tracking-wider uppercase font-mono font-semibold ${theme === 'light' ? 'text-zinc-600' : theme === 'mono' ? 'text-green-500' : 'text-teal-400'}`}>
                  What Our Core Industry Clients Say About Us
                </h4>
                <p className={`text-[11px] mt-1 ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Real testimonials synced directly from the dashboard server
                </p>
              </div>

              {filteredTestimonials.length === 0 ? (
                <div className="text-center py-16 px-4 space-y-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Sparkles className="h-6 w-6 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h4 className={`text-xl font-display font-black tracking-tight ${theme === 'light' ? 'text-zinc-950' : 'text-white'}`}>
                      Launching Soon
                    </h4>
                    <p className={`text-xs max-w-md mx-auto ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                      Be the first to share your experience — launching soon. Click <strong>"Try Submitting a Testimonial"</strong> on the left control panel to see the widget auto-populate instantly!
                    </p>
                  </div>

                  {/* Optional small placeholder avatars pile */}
                  <div className="flex flex-col items-center gap-2 pt-2">
                    <div className="flex items-center -space-x-2">
                      {[
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80'
                      ].map((url, idx) => (
                        <img 
                          key={idx} 
                          src={url} 
                          alt="Early user" 
                          referrerPolicy="no-referrer"
                          className="h-8 w-8 rounded-full object-cover border-2 border-zinc-950 shadow" 
                        />
                      ))}
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] font-mono text-white font-bold border-2 border-zinc-950 shadow">
                        +500
                      </div>
                    </div>
                    <p className={`text-[10px] font-mono tracking-wider text-zinc-500`}>
                      Early users joining now • Spot reserved
                    </p>
                  </div>
                </div>
              ) : (
                <motion.div 
                  layout
                  className={theme === 'carousel' ? 'flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory' : `grid gap-4 md:grid-cols-${columns === 3 ? '2 xl:grid-cols-3' : columns}`}
                  id="embeddable-grid-view"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredTestimonials.map((item, index) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.45 }}
                        className={`rounded-xl p-5 border text-left transition-all duration-300 relative overflow-hidden group snap-start ${
                          theme === 'carousel' ? 'flex-shrink-0 w-72 md:w-80 bg-zinc-900 border-white/5 text-zinc-100 hover:border-indigo-400' : 
                          theme === 'minimal'
                            ? 'bg-white border-zinc-200 text-zinc-800 shadow-sm hover:shadow-md'
                            : theme === 'dark_mode'
                              ? 'bg-zinc-950 border-indigo-500/20 hover:border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.05)] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] text-zinc-100'
                              : 'bg-zinc-900/40 backdrop-blur-md border-white/5 text-zinc-200 shadow-md hover:border-white/10'
                        }`}
                      >
                        {/* Featured Badge */}
                        {item.isFeatured && (
                          <div className={`absolute top-2 right-2 flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[8px] tracking-widest uppercase font-mono ${theme === 'minimal' ? 'bg-indigo-55 text-indigo-600' : 'bg-indigo-400/10 text-indigo-300'}`}>
                            <ShieldCheck className="h-2 w-2" /> Featured
                          </div>
                        )}

                        {/* Stars */}
                        <div className="flex gap-0.5 mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < item.rating ? 'fill-yellow-400 stroke-yellow-400 text-yellow-400' : 'text-zinc-650'}`} 
                            />
                          ))}
                        </div>

                        {/* Testimonial text */}
                        <p className={`text-xs leading-relaxed mb-4 ${theme === 'minimal' ? 'text-zinc-600' : 'text-zinc-300'}`}>
                          {item.text}
                        </p>

                        {/* Card Footer: Reviewer Detail */}
                        <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            referrerPolicy="no-referrer"
                            className="h-8 w-8 rounded-full object-cover border border-white/10 flex-shrink-0"
                          />
                          <div>
                            <p className={`text-xs font-semibold ${theme === 'minimal' ? 'text-zinc-805' : 'text-white'}`}>
                              {item.name}
                            </p>
                            <p className={`text-[10px] opacity-75 ${theme === 'minimal' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                              {item.role}, <span className="font-semibold">{item.company}</span>
                            </p>
                          </div>
                        </div>

                        {/* Video feedback indicator */}
                        {item.videoUrl && (
                          <span className={`absolute bottom-3 right-3 rounded bg-indigo-500/10 p-1 ${theme === 'minimal' ? 'text-indigo-650' : 'text-indigo-400'}`} title="Includes High Quality Video Testimonial">
                            <Video className="h-3 w-3 stroke-[2.5]" />
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

            {/* Quick stats on live widget configuration */}
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 px-2">
              <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" /> Synchronized with live website</span>
              <span>Loaded: {filteredTestimonials.length} cards | Web-optimized SVG rendering</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
