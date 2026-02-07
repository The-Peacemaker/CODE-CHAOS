"use client";

import { motion, useInView } from "framer-motion";
import { Zap, Terminal, Shield, Leaf, Brain, Globe, Star } from "lucide-react";
import { useRef } from "react";

const tracks = [
  {
    icon: Zap,
    title: "Innovation",
    objective: "Scalability",
    description: "Build tech that grows with impact.",
    color: "var(--color-terracotta)",
    rotation: -3,
  },
  {
    icon: Terminal,
    title: "Execution",
    objective: "Functionality",
    description: "Code that actually runs and solves.",
    color: "var(--color-gold)",
    rotation: 2,
  },
  {
    icon: Shield,
    title: "Impact",
    objective: "Relevance",
    description: "Solve real problems, make real change.",
    color: "var(--color-stone)",
    rotation: -2,
  },
];

const focusAreas = [
  { icon: Leaf, title: "Sustainability", desc: "Green solutions for tomorrow", color: "var(--color-terracotta)" },
  { icon: Brain, title: "AI/ML", desc: "Intelligent automation", color: "var(--color-gold)" },
  { icon: Globe, title: "Social Impact", desc: "Community-driven development", color: "var(--color-stone)" },
];

export default function Tracks() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="tracks"
      ref={sectionRef}
      className="py-24 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-gold)] border-3 border-[var(--color-ink)]"
        style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-16 h-16 bg-[var(--color-terracotta)] border-3 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-sm uppercase border-2 border-[var(--color-ink)] mb-6"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "-2deg" }}
          >
            Evaluation Criteria
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-5xl md:text-7xl font-black text-[var(--color-ink)] leading-none">
            How We
            <br />
            <span className="relative inline-block">
              Judge
              <Star className="absolute -right-8 -top-2 w-8 h-8 text-[var(--color-gold)] fill-[var(--color-gold)]" />
            </span>
            <span className="text-[var(--color-terracotta)]">!</span>
          </h2>
        </motion.div>

        {/* Main Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: track.rotation } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
              className="relative bg-[var(--color-paper)] border-4 border-[var(--color-ink)] p-8 min-h-[320px] flex flex-col cursor-pointer group"
              style={{ boxShadow: "8px 8px 0 var(--color-ink)" }}
            >
              {/* Number Badge */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 border-3 border-[var(--color-ink)] rounded-full flex items-center justify-center font-[family-name:var(--font-ancient)] text-xl font-black text-[var(--color-cream)]"
                style={{ backgroundColor: track.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                0{index + 1}
              </motion.div>

              {/* Icon */}
              <div 
                className="w-16 h-16 border-3 border-[var(--color-ink)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: track.color }}
              >
                <track.icon className="w-8 h-8 text-[var(--color-cream)]" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-ancient)] text-3xl font-black text-[var(--color-ink)] mb-2">
                {track.title}
              </h3>

              {/* Description */}
              <p className="font-[family-name:var(--font-grotesk)] text-[var(--color-stone)] mb-auto">
                {track.description}
              </p>

              {/* Objective Tag */}
              <motion.div
                className="inline-block self-start px-3 py-1 bg-[var(--color-ink)] text-[var(--color-cream)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs uppercase mt-4"
                style={{ boxShadow: "2px 2px 0 var(--color-stone)" }}
                whileHover={{ x: 3 }}
              >
                Goal: {track.objective}
              </motion.div>

              {/* Tape decoration */}
              <div className="absolute -top-2 left-8 w-16 h-5 bg-[var(--color-gold)]/70 border-2 border-[var(--color-ink)]" />
            </motion.div>
          ))}
        </div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="inline-block px-3 py-1 bg-[var(--color-paper)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-sm uppercase border-2 border-[var(--color-ink)] mb-6"
            style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "1deg" }}
          >
            Focus Areas
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="bg-[var(--color-paper)] border-3 border-[var(--color-ink)] p-5 flex items-center gap-4 cursor-pointer group"
                style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
              >
                <div 
                  className="w-12 h-12 border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: area.color }}
                >
                  <area.icon className="w-6 h-6 text-[var(--color-cream)]" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-ancient)] text-lg font-bold text-[var(--color-ink)]">
                    {area.title}
                  </div>
                  <div className="font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)]">
                    {area.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <motion.p
            className="inline-block px-6 py-3 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-bold text-lg border-3 border-[var(--color-ink)]"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)", rotate: "-1deg" }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            Choose your path. Define your legacy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
