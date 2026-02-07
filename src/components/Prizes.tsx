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
      className="relative py-24 bg-[var(--color-cream)] overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-gold)] border-3 border-[var(--color-ink)]"
        style={{ boxShadow: "4px 4px 0 var(--color-ink)", rotate: "15deg" }}
        animate={{ rotate: [15, 25, 15] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-[var(--color-terracotta)] border-3 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-sm uppercase border-2 border-[var(--color-ink)] mb-6"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "-2deg" }}
          >
            Rewards
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-5xl md:text-7xl font-black text-[var(--color-ink)] leading-none">
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
          className="relative bg-[var(--color-gold)] border-4 border-[var(--color-ink)] p-8 md:p-12 text-center mb-12"
          style={{ boxShadow: "10px 10px 0 var(--color-ink)" }}
        >
          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-[var(--color-ink)]" />
          <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-[var(--color-ink)]" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-[var(--color-ink)]" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-[var(--color-ink)]" />

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
              <Trophy className="w-24 h-24 md:w-32 md:h-32 mx-auto text-[var(--color-ink)]" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-6 inline-block px-4 py-2 bg-[var(--color-ink)] text-[var(--color-cream)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-sm uppercase"
            style={{ boxShadow: "2px 2px 0 var(--color-stone)" }}
          >
            First Prize
          </motion.div>

          {/* Amount */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, type: "spring" }}
            className="font-[family-name:var(--font-ancient)] text-8xl md:text-9xl font-black text-[var(--color-ink)] my-4"
          >
            18K
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="font-[family-name:var(--font-grotesk)] text-xl text-[var(--color-ink)]/70"
          >
            The Grand Reward
          </motion.p>

          {/* Sparkle decorations */}
          <motion.div
            className="absolute top-8 right-12"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-[var(--color-ink)]" />
          </motion.div>
        </motion.div>

        {/* Secondary Prizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryPrizes.map((prize, index) => (
            <motion.div
              key={prize.label}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: prize.rotation } : {}}
              transition={{ delay: 0.4 + index * 0.15 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className="bg-[var(--color-paper)] border-3 border-[var(--color-ink)] p-6 relative cursor-pointer"
              style={{ boxShadow: "5px 5px 0 var(--color-ink)" }}
            >
              {/* Icon Badge */}
              <motion.div
                className="w-12 h-12 border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: prize.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <prize.icon className="w-6 h-6 text-[var(--color-cream)]" />
              </motion.div>

              {/* Sublabel */}
              <div className="font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)] uppercase tracking-wider mb-2">
                {prize.sublabel}
              </div>

              {/* Amount */}
              <div className="font-[family-name:var(--font-ancient)] text-3xl font-black text-[var(--color-ink)] mb-1">
                {prize.amount !== "SWAGS" ? `₹${prize.amount}` : prize.amount}
              </div>

              {/* Label */}
              <div className="font-[family-name:var(--font-grotesk)] text-sm text-[var(--color-stone)]">
                {prize.label}
              </div>

              {/* Tape decoration */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-[var(--color-gold)]/60 border-2 border-[var(--color-ink)]" />
            </motion.div>
          ))}
        </div>

        {/* Total Prize Pool Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <motion.div 
            className="bg-[var(--color-terracotta)] border-4 border-[var(--color-ink)] p-6 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ boxShadow: "6px 6px 0 var(--color-ink)", rotate: "1deg" }}
            whileHover={{ rotate: 0 }}
          >
            <div className="font-[family-name:var(--font-data)] text-sm text-[var(--color-cream)] uppercase tracking-widest">
              Total Prize Pool
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-[family-name:var(--font-ancient)] text-4xl font-black text-[var(--color-cream)]"
              >
                25,000+
              </motion.div>
              <span className="text-[var(--color-cream)]/60">+</span>
              <span className="font-[family-name:var(--font-grotesk)] text-[var(--color-cream)]/80">
                Swags & Certificates
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
