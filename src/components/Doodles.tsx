"use client";

import { motion } from "framer-motion";

// Hand-drawn SVG doodles - reusable across sections
export const Squiggle = ({ color = "var(--color-terracotta)", delay = 0 }: { color?: string; delay?: number }) => (
  <svg width="60" height="20" viewBox="0 0 60 20">
    <motion.path
      d="M0,10 Q10,0 20,10 T40,10 T60,10"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  </svg>
);

export const CrossDoodle = ({ color = "var(--color-gold)", delay = 0 }: { color?: string; delay?: number }) => (
  <svg width="30" height="30" viewBox="0 0 30 30">
    <motion.path
      d="M5,5 L25,25 M25,5 L5,25"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1, rotate: [0, 180] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

export const TriangleDoodle = ({ color = "var(--color-stone)", delay = 0 }: { color?: string; delay?: number }) => (
  <svg width="40" height="40" viewBox="0 0 40 40">
    <motion.path
      d="M20,5 L35,35 L5,35 Z"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

export const ZigzagDoodle = ({ color = "var(--color-terracotta)", delay = 0 }: { color?: string; delay?: number }) => (
  <svg width="50" height="30" viewBox="0 0 50 30">
    <motion.path
      d="M0,15 L10,5 L20,25 L30,5 L40,25 L50,15"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

export const CircleDoodle = ({ color = "var(--color-gold)", delay = 0 }: { color?: string; delay?: number }) => (
  <motion.div
    className="w-10 h-10 border-3 rounded-full"
    style={{ borderColor: color }}
    animate={{ 
      scale: [1, 1.2, 1],
      borderRadius: ["50%", "30%", "50%"],
    }}
    transition={{ duration: 2, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

export const StarDoodle = ({ color = "var(--color-gold)", delay = 0 }: { color?: string; delay?: number }) => (
  <svg width="30" height="30" viewBox="0 0 30 30">
    <motion.path
      d="M15,2 L18,11 L27,11 L20,17 L23,27 L15,21 L7,27 L10,17 L3,11 L12,11 Z"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

export const SpiralDoodle = ({ color = "var(--color-terracotta)", delay = 0 }: { color?: string; delay?: number }) => (
  <svg width="40" height="40" viewBox="0 0 40 40">
    <motion.path
      d="M20,20 Q25,15 25,20 Q25,25 20,25 Q15,25 15,20 Q15,10 25,10 Q35,10 35,20 Q35,30 20,30"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  </svg>
);

export const ArrowDoodle = ({ color = "var(--color-stone)", delay = 0 }: { color?: string; delay?: number }) => (
  <svg width="40" height="20" viewBox="0 0 40 20">
    <motion.path
      d="M0,10 L30,10 M25,5 L30,10 L25,15"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  </svg>
);

// Floating doodle wrapper with position
interface FloatingDoodleProps {
  children: React.ReactNode;
  x: string;
  y: string;
  delay?: number;
}

export const FloatingDoodle = ({ children, x, y, delay = 0 }: FloatingDoodleProps) => (
  <motion.div
    className="absolute pointer-events-none z-0 hidden md:block"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.7, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// Pre-configured doodle sets for different sections
export const DoodleSet1 = () => (
  <>
    <FloatingDoodle x="5%" y="20%" delay={0.2}>
      <Squiggle />
    </FloatingDoodle>
    <FloatingDoodle x="90%" y="30%" delay={0.4}>
      <CrossDoodle />
    </FloatingDoodle>
    <FloatingDoodle x="85%" y="70%" delay={0.6}>
      <CircleDoodle />
    </FloatingDoodle>
  </>
);

export const DoodleSet2 = () => (
  <>
    <FloatingDoodle x="8%" y="15%" delay={0.3}>
      <TriangleDoodle />
    </FloatingDoodle>
    <FloatingDoodle x="92%" y="25%" delay={0.5}>
      <ZigzagDoodle />
    </FloatingDoodle>
    <FloatingDoodle x="3%" y="75%" delay={0.7}>
      <StarDoodle />
    </FloatingDoodle>
  </>
);

export const DoodleSet3 = () => (
  <>
    <FloatingDoodle x="6%" y="25%" delay={0.2}>
      <SpiralDoodle />
    </FloatingDoodle>
    <FloatingDoodle x="88%" y="15%" delay={0.4}>
      <CrossDoodle color="var(--color-terracotta)" />
    </FloatingDoodle>
    <FloatingDoodle x="92%" y="65%" delay={0.6}>
      <TriangleDoodle color="var(--color-gold)" />
    </FloatingDoodle>
  </>
);

export const DoodleSet4 = () => (
  <>
    <FloatingDoodle x="4%" y="30%" delay={0.3}>
      <ZigzagDoodle color="var(--color-gold)" />
    </FloatingDoodle>
    <FloatingDoodle x="90%" y="20%" delay={0.5}>
      <StarDoodle color="var(--color-terracotta)" />
    </FloatingDoodle>
    <FloatingDoodle x="7%" y="70%" delay={0.7}>
      <CircleDoodle color="var(--color-stone)" />
    </FloatingDoodle>
  </>
);
