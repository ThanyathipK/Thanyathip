import React, { useState } from "react";
import PeachyMintBackground from "@/components/ui/demo";
import HandDrawnHero from "@/components/hand-drawn-hero";
import HomePage from "@/components/home-page";
import NeonCursorAura from "@/components/ui/neon-cursor-aura";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"intro" | "home">("intro");

  return (
    <PeachyMintBackground>
      {/* Light Blue Neon Ambient Aura that gracefully follows the mouse cursor */}
      <NeonCursorAura />

      {currentPage === "intro" ? (
        <HandDrawnHero
          onClick={() => setCurrentPage("home")}
        />
      ) : (
        <HomePage
          name="Thanyathip Korapintavangkul"
          onBackToIntro={() => setCurrentPage("intro")}
        />
      )}
    </PeachyMintBackground>
  );
}
