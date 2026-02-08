"use client";

import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for boot sequence effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Skip to main content link for accessibility */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Scanlines Overlay */}
      <div className="scanlines" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Prizes />
      <Sponsors />
      <FAQ />
      <Team />
      <Footer />
    </main>
  );
}
