import React, { useState } from "react";
import { ArrowUpRight, Sparkles, Check, Mail, ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PortfolioTopic {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  details?: {
    tags: string[];
    features: string[];
    link?: string;
    github?: string;
  };
}

// Exactly 6 topics (Profile, Project 1-4, Experience)
export const PORTFOLIO_TOPICS: PortfolioTopic[] = [
  {
    id: "profile",
    number: "01",
    title: "Profile",
    category: "About · Skills · Resume",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    description: "Frontend Engineer & UI/UX Specialist crafting high-performance, accessible digital experiences with modern design systems and intuitive user interfaces.",
    details: {
      tags: ["React 19", "TypeScript", "Tailwind CSS v4", "Next.js", "Design Systems"],
      features: [
        "Specializing in modern interactive web development & state management",
        "Deep focus on micro-interactions, responsive ergonomics & web performance",
        "Available for Full-time, Contract, and Remote engineering roles",
      ],
      github: "https://github.com",
    },
  },
  {
    id: "project-1",
    number: "02",
    title: "Project 1",
    category: "Atmospheric UI · Design System",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    description: "An open-source library of luminous gradient backdrops, glassmorphic cards, and accessible React primitives with zero layout shift.",
    details: {
      tags: ["React 19", "Tailwind CSS", "Vite", "Motion"],
      features: [
        "100% mathematical pure CSS gradients without heavy raster assets",
        "W3C WCAG AA contrast compliance with adaptive dark/light tokens",
        "Plug-and-play shadcn/ui directory structure integration",
      ],
      link: "#",
      github: "https://github.com",
    },
  },
  {
    id: "project-2",
    number: "03",
    title: "Project 2",
    category: "Fintech · Portfolio App",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    description: "Interactive real-time financial dashboard featuring interactive asset tracking, responsive charts, and instant transaction simulation.",
    details: {
      tags: ["TypeScript", "Next.js", "Chart.js", "Tailwind"],
      features: [
        "Real-time market tickers and live portfolio allocation breakdowns",
        "Optimistic UI updates with resilient local caching",
        "Sub-second page navigation and accessible keyboard shortcuts",
      ],
      link: "#",
      github: "https://github.com",
    },
  },
  {
    id: "project-3",
    number: "04",
    title: "Project 3",
    category: "Creative · E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
    description: "Editorial concept store with fluid layout animations, multi-currency cart flows, and immersive editorial typography.",
    details: {
      tags: ["React", "Tailwind CSS", "Stripe API", "Zustand"],
      features: [
        "Interactive product showcase with 3D hover effects",
        "Seamless checkout experience with local currency conversion",
        "Server-rendered static catalog with dynamic client-side filtering",
      ],
      link: "#",
      github: "https://github.com",
    },
  },
  {
    id: "project-4",
    number: "05",
    title: "Project 4",
    category: "SaaS · Analytics Workspace",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85",
    description: "Cloud telemetry and workspace platform providing team metrics, task pipelines, and collaborative real-time notifications.",
    details: {
      tags: ["TypeScript", "React 19", "WebSockets", "Node.js"],
      features: [
        "Real-time event feed with custom filter rules and search",
        "Modular dashboard cards with drag-and-drop customization",
        "Role-based permission views and audit logging",
      ],
      link: "#",
      github: "https://github.com",
    },
  },
  {
    id: "experience",
    number: "06",
    title: "Experience",
    category: "Work Journey · Timeline",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=85",
    description: "Track record of shipping production-grade web applications, collaborating with design teams, and architecting scalable UI codebases.",
    details: {
      tags: ["Frontend Engineer", "UI Specialist", "Open Source", "2022 - Present"],
      features: [
        "Lead frontend development on client-facing SaaS products and portfolios",
        "Architected reusable design system components adopted across 12+ projects",
        "Mentored junior developers and conducted thorough TypeScript code reviews",
      ],
      github: "https://github.com",
    },
  },
];

export interface RadialPortfolioWheelProps {
  onSelectTopic?: (topic: PortfolioTopic) => void;
  className?: string;
}

export function RadialPortfolioWheel({ onSelectTopic, className }: RadialPortfolioWheelProps) {
  // Currently active topic index (0: Profile, 1: Project 1, etc.)
  const [activeIdx, setActiveIdx] = useState(0);
  // Continuous wheel rotation angle so the chosen topic rounds to top center
  const [wheelRotation, setWheelRotation] = useState(0);
  const [modalTopic, setModalTopic] = useState<PortfolioTopic | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const count = PORTFOLIO_TOPICS.length;
  const activeTopic = PORTFOLIO_TOPICS[activeIdx];

  // SVG Geometry constants
  const cx = 350;
  const cy = 350;
  const rIn = 142; // Inner radius for center disc
  const rOutNormal = 300; // Normal outer radius
  const rOutBig = 330; // Expanded outer radius for the active "biggest picture" wedge at top center

  const sectorBaseAngle = 360 / count; // 60 degrees

  // Smoothly rounds the clicked project to the top center (12 o'clock)
  const roundToProject = (targetIdx: number) => {
    if (targetIdx === activeIdx) return;
    setActiveIdx(targetIdx);

    // Calculate shortest angular turn to bring targetIdx to 0 deg (top center)
    const targetAngle = -targetIdx * sectorBaseAngle;
    let diff = (targetAngle - wheelRotation) % 360;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    setWheelRotation((prev) => prev + diff);
  };

  const handleNext = () => {
    const next = (activeIdx + 1) % count;
    roundToProject(next);
  };

  const handlePrev = () => {
    const prev = (activeIdx - 1 + count) % count;
    roundToProject(prev);
  };

  // Polar to Cartesian conversion helper (0 deg = 12 o'clock / top)
  const polarToCartesian = (r: number, angleDeg: number) => {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    return [
      cx + r * Math.cos(rad),
      cy + r * Math.sin(rad),
    ];
  };

  // Generate annular sector path for each slice
  // The active slice expands into the "biggest picture" (wider arc and taller radius)
  const activeSpan = 110;
  const otherSpan = (360 - activeSpan) / (count - 1); // 50 deg each

  const getSliceData = (i: number) => {
    const isActive = i === activeIdx;
    const rOut = isActive ? rOutBig : rOutNormal;
    const rPill = isActive ? 245 : 220;

    // Angle offset relative to activeIdx so that active item has activeSpan centered on its axis
    const rel = (i - activeIdx + count) % count;
    let startAngle = 0;
    let span = otherSpan;

    if (rel === 0) {
      startAngle = -activeSpan / 2;
      span = activeSpan;
    } else {
      startAngle = activeSpan / 2 + (rel - 1) * otherSpan;
      span = otherSpan;
    }

    const endAngle = startAngle + span;
    const midAngle = (startAngle + endAngle) / 2;

    const gap = 1.6; // Clean glassy gap line
    const a1 = startAngle + gap;
    const a2 = endAngle - gap;

    const [x1, y1] = polarToCartesian(rOut, a1);
    const [x2, y2] = polarToCartesian(rOut, a2);
    const [x3, y3] = polarToCartesian(rIn, a2);
    const [x4, y4] = polarToCartesian(rIn, a1);

    const largeArc = (a2 - a1) > 180 ? 1 : 0;
    const pathD = `M ${x1} ${y1} A ${rOut} ${rOut} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${rIn} ${rIn} 0 ${largeArc} 0 ${x4} ${y4} Z`;
    const [pillX, pillY] = polarToCartesian(rPill, midAngle);

    return { pathD, pillX, pillY, isActive, midAngle, rOut };
  };

  const handleOpenDetail = (topic: PortfolioTopic) => {
    setModalTopic(topic);
    onSelectTopic?.(topic);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thanyathip2005@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className={cn("relative flex flex-col items-center justify-center w-full select-none", className)}>
      
      {/* Top Center Alignment Indicator Tick with Frosted Glow */}
      <div className="flex flex-col items-center mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-[#C0EEE4] shadow-[0_0_12px_#C0EEE4]" />
        <div className="w-0.5 h-3 bg-slate-800/80 rounded-full mt-0.5" />
      </div>

      {/* Main Wheel Container */}
      <div className="relative w-full max-w-[700px] flex items-center justify-center">
        
        {/* Left Arrow Button (Ultra-Glassy Orb) */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-2 md:-left-5 z-20 w-11 h-11 rounded-full backdrop-blur-2xl bg-white/45 hover:bg-white/75 border border-white/85 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.95),0_8px_24px_rgba(0,0,0,0.06)] text-slate-800 items-center justify-center transition-all hover:scale-105 active:scale-95 hover:border-[#C0EEE4] hover:shadow-[0_0_20px_rgba(192,238,228,0.7),inset_0_1.5px_2px_#fff] cursor-pointer"
          title="Previous Project"
        >
          <ChevronLeft className="w-5 h-5 text-slate-800" />
        </button>

        {/* Right Arrow Button (Ultra-Glassy Orb) */}
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-2 md:-right-5 z-20 w-11 h-11 rounded-full backdrop-blur-2xl bg-white/45 hover:bg-white/75 border border-white/85 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.95),0_8px_24px_rgba(0,0,0,0.06)] text-slate-800 items-center justify-center transition-all hover:scale-105 active:scale-95 hover:border-[#C0EEE4] hover:shadow-[0_0_20px_rgba(192,238,228,0.7),inset_0_1.5px_2px_#fff] cursor-pointer"
          title="Next Project"
        >
          <ChevronRight className="w-5 h-5 text-slate-800" />
        </button>

        {/* The SVG Radial Wheel (Each topic is 1 slice; clicking rounds it to top center as the biggest picture) */}
        <div className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[680px] md:h-[680px] flex items-center justify-center">
          <svg
            viewBox="0 0 700 700"
            className="w-full h-full overflow-visible drop-shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
          >
            <defs>
              {/* Dynamic clipPath for each topic slice */}
              {PORTFOLIO_TOPICS.map((topic, i) => {
                const slice = getSliceData(i);
                return (
                  <clipPath key={`clip-topic-${topic.id}`} id={`clip-topic-${topic.id}`}>
                    <path d={slice.pathD} />
                  </clipPath>
                );
              })}

              {/* Glass sheen linear gradient */}
              <linearGradient id="glassSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.08)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.25)" />
              </linearGradient>

              {/* Radial center glass refraction */}
              <radialGradient id="centerGlassDisc" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.75)" />
                <stop offset="60%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(192, 238, 228, 0.2)" />
              </radialGradient>
            </defs>

            {/* Outer crystalline guide ring */}
            <circle
              cx={cx}
              cy={cy}
              r={rOutNormal + 6}
              fill="none"
              stroke="rgba(255, 255, 255, 0.65)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />

            {/* Rotating Wheel Group: Smoothly rounds the selected project to top center */}
            <g
              style={{
                transform: `rotate(${wheelRotation}deg)`,
                transformOrigin: `${cx}px ${cy}px`,
                transition: "transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              {PORTFOLIO_TOPICS.map((topic, i) => {
                const slice = getSliceData(i);

                return (
                  <g
                    key={topic.id}
                    className="cursor-pointer group"
                    onClick={() => {
                      if (slice.isActive) {
                        handleOpenDetail(topic);
                      } else {
                        roundToProject(i);
                      }
                    }}
                  >
                    {/* Visual Image Sliced inside Sector */}
                    <image
                      href={topic.image}
                      x={cx - rOutBig}
                      y={cy - rOutBig}
                      width={rOutBig * 2}
                      height={rOutBig * 2}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#clip-topic-${topic.id})`}
                      className={cn(
                        "transition-all duration-500 ease-out",
                        slice.isActive
                          ? "brightness-105 contrast-105 saturate-105"
                          : "brightness-[0.76] saturate-[0.8] opacity-85 hover:brightness-95 hover:opacity-100"
                      )}
                    />

                    {/* Subtle glassy sheen overlay */}
                    <path
                      d={slice.pathD}
                      fill={slice.isActive ? "url(#glassSheen)" : "rgba(15, 23, 42, 0.22)"}
                      className="transition-colors duration-300 pointer-events-none"
                    />

                    {/* Clean polished glass border with #C0EEE4 neon aura on hover and active */}
                    <path
                      d={slice.pathD}
                      fill="none"
                      stroke={slice.isActive ? "#C0EEE4" : "rgba(255, 255, 255, 0.88)"}
                      strokeWidth={slice.isActive ? "3.5" : "2.2"}
                      className="pointer-events-none transition-all duration-300 group-hover:stroke-[#C0EEE4] group-hover:drop-shadow-[0_0_14px_rgba(192,238,228,0.9)]"
                      style={slice.isActive ? { filter: "drop-shadow(0 0 12px rgba(192, 238, 228, 0.85))" } : undefined}
                    />

                    {/* Circular Number Pill (01, 02, etc.) */}
                    <g
                      transform={`translate(${slice.pillX}, ${slice.pillY})`}
                      className="pointer-events-none transition-transform duration-500"
                    >
                      {/* Counter-rotate badge text so numbers always remain upright */}
                      <g
                        style={{
                          transform: `rotate(${-wheelRotation}deg)`,
                          transformOrigin: "0 0",
                          transition: "transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)",
                        }}
                      >
                        <circle
                          r={slice.isActive ? "22" : "18"}
                          fill={slice.isActive ? "#0d9488" : "rgba(255, 255, 255, 0.75)"}
                          stroke={slice.isActive ? "#ffffff" : "rgba(255, 255, 255, 0.95)"}
                          strokeWidth={slice.isActive ? "2.5" : "1.8"}
                          className="drop-shadow-md transition-all duration-300"
                        />
                        <text
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill={slice.isActive ? "#ffffff" : "#0f172a"}
                          fontSize={slice.isActive ? "12" : "10.5"}
                          fontFamily='"Clarity City", sans-serif'
                          fontWeight={slice.isActive ? "600" : "500"}
                          letterSpacing="0.05em"
                        >
                          {topic.number}
                        </text>
                      </g>
                    </g>
                  </g>
                );
              })}
            </g>

            {/* Base SVG Disc Behind Glass Center Hub */}
            <circle
              cx={cx}
              cy={cy}
              r={rIn}
              fill="url(#centerGlassDisc)"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="2.5"
            />
          </svg>

          {/* Center Topic Information & ↗ Button in Frosted Optical Glass Disc */}
          <div
            onClick={() => handleOpenDetail(activeTopic)}
            className="absolute inset-0 m-auto w-[240px] h-[240px] sm:w-[264px] sm:h-[264px] rounded-full flex flex-col items-center justify-center text-center p-5 cursor-pointer group transition-all duration-300 backdrop-blur-3xl bg-white/45 border-[1.5px] border-white/85 shadow-[inset_0_2.5px_4px_rgba(255,255,255,0.98),inset_0_-3px_8px_rgba(192,238,228,0.35),0_20px_50px_rgba(0,0,0,0.06)] hover:scale-[1.02] hover:border-[#C0EEE4] hover:shadow-[inset_0_2.5px_4px_rgba(255,255,255,1),0_0_42px_rgba(192,238,228,0.7)]"
          >
            {/* Liquid Specular Reflection Arc */}
            <div className="absolute inset-0 rounded-full bg-linear-to-b from-white/45 via-white/10 to-transparent pointer-events-none" />

            {/* Active Counter Indicator Pill */}
            <div className="relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-xl bg-white/60 border border-white/80 shadow-[inset_0_1px_1px_#fff,0_2px_6px_rgba(0,0,0,0.03)] text-xs text-slate-600 font-medium tracking-widest mb-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#C0EEE4] shadow-[0_0_10px_#C0EEE4] animate-pulse" />
              <span className="text-teal-800 font-semibold">{activeTopic.number}</span>
              <span className="text-slate-300">/</span>
              <span>0{count}</span>
            </div>

            {/* Active Topic Title in Bold Clarity City font */}
            <h2
              className="relative z-10 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 leading-tight mb-1"
              style={{ fontFamily: '"Clarity City", sans-serif' }}
            >
              {activeTopic.title}
            </h2>

            {/* Subtitle / Category */}
            <p
              className="relative z-10 text-[11px] sm:text-xs text-slate-600 font-medium max-w-[190px] truncate"
              style={{ fontFamily: '"Clarity City", sans-serif' }}
            >
              {activeTopic.category}
            </p>

            {/* Diagonal Arrow Icon ↗ to Open Detail (Frosted Glass Button) */}
            <div className="relative z-10 mt-3 w-9 h-9 rounded-full backdrop-blur-xl bg-white/70 group-hover:bg-slate-950 text-slate-800 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-[inset_0_1px_1.5px_#fff,0_4px_12px_rgba(0,0,0,0.05)] border border-white/90 group-hover:border-[#C0EEE4] group-hover:shadow-[0_0_20px_rgba(192,238,228,0.8)]">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Ultra-Glassy Topic Detail Modal */}
      {modalTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/30 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl backdrop-blur-3xl bg-white/75 border border-white/90 shadow-[inset_0_2px_4px_rgba(255,255,255,0.95),0_30px_70px_rgba(0,0,0,0.12)] overflow-hidden text-slate-900 transition-all">
            {/* Modal Image Header Banner */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-900">
              <img
                src={modalTopic.image}
                alt={modalTopic.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
              
              {/* Close Button (Glassy Circle) */}
              <button
                onClick={() => setModalTopic(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur-xl bg-white/60 hover:bg-white text-slate-900 border border-white/80 flex items-center justify-center transition-colors shadow-sm cursor-pointer hover:border-[#C0EEE4] hover:shadow-[0_0_15px_rgba(192,238,228,0.7)]"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Title overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md bg-teal-600/90 text-white border border-teal-300/40 shadow-xs">
                  {modalTopic.number} &bull; {modalTopic.category}
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mt-2"
                  style={{ fontFamily: '"Clarity City", sans-serif' }}
                >
                  {modalTopic.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {modalTopic.description}
              </p>

              {/* Glass Tags */}
              {modalTopic.details?.tags && (
                <div className="flex flex-wrap gap-2">
                  {modalTopic.details.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-md bg-white/65 text-slate-800 border border-white/90 shadow-[inset_0_1px_1px_#fff,0_2px_4px_rgba(0,0,0,0.02)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Key Features / Highlights */}
              {modalTopic.details?.features && (
                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Highlights &amp; Focus
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {modalTopic.details.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0 shadow-[0_0_6px_#C0EEE4]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3">
                {modalTopic.id === "profile" ? (
                  <>
                    <button
                      onClick={handleCopyEmail}
                      className="px-4 py-2 rounded-xl backdrop-blur-xl bg-white/70 hover:bg-white text-slate-900 font-medium text-xs border border-white/90 shadow-[inset_0_1px_1px_#fff,0_2px_6px_rgba(0,0,0,0.04)] hover:border-[#C0EEE4] transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied Email!</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-3.5 h-3.5 text-slate-600" />
                          <span>Copy Email Address</span>
                        </>
                      )}
                    </button>
                    <a
                      href="mailto:thanyathip2005@gmail.com?subject=Job%20Opportunity"
                      className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-xs shadow-xs transition-colors flex items-center gap-1.5 hover:shadow-[0_0_18px_rgba(192,238,228,0.7)]"
                    >
                      <span>Send Message</span>
                    </a>
                  </>
                ) : (
                  <>
                    {modalTopic.details?.github && (
                      <a
                        href={modalTopic.details.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-white/70 hover:bg-white text-slate-800 text-xs font-medium border border-white/90 shadow-[inset_0_1px_1px_#fff,0_2px_6px_rgba(0,0,0,0.04)] transition-all flex items-center gap-1.5 hover:border-[#C0EEE4]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Source Code</span>
                      </a>
                    )}
                    <button
                      onClick={() => setModalTopic(null)}
                      className="px-5 py-2 rounded-xl bg-slate-950 text-white text-xs font-medium hover:bg-slate-800 transition-colors ml-auto cursor-pointer"
                    >
                      Done
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RadialPortfolioWheel;
