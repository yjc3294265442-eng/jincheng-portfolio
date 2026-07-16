import { updates, quickLinks } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight, Clock } from "lucide-react";

export default function Updates() {
  return (
    <section id="updates" className="py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 本周更新 */}
        <ScrollReveal className="lg:col-span-2">
          <div className="bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-lg p-5 lg:p-6 h-full">
            <div className="flex items-center gap-2 mb-5">
              <Clock className="w-4 h-4 text-gold" />
              <h3 className="font-display text-gold-light text-lg">本周更新</h3>
              <span className="text-xs font-mono text-muted ml-auto">UPDATE_LOG</span>
            </div>
            <div className="space-y-3">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className="group flex gap-4 p-3 rounded border border-transparent hover:border-gold/20 hover:bg-dark/40 transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0 w-24 text-xs text-gold/70 font-mono pt-0.5">
                    {update.date}
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-200 group-hover:text-gold-light transition-colors mb-1 font-medium">
                      {update.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">{update.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 今日入口 */}
        <ScrollReveal delay={150}>
          <div className="bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-lg p-5 lg:p-6 h-full">
            <h3 className="font-display text-gold-light text-lg mb-5">今日入口</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-center gap-1 px-3 py-3 rounded border border-gold/40 bg-gold/5 text-gold-light text-sm font-mono hover:bg-gold hover:text-dark transition-all duration-300 btn-click"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
