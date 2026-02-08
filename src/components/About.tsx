"use client";

import { motion, useInView } from "framer-motion";
import { MapPin, Users, Clock, Sparkles, Star, Coffee } from "lucide-react";
import { useRef } from "react";
import { DoodleSet1 } from "./Doodles";

const stats = [
  { icon: Clock, label: "Duration", value: "14 Hours", color: "var(--color-terracotta)" },
  { icon: Users, label: "Team Size", value: "2-4 Members", color: "var(--color-gold)" },
  { icon: Sparkles, label: "Entry Fee", value: "₹100", color: "var(--color-terracotta)" },
  { icon: MapPin, label: "Venue", value: "VJCET Labs", color: "var(--color-stone)" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[var(--color-paper)] overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating Doodles */}
      <DoodleSet1 />
      
      {/* Decorative Corner Stamps */}
      <motion.div
        className="absolute top-8 right-4 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 bg-[var(--color-cream)] border-2 sm:border-3 border-[var(--color-ink)] flex items-center justify-center"
        style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "12deg" }}
        animate={{ rotate: [12, 15, 12] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="text-center font-[family-name:var(--font-data)] text-[10px] sm:text-xs text-[var(--color-ink)]">
          <div className="text-[var(--color-terracotta)] font-bold">SEC</div>
          <div className="text-xl sm:text-3xl font-black text-[var(--color-ink)]">01</div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-10 sm:mb-16"
        >
          <motion.div 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs sm:text-sm uppercase border-2 border-[var(--color-ink)] mb-4 sm:mb-6"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "-2deg" }}
          >
            About the Event
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-4xl sm:text-6xl md:text-8xl font-black text-[var(--color-ink)] leading-none">
            What is
            <br />
            <span className="relative inline-block">
              Code&Chaos
              <motion.div
                className="absolute -right-6 -top-2 sm:-right-8 sm:-top-4"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-5 h-5 sm:w-8 sm:h-8 text-[var(--color-terracotta)] fill-[var(--color-terracotta)]" />
              </motion.div>
            </span>
            <span className="text-[var(--color-terracotta)]">?</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -2 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-[var(--color-cream)] border-3 sm:border-4 border-[var(--color-ink)] p-6 sm:p-8 md:p-10 relative"
            style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
          >
            {/* Tape decoration */}
            <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-6 bg-[var(--color-gold)]/80 border-2 border-[var(--color-ink)]" />
            
            <p className="font-[family-name:var(--font-grotesk)] text-lg sm:text-xl md:text-2xl text-[var(--color-ink)] leading-relaxed mb-4 sm:mb-6">
              <span className="font-bold text-[var(--color-terracotta)]">Code & Chaos</span> is a 14-hour overnight hackathon where students become{" "}
              <span className="bg-[var(--color-gold)] px-2">architects of sustainability</span>.
            </p>
            <p className="font-[family-name:var(--font-grotesk)] text-base sm:text-lg text-[var(--color-stone)] leading-relaxed">
              Teams compete to build functional, scalable solutions for environmental and social challenges. 
              It is not just coding - it is creating impact!
            </p>
            
            {/* Corner fold effect */}
            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-[var(--color-paper)] border-l-3 sm:border-l-4 border-t-3 sm:border-t-4 border-[var(--color-ink)]" 
                 style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotate: index % 2 === 0 ? -2 : 2 
                } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="bg-[var(--color-cream)] border-2 sm:border-3 border-[var(--color-ink)] p-4 sm:p-6 relative"
                style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
              >
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center mb-2 sm:mb-3"
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-cream)]" />
                </div>
                <div className="font-[family-name:var(--font-data)] text-[10px] sm:text-xs text-[var(--color-stone)] uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="font-[family-name:var(--font-ancient)] text-lg sm:text-2xl font-black text-[var(--color-ink)]">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Location Details Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          <motion.div
            className="bg-[var(--color-terracotta)] text-[var(--color-cream)] border-3 sm:border-4 border-[var(--color-ink)] p-4 sm:p-6"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)", rotate: "1deg" }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="font-[family-name:var(--font-ancient)] text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Venue
            </div>
            <div className="font-[family-name:var(--font-grotesk)] text-base sm:text-lg">
              Programming Lab, Multimedia Lab & Room D401
            </div>
            <div className="font-[family-name:var(--font-data)] text-xs sm:text-sm opacity-80 mt-2">
              VJCET Campus, Vazhakulam
            </div>
          </motion.div>

          <motion.div
            className="bg-[var(--color-gold)] text-[var(--color-ink)] border-3 sm:border-4 border-[var(--color-ink)] p-4 sm:p-6"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)", rotate: "-1deg" }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="font-[family-name:var(--font-ancient)] text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Date & Time
            </div>
            <div className="font-[family-name:var(--font-grotesk)] text-base sm:text-lg">
              February 25-26, 2026
            </div>
            <div className="font-[family-name:var(--font-data)] text-xs sm:text-sm opacity-80 mt-2">
              6:00 PM - 8:00 AM (14 Hours Non-Stop!)
            </div>
          </motion.div>

          <motion.div
            className="bg-[var(--color-cream)] text-[var(--color-ink)] border-3 sm:border-4 border-[var(--color-ink)] p-4 sm:p-6 relative overflow-hidden"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)", rotate: "1.5deg" }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <motion.div
              className="absolute -right-2 -top-2"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Coffee className="w-12 h-12 sm:w-16 sm:h-16 text-[var(--color-terracotta)] opacity-20" />
            </motion.div>
            <div className="font-[family-name:var(--font-ancient)] text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-[var(--color-terracotta)]" />
              Fuel Up!
            </div>
            <div className="font-[family-name:var(--font-grotesk)] text-base sm:text-lg font-semibold text-[var(--color-terracotta)]">
              Food & Refreshments
            </div>
            <div className="font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-stone)] mt-2">
              Available to ALL Participants!
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
