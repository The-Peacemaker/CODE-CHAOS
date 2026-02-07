"use client";

import { motion, useInView } from "framer-motion";
import { Star, Sparkles, Heart } from "lucide-react";
import { useRef } from "react";

const sponsors = [
  { name: "Sponsor 1", tier: "platinum" },
  { name: "Sponsor 2", tier: "platinum" },
  { name: "Sponsor 3", tier: "gold" },
  { name: "Sponsor 4", tier: "gold" },
  { name: "Sponsor 5", tier: "gold" },
  { name: "Sponsor 6", tier: "silver" },
  { name: "Sponsor 7", tier: "silver" },
  { name: "Sponsor 8", tier: "silver" },
];

export default function Sponsors() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="py-24 px-6 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-[var(--color-gold)] border-3 border-[var(--color-ink)] rotate-12"
        style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
        animate={{ rotate: [12, 20, 12] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-12 h-12 bg-[var(--color-terracotta)] border-3 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
            Partners
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-5xl md:text-7xl font-black text-[var(--color-ink)] leading-none">
            Our Sponsors
            <motion.span
              className="inline-block ml-4"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-10 h-10 text-[var(--color-terracotta)] fill-[var(--color-terracotta)]" />
            </motion.span>
          </h2>
          <p className="mt-4 font-[family-name:var(--font-grotesk)] text-lg text-[var(--color-stone)] max-w-md mx-auto">
            Powered by industry leaders who believe in the next generation
          </p>
        </motion.div>

        {/* Sponsor Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -1 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: -1 } : {}}
          transition={{ delay: 0.2 }}
          whileHover={{ rotate: 0, scale: 1.01 }}
          className="mb-16 bg-[var(--color-paper)] border-4 border-dashed border-[var(--color-ink)] p-8 text-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-12 h-12 mx-auto text-[var(--color-gold)] mb-4" />
          </motion.div>
          <div className="font-[family-name:var(--font-ancient)] text-2xl font-bold text-[var(--color-ink)] mb-4">
            Sponsor Slots Available!
          </div>
          <p className="font-[family-name:var(--font-grotesk)] text-[var(--color-stone)] mb-6 max-w-lg mx-auto">
            Partner with Code & Chaos to connect with the brightest minds in technology.
            Multiple sponsorship tiers available.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[var(--color-terracotta)] text-[var(--color-cream)] border-3 border-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-bold uppercase"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
          >
            Become a Sponsor
          </motion.button>
        </motion.div>

        {/* Sponsor Grid Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {/* Platinum Tier */}
          <div className="mb-12">
            <motion.div 
              className="inline-block px-3 py-1 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs uppercase border-2 border-[var(--color-ink)] mb-6"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "1deg" }}
            >
              Platinum Partners
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {sponsors
                .filter((s) => s.tier === "platinum")
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: index % 2 === 0 ? -2 : 2 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ rotate: 0, scale: 1.03 }}
                    className="h-36 bg-[var(--color-paper)] border-3 border-[var(--color-ink)] flex items-center justify-center cursor-pointer"
                    style={{ boxShadow: "5px 5px 0 var(--color-ink)" }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-[var(--color-ink)]" fill="currentColor" />
                      </div>
                      <span className="font-[family-name:var(--font-ancient)] font-bold text-[var(--color-ink)]">
                        {sponsor.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Gold Tier */}
          <div className="mb-12">
            <motion.div 
              className="inline-block px-3 py-1 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-xs uppercase border-2 border-[var(--color-ink)] mb-6"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "-1deg" }}
            >
              Gold Partners
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {sponsors
                .filter((s) => s.tier === "gold")
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="h-28 bg-[var(--color-paper)] border-3 border-[var(--color-ink)] flex items-center justify-center cursor-pointer"
                    style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-[var(--color-terracotta)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-[var(--color-cream)]" />
                      </div>
                      <span className="font-[family-name:var(--font-data)] text-sm text-[var(--color-ink)]">
                        {sponsor.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div>
            <motion.div 
              className="inline-block px-3 py-1 bg-[var(--color-stone)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-xs uppercase border-2 border-[var(--color-ink)] mb-6"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "1deg" }}
            >
              Silver Partners
            </motion.div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {sponsors
                .filter((s) => s.tier === "silver")
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    className="h-20 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] flex items-center justify-center cursor-pointer"
                    style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 bg-[var(--color-stone)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-[var(--color-cream)]" />
                      </div>
                      <span className="font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)]">
                        {sponsor.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
