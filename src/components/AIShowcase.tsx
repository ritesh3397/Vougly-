import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, Smile, ArrowRight, CornerDownRight, Check, Heart, Trophy } from 'lucide-react';

interface IndustryTemplate {
  category: string;
  smartPrompt: string;
  questions: string[];
  sentimentHighlights: { term: string; score: number }[];
  suggestedPraise: string;
}

const TEMPLATES: Record<string, IndustryTemplate> = {
  social: {
    category: 'Convert Reviews into Social Posts 📱',
    smartPrompt: 'Draft high-engagement LinkedIn and Twitter post variants using the raw testimonial text.',
    questions: [
      'Raw input: "Wallovo set up took under 1min. We instantly got 3 new deals after embedding the grid. Literal magic."',
      'AI Twitter variant: "🚀 Client just closed 3 deals in <24hrs simply by showing trust cards with @Wallovo. That\'s the magic of social proof."',
      'AI LinkedIn variant: "How we increased pipeline trust in minutes... 🧵 (See embedded Wall of Love inside 👇)"'
    ],
    sentimentHighlights: [
      { term: 'Engagement rate boost', score: 98 },
      { term: 'Optimal word layouts', score: 95 },
      { term: 'Auto-hashtag generators', score: 92 }
    ],
    suggestedPraise: '"Wallovo transforms raw customer feedback into viral social clips, Twitter threads, and visual quotes in seconds. No marketer needed."'
  },
  case_studies: {
    category: 'Generate Deep-Dive Case Studies 📝',
    smartPrompt: 'Synthesize the metrics, business vertical, and solution timeline into an executive case study.',
    questions: [
      'Problem definition: Manual screenshot collection took 10+ worker hours weekly.',
      'Solution implemented: Automating WhatsApp collection loops with Wallovo pipeline.',
      'Core Outcome: 35% review submission rate & 84% reduction in engineering hours.'
    ],
    sentimentHighlights: [
      { term: 'PDF deal-pitch ready', score: 97 },
      { term: 'Professional structure', score: 94 },
      { term: 'Metrics-driven layout', score: 91 }
    ],
    suggestedPraise: '"Turn standard customer quotes into fully fleshed-out PDF case studies to attach with your outbound sales emails."'
  },
  rewriter: {
    category: 'Rewrite Testimonials Professionally ✨',
    smartPrompt: 'Enhance grammatical flow, readability, and impact without losing the original user voice and truth.',
    questions: [
      'Original: "yeah product is nice, really helped with conversions i think"',
      'Enhanced Output: "Wallovo completely streamlined our client pipeline. We noticed a substantial, traceable lift in landing page conversion rates."',
      'Hinglish translation: "Maine Wallovo integrate kiya aur landing page conversions direct double ho gaye!"'
    ],
    sentimentHighlights: [
      { term: 'Tone matching selector', score: 99 },
      { term: 'Grammar polished flawless', score: 96 },
      { term: 'Direct value highlights', score: 93 }
    ],
    suggestedPraise: '"No more vague customer quotes. AI rewriting turns dry phrases into persuasive conversion triggers with proper typography."'
  },
  highlights: {
    category: 'Extract Marketing Highlights & Metrics 📊',
    smartPrompt: 'Pull concrete numbers, percentages, emotional pain points, and tool references for landing page hero cards.',
    questions: [
      'Extracted Metric: 32% growth in booking submissions.',
      'Emotional Anchor: Overcame initial high-ticket fear regarding trial prices.',
      'Feature Focus: One-click collection links & beautiful Wall of Love widgets.'
    ],
    sentimentHighlights: [
      { term: 'Numerical data extraction', score: 98 },
      { term: 'Key-value pairs exported', score: 95 },
      { term: 'Hero quote selector', score: 94 }
    ],
    suggestedPraise: '"Search through hundreds of reviews and instantly filter for only those mentioning specific numbers ($, %, hours saved)."'
  }
};

