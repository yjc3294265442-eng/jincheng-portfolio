import { useMousePosition } from "@/hooks/useMousePosition";

export default function CursorGlow() {
  const mouse = useMousePosition();

  return (
    <div
      className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-[1] opacity-40"
      style={{
        background: "radial-gradient(circle, rgba(212,168,83,0.18) 0%, rgba(212,168,83,0.05) 40%, transparent 70%)",
        left: mouse.x,
        top: mouse.y,
        transform: "translate(-50%, -50%)",
        transition: "left 0.1s ease-out, top 0.1s ease-out",
      }}
    />
  );
}
