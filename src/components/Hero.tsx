import GoldenRing from "./GoldenRing";
import { creatorInfo } from "@/data/portfolio";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-6rem)] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-12 lg:py-0"
    >
      {/* 左侧文案 */}
      <div className="relative z-10 flex-1 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/40 bg-gold/5 text-gold text-xs font-mono tracking-widest mb-6 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          SYSTEM ONLINE
        </div>

        <h1 className="font-display text-gold-light text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold/70">
            {creatorInfo.name}
          </span>
          <br />
          的操作终端
          <Sparkles className="inline-block w-6 h-6 lg:w-8 lg:h-8 ml-2 text-gold animate-pulse" />
        </h1>

        <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl animate-fade-in-up font-mono text-sm lg:text-base border-l-2 border-gold/40 pl-4" style={{ animationDelay: "300ms" }}>
          {creatorInfo.bio}
        </p>

        <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
          <a
            href="#updates"
            className="inline-flex items-center px-6 py-3 rounded border border-gold bg-gold text-dark font-mono text-sm font-bold hover:bg-gold-light transition-all duration-300 btn-click shadow-[0_0_20px_rgba(212,168,83,0.25)]"
          >
            [ 进入知识库 ]
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-6 py-3 rounded border border-gold text-gold-light font-mono text-sm hover:bg-gold hover:text-dark transition-all duration-300 btn-click"
          >
            [ 加入社群 ]
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-6 py-3 rounded border border-dark-border text-gray-300 font-mono text-sm hover:border-gold/60 hover:text-gold-light transition-all duration-300 btn-click"
          >
            [ 查询交易 ]
          </a>
        </div>
      </div>

      {/* 右侧 3D 光环 */}
      <div className="relative z-10 flex-1 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "600ms" }}>
        <GoldenRing />
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted font-mono text-xs animate-bounce">
        <span className="mb-1">SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
