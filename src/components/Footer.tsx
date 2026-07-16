import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-dark-border py-8 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-gold" />
          <span className="font-display text-gold-light tracking-wider">锦程</span>
          <span className="text-xs text-muted font-mono">© 2026 // ALL SYSTEMS NORMAL</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-xs text-muted hover:text-gold transition-colors btn-click font-mono"
        >
          [ RETURN_TOP ]
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
