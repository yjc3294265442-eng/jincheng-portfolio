import { creatorInfo, stats } from "@/data/portfolio";
import { ExternalLink, Terminal } from "lucide-react";

export default function CreatorDesk() {
  return (
    <aside className="w-full lg:w-80 xl:w-88 flex-shrink-0">
      <div className="sticky top-24 bg-dark-card/70 backdrop-blur-md border border-gold/20 rounded-xl p-6 animate-fade-in-up shadow-[0_0_40px_rgba(212,168,83,0.08)] relative overflow-hidden">
        {/* 顶部光效 */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        {/* 顶部终端栏 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-gold/70">
            <Terminal className="w-3.5 h-3.5" />
            <span>{creatorInfo.tag}</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-gold/30" />
          </div>
        </div>

        {/* 头像 */}
        <div className="flex justify-center mb-5">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-gold/50 to-gold/10 blur opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-28 h-28 rounded-xl overflow-hidden border border-gold/40 p-1 rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-dark-card">
              <img
                src={creatorInfo.avatar}
                alt={creatorInfo.name}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* 名称与身份 */}
        <div className="text-center mb-5">
          <h2 className="font-display text-gold-light text-2xl mb-1 tracking-widest">{creatorInfo.name}</h2>
          <p className="text-xs font-mono text-gold/60">{creatorInfo.title}</p>
        </div>

        {/* 简介 */}
        <p className="text-sm text-gray-300 leading-relaxed mb-6 text-center lg:text-left border-l-2 border-gold/40 pl-3">
          {creatorInfo.bio}
        </p>

        {/* 数据 */}
        <div className="space-y-2.5 mb-6 font-mono text-xs">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-dark/60 border border-dark-border hover:border-gold/40 transition-colors group"
            >
              <span className="text-muted group-hover:text-gold/80 transition-colors">{stat.label}</span>
              <span className="text-gold-light font-bold">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#updates"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-gold bg-gold/10 text-gold-light text-sm font-mono hover:bg-gold hover:text-dark transition-all duration-300 btn-click shadow-[0_0_20px_rgba(212,168,83,0.1)]"
        >
          [ 去 X 看公开记录 ]
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
}
