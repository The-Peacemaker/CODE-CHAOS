"use client";

import { motion, useInView } from "framer-motion";
import { Trophy, Award, Lightbulb, Gift, Star, Sparkles } from "lucide-react";
import { useRef } from "react";

const secondaryPrizes = [
  {
    amount: "2,000",
    label: "Best Presentation",
    sublabel: "Design Excellence",
    icon: Award,
    color: "var(--color-gold)",
    rotation: -2,
  },
  {
    amount: "2,000",
    label: "Most Innovative",
    sublabel: "Creative Concept",
    icon: Lightbulb,
    color: "var(--color-terracotta)",
    rotation: 2,
  },
  {
    amount: "3,000",
    label: "Quiz Champions",
    sublabel: "Midnight Challenge",
    icon: Star,
    color: "var(--color-gold)",
    rotation: -1,
  },
  {
    amount: "SWAGS",
    label: "For Everyone",
    sublabel: "Participation",
    icon: Gift,
    color: "var(--color-stone)",
    rotation: 1,
  },
];

export default function Prizes() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="prizes"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[var(--color-cream)] overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-[var(--color-gold)] border-2 sm:border-3 border-[var(--color-ink)]"
        style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "15deg" }}
        animate={{ rotate: [15, 25, 15] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-4 sm:right-16 w-10 h-10 sm:w-16 sm:h-16 bg-[var(--color-terracotta)] border-2 sm:border-3 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-xs sm:text-sm uppercase border-2 border-[var(--color-ink)] mb-4 sm:mb-6"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "-2deg" }}
          >
            Rewards
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-4xl sm:text-5xl md:text-7xl font-black text-[var(--color-ink)] leading-none">
            Win Big
            <span className="text-[var(--color-terracotta)]">!</span>
          </h2>
        </motion.div>

        {/* Grand Prize Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: -2 } : {}}
          transition={{ delay: 0.2 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative bg-[var(--color-gold)] border-3 sm:border-4 border-[var(--color-ink)] p-6 sm:p-8 md:p-12 text-center mb-8 sm:mb-12"
          style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
        >
          {/* Corner decorations */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 border-l-3 sm:border-l-4 border-t-3 sm:border-t-4 border-[var(--color-ink)]" />
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-r-3 sm:border-r-4 border-t-3 sm:border-t-4 border-[var(--color-ink)]" />
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 border-l-3 sm:border-l-4 border-b-3 sm:border-b-4 border-[var(--color-ink)]" />
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-r-3 sm:border-r-4 border-b-3 sm:border-b-4 border-[var(--color-ink)]" />

          {/* Trophy */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Trophy className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto text-[var(--color-ink)]" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-4 sm:mt-6 inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[var(--color-ink)] text-[var(--color-cream)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs sm:text-sm uppercase"
            style={{ boxShadow: "2px 2px 0 var(--color-stone)" }}
          >
            First Prize
          </motion.div>

          {/* Amount */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, type: "spring" }}
            className="font-[family-name:var(--font-ancient)] text-6xl sm:text-8xl md:text-9xl font-black text-[var(--color-ink)] my-2 sm:my-4"
          >
            18K
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="font-[family-name:var(--font-grotesk)] text-base sm:text-xl text-[var(--color-ink)]/70"
          >
            The Grand Reward
          </motion.p>

          {/* Sparkle decorations */}
          <motion.div
            className="absolute top-6 sm:top-8 right-6 sm:right-12"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-[var(--color-ink)]" />
          </motion.div>
        </motion.div>

        {/* Secondary Prizes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {secondaryPrizes.map((prize, index) => (
            <motion.div
              key={prize.label}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: prize.rotation } : {}}
              transition={{ delay: 0.4 + index * 0.15 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className="bg-[var(--color-paper)] border-2 sm:border-3 border-[var(--color-ink)] p-4 sm:p-6 relative cursor-pointer"
              style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
            >
              {/* Icon Badge */}
              <motion.div
                className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center mb-3 sm:mb-4"
                style={{ backgroundColor: prize.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <prize.icon className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-cream)]" />
              </motion.div>

              {/* Sublabel */}
              <div className="font-[family-name:var(--font-data)] text-[9px] sm:text-xs text-[var(--color-stone)] uppercase tracking-wider mb-1 sm:mb-2">
                {prize.sublabel}
              </div>

              {/* Amount */}
              <div className="font-[family-name:var(--font-ancient)] text-xl sm:text-3xl font-black text-[var(--color-ink)] mb-0.5 sm:mb-1">
                {prize.amount !== "SWAGS" ? `₹${prize.amount}` : prize.amount}
              </div>

              {/* Label */}
              <div className="font-[family-name:var(--font-grotesk)] text-xs sm:text-sm text-[var(--color-stone)]">
                {prize.label}
              </div>

              {/* Tape decoration */}
              <div className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-3 sm:h-4 bg-[var(--color-gold)]/60 border-2 border-[var(--color-ink)]" />
            </motion.div>
          ))}
        </div>

        {/* Total Prize Pool Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-12"
        >
          <motion.div 
            className="bg-[var(--color-terracotta)] border-3 sm:border-4 border-[var(--color-ink)] p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)", rotate: "1deg" }}
            whileHover={{ rotate: 0 }}
          >
            <div className="font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-cream)] uppercase tracking-widest">
              Total Prize Pool
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-[family-name:var(--font-ancient)] text-2xl sm:text-4xl font-black text-[var(--color-cream)]"
              >
                25,000+
              </motion.div>
              <span className="text-[var(--color-cream)]/60">+</span>
              <span className="font-[family-name:var(--font-grotesk)] text-sm sm:text-base text-[var(--color-cream)]/80">
                Swags & Certificates
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
