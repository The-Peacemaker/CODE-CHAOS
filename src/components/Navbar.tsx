"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about", rotation: -2 },
  { label: "Tracks", href: "#tracks", rotation: 1 },
  { label: "Timeline", href: "#timeline", rotation: -1 },
  { label: "Prizes", href: "#prizes", rotation: 2 },
  { label: "Team", href: "#team", rotation: -1 },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled 
            ? "bg-[var(--color-cream)]/95 backdrop-blur-md border-b-3 border-[var(--color-ink)]" 
            : "bg-transparent"
        )}
      >
        <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-10 h-10 bg-[var(--color-terracotta)] border-3 border-[var(--color-ink)] flex items-center justify-center"
              style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-5 h-5 text-[var(--color-cream)]" fill="currentColor" />
            </motion.div>
            <div className="font-[family-name:var(--font-ancient)] font-black text-xl text-[var(--color-ink)]">
              CODE<span className="text-[var(--color-terracotta)]">&</span>CHAOS
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                onHoverStart={() => setHoveredItem(item.href)}
                onHoverEnd={() => setHoveredItem(null)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: item.rotation,
                  y: -3
                }}
                className={cn(
                  "relative px-4 py-2 font-[family-name:var(--font-data)] text-xs uppercase tracking-wider transition-all",
                  hoveredItem === item.href 
                    ? "bg-[var(--color-gold)] text-[var(--color-ink)] border-2 border-[var(--color-ink)]"
                    : "text-[var(--color-ink)] hover:text-[var(--color-terracotta)]"
                )}
                style={hoveredItem === item.href ? { boxShadow: "2px 2px 0 var(--color-ink)" } : {}}
              >
                {item.label}
                {hoveredItem === item.href && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-1/2 w-2 h-2 bg-[var(--color-terracotta)] rounded-full"
                    style={{ transform: "translateX(-50%)" }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, rotate: 3 }}
              animate={{ opacity: 1, rotate: 3 }}
              transition={{ delay: 2.7 }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{ scale: 0.95, rotate: -3 }}
              className="relative bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-ancient)] font-bold px-6 py-3 border-3 border-[var(--color-ink)] uppercase tracking-wider"
              style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
            >
              Register Now!
              <motion.span
                className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] text-[var(--color-ink)]"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, boxShadow: "1px 1px 0 var(--color-ink)" }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-cream)] pt-24 md:hidden overflow-hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            
            {/* Decorative Shapes */}
            <motion.div
              className="absolute top-32 right-8 w-16 h-16 bg-[var(--color-gold)] border-3 border-[var(--color-ink)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-40 left-8 w-12 h-12 bg-[var(--color-terracotta)] border-3 border-[var(--color-ink)] rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="relative p-6 flex flex-col h-full">
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20, rotate: 0 }}
                    animate={{ opacity: 1, x: 0, rotate: item.rotation }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left font-[family-name:var(--font-ancient)] text-4xl font-black text-[var(--color-ink)] py-4 px-4 bg-[var(--color-paper)] border-3 border-[var(--color-ink)] hover:bg-[var(--color-gold)] transition-colors"
                    style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-ancient)] font-bold text-xl py-5 uppercase tracking-wider border-3 border-[var(--color-ink)]"
                style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
              >
                Register Now!
              </motion.button>

              <div className="mt-auto pb-8 text-center">
                <motion.div 
                  className="inline-block px-4 py-2 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-sm text-[var(--color-ink)]"
                  style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
                  animate={{ rotate: [-1, 1, -1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  VJCET 2026 // FEB 25-26
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
