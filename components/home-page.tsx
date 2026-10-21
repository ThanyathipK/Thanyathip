import React, { useState } from "react";
import {
  Mail,
  Check,
  Send,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import RadialPortfolioWheel from "@/components/radial-portfolio-wheel";

export interface HomePageProps {
  onBackToIntro: () => void;
  name?: string;
}

export function HomePage({
  onBackToIntro,
  name = "Thanyathip Korapintavangkul",
}: HomePageProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "thanyathip2005@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full min-h-screen text-slate-800 animate-fadeIn flex flex-col justify-between">
      {/* Ultra-Glassy Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-white/40 border-b border-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_6px_24px_rgba(0,0,0,0.03)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-end">
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/ThanyathipK"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-slate-700 transition-all hover:border-[#C0EEE4] hover:bg-white/85"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/thanyathip-korapintavangkul-697979241/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-slate-700 transition-all hover:border-[#C0EEE4] hover:bg-white/85"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-1.5 rounded-xl backdrop-blur-xl bg-white/60 hover:bg-white/85 text-slate-700 hover:text-slate-950 border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)] text-xs font-medium transition-all flex items-center gap-1.5 hover:border-[#C0EEE4] hover:shadow-[0_0_16px_rgba(192,238,228,0.6)] cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-600" />
                  <span className="text-teal-700 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Copy Email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}?subject=Job%20Opportunity`}
              className="px-4 py-1.5 rounded-xl backdrop-blur-md bg-slate-950/90 hover:bg-slate-900 text-white border border-slate-700/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_14px_rgba(0,0,0,0.15)] text-xs font-medium transition-all flex items-center gap-1.5 hover:border-[#C0EEE4] hover:shadow-[0_0_20px_rgba(192,238,228,0.5)]"
            >
              <Send className="w-3 h-3 text-[#C0EEE4]" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Home Page Experience with Radial Portfolio Wheel */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8 flex-1 flex flex-col items-center justify-center space-y-4">
        
        {/* Clean Glassy Header Badge (No "Interactive Portfolio Showcase", No Extra Click Instructions) */}
        <div className="max-w-3xl text-center space-y-3 pt-3">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950"
            style={{ fontFamily: '"Clarity City", sans-serif' }}
          >
            {name.toUpperCase()}
          </h1>
          <p className="text-sm font-medium tracking-[0.12em] text-slate-600 sm:text-base">
            PRODUCT DEVELOPMENT · DATA ANALYTICS · SOFTWARE ENGINEERING
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-500">
            ICT student at Mahidol University building practical products across AI, mobile, web, and data.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/Thanyathip_Korapintavangkul_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(192,238,228,0.65)]"
            >
              <Download className="h-3.5 w-3.5" />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/thanyathip-korapintavangkul-697979241/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/90 bg-white/60 px-4 py-2 text-xs font-semibold text-slate-800 transition-all hover:border-[#C0EEE4] hover:bg-white/85"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ThanyathipK"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/90 bg-white/60 px-4 py-2 text-xs font-semibold text-slate-800 transition-all hover:border-[#C0EEE4] hover:bg-white/85"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>

        {/* The Radial Portfolio Wheel (Profile, Project 1-4, Experience) */}
        <section className="w-full flex items-center justify-center py-2">
          <RadialPortfolioWheel />
        </section>
      </main>

      {/* Minimalist Frosted Glass Footer */}
      <footer className="border-t border-white/60 bg-white/20 backdrop-blur-xl py-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="font-light tracking-wide">
            &copy; {new Date().getFullYear()} {name} &bull; All Rights Reserved
          </div>
          <button
            onClick={onBackToIntro}
            className="text-teal-800 hover:text-black font-medium underline underline-offset-4 transition-colors cursor-pointer"
          >
            Replay Destination Page Animation
          </button>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
