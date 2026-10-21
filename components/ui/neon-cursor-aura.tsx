import React, { useEffect, useState, useRef } from "react";

export function NeonCursorAura() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const targetPos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate on devices that support hover (not pure touch)
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable or interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest("button") ||
          target.closest("a") ||
          target.closest(".cursor-pointer") ||
          target.closest("[role='button']") ||
          target.tagName === "BUTTON" ||
          target.tagName === "A";
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth fluid interpolation for floating aura physics
    const loop = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.16;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.16;
      setPosition({ x: currentPos.current.x, y: currentPos.current.y });
      animFrameId.current = requestAnimationFrame(loop);
    };
    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Light Mint/Cyan Ambient Aura Glow using #C0EEE4 */}
      <div
        className="absolute rounded-full transition-all duration-300 ease-out will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? "320px" : "220px",
          height: isHovered ? "320px" : "220px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, 
            rgba(192, 238, 228, 0.85) 0%, 
            rgba(192, 238, 228, 0.5) 40%, 
            rgba(192, 238, 228, 0.2) 65%, 
            transparent 85%)`,
          filter: "blur(22px)",
          opacity: isHovered ? 1 : 0.85,
        }}
      />

      {/* Concentrated #C0EEE4 Neon Inner Core */}
      <div
        className="absolute rounded-full transition-all duration-150 ease-out will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? "48px" : "32px",
          height: isHovered ? "48px" : "32px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, #C0EEE4 0%, rgba(192, 238, 228, 0.8) 60%, transparent 100%)`,
          filter: "blur(2px)",
          boxShadow: "0 0 24px 8px rgba(192, 238, 228, 0.95), 0 0 50px 18px rgba(192, 238, 228, 0.6)",
        }}
      />
    </div>
  );
}

export default NeonCursorAura;
