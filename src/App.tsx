/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Check, Heart, Sparkles, X } from 'lucide-react';

// Data and Types
import { INITIAL_TESTIMONIALS } from './data.ts';
import { Testimonial } from './types.ts';

// Components
import Navbar from './components/Navbar.tsx';
import HeroSection from './components/HeroSection.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import StepSection from './components/StepSection.tsx';
import FeaturesGrid from './components/FeaturesGrid.tsx';
import AIShowcase from './components/AIShowcase.tsx';
import InteractiveWidgetBuilder from './components/InteractiveWidgetBuilder.tsx';
import LaunchingSoonSection from './components/LaunchingSoonSection.tsx';
import WaitlistSection from './components/WaitlistSection.tsx';
import PricingSection from './components/PricingSection.tsx';
import FAQSection from './components/FAQSection.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import Footer from './components/Footer.tsx';
import ReviewModal from './components/ReviewModal.tsx';

export default function App() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Smooth scroll helper for preview section
  const handleScrollToPreview = () => {
    const element = document.getElementById('widget-preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add submitted reviews with immediate local feedback
  const handleAddReview = (newReview: Testimonial) => {
    setTestimonials((prev) => [newReview, ...prev]);
    setSuccessToast(`Shukriya! "${newReview.name}" ka testimonial submit ho gaya aur widget preview mein active hai!`);
    
    // Auto-scroll to preview to let user see their newly added testimonial
    setTimeout(() => {
      handleScrollToPreview();
    }, 850);

    // Fade out success notification
    setTimeout(() => {
      setSuccessToast(null);
    }, 7000);
  };

  return (
    <div className="bg-black text-zinc-100 min-h-screen relative font-sans selection:bg-teal-500 selection:text-black">
      
      {/* Absolute Header Navigation */}
      <Navbar onOpenSubmissionModal={() => setIsModalOpen(true)} />

      {/* Hero Section Banner */}
      <HeroSection 
        onOpenSubmissionModal={() => setIsModalOpen(true)} 
        onScrollToPreview={handleScrollToPreview} 
      />

      {/* Waitlist Early Access */}
      <WaitlistSection />

      {/* Problem Section: Warn regarding manual layouts */}
      <ProblemSection />

      {/* How it works steps */}
      <StepSection />

      {/* Interactive live widgets custom configure layout showcase */}
      <InteractiveWidgetBuilder 
        testimonials={testimonials} 
        onOpenSubmissionModal={() => setIsModalOpen(true)} 
      />

      {/* Launching Soon Testimony Panel */}
      <LaunchingSoonSection />

      {/* Core Features Grid */}
      <FeaturesGrid />

      {/* AI Smart showcase section */}
      <AIShowcase />

      {/* Pricing options */}
      <PricingSection onSelectPlan={(planName) => {
        setIsModalOpen(true);
        setSuccessToast(`Aapne choose kiya "${planName}" plan! Customize your social profiles testimonial form below to try.`);
        setTimeout(() => setSuccessToast(null), 5000);
      }} />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Final Conversion CTA Call */}
      <FinalCTA onOpenSubmissionModal={() => setIsModalOpen(true)} />

      {/* Bottom Footer block */}
      <Footer />

      {/* Interactive Testimonial Submission Drawer Dialog */}
      <ReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddReview}
      />

      {/* Top float success notifications */}
      <AnimatePresence>
        {successToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 right-4 left-4 sm:left-auto sm:right-6 z-50 max-w-sm"
          >
            <div className="glass-card border-teal-500/40 bg-zinc-950 p-4 rounded-xl flex items-start gap-3 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-400" />
              <div className="h-8 w-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                <Check className="h-4.5 w-4.5 stroke-[2.5]" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">System Notification</p>
                <p className="text-xs text-zinc-300 font-medium font-sans leading-relaxed">{successToast}</p>
              </div>
              <button 
                onClick={() => setSuccessToast(null)}
                className="text-zinc-500 hover:text-white transition-colors"
                id="close-toast-btn"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
