import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface HandDrawnHeroProps {
  onClick?: () => void;
  className?: string;
  animationDurationSec?: number;
  postAnimationWaitSec?: number;
}

export function HandDrawnHero({
  onClick,
  className,
  animationDurationSec = 6.0,
  postAnimationWaitSec = 5.0,
}: HandDrawnHeroProps) {
  const [isExiting, setIsExiting] = useState(false);

  // Handle immediate navigation on user click anywhere
  const handleClick = () => {
    if (isExiting) return;
    setIsExiting(true);
    // Immediate smooth transition to home page
    onClick?.();
  };

  useEffect(() => {
    // Slower clover animation + 5 seconds wait after animation finishes
    const totalWaitMs = (animationDurationSec + postAnimationWaitSec) * 1000;

    const timer = setTimeout(() => {
      setIsExiting(true);
      onClick?.();
    }, totalWaitMs);

    return () => clearTimeout(timer);
  }, [animationDurationSec, postAnimationWaitSec, onClick]);

  // ONE CONTINUOUS UNBROKEN LINE (Stem + all 4 Heart Leaves seamlessly connected)
  // Drawn in one continuous pen stroke: Stem -> Bottom-Left Leaf -> Top-Left Leaf -> Top-Right Leaf -> Bottom-Right Leaf -> Center
  const singleConnectedCloverLine = `
    M 260 670 
    C 360 560, 390 430, 393 333 
    C 395 394, 401 472, 370 513 
    C 335 547, 283 530, 269 494 
    C 264 474, 278 446, 289 428 
    C 270 437, 241 451, 222 445 
    C 186 429, 171 378, 207 343 
    C 248 314, 326 322, 387 327 
    C 390 328, 386 318, 388 312 
    C 326 313, 248 316, 209 284 
    C 175 247, 194 196, 231 183 
    C 251 178, 278 194, 296 205 
    C 287 186, 275 157, 281 137 
    C 298 102, 351 89, 384 126 
    C 411 168, 400 246, 394 307 
    C 398 307, 402 307, 406 307 
    C 400 246, 389 168, 416 126 
    C 449 89, 502 102, 519 137 
    C 525 157, 513 186, 504 205 
    C 522 194, 549 178, 569 183 
    C 606 196, 625 247, 591 284 
    C 552 316, 474 313, 412 312 
    C 413 318, 413 322, 413 327 
    C 474 322, 552 314, 593 343 
    C 629 378, 614 429, 578 445 
    C 559 451, 530 437, 511 428 
    C 522 446, 536 474, 531 494 
    C 517 530, 465 547, 430 513 
    C 399 472, 405 394, 407 333 
    C 405 334, 400 336, 398 338
  `;

  const strokeColor = "#000000";
  const strokeWidth = "3.8";

  return (
    <div
      onClick={handleClick}
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center cursor-pointer select-none overflow-hidden transition-opacity duration-300",
        isExiting ? "opacity-0" : "opacity-100",
        className
      )}
      title="Click anywhere to skip directly to home page"
    >
      {/* Pristine Clover Canvas - No blur elements, no text labels */}
      <div className="relative z-10 flex items-center justify-center p-4 sm:p-6 w-full max-w-4xl">
        <div className="relative w-full max-w-[740px] h-[540px] sm:h-[620px] md:h-[680px] flex items-center justify-center">
          
          {/* Animated SVG - Single Continuous Slower Line Drawing */}
          <svg
            className="w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 800 740"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle light ambient contact shadow beneath line */}
            <path
              d={singleConnectedCloverLine}
              stroke="rgba(0, 0, 0, 0.03)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* The 1 Single Connected Line Drawing Path - Slower & Graceful */}
            <path
              d={singleConnectedCloverLine}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="single-line-clover"
              style={{
                strokeDasharray: 5200,
                strokeDashoffset: 0,
                animation: `drawSingleLineClover ${animationDurationSec}s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
              }}
            />
          </svg>
        </div>
      </div>

      {/* Slower, graceful 1-line continuous CSS line drawing keyframes */}
      <style>{`
        @keyframes drawSingleLineClover {
          0% {
            stroke-dashoffset: 5200;
            opacity: 0.1;
          }
          15% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        .single-line-clover {
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
        }

        @media (prefers-reduced-motion: reduce) {
          .single-line-clover {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default HandDrawnHero;
