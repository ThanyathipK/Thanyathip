// Peachy Mint Dream Gradient - Luminous Light Edition for Personal Portfolio & Showcase
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export interface PeachyMintBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Component({ className, children }: PeachyMintBackgroundProps = {}) {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("min-h-screen w-full relative overflow-hidden", className)}>
      {/* Luminous Light Peachy Mint Dream Gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 65% at 15% 12%, rgba(255, 255, 255, 0.85), transparent 55%),
            radial-gradient(ellipse 70% 55% at 85% 85%, rgba(255, 255, 255, 0.7), transparent 50%),
            linear-gradient(135deg, #FFF1ED 0%, #FDE8EC 28%, #F2FBF5 70%, #DBF8E6 100%)
          `,
        }}
      />

      {/* Content wrapper ready for future elements */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}

export { Component, Component as PeachyMintBackground };
