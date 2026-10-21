import React, { useRef, useState } from "react";
import { ExternalLink, Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PortfolioTopic {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  contribution?: string;
  details?: {
    tags: string[];
    features: string[];
    sections?: Array<{
      title: string;
      items: string[];
    }>;
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
    category: "Product · Data · Technology",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    description: "Fourth-year Information and Communication Technology student at Mahidol University with hands-on experience across the product and data lifecycle. I combine requirements gathering and PRD development with data modelling, analytics, and technical implementation to turn business needs into clear, practical solutions.",
    details: {
      tags: ["Product Development", "PRD", "SQL", "Python", "Java", "JavaScript", "Power BI", "Tableau", "Figma"],
      features: [
        "Requirements gathering, stakeholder communication, PRD creation, and process analysis",
        "Relational database design, data warehousing, data mining, and business intelligence",
        "Web, mobile, and data-focused development using JavaScript, Java, Python, and SQL",
      ],
      sections: [
        {
          title: "Education",
          items: [
            "B.Sc. in Information and Communication Technology, International Program — Mahidol University (2023–Present), cumulative GPA 3.88",
            "Science–Math Program, English Program — Yothinburana School (2018–2023)",
          ],
        },
        {
          title: "Experience & Leadership",
          items: [
            "Technical Product Owner Intern — Krungsri Nimble (Jun 2026–Present): supporting AI-assisted PRD development, requirements analysis, documentation, and product quality",
            "Vice President — MUICT AI Club (Oct 2025–Present): planning AI workshops and coordinating club operations and external partnerships",
            "Lab Assistant / Teaching Assistant (Jul 2024–Present): helping students with programming, web and mobile development, problem solving, and technical communication",
            "AI Development Intern — National Central University, Taiwan (Jun–Jul 2025): developed AI image and icon generation features and personalization experiences",
            "ICT Talent and Activism Scholarship recipient (Aug 2023–Present)",
          ],
        },
      ],
      github: "https://github.com/ThanyathipK",
    },
  },
  {
    id: "project-1",
    number: "02",
    title: "SmartExpense",
    category: "Flutter · Personal Finance",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    description: "SmartExpense is an offline-first personal finance app built with Flutter. It helps users manage income and expenses, understand account balances, follow monthly budgets, and organize recurring payments—all without depending on a remote backend.",
    contribution: "I designed and developed the Flutter application around an offline-first SQLite data model, creating the transaction, account, budget, recurring-payment, and reporting workflows as one connected personal-finance experience.",
    details: {
      tags: ["Flutter", "Dart", "SQLite", "sqflite", "FL Chart"],
      features: [
        "Unified dashboard with total balances and recent monthly activity",
        "Fast income and expense entry with categories, accounts, and a custom numpad",
        "Monthly category budgets with clear, color-coded progress tracking",
        "Daily, weekly, monthly, and yearly spending reports powered by FL Chart",
        "Local SQLite storage for a fast and fully offline experience",
      ],
      github: "https://github.com/ThanyathipK/SmartExpense",
    },
  },
  {
    id: "project-2",
    number: "03",
    title: "Agentic AI for PRD",
    category: "Multi-Agent AI · Requirements Engineering",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    description: "An enterprise requirements engineering platform that transforms plain-language banking product ideas and uploaded briefs into audited, versioned, engineering-ready requirements, PRDs, and system diagrams using a coordinated team of specialist AI agents.",
    contribution: "I developed the product as a full-stack requirements workspace, connecting the React interface to FastAPI services, LangGraph agents, local LM Studio inference, versioned persistence, review controls, and traceability workflows.",
    details: {
      tags: ["React 19", "FastAPI", "LangGraph", "LM Studio", "PostgreSQL"],
      features: [
        "Multi-agent workflow with Router, Matcher, Gatherer, Auditor, and Architect roles",
        "Local-first AI inference through LM Studio without a cloud LLM API key",
        "Human-in-the-loop confirmation before requirement changes are committed",
        "Versioned PRDs, banking compliance audits, and interactive system diagrams",
        "End-to-end traceability connecting requirements, user stories, acceptance criteria, PRD sections, and diagrams",
      ],
      github: "https://github.com/ThanyathipK/AgenticAI-for-PRD.git",
    },
  },
  {
    id: "project-3",
    number: "04",
    title: "Filmo",
    category: "Flutter · AI Image Personalization",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
    description: "Filmo is a Flutter mobile app for turning personal photos into expressive visual designs. Users can personalize an image with their own icons, add stylized text, or generate an AI icon from a prompt, with optional tone matching for a cohesive final result.",
    contribution: "I contributed to the AI-based image and icon generation features, including personalized creation flows that combine uploaded images, prompts, tone references, and generated visual elements.",
    details: {
      tags: ["Flutter", "Dart", "Firebase", "FastAPI", "Flask", "OpenCV"],
      features: [
        "Three creative workflows for custom icons, styled text, and prompt-generated AI icons",
        "Image and optional reference-tone uploads directly from the mobile gallery",
        "Color-transfer processing that adapts an image to a preferred visual palette",
        "Python image APIs for icon composition, text placement, filters, and final rendering",
        "Firebase authentication, cloud storage, and Firestore-backed creation history",
      ],
      link: "https://canva.link/nrpxu9f827lmvfv",
      github: "https://github.com/kunruethaipat/filmo_app.git",
    },
  },
  {
    id: "project-4",
    number: "05",
    title: "Leafly",
    category: "Full-Stack Web · Online Shopping",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85",
    description: "Leafly is a full-stack online shopping website for browsing and managing a curated phone-case catalogue. It combines a customer-facing storefront with a secure administrative workflow for maintaining product information, inventory, pricing, and images.",
    contribution: "I collaborated in a five-person development team to deliver the customer and administrator workflows, integrating browser interfaces, Express services, and relational product data into a complete shopping application.",
    details: {
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL"],
      features: [
        "Customer storefront featuring best-selling products and detailed product pages",
        "Advanced catalogue search with keyword and product-attribute filtering",
        "Session-protected administrator login with a three-hour expiry policy",
        "Complete product management for adding, editing, deleting, pricing, stock, and images",
        "Separated frontend and backend Express services connected to a relational MySQL database",
      ],
      github: "https://github.com/Tanyarat2/leafly.git",
    },
  },
  {
    id: "experience",
    number: "06",
    title: "Experience",
    category: "Experience · Leadership · Internships",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=85",
    description: "My experience connects technical product work, AI development, teaching, and student leadership. Across these roles I have translated requirements into deliverables, supported technical teams, communicated with stakeholders, and built user-facing features.",
    details: {
      tags: ["Product Ownership", "Requirements", "AI Development", "Teaching", "Leadership"],
      features: [
        "Technical Product Owner Intern — Krungsri Nimble (Jun 2026–Present)",
        "Vice President — MUICT AI Club (Oct 2025–Present)",
        "Lab Assistant / Teaching Assistant — Mahidol University (Jul 2024–Present)",
        "AI Development Intern — National Central University, Taiwan (Jun–Jul 2025)",
        "Head of Public Relations — Freshman Welcome Activity (May–Jul 2024)",
      ],
      sections: [
        {
          title: "Selected Responsibilities",
          items: [
            "Developing an AI agent to support PRD generation through requirements gathering, analysis, documentation, and product-quality review at Krungsri Nimble",
            "Planning AI workshops and coordinating club operations, external partners, venues, and communications as MUICT AI Club Vice President",
            "Supporting students in programming, web and mobile development, problem solving, and English technical communication as a teaching assistant",
            "Building AI-based image and icon generation features and personalized creative experiences during an internship in Taiwan",
            "Coordinating vendors, sponsors, audiovisual teams, promotional content, and on-site activities across university events",
          ],
        },
      ],
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
  const [selectedTopic, setSelectedTopic] = useState<PortfolioTopic>(PORTFOLIO_TOPICS[0]);
  const detailsRef = useRef<HTMLElement>(null);

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
    setSelectedTopic(PORTFOLIO_TOPICS[targetIdx]);
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
    setSelectedTopic(topic);
    onSelectTopic?.(topic);
    window.setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className={cn("relative flex flex-col items-center justify-center w-full select-none", className)}>
      
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

            {/* Active Topic Title in Bold Clarity City font */}
            <h2
              className="relative z-10 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 leading-tight"
              style={{ fontFamily: '"Clarity City", sans-serif' }}
            >
              {activeTopic.title}
            </h2>
          </div>
        </div>
      </div>

      {selectedTopic && (
        <section
          ref={detailsRef}
          className="w-full max-w-4xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 text-slate-800 animate-fadeIn"
          aria-labelledby="project-details-title"
        >
          <div className="mb-8 h-px w-full bg-slate-300/60" />
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            {selectedTopic.category}
          </p>
          <h3
            id="project-details-title"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl"
            style={{ fontFamily: '"Clarity City", sans-serif' }}
          >
            {selectedTopic.title}
          </h3>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {selectedTopic.description}
          </p>

          {selectedTopic.contribution && (
            <div className="mt-8 max-w-3xl border-l-2 border-teal-600 pl-5">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                My contribution
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {selectedTopic.contribution}
              </p>
            </div>
          )}

          {selectedTopic.details?.tags && (
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-700">
              {selectedTopic.details.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {selectedTopic.details?.features && (
            <div className="mt-10 grid gap-x-12 gap-y-5 sm:grid-cols-2">
              {selectedTopic.details.features.map((feature, index) => (
                <div key={feature} className="flex items-start gap-4 border-t border-slate-300/60 pt-4">
                  <span className="font-mono text-xs font-bold text-teal-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          )}

          {selectedTopic.details?.sections?.map((section) => (
            <div key={section.title} className="mt-12">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                {section.title}
              </h4>
              <div className="space-y-0 border-t border-slate-300/60">
                {section.items.map((item) => (
                  <p key={item} className="border-b border-slate-300/60 py-4 text-sm leading-7 text-slate-700">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-10 flex flex-wrap gap-3">
            {selectedTopic.details?.link && (
              <a
                href={selectedTopic.details.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-teal-600"
              >
                <ExternalLink className="h-4 w-4" />
                View project presentation
              </a>
            )}
            {selectedTopic.id === "profile" ? (
              <a
                href="https://www.linkedin.com/in/thanyathip-korapintavangkul-697979241/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-teal-600"
              >
                <Linkedin className="h-4 w-4" />
                View LinkedIn profile
              </a>
            ) : selectedTopic.details?.github ? (
              <a href={selectedTopic.details.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-teal-600">
                <Github className="h-4 w-4" />
                View source code on GitHub
              </a>
            ) : null}
          </div>
        </section>
      )}
    </div>
  );
}

export default RadialPortfolioWheel;
