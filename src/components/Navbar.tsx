import { Sparkles, Heart, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSubmissionModal: () => void;
}

export default function Navbar({ onOpenSubmissionModal }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/75 backdrop-blur-md border-b border-white/5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        
        {/* Brand logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px] transition-transform group-hover:rotate-6">
            <div className="h-full w-full bg-zinc-950 rounded-lg flex items-center justify-center text-indigo-400">
              <Heart className="h-4.5 w-4.5 fill-current" />
            </div>
          </div>
          <span className="text-xl font-display font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Wallovo
          </span>
        </a>

        {/* Navigation center list */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium tracking-wider text-zinc-400">
          <a href="#problem-insights" className="hover:text-white transition-colors uppercase">Why Wallovo</a>
          <a href="#how-it-works" className="hover:text-white transition-colors uppercase">Solution</a>
          <a href="#features" className="hover:text-white transition-colors uppercase">Features</a>
          <a href="#ai-showcase" className="hover:text-white transition-colors uppercase animate-pulse text-indigo-400">AI Showcase</a>
          <a href="#pricing" className="hover:text-white transition-colors uppercase">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors uppercase">FAQ</a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSubmissionModal}
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold tracking-wide transition-all border border-white/10 active:scale-95"
            id="nav-action-cta"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Try Collector</span>
          </button>
        </div>

      </div>
    </header>
  );
}
