"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Clock, Star, Zap } from "lucide-react";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <footer
      ref={footerRef}
      className="relative bg-[var(--color-terracotta)] min-h-[70vh] flex flex-col overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-gold)] border-4 border-[var(--color-ink)] rotate-12"
        style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
        animate={{ rotate: [12, 20, 12] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 bg-[var(--color-cream)] border-4 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-16 h-16 bg-[var(--color-ink)] border-3 border-[var(--color-ink)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center p-8 md:p-16">
        <div className="max-w-7xl mx-auto w-full">
          {/* CTA Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, rotate: -3 }}
                animate={isInView ? { opacity: 1, rotate: -3 } : {}}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-[var(--color-cream)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-sm uppercase border-3 border-[var(--color-ink)] mb-6"
                style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
              >
                Ready to compete?
              </motion.div>
              
              <h2 className="font-[family-name:var(--font-ancient)] text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tight text-[var(--color-cream)]">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="block"
                >
                  Enter
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block text-[var(--color-ink)]/30"
                >
                  The
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="block relative"
                >
                  Chaos
                  <motion.span
                    className="absolute -right-8 top-0"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-12 h-12 text-[var(--color-gold)] fill-[var(--color-gold)]" />
                  </motion.span>
                </motion.span>
              </h2>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-start lg:items-end"
            >
              <motion.button
                whileHover={{ scale: 1.02, rotate: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-[var(--color-cream)] text-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-black text-xl md:text-2xl px-10 md:px-16 py-5 md:py-8 border-4 border-[var(--color-ink)] uppercase tracking-wider flex items-center gap-4"
                style={{ boxShadow: "8px 8px 0 var(--color-ink)" }}
              >
                Register Now
                <ArrowUpRight className="w-7 h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <motion.span
                  className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4 text-[var(--color-ink)]" />
                </motion.span>
              </motion.button>
              
              <motion.div 
                className="mt-4 px-4 py-2 bg-[var(--color-ink)]/20 border-2 border-[var(--color-ink)]/30 font-[family-name:var(--font-data)] text-sm text-[var(--color-cream)]"
                style={{ rotate: "1deg" }}
              >
                Limited slots available! Closes Feb 20
              </motion.div>
            </motion.div>
          </div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { icon: Calendar, label: "Date", value: "Feb 25-26, 2026", rotation: -2 },
              { icon: Clock, label: "Time", value: "6:00 PM - 8:00 AM", rotation: 1 },
              { icon: MapPin, label: "Venue", value: "VJCET Campus, Kerala", rotation: -1 },
            ].map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: info.rotation } : {}}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                className="flex items-center gap-4 p-4 bg-[var(--color-cream)] border-3 border-[var(--color-ink)]"
                style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
              >
                <div className="w-10 h-10 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-[var(--color-ink)]" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)] uppercase tracking-wider">
                    {info.label}
                  </div>
                  <div className="font-[family-name:var(--font-ancient)] font-bold text-[var(--color-ink)]">
                    {info.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.3 }}
        className="relative z-10 border-t-4 border-[var(--color-ink)]"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-[var(--color-cream)]">
          {/* Left Info */}
          <div className="font-[family-name:var(--font-data)] text-xs uppercase tracking-wider text-[var(--color-stone)] text-center md:text-left">
            VJCET 2026 - Programming Lab, D401
            <span className="hidden md:inline mx-4">|</span>
            <br className="md:hidden" />
            Viswajyothi College of Engineering & Technology
          </div>

          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-10 h-10 bg-[var(--color-terracotta)] border-2 border-[var(--color-ink)] flex items-center justify-center"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Zap className="w-5 h-5 text-[var(--color-cream)]" fill="currentColor" />
            </motion.div>
            <div className="font-[family-name:var(--font-ancient)] text-xl font-black text-[var(--color-ink)]">
              CODE<span className="text-[var(--color-terracotta)]">&</span>CHAOS
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
