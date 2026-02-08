"use client";

import { motion, useInView } from "framer-motion";
import { Star, Sparkles, Heart } from "lucide-react";
import { useRef } from "react";
import { DoodleSet2 } from "./Doodles";

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
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Floating Doodles */}
      <DoodleSet2 />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-10 left-4 sm:top-20 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 bg-[var(--color-gold)] border-2 sm:border-3 border-[var(--color-ink)] rotate-12"
        style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
        animate={{ rotate: [12, 20, 12] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-16 right-8 sm:bottom-32 sm:right-16 w-8 h-8 sm:w-12 sm:h-12 bg-[var(--color-terracotta)] border-2 sm:border-3 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
            Partners
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-4xl sm:text-5xl md:text-7xl font-black text-[var(--color-ink)] leading-none">
            Our Sponsors
            <motion.span
              className="inline-block ml-2 sm:ml-4"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-7 h-7 sm:w-10 sm:h-10 text-[var(--color-terracotta)] fill-[var(--color-terracotta)]" />
            </motion.span>
          </h2>
          <p className="mt-3 sm:mt-4 font-[family-name:var(--font-grotesk)] text-sm sm:text-lg text-[var(--color-stone)] max-w-md mx-auto px-4">
            Powered by industry leaders who believe in the next generation
          </p>
        </motion.div>

        {/* Sponsor Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -1 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: -1 } : {}}
          transition={{ delay: 0.2 }}
          whileHover={{ rotate: 0, scale: 1.01 }}
          className="mb-10 sm:mb-16 bg-[var(--color-paper)] border-3 sm:border-4 border-dashed border-[var(--color-ink)] p-5 sm:p-8 text-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-[var(--color-gold)] mb-3 sm:mb-4" />
          </motion.div>
          <div className="font-[family-name:var(--font-ancient)] text-xl sm:text-2xl font-bold text-[var(--color-ink)] mb-3 sm:mb-4">
            Sponsor Slots Available!
          </div>
          <p className="font-[family-name:var(--font-grotesk)] text-sm sm:text-base text-[var(--color-stone)] mb-4 sm:mb-6 max-w-lg mx-auto">
            Partner with Code & Chaos to connect with the brightest minds in technology.
            Multiple sponsorship tiers available.
          </p>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=6282031325&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 sm:px-8 sm:py-3 bg-[var(--color-terracotta)] text-[var(--color-cream)] border-2 sm:border-3 border-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-bold text-sm sm:text-base uppercase"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
          >
            Become a Sponsor
          </motion.a>
        </motion.div>

        {/* Sponsor Grid Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {/* Platinum Tier */}
          <div className="mb-8 sm:mb-12">
            <motion.div 
              className="inline-block px-2.5 py-1 sm:px-3 sm:py-1 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)] mb-4 sm:mb-6"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "1deg" }}
            >
              Platinum Partners
            </motion.div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {sponsors
                .filter((s) => s.tier === "platinum")
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: index % 2 === 0 ? -2 : 2 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ rotate: 0, scale: 1.03 }}
                    className="h-28 sm:h-36 bg-[var(--color-paper)] border-2 sm:border-3 border-[var(--color-ink)] flex items-center justify-center cursor-pointer"
                    style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
                  >
                    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-ink)]" fill="currentColor" />
                      </div>
                      <span className="font-[family-name:var(--font-ancient)] font-bold text-sm sm:text-base text-[var(--color-ink)]">
                        {sponsor.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Gold Tier */}
          <div className="mb-8 sm:mb-12">
            <motion.div 
              className="inline-block px-2.5 py-1 sm:px-3 sm:py-1 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)] mb-4 sm:mb-6"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "-1deg" }}
            >
              Gold Partners
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {sponsors
                .filter((s) => s.tier === "gold")
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="h-24 sm:h-28 bg-[var(--color-paper)] border-2 sm:border-3 border-[var(--color-ink)] flex items-center justify-center cursor-pointer"
                    style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
                  >
                    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--color-terracotta)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-cream)]" />
                      </div>
                      <span className="font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-ink)]">
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
              className="inline-block px-2.5 py-1 sm:px-3 sm:py-1 bg-[var(--color-stone)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)] mb-4 sm:mb-6"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "1deg" }}
            >
              Silver Partners
            </motion.div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4">
              {sponsors
                .filter((s) => s.tier === "silver")
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    className="h-16 sm:h-20 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] flex items-center justify-center cursor-pointer"
                    style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
                  >
                    <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[var(--color-stone)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--color-cream)]" />
                      </div>
                      <span className="font-[family-name:var(--font-data)] text-[10px] sm:text-xs text-[var(--color-stone)]">
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
