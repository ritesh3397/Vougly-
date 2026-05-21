import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Sparkles, Trophy } from 'lucide-react';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Arey, valid email address enter karo!');
      return;
    }

    setError('');
    setIsSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-white/5">
      {/* Background Visual Enhancers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-14 relative overflow-hidden border border-teal-500/20 bg-zinc-950/80 text-center shadow-[0_20px_50px_rgba(20,184,166,0.1)]">
          {/* Neon Top Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400" />
          
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-500/30 uppercase tracking-widest font-mono shadow-inner animate-pulse">
              <Trophy className="h-3.5 w-3.5" />
              Limited Waitlist Offer
            </div>

            <h2 id="waitlist-title" className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
              Pehle 50 Users Ko <span className="text-gradient font-bold text-transparent bg-clip-text">3 Months FREE</span>
            </h2>

            <p className="text-zinc-300 text-sm md:text-base font-sans max-w-xl mx-auto leading-relaxed">
              Launch se pehle join karo aur premium features free unlock karo. Spot secure karo aur automatic early updates pao.
            </p>

            <div className="pt-4 max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row gap-2.5 p-1.5 bg-zinc-900/90 rounded-2xl border border-white/10 shadow-2xl focus-within:border-teal-500/50 transition-all">
                      <input 
                        type="email" 
                        placeholder="Apna work email enter karo..."
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none w-full"
                        required
                        id="waitlist-email"
                      />
                      <button 
                        type="submit"
                        className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-black font-display font-bold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 duration-200 cursor-pointer shadow-lg shadow-teal-500/20 whitespace-nowrap"
                        id="waitlist-submit"
                      >
                        Join Karo
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    {error && (
                      <p className="text-left text-xs text-rose-400 font-mono pl-3">
                        {error}
                      </p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-teal-500/5 border border-teal-500/30 text-center space-y-3"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-display font-bold text-lg">Badhaai Ho! 🎉</h4>
                      <p className="text-sm text-teal-300 font-mono">Spot Secured: 3 Months Pro FREE on Launch!</p>
                      <p className="text-xs text-zinc-400 font-sans mt-2">
                        Humne launch timing and beta credentials aapke email ({email}) par ready kar diye hain. Stay tuned!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Credibility proof markers */}
            <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[11px] text-zinc-500 font-mono">
              <span className="flex items-center gap-1"><Sparkles className="h-3 w-3 text-teal-400" /> Instant Access Code On Email</span>
              <span className="flex items-center gap-1"><Sparkles className="h-3 w-3 text-emerald-400" /> 412+ Founders Joined Already</span>
              <span className="flex items-center gap-1"><Sparkles className="h-3 w-3 text-teal-300" /> ₹2,697 Pro Value FREE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