export default function AIShowcase() {
  const [activeTab, setActiveTab] = useState<'social' | 'case_studies' | 'rewriter' | 'highlights'>('social');

  const currentData = TEMPLATES[activeTab];

  return (
    <section id="ai-showcase" className="relative py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-white/5">
      {/* Background orbs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-80 w-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 h-64 w-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Information Column Left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 border border-indigo-500/20">
              <Brain className="h-4.5 w-4.5 text-indigo-400" /> Advanced AI Assistance
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
              AI Jo Better <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-bold">Testimonials</span> Collect Karne Mein Help Kare.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
              Customers often get stuck writing reviews. Wallovo's built-in intelligent prompt generator suggests personalized, high-conversion questions based on your industry guidelines to trigger metrics-focused feedback.
            </p>

            {/* Quick selectors for simulator previews */}
            <div className="space-y-3 pt-4">
              <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">Select AI engine capability:</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'social', name: 'Social Poster', desc: 'Reviews ➔ Posts' },
                  { id: 'case_studies', name: 'Case Studies', desc: 'Quotes ➔ Reports' },
                  { id: 'rewriter', name: 'Pro Rewriter', desc: 'Enhance Messy Texts' },
                  { id: 'highlights', name: 'Highlights', desc: 'Pull Key Metrics' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`flex-1 text-left p-3 rounded-xl border transition-all ${activeTab === item.id ? 'bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950/40 border-indigo-500/40 shadow-lg text-white' : 'bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/10 hover:text-white'}`}
                  >
                    <p className="text-xs font-bold font-display">{item.name}</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5 text-indigo-400"><Check className="h-4 w-4" /> Improves metric reviews by 4.2x</span>
              <span>Fully localizable in Hinglish</span>
            </div>
          </div>

          {/* Interactive AI Machine Display Right */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8 shadow-2xl overflow-hidden">
              {/* Premium futuristic backdrop highlights */}
              <div className="absolute -top-10 -right-10 h-40 w-40 bg-indigo-500/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 bg-purple-500/15 rounded-full blur-3xl" />

              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white tracking-wide uppercase font-display">{currentData.category}</h4>
                    <p className="text-[10px] text-zinc-500 font-mono">Wallovo Smart AI Engine</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex rounded bg-indigo-500/10 px-1.5 py-0.5 text-[9px] font-bold text-indigo-400 font-mono">
                    Accuracy 99.8%
                  </span>
                  <Smile className="h-4.5 w-4.5 text-indigo-400" />
                </div>
              </div>

              {/* Generated Prompts */}
              <div className="space-y-5">
                
                {/* 1. Dynamic AI Prompt Box */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                      <ArrowRight className="h-3 w-3 text-indigo-400" /> Prompts Banao
                    </span>
                    <span className="text-[10px] text-zinc-500">Live AI Output</span>
                  </div>
                  <div className="rounded-xl bg-zinc-900 border border-white/5 p-4 relative group">
                    <motion.p 
                      key={currentData.smartPrompt}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs italic text-zinc-200 font-mono"
                    >
                      "{currentData.smartPrompt}"
                    </motion.p>
                  </div>
                </div>

                {/* 2. Customer Guided Questions List */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                    Execution Pipeline / Code Logs preview
                  </span>
                  <div className="space-y-2">
                    <AnimatePresence mode="popLayout">
                      {currentData.questions.map((question, index) => (
                        <motion.div
                          key={question}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 text-xs"
                        >
                          <CornerDownRight className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="text-zinc-300 font-sans">{question}</span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 3. Sentiment keyword extracts overlay */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                    AI Key-Value Insights Extracted
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence mode="popLayout">
                      {currentData.sentimentHighlights.map((highlight) => (
                        <motion.span
                          key={highlight.term}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 px-3 py-1 text-[11px] font-sans hover:border-indigo-500/20 hover:text-white transition-all"
                        >
                          <Smile className="h-3 w-3 text-indigo-400" />
                          <span>{highlight.term}</span>
                          <span className="text-[9px] font-mono text-purple-300 font-bold ml-1">({highlight.score}%)</span>
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 4. Highlighted Showcase quote block with custom rating icons */}
                <div className="pt-4 border-t border-white/5 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                    Suggested Conversion Highlight
                  </span>
                  <div className="relative rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/20 p-4">
                    <div className="absolute top-1 right-2 -rotate-12 text-indigo-500/10 pointer-events-none">
                      <Trophy className="h-16 w-16" />
                    </div>
                    <motion.p 
                      key={currentData.suggestedPraise}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-indigo-300 italic font-medium leading-relaxed"
                    >
                      {currentData.suggestedPraise}
                    </motion.p>
                    <div className="flex gap-1.5 mt-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => <Smile key={s} className="h-3 w-3 text-yellow-400 fill-current" />)}
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 font-sans">1-Click share templates ready</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
