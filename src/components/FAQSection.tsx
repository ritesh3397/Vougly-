import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data.ts';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 md:px-8 bg-zinc-950 border-t border-white/5 overflow-hidden">
      
      {/* Background neon soft blur glow */}
      <div className="absolute top-1/2 left-10 h-64 w-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Header Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20 uppercase tracking-widest font-mono">
            Support center
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-bold">Questions</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans">
            Aapke doubts clear karne ke liye simple straight answers. If you have extra inquiries, feel free to drop us a support message!
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-4 relative z-10">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="rounded-xl border border-white/5 bg-zinc-900/40 overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                
                {/* Accordion trigger button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-xs md:text-sm font-display font-bold text-white hover:text-indigo-300 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-4.5 w-4.5 text-indigo-400 flex-shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-4.5 w-4.5 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : ''}`}
                  />
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-zinc-400 font-sans leading-relaxed border-t border-white/5 bg-zinc-950/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Footer Support indicator */}
        <div className="mt-12 text-center text-xs text-zinc-500 font-mono">
          <span>Still confused? Ask direct live support queries at <a href="mailto:support@wallovo.com" className="text-indigo-400 hover:underline">support@wallovo.com</a></span>
        </div>

      </div>
    </section>
  );
}
