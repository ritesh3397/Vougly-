import { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data.ts';
import { Check, Info, Sparkles, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section id="pricing" className="relative py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-white/5">
      
      {/* Background visual orb highlight setups */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[380px] w-[380px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Intro header area */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-300 border border-teal-500/20 uppercase tracking-widest font-mono">
            Fair & Transparent Setup
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Plans For Creators, <span className="text-gradient font-bold text-transparent bg-clip-text">Agencies</span> & SaaS Teams
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans">
            Start free, scale seamlessly when client reviews starts pushing organic conversions. No hidden costs. Cancel any time.
          </p>

          {/* Billing toggle slider pills */}
          <div className="pt-6">
            <div className="inline-flex items-center gap-1 p-1 bg-zinc-900 rounded-full border border-white/5">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`py-1.5 px-4 rounded-full text-xs font-semibold tracking-wide transition-all ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Monthly Plan
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`relative py-1.5 px-4 rounded-full text-xs font-semibold tracking-wide transition-all ${billingCycle === 'annually' ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Annually Pay (Save 20%)
                {billingCycle === 'monthly' && (
                  <span className="absolute -top-3 -right-6 inline-block bg-teal-500 text-black text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                    BEST VALUE
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Pricing columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">
          {PRICING_PLANS.map((plan) => {
            const displayPrice = billingCycle === 'annually' ? plan.priceAnnually : plan.price;
            
            return (
              <div
                key={plan.name}
                className={`glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group ${
                  plan.popular 
                    ? 'border-teal-400/50 bg-zinc-900 shadow-[0_15px_30px_rgba(45,212,191,0.15)] md:scale-105 z-10 hover:border-teal-400' 
                    : 'border-white/5 bg-zinc-950/40 hover:border-white/10'
                }`}
              >
                
                {/* Popular Glow highlights */}
                {plan.popular && (
                  <>
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-400 to-emerald-400 text-black text-[9px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {plan.badge || 'MOST POPULAR'}
                    </div>
                    {/* Glowing outer border line */}
                    <div className="absolute inset-0 rounded-2xl border border-teal-500/20 pointer-events-none group-hover:border-teal-400/40 transition-all" />
                  </>
                )}

                <div className="space-y-6">
                  
                  {/* Plan Header */}
                  <div className="space-y-2">
                    <p className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest">{plan.name}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed font-sans">{plan.description}</p>
                  </div>

                  {/* Plan Price */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-display font-extrabold text-white">{plan.currency}{displayPrice}</span>
                      <span className="text-xs text-zinc-500 font-mono">/{plan.period}</span>
                    </div>
                    {billingCycle === 'annually' && plan.price > 0 && (
                      <p className="text-[10px] text-teal-400 font-bold font-mono mt-1">Billed annually (Save 20% value)</p>
                    )}
                  </div>

                  {/* Plan Features Checklist */}
                  <div className="border-t border-white/5 pt-4 space-y-3">
                    <p className="text-[10px] font-mono tracking-wider font-semibold text-zinc-500 uppercase">Features Included:</p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs">
                          <Check className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-zinc-300 font-sans leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Action Button */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold font-display transition-all active:scale-95 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-black shadow-lg shadow-teal-500/10 font-bold'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing quick FAQ hint */}
        <div className="mt-12 text-center text-xs text-zinc-500 font-mono flex items-center justify-center gap-1.5">
          <Info className="h-4 w-4 text-teal-500/80" />
          <span>GST billing ready. Need customized volume plans? <a href="#final-cta" className="text-teal-400 font-bold hover:underline">Contact sales setup</a></span>
        </div>

      </div>
    </section>
  );
}
