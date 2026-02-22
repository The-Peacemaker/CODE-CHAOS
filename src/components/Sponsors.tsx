"use client";

import { motion, useInView } from "framer-motion";
import { Star, Sparkles, Heart, Handshake, Crown } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { DoodleSet2 } from "./Doodles";

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

        {/* ===== SPONSOR 1 — Coordinate Systems ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: -1 } : {}}
          transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
          className="mb-10 sm:mb-16"
        >
          {/* Tier Label */}
          <motion.div
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)] mb-4 sm:mb-6 tracking-wider"
            style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "1deg" }}
          >
            <span className="flex items-center gap-1.5">
              <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Sponsor 1
            </span>
          </motion.div>

          {/* Sponsor Card */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.01 }}
            className="relative bg-[var(--color-paper)] border-3 sm:border-4 border-[var(--color-ink)] p-6 sm:p-10 md:p-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
            style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
          >
            {/* Tape decoration */}
            <div className="absolute -top-3 left-8 sm:left-16 w-16 sm:w-20 h-5 sm:h-6 bg-[var(--color-gold)]/80 border-2 border-[var(--color-ink)]" />
            <div className="absolute -top-3 right-8 sm:right-16 w-16 sm:w-20 h-5 sm:h-6 bg-[var(--color-rust)]/70 border-2 border-[var(--color-ink)]" />

            {/* Spinning star decoration */}
            <motion.div
              className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-gold)] fill-[var(--color-gold)]" />
            </motion.div>

            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-3 border-[var(--color-ink)] bg-white flex items-center justify-center p-4 sm:p-5 flex-shrink-0 relative overflow-hidden"
              style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/coordinate-system.jpeg"
                alt="Coordinate Systems - Sponsor 1"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Info */}
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-[family-name:var(--font-ancient)] text-2xl sm:text-3xl md:text-4xl font-black text-[var(--color-ink)] mb-2 sm:mb-3">
                Coordinate Systems
              </h3>
              <div className="inline-block px-3 py-1 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase tracking-wider text-[var(--color-ink)] mb-3 sm:mb-4"
                style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
              >
                Sponsor 1
              </div>
              <p className="font-[family-name:var(--font-grotesk)] text-xs sm:text-sm md:text-base text-[var(--color-stone)] leading-relaxed max-w-md">
                Empowering the next generation of innovators. Coordinate Systems is proud to be Sponsor 1 of Code &amp; Chaos 2026.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== SPONSOR 2 — PERUMALIL CREATIVE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 1 } : {}}
          transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
          className="mb-10 sm:mb-16"
        >
          {/* Tier Label */}
          <motion.div
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-[var(--color-rust)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)] mb-4 sm:mb-6 tracking-wider"
            style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "-1deg" }}
          >
            <span className="flex items-center gap-1.5">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Sponsor 2
            </span>
          </motion.div>

          {/* Sponsor Card */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.01 }}
            className="relative bg-[var(--color-paper)] border-3 sm:border-4 border-[var(--color-ink)] p-6 sm:p-10 md:p-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
            style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
          >
            {/* Tape decoration */}
            <div className="absolute -top-3 left-10 sm:left-20 w-16 sm:w-20 h-5 sm:h-6 bg-[var(--color-rust)]/70 border-2 border-[var(--color-ink)]" />

            {/* Spinning star decoration */}
            <motion.div
              className="absolute -left-3 -top-3 sm:-left-4 sm:-top-4"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-rust)] fill-[var(--color-rust)]" />
            </motion.div>

            {/* Logo */}
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-3 border-[var(--color-ink)] bg-[var(--color-ink)] flex items-center justify-center p-4 sm:p-5 flex-shrink-0 relative overflow-hidden"
              style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
              animate={{ rotate: [0, -2, 0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/PERUMALIL-CREATIVE.png"
                alt="PERUMALIL CREATIVE - Sponsor 2"
                width={200}
                height={200}
                className="object-contain w-full h-full scale-[1.8]"
              />
            </motion.div>

            {/* Info */}
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-[family-name:var(--font-ancient)] text-2xl sm:text-3xl md:text-4xl font-black text-[var(--color-ink)] mb-2 sm:mb-3">
                PERUMALIL CREATIVE
              </h3>
              <div className="inline-block px-3 py-1 bg-[var(--color-rust)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase tracking-wider text-[var(--color-cream)] mb-3 sm:mb-4"
                style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
              >
                Sponsor 2
              </div>
              <p className="font-[family-name:var(--font-grotesk)] text-xs sm:text-sm md:text-base text-[var(--color-stone)] leading-relaxed max-w-md">
                Your partner in growth: SEO, Digital Marketing, Video Production, Web &amp; Mobile App Development, Photography, and more!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== COLLABORATION PARTNER — MuLearn ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 1 } : {}}
          transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
          className="mb-10 sm:mb-16"
        >
          {/* Tier Label */}
          <motion.div
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)] mb-4 sm:mb-6 tracking-wider"
            style={{ boxShadow: "2px 2px 0 var(--color-ink)", rotate: "-1deg" }}
          >
            <span className="flex items-center gap-1.5">
              <Handshake className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Collaboration Partner
            </span>
          </motion.div>

          {/* Partner Card */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.01 }}
            className="relative bg-[var(--color-paper)] border-3 sm:border-4 border-[var(--color-ink)] p-6 sm:p-10 md:p-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
            style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
          >
            {/* Tape decoration */}
            <div className="absolute -top-3 left-10 sm:left-20 w-16 sm:w-20 h-5 sm:h-6 bg-[var(--color-terracotta)]/70 border-2 border-[var(--color-ink)]" />

            {/* Sparkles decoration */}
            <motion.div
              className="absolute -left-2 -bottom-2 sm:-left-3 sm:-bottom-3"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-[var(--color-terracotta)]" />
            </motion.div>

            {/* Logo */}
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-3 border-[var(--color-ink)] bg-white flex items-center justify-center p-4 sm:p-5 flex-shrink-0 relative overflow-hidden"
              style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
              animate={{ rotate: [0, -2, 0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/mulearn.jpeg"
                alt="MuLearn - Collaboration Partner"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Info */}
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-[family-name:var(--font-ancient)] text-2xl sm:text-3xl md:text-4xl font-black text-[var(--color-ink)] mb-2 sm:mb-3">
                MuLearn
              </h3>
              <div className="inline-block px-3 py-1 bg-[var(--color-terracotta)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase tracking-wider text-[var(--color-cream)] mb-3 sm:mb-4"
                style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
              >
                Collaboration Partner
              </div>
              <p className="font-[family-name:var(--font-grotesk)] text-xs sm:text-sm md:text-base text-[var(--color-stone)] leading-relaxed max-w-md">
                Building a community of learners and innovators. MuLearn joins Code &amp; Chaos as our valued collaboration partner.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== WANT TO SPONSOR? CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -1 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: -1 } : {}}
          transition={{ delay: 0.7 }}
          whileHover={{ rotate: 0, scale: 1.01 }}
          className="bg-[var(--color-paper)] border-3 sm:border-4 border-dashed border-[var(--color-ink)] p-5 sm:p-8 text-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-[var(--color-gold)] mb-3 sm:mb-4" />
          </motion.div>
          <div className="font-[family-name:var(--font-ancient)] text-xl sm:text-2xl font-bold text-[var(--color-ink)] mb-3 sm:mb-4">
            Want to Sponsor?
          </div>
          <p className="font-[family-name:var(--font-grotesk)] text-sm sm:text-base text-[var(--color-stone)] mb-4 sm:mb-6 max-w-lg mx-auto">
            Partner with Code &amp; Chaos to connect with the brightest minds in technology.
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
      </div>
    </section>
  );
}
