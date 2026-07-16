import { systems } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { FileText, Share2, Box, Wallet, ArrowRight, Cpu } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Share2,
  Box,
  Wallet,
};

export default function Systems() {
  return (
    <section id="systems" className="py-16 lg:py-24">
      <ScrollReveal>
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="w-5 h-5 text-gold" />
          <span className="text-xs font-mono text-gold/70">MAIN SYSTEMS</span>
        </div>
        <h2 className="font-display text-gold-light text-3xl lg:text-4xl mb-3">
          四个系统，分别解决四类问题
        </h2>
        <p className="text-sm text-muted mb-10 max-w-2xl">
          内容、流量、产品、变现，四个模块闭环运行，支撑个人品牌的持续输出与商业转化。
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {systems.map((system, index) => {
          const Icon = iconMap[system.icon];
          return (
            <ScrollReveal key={system.id} delay={index * 100}>
              <TiltCard className="group h-full">
                <div className="h-full bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-xl p-6 glow-card cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(212,168,83,0.5), 0 0 30px rgba(212,168,83,0.1)" }} />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-12 h-12 rounded-lg border border-gold/30 bg-gold/5 flex items-center justify-center mb-5">
                    {Icon && <Icon className="w-6 h-6 text-gold" />}
                  </div>

                  <h3 className="font-display text-gold-light text-xl mb-2 group-hover:text-gold transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {system.description}
                  </p>

                  <div className="flex items-center text-xs font-mono text-gold">
                    <span>[ 了解详情 ]</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
