"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Zap } from "lucide-react";

const timelineEvents = [
  {
    time: "18:00",
    title: "Inauguration",
    description: "Briefing on rules, judging criteria & theme reveal.",
    day: "FEB 25",
    highlight: false,
    color: "var(--color-gold)",
  },
  {
    time: "19:00",
    title: "Ideation Phase",
    description: "Team brainstorming & Mentor validation of concepts.",
    day: "FEB 25",
    highlight: false,
    color: "var(--color-stone)",
  },
  {
    time: "20:00",
    title: "Development Begins",
    description: "Start building your prototype. The clock is ticking!",
    day: "FEB 25",
    highlight: true,
    color: "var(--color-terracotta)",
  },
  {
    time: "23:00",
    title: "Midnight Challenge",
    description: "Surprise quiz session! Test your knowledge under pressure.",
    day: "FEB 25",
    highlight: false,
    color: "var(--color-gold)",
  },
  {
    time: "02:00",
    title: "Deep Work Phase",
    description: "Core development hours. Stay focused, stay caffeinated.",
    day: "FEB 26",
    highlight: false,
    color: "var(--color-stone)",
  },
  {
    time: "06:00",
    title: "Code Freeze",
    description: "Final commits and project documentation wrapping.",
    day: "FEB 26",
    highlight: true,
    color: "var(--color-terracotta)",
  },
  {
    time: "07:00",
    title: "Presentations",
    description: "Pitch your solution to the judges panel.",
    day: "FEB 26",
    highlight: false,
    color: "var(--color-gold)",
  },
  {
    time: "08:00",
    title: "Final Judgment",
    description: "Results announcement & Prize Distribution ceremony.",
    day: "FEB 26",
    highlight: true,
    color: "var(--color-terracotta)",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-24 bg-[var(--color-paper)] overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 bg-[var(--color-gold)] border-3 border-[var(--color-ink)] rotate-12"
        style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
        animate={{ rotate: [12, 20, 12] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-16 h-16 bg-[var(--color-terracotta)] border-3 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-sm uppercase border-2 border-[var(--color-ink)] mb-6"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "-2deg" }}
          >
            Schedule
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-5xl md:text-7xl font-black text-[var(--color-ink)] leading-none">
            14 Hours of
            <br />
            <span className="relative inline-block">
              Pure Chaos
              <Star className="absolute -right-8 -top-2 w-8 h-8 text-[var(--color-terracotta)] fill-[var(--color-terracotta)]" />
            </span>
          </h2>
          <p className="mt-4 font-[family-name:var(--font-grotesk)] text-lg text-[var(--color-stone)] max-w-md">
            Every minute counts. Here is your roadmap to victory!
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--color-ink)] origin-top"
          />

          {/* Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse md:text-right"
                }`}
              >
                {/* Dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 border-3 border-[var(--color-ink)] z-10"
                  style={{ 
                    backgroundColor: event.color,
                    top: "1.5rem",
                  }}
                />

                {/* Time - Desktop */}
                <div
                  className={`hidden md:block w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                    className="inline-block bg-[var(--color-cream)] border-3 border-[var(--color-ink)] px-4 py-2"
                    style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
                  >
                    <span className="font-[family-name:var(--font-ancient)] text-3xl font-black text-[var(--color-ink)]">
                      {event.time}
                    </span>
                    <span className="block font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)] mt-1">
                      {event.day}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  {/* Mobile Time */}
                  <div className="md:hidden mb-2 font-[family-name:var(--font-data)] text-sm">
                    <span className="text-[var(--color-terracotta)] font-bold">{event.time}</span>
                    <span className="text-[var(--color-stone)] mx-2">/</span>
                    <span className="text-[var(--color-stone)]">{event.day}</span>
                  </div>

                  <motion.div
                    whileHover={{ 
                      x: index % 2 === 0 ? 5 : -5, 
                      rotate: index % 2 === 0 ? 1 : -1 
                    }}
                    className="bg-[var(--color-cream)] border-3 border-[var(--color-ink)] p-6 relative"
                    style={{ 
                      boxShadow: event.highlight 
                        ? "6px 6px 0 var(--color-terracotta)" 
                        : "4px 4px 0 var(--color-ink)" 
                    }}
                  >
                    {event.highlight && (
                      <motion.div
                        className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--color-terracotta)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-4 h-4 text-[var(--color-cream)]" fill="currentColor" />
                      </motion.div>
                    )}
                    
                    <h3 className="font-[family-name:var(--font-ancient)] text-xl md:text-2xl font-black text-[var(--color-ink)] mb-2">
                      {event.title}
                    </h3>
                    <p className="font-[family-name:var(--font-grotesk)] text-sm text-[var(--color-stone)]">
                      {event.description}
                    </p>
                    
                    {event.highlight && (
                      <motion.div 
                        className="mt-3 inline-block px-2 py-1 bg-[var(--color-terracotta)] text-[var(--color-cream)] text-xs font-[family-name:var(--font-data)] uppercase border-2 border-[var(--color-ink)]"
                        animate={{ rotate: [-1, 1, -1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Key Milestone!
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-4"
        >
          {[
            { value: "14", label: "Hours", color: "var(--color-terracotta)" },
            { value: "8", label: "Phases", color: "var(--color-gold)" },
            { value: "∞", label: "Possibilities", color: "var(--color-stone)" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, rotate: index === 1 ? 2 : -2 }}
              className="bg-[var(--color-cream)] border-3 border-[var(--color-ink)] p-6 text-center"
              style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
            >
              <div 
                className="font-[family-name:var(--font-ancient)] text-4xl md:text-5xl font-black"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)] uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
