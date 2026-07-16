import { useMousePosition } from "@/hooks/useMousePosition";
import { useMemo } from "react";

export default function TechBackground() {
  const mouse = useMousePosition();

  const moveX = mouse.normalizedX * -25;
  const moveY = mouse.normalizedY * -25;
  const moveX2 = mouse.normalizedX * -50;
  const moveY2 = mouse.normalizedY * -50;

  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 深空渐变 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1510_0%,_#0b0b0d_50%,_#08080a_100%)]" />

      {/* 科技网格背景 */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 168, 83, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 168, 83, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `translate(${moveX}px, ${moveY}px) scale(1.15)`,
          transition: "transform 0.25s ease-out",
        }}
      />

      {/* 透视网格地平线 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60vh] opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 168, 83, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 168, 83, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `perspective(800px) rotateX(60deg) translateY(-100px) translate(${moveX * 0.5}px, ${moveY * 0.2}px)`,
          transformOrigin: "bottom center",
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* 浮动粒子 */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: `translate(${moveX2 * (0.5 + Math.random())}px, ${moveY2 * (0.5 + Math.random())}px)`,
            transition: "transform 0.4s ease-out",
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* 扫描线 */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 168, 83, 0.4) 2px, rgba(212, 168, 83, 0.4) 4px)",
        }}
      />

      {/* 径向光晕随鼠标移动 */}
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[180px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.22) 0%, rgba(180,140,60,0.08) 40%, transparent 70%)",
          left: `calc(50% + ${moveX2}px)`,
          top: `calc(35% + ${moveY2}px)`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.4s ease-out, top 0.4s ease-out",
        }}
      />

      {/* 角落装饰线 */}
      <div
        className="absolute top-24 left-8 w-40 h-40 border-l border-t border-gold/25"
        style={{
          transform: `translate(${moveX * 0.6}px, ${moveY * 0.6}px)`,
          transition: "transform 0.25s ease-out",
        }}
      />
      <div
        className="absolute bottom-24 right-8 w-40 h-40 border-r border-b border-gold/25"
        style={{
          transform: `translate(${moveX * 0.6}px, ${moveY * 0.6}px)`,
          transition: "transform 0.25s ease-out",
        }}
      />
    </div>
  );
}
