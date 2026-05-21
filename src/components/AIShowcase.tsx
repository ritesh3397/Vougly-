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
  saas: {
    category: 'SaaS & Tech Startups',
    smartPrompt: 'How much development hours or subscription budget did Vouchly save you this quarter, and did it improve conversion rates?',
    questions: [
      'Pehle social proof manually embed karne mein kitna dev time lagta tha?',
      'Conversions mein kitna exact metric lift dekha aapne Vouchly launch karne ke baad?',
      'Kya video recorder flow customer ke liye optimized tha?'
    ],
    sentimentHighlights: [
      { term: '32% Conversion growth', score: 98 },
      { term: 'Saved 20+ engineering hours', score: 95 },
      { term: 'Webflow custom integration flawless', score: 92 }
    ],
    suggestedPraise: '"Vouchly simplified everything. We integrated reviews in 1 click and noticed a solid 32% growth in booking submissions!"'
  },
  agency: {
    category: 'Marketing & Design Agencies',
    smartPrompt: 'Explain how displaying trusted client reviews helped convert your organic pipeline or high-budget client deals.',
    questions: [
      'Humare pitch decks mein clients ka confidence kitna improve hua?',
      'Kya background reviews dashboard clients ko real high-quality proof deta hai?',
      'Naye agency clients onboard karne mein kya rate drop of client decrease hua?'
    ],
    sentimentHighlights: [
      { term: 'High deal confidence', score: 97 },
      { term: 'Professional visual display', score: 94 },
      { term: 'Automatic followups are awesome', score: 90 }
    ],
    suggestedPraise: '"Clients tell us our wall-of-love widget looked completely elite. Best social proof asset we have created for our high-budget pipelines."'
  },
  coaching: {
    category: 'Coaches, Consultants & Solopreneurs',
    smartPrompt: 'Describe the exact breakthrough you achieved in our high-ticket programs, and why video proof matters for your courses.',
    questions: [
      'Program join karne se pehle aapka sabse bada fear kya tha?',
      'Ab video testimonial submit karna direct WhatsApp se kitna convenient laga?',
      'Our program accountability and trust has what effect on your daily tasks?'
    ],
    sentimentHighlights: [
      { term: 'Life changing results', score: 99 },
      { term: 'WhatsApp requests are perfect', score: 96 },
      { term: 'Highly motivational video quality', score: 93 }
    ],
    suggestedPraise: '"Submitting video testimonials takes 1 click with direct mobile links on WhatsApp. Our course trust metrics increased instantly by 40%."'
  }
};

export default function AIShowcase() {
  const [activeTab, setActiveTab] = useState<'saas' | 'agency' | 'coaching'>('saas');

  const currentData = TEMPLATES[activeTab];

  return (
    <section id="ai-showcase" className="relative py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-white/5">
      {/* Background orbs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-80 w-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 h-64 w-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Information Column Left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
              <Brain className="h-4.5 w-4.5 text-emerald-400" /> Advanced AI Assistance
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              AI Jo Better <span className="text-gradient font-bold text-transparent bg-clip-text">Testimonials</span> Collect Karne Mein Help Kare.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Customers often get stuck writing reviews. Vouchly's built-in intelligent prompt generator suggests personalized, high-conversion questions based on your industry guidelines to trigger metrics-focused feedback.
            </p>

            {/* Quick selectors for simulator previews */}
            <div className="space-y-2 pt-4">
              <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">Select Your Segment Industry:</p>
              <div className="flex flex-col sm:flex-row gap-2">
                {[
                  { id: 'saas', name: 'SaaS Startups', desc: 'Conversions & Metrics' },
                  { id: 'agency', name: 'Design Agencies', desc: 'Trust & High Deals' },
                  { id: 'coaching', name: 'Coaching Guilds', desc: 'Breakthrough & Love' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`flex-1 text-left p-3.5 rounded-xl border transition-all ${activeTab === item.id ? 'bg-gradient-to-br from-zinc-900 via-zinc-900 to-teal-950/40 border-teal-500/40 shadow-lg text-white' : 'bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/10 hover:text-white'}`}
                  >
                    <p className="text-xs font-semibold font-display">{item.name}</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5 text-teal-400"><Check className="h-4 w-4" /> Improves metric reviews by 4.2x</span>
              <span>Fully localizable in Hinglish</span>
            </div>
          </div>

          {/* Interactive AI Machine Display Right */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8 shadow-2xl overflow-hidden">
              {/* Premium futuristic backdrop highlights */}
              <div className="absolute -top-10 -right-10 h-40 w-40 bg-teal-500/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 bg-emerald-500/15 rounded-full blur-3xl" />

              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white tracking-wide uppercase font-display">{currentData.category}</h4>
                    <p className="text-[10px] text-zinc-500 font-mono">Built-In Smart Agent Panel</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400 font-mono">
                    Sentiment 99.2%
                  </span>
                  <Smile className="h-4.5 w-4.5 text-emerald-400" />
                </div>
              </div>

              {/* Generated Prompts */}
              <div className="space-y-5">
                
                {/* 1. Dynamic AI Prompt Box */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                      <ArrowRight className="h-3 w-3 text-emerald-400" /> Prompts Banao
                    </span>
                    <span className="text-[10px] text-zinc-500">Auto generated questions</span>
                  </div>
                  <div className="rounded-xl bg-zinc-900 border border-white/5 p-4 relative group">
                    <motion.p 
                      key={currentData.smartPrompt}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs italic text-zinc-200"
                    >
                      "{currentData.smartPrompt}"
                    </motion.p>
                  </div>
                </div>

                {/* 2. Customer Guided Questions List */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                    Questions For The Client (Shown on Rating Form)
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
                          <CornerDownRight className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-zinc-300 font-sans">{question}</span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 3. Sentiment keyword extracts overlay */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                    AI Sentiment Keywords Analyzed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence mode="popLayout">
                      {currentData.sentimentHighlights.map((highlight) => (
                        <motion.span
                          key={highlight.term}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 px-3 py-1 text-[11px] font-sans hover:border-emerald-500/20 hover:text-white transition-all"
                        >
                          <Smile className="h-3 w-3 text-emerald-400" />
                          <span>{highlight.term}</span>
                          <span className="text-[9px] font-mono text-teal-300 font-bold ml-1">({highlight.score}%)</span>
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 4. Highlighted Showcase quote block with custom rating icons */}
                <div className="pt-4 border-t border-white/5 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                    Suggested Conversion Wall Highlight
                  </span>
                  <div className="relative rounded-xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 p-4">
                    <div className="absolute top-1 right-2 -rotate-12 text-emerald-500/10 pointer-events-none">
                      <Trophy className="h-16 w-16" />
                    </div>
                    <motion.p 
                      key={currentData.suggestedPraise}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-emerald-300 italic font-medium leading-relaxed"
                    >
                      {currentData.suggestedPraise}
                    </motion.p>
                    <div className="flex gap-1.5 mt-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => <Smile key={s} className="h-3 w-3 text-yellow-400 fill-current" />)}
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500">Approved by client</span>
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
