import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { label: "项目入口", href: "#services" },
  { label: "更新日志", href: "#updates" },
  { label: "核心系统", href: "#systems" },
  { label: "终端", href: "#home" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/90 backdrop-blur-md border-b border-dark-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded border border-gold/60 flex items-center justify-center group-hover:border-gold group-hover:shadow-[0_0_12px_rgba(212,168,83,0.4)] transition-all">
              <Terminal className="w-4 h-4 text-gold" />
            </div>
            <span className="font-display text-gold-light text-lg md:text-xl tracking-wider">锦程</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-sm text-gray-300 hover:text-gold-light transition-colors font-mono"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#services"
              className="inline-flex items-center px-5 py-2 rounded border border-gold bg-gold/10 text-gold-light text-sm font-medium hover:bg-gold hover:text-dark transition-all duration-300 btn-click font-mono"
            >
              [ 启动 ]
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gold-light"
            aria-label="切换菜单"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-card border-t border-dark-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-gray-300 hover:text-gold transition-colors font-mono"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-2 rounded border border-gold bg-gold/10 text-gold-light font-mono"
            >
              [ 启动 ]
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
