import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Video, MessageSquare, Sparkles, Check, Play, Square } from 'lucide-react';
import { Testimonial } from '../types.ts';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (testimonial: Testimonial) => void;
}

export default function ReviewModal({ isOpen, onClose, onSubmit }: ReviewModalProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [reviewType, setReviewType] = useState<'text' | 'video'>('text');
  
  // Video collection simulation state
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [recordedTime, setRecordedTime] = useState(0);
  const [recordingIntervalId, setRecordingIntervalId] = useState<any>(null);

  // AI assist state
  const [isAiImproving, setIsAiImproving] = useState(false);
  const [aiUsed, setAiUsed] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    setIsRecorded(false);
    setRecordedTime(0);
    const interval = setInterval(() => {
      setRecordedTime(prev => {
        if (prev >= 15) {
          clearInterval(interval);
          setIsRecording(false);
          setIsRecorded(true);
          return 15;
        }
        return prev + 1;
      });
    }, 1000);
    setRecordingIntervalId(interval);
  };

  const stopRecording = () => {
    if (recordingIntervalId) {
      clearInterval(recordingIntervalId);
    }
    setIsRecording(false);
    setIsRecorded(true);
  };

  const useAiToImprove = () => {
    if (!text.trim()) {
      alert('Pehle thoda review feedback likhain! Hum usay premium AI metrics ke sath rewrite karenge.');
      return;
    }
    setIsAiImproving(true);
    setTimeout(() => {
      const positiveWords = ["industry-standard result", "highly professional setup", "highly recommended", "conversion rates grew past 30%!", "Vouchly completely simplified our client pipeline of collection."];
      const starterWords = text.trim();
      const improvedText = `"${starterWords} — and honest feedback, direct conversions are up over 35%! Vouchly simplifies social proof collection to a modern, automated 1-click pipeline."`;
      setText(improvedText);
      setIsAiImproving(false);
      setAiUsed(true);
    }, 1200);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !role || !company) return;
    
    const newReview: Testimonial = {
      id: 'user-' + Date.now(),
      name,
      role,
      company,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&fit=crop&q=80',
      rating,
      text: text || "Absolutely flawless experience collecting user comments!",
      videoUrl: reviewType === 'video' ? 'https://assets.mixkit.co/videos/preview/mixkit-man-holding-smartphone-at-home-40248-large.mp4' : undefined,
      platform: 'vouchly',
      timeAgo: 'Just now'
    };
    
    onSubmit(newReview);
    // Reset form
    setName('');
    setRole('');
    setCompany('');
    setText('');
    setReviewType('text');
    setIsRecorded(false);
    setAiUsed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay background blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            id="modal-overlay"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-6 shadow-2xl md:p-8"
            id="review-submission-modal"
          >
            {/* Ambient edge glow */}
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 ml-0.5 py-1 text-[10px] font-medium tracking-wider text-emerald-400 uppercase font-mono">
                  Live Showcase Collector
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1">Submit Your Testimonial</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-white/5 p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                id="close-modal-btn"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Type selector */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setReviewType('text')}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-md text-xs font-semibold transition-all ${reviewType === 'text' ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white' : 'text-zinc-400 hover:text-white'}`}
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  Text Review
                </button>
                <button
                  type="button"
                  onClick={() => setReviewType('video')}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-md text-xs font-semibold transition-all ${reviewType === 'video' ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white' : 'text-zinc-400 hover:text-white'}`}
                >
                  <Video className="h-3.5 w-3.5" />
                  Video Testimonial
                </button>
              </div>

              {/* Rating Star Selection */}
              <div className="flex flex-col items-center justify-center py-2 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Rate us with social love</span>
                <div className="flex gap-1.5 mt-2">
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <button
                      type="button"
                      key={starValue}
                      onClick={() => setRating(starValue)}
                      className="text-zinc-500 hover:scale-125 transition-all"
                    >
                      <Star
                        className={`h-6 w-6 stroke-1.5 ${starValue <= rating ? 'fill-yellow-400 stroke-yellow-400 text-yellow-400' : 'text-zinc-600'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Basic Inputs */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ritesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full glass-input rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Company / Team</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. HyperGrowth Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full glass-input rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Your Role</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Founder & CEO / Lead Instructor"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full glass-input rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>

              {/* Text content or Camera section */}
              {reviewType === 'text' ? (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Your Review Content</label>
                    <button
                      type="button"
                      onClick={useAiToImprove}
                      disabled={isAiImproving}
                      className={`flex items-center gap-1 text-[10px] font-display font-medium px-2 py-0.5 rounded-full border border-teal-500/20 hover:border-teal-400/50 bg-teal-950/40 text-teal-400 transition-all ${isAiImproving ? 'animate-pulse' : ''}`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {isAiImproving ? 'Improving...' : aiUsed ? 'AI Enhanced!' : 'AI Improve Karo (Hindi)'}
                    </button>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Apna experience likhein. E.g. Vouchly bahut responsive product hai, reviews instantly embed ho gaye..."
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                      if (aiUsed) setAiUsed(false);
                    }}
                    className="w-full glass-input rounded-lg px-3 py-2 text-xs text-white resize-none"
                  />
                  {aiUsed && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10px] text-teal-300 mt-1 flex items-center gap-1"
                    >
                      <Check className="h-3 w-3 stroke-[3]" /> Perfect! AI added professional traction metrics & hooks.
                    </motion.p>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Simulated Video Capture</label>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black flex flex-col items-center justify-center">
                    
                    {/* Viewfinder background simulator with visual filters */}
                    <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center opacity-70">
                      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/80 to-transparent p-2 z-10 flex justify-between items-center w-full">
                        <div className="flex items-center gap-1.5">
                          <span className={`h-2.5 w-2.5 rounded-full bg-red-600 ${isRecording ? 'animate-ping' : ''}`} />
                          <span className="text-[10px] text-red-500 font-mono tracking-widest font-bold uppercase">{isRecording ? 'REC' : 'STANDBY'}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/85">00:{recordedTime.toString().padStart(2, '0')}/00:15</span>
                      </div>
                      
                      {/* Live active streaming mockup overlay */}
                      {isRecording ? (
                        <div className="text-center animate-pulse space-y-1">
                          <Video className="h-8 w-8 text-teal-400 mx-auto animate-bounce" />
                          <p className="text-[10px] text-zinc-400 font-mono">Camera active... speak with enthusiasm!</p>
                        </div>
                      ) : isRecorded ? (
                        <div className="text-center space-y-1">
                          <Check className="h-8 w-8 text-emerald-400 mx-auto" />
                          <p className="text-[10px] text-zinc-400 font-mono">15s Video recorded successfully!</p>
                        </div>
                      ) : (
                        <div className="text-center space-y-1.5 px-6">
                          <Video className="h-6 w-6 text-zinc-500 mx-auto" />
                          <p className="text-[11px] text-zinc-400 font-display">Simulated Browser Video Recorder</p>
                          <p className="text-[9px] text-zinc-600">Simulate front camera with one simple click</p>
                        </div>
                      )}
                    </div>

                    {/* Progress tracking bar */}
                    {isRecording && (
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: `${(recordedTime / 15) * 100}%` }}
                          transition={{ duration: 1, ease: "linear" }}
                          className="h-full bg-gradient-to-r from-teal-500 to-emerald-500"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center gap-2">
                    {!isRecording ? (
                      <button
                        type="button"
                        onClick={startRecording}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-xs text-white font-semibold transition-all shadow-md"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        {isRecorded ? 'Record Again' : 'Simulator Record Start'}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={stopRecording}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-505 text-xs text-white font-semibold transition-all shadow-md"
                      >
                        <Square className="h-3.5 w-3.5 fill-current" />
                        Stop recording
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Backup Video Transcript Caption (Optional)</label>
                    <input
                      type="text"
                      placeholder="Add simple caption description, e.g. 'Very satisfied user! Saved dev hours.'"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="w-full glass-input rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={!name || !role || !company}
                className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 p-[1px] font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed text-xs py-3 mt-4"
                id="submit-review-btn"
              >
                <span className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors" />
                <div className="relative flex items-center justify-center gap-2 rounded-xl bg-zinc-950/90 group-hover:bg-zinc-950/40 py-2.5 transition-all text-white font-display font-bold">
                  <span>Submit Live Testimonial</span>
                  <Check className="h-4 w-4" />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
