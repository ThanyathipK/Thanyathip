import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface HandDrawnHeroProps {
  onClick?: () => void;
  className?: string;
  animationDurationSec?: number;
}

export function HandDrawnHero({
  onClick,
  className,
  animationDurationSec = 3.2,
}: HandDrawnHeroProps) {
  const hasFinished = useRef(false);
  const transitionTimer = useRef<number | undefined>(undefined);
  const [isExiting, setIsExiting] = useState(false);

  const finishIntro = useCallback(() => {
    if (hasFinished.current) return;
    hasFinished.current = true;
    setIsExiting(true);
    transitionTimer.current = window.setTimeout(() => onClick?.(), 480);
  }, [onClick]);

  useEffect(() => () => window.clearTimeout(transitionTimer.current), []);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(finishIntro, 250);
    return () => window.clearTimeout(timer);
  }, [finishIntro]);

  // One uninterrupted pencil stroke: stem and four heart-shaped leaves meeting
  // at one natural point in the centre.
  const cloverLine = `
    M 337 650
    C 345 558, 375 430, 400 340
    C 350 315, 320 285, 325 245
    C 330 210, 370 200, 400 230
    C 430 200, 470 210, 475 245
    C 480 285, 450 315, 400 340
    C 425 290, 455 260, 495 265
    C 530 270, 540 310, 510 340
    C 540 370, 530 410, 495 415
    C 455 420, 425 390, 400 340
    C 450 365, 480 395, 475 435
    C 470 470, 430 480, 400 450
    C 370 480, 330 470, 325 435
    C 320 395, 350 365, 400 340
    C 375 390, 345 420, 305 415
    C 270 410, 260 370, 290 340
    C 260 310, 270 270, 305 265
    C 345 260, 375 290, 400 340
  `;

  return (
    <main
      onClick={finishIntro}
      className={cn(
        "flex min-h-screen w-full cursor-pointer select-none items-center justify-center overflow-hidden transition-[opacity,transform,filter] duration-500 ease-out",
        isExiting ? "scale-[0.97] opacity-0 blur-[2px]" : "scale-100 opacity-100 blur-0",
        className
      )}
      title="Click anywhere to skip the intro"
      aria-label="Animated black-line clover intro. Click to continue."
    >
      <svg
        className="h-auto w-[min(58vw,310px)] overflow-visible"
        viewBox="190 105 440 590"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="A four-leaf clover drawn with one black line"
      >
        <defs>
          <filter id="pencilTexture" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035 0.55"
              numOctaves="2"
              seed="8"
              result="paperGrain"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="paperGrain"
              scale="1.15"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <path
          className="black-line-clover"
          d={cloverLine}
          pathLength="1"
          stroke="#171513"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#pencilTexture)"
          style={{ animationDuration: `${animationDurationSec}s` }}
          onAnimationEnd={(event) => {
            if (event.animationName === "drawBlackLine") finishIntro();
          }}
        />
      </svg>

      <style>{`
        .black-line-clover {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          vector-effect: non-scaling-stroke;
          animation-name: drawBlackLine;
          animation-timing-function: cubic-bezier(.45, .05, .2, 1);
          animation-fill-mode: forwards;
          will-change: stroke-dashoffset;
        }

        @keyframes drawBlackLine {
          0% { stroke-dashoffset: 1; }
          100% { stroke-dashoffset: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .black-line-clover {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </main>
  );
}

export default HandDrawnHero;
