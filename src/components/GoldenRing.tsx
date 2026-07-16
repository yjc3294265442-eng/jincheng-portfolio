import { useMousePosition } from "@/hooks/useMousePosition";

export default function GoldenRing() {
  const mouse = useMousePosition();
  const rotateX = 55 + mouse.normalizedY * -20;
  const rotateY = mouse.normalizedX * 20;
  const rotateZ = mouse.normalizedX * 10;

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center">
      {/* 外层发光环 */}
      <div
        className="absolute inset-0 rounded-full border border-gold/20"
        style={{
          transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
          boxShadow: "0 0 60px rgba(212, 168, 83, 0.2), inset 0 0 60px rgba(212, 168, 83, 0.08)",
          animation: "ringRotate 25s linear infinite",
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
      />
      {/* 中层环 */}
      <div
        className="absolute inset-6 rounded-full border border-gold/40"
        style={{
          transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
          animation: "ringRotate 18s linear infinite reverse",
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
      />
      {/* 内层环 */}
      <div
        className="absolute inset-14 rounded-full border border-gold/60"
        style={{
          transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
          animation: "ringRotate 12s linear infinite",
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
      />
      {/* 中心发光球 */}
      <div
        className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center relative"
        style={{
          transform: `translate(${mouse.normalizedX * 12}px, ${mouse.normalizedY * 12}px)`,
          transition: "transform 0.15s ease-out",
          background: "radial-gradient(circle at 30% 30%, rgba(245,230,200,0.5), rgba(212,168,83,0.2) 40%, transparent 70%)",
          boxShadow: "0 0 80px rgba(212,168,83,0.35), inset 0 0 30px rgba(245,230,200,0.3)",
        }}
      >
        <span className="font-display text-gold-light text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(212,168,83,0.8)]">程</span>
      </div>
      {/* 环绕粒子 */}
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "20s" }}>
        <div className="absolute top-0 left-1/2 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_15px_#d4a853]" />
      </div>
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "14s", animationDirection: "reverse" }}>
        <div className="absolute bottom-6 right-10 w-2 h-2 rounded-full bg-gold-light shadow-[0_0_12px_#f5e6c8]" />
      </div>
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "30s" }}>
        <div className="absolute top-1/3 right-0 w-1.5 h-1.5 rounded-full bg-gold/70 shadow-[0_0_10px_#d4a853]" />
      </div>
    </div>
  );
}
