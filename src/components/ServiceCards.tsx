import { services } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { Users, TrendingUp, ArrowLeftRight, KeyRound, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  TrendingUp,
  ArrowLeftRight,
  KeyRound,
};

export default function ServiceCards() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <ScrollReveal>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
          <span className="text-xs font-mono text-gold/70">SERVICE MODULES</span>
          <div className="h-px flex-1 bg-gradient-to-l from-gold/50 to-transparent" />
        </div>
        <h2 className="font-display text-gold-light text-2xl lg:text-3xl mb-10 text-center">服务模块</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.id} delay={index * 100}>
                <TiltCard className="group h-full">
                  <div className="h-full bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-xl p-6 glow-card cursor-pointer relative overflow-hidden">
                    {/* 动态边框 */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(212,168,83,0.5), 0 0 30px rgba(212,168,83,0.1)" }} />

                    {/* 角落装饰 */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-lg border border-gold/30 bg-gold/5 flex items-center justify-center">
                        {Icon && <Icon className="w-6 h-6 text-gold" />}
                      </div>
                      <span className="text-xs font-mono text-gold/90 border border-gold/30 px-2.5 py-1 rounded">{service.price}</span>
                    </div>

                    <h3 className="font-display text-gold-light text-xl mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="flex items-center text-xs font-mono text-gold group-hover:gap-2 transition-all">
                      <span>[ 进入入口 ]</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
