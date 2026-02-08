"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence, type MotionValue } from "framer-motion";
import { ArrowRight, Star, Sparkles, Zap, Circle, Heart, Coffee, Code, Terminal, Cpu, Lightbulb, type LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Type definitions
interface StickerConfig {
  icon: LucideIcon;
  x: string;
  y: string;
  rotation: number;
  color: string;
  size: number;
}

interface DoodleConfig {
  type: string;
  x: string;
  y: string;
  delay: number;
}

// Scattered stickers around the hero
const scatteredStickers: StickerConfig[] = [
  { icon: Coffee, x: "5%", y: "15%", rotation: -15, color: "var(--color-terracotta)", size: 40 },
  { icon: Code, x: "92%", y: "25%", rotation: 12, color: "var(--color-gold)", size: 35 },
  { icon: Terminal, x: "85%", y: "55%", rotation: -8, color: "var(--color-stone)", size: 45 },
  { icon: Cpu, x: "8%", y: "65%", rotation: 20, color: "var(--color-terracotta)", size: 38 },
  { icon: Lightbulb, x: "15%", y: "40%", rotation: -5, color: "var(--color-gold)", size: 32 },
  { icon: Heart, x: "88%", y: "75%", rotation: 15, color: "var(--color-terracotta)", size: 28 },
];

// Floating doodles that follow mouse slightly
const floatingDoodles: DoodleConfig[] = [
  { type: "squiggle", x: "20%", y: "20%", delay: 0 },
  { type: "circle", x: "75%", y: "30%", delay: 0.2 },
  { type: "triangle", x: "60%", y: "70%", delay: 0.4 },
  { type: "cross", x: "30%", y: "75%", delay: 0.6 },
  { type: "zigzag", x: "85%", y: "45%", delay: 0.8 },
];

// Letter animation variants
const letterVariants = {
  hidden: { y: 100, opacity: 0, rotate: -10 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 2.2 + i * 0.05,
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
    },
  }),
};

// Hand-drawn SVG doodles
const Squiggle = () => (
  <svg width="60" height="20" viewBox="0 0 60 20">
    <motion.path
      d="M0,10 Q10,0 20,10 T40,10 T60,10"
      fill="none"
      stroke="var(--color-terracotta)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  </svg>
);

const CrossDoodle = () => (
  <svg width="30" height="30" viewBox="0 0 30 30">
    <motion.path
      d="M5,5 L25,25 M25,5 L5,25"
      fill="none"
      stroke="var(--color-gold)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1, rotate: [0, 180] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const TriangleDoodle = () => (
  <svg width="40" height="40" viewBox="0 0 40 40">
    <motion.path
      d="M20,5 L35,35 L5,35 Z"
      fill="none"
      stroke="var(--color-stone)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

const ZigzagDoodle = () => (
  <svg width="50" height="30" viewBox="0 0 50 30">
    <motion.path
      d="M0,15 L10,5 L20,25 L30,5 L40,25 L50,15"
      fill="none"
      stroke="var(--color-terracotta)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

const CircleDoodle = () => (
  <motion.div
    className="w-10 h-10 border-3 border-[var(--color-gold)] rounded-full"
    animate={{ 
      scale: [1, 1.2, 1],
      borderRadius: ["50%", "30%", "50%"],
    }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  />
);

const doodleComponents: Record<string, React.FC> = {
  squiggle: Squiggle,
  cross: CrossDoodle,
  triangle: TriangleDoodle,
  zigzag: ZigzagDoodle,
  circle: CircleDoodle,
};

// Mouse-tracking sticker component
function MouseTrackingSticker({ sticker, index, smoothMouseX, smoothMouseY }: { 
  sticker: StickerConfig; 
  index: number;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
}) {
  const Icon = sticker.icon;
  const xOffset = useTransform(smoothMouseX, [-1, 1], [-15 * (index % 2 === 0 ? 1 : -1), 15 * (index % 2 === 0 ? 1 : -1)]);
  const yOffset = useTransform(smoothMouseY, [-1, 1], [-15 * (index % 2 === 0 ? -1 : 1), 15 * (index % 2 === 0 ? -1 : 1)]);
  
  return (
    <motion.div
      className="absolute pointer-events-none z-0 hidden md:block"
      style={{
        left: sticker.x,
        top: sticker.y,
        x: xOffset,
        y: yOffset,
      }}
      initial={{ scale: 0, rotate: sticker.rotation - 20 }}
      animate={{ scale: 1, rotate: sticker.rotation }}
      transition={{ delay: 2.5 + index * 0.1, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="p-3 bg-[var(--color-paper)] border-2 border-[var(--color-ink)]"
        style={{ 
          boxShadow: "3px 3px 0 var(--color-ink)",
          rotate: sticker.rotation,
        }}
        whileHover={{ scale: 1.2, rotate: 0 }}
        animate={{ 
          y: [0, -8, 0],
          rotate: [sticker.rotation, sticker.rotation + 3, sticker.rotation],
        }}
        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon 
          style={{ width: sticker.size, height: sticker.size, color: sticker.color }} 
        />
      </motion.div>
    </motion.div>
  );
}

// Mouse-tracking doodle component
function MouseTrackingDoodle({ doodle, smoothMouseX, smoothMouseY }: {
  doodle: DoodleConfig;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
}) {
  const DoodleComponent = doodleComponents[doodle.type];
  const xOffset = useTransform(smoothMouseX, [-1, 1], [10, -10]);
  const yOffset = useTransform(smoothMouseY, [-1, 1], [10, -10]);
  
  return (
    <motion.div
      className="absolute pointer-events-none z-0 opacity-60 hidden lg:block"
      style={{
        left: doodle.x,
        top: doodle.y,
        x: xOffset,
        y: yOffset,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ delay: 2.8 + doodle.delay }}
    >
      <DoodleComponent />
    </motion.div>
  );
}

// Background sticker with mouse tracking
function BackgroundSticker({ y, rotate, smoothMouseX }: {
  y: MotionValue<number>;
  rotate: MotionValue<number>;
  smoothMouseX: MotionValue<number>;
}) {
  const xOffset = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  
  return (
    <motion.div
      style={{ 
        y, 
        rotate,
        x: xOffset,
      }}
      className="absolute right-[5%] top-[18%] w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] pointer-events-none z-0 hidden md:block"
    >
      <motion.div
        className="w-full h-full bg-[var(--color-paper)] border-3 border-[var(--color-ink)] flex items-center justify-center opacity-95"
        style={{ 
          boxShadow: "6px 6px 0 var(--color-ink)",
          rotate: 12,
        }}
        animate={{ rotate: [12, 15, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-10 h-10 lg:w-14 lg:h-14 mx-auto text-[var(--color-terracotta)]" />
          </motion.div>
          <motion.div 
            className="font-[family-name:var(--font-ancient)] text-base lg:text-lg font-black text-[var(--color-ink)] mt-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            14 HOURS
          </motion.div>
          <div className="font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)]">
            OF PURE CHAOS
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [clickSparks, setClickSparks] = useState<{ id: string; x: number; y: number }[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  
  // Mouse tracking with spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 2);
      mouseY.set((clientY / innerHeight - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Click spark effect
  const handleClick = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      const spark = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setClickSparks(prev => [...prev, spark]);
      setTimeout(() => {
        setClickSparks(prev => prev.filter(s => s.id !== spark.id));
      }, 1000);
    }
  };

  const codeText = "CODE";
  const chaosText = "CHAOS";

  return (
    <header
      ref={sectionRef}
      onClick={handleClick}
      className="relative pt-28 pb-24 min-h-screen flex flex-col justify-center bg-[var(--color-cream)] overflow-hidden cursor-crosshair"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <motion.div 
        className="absolute inset-0 bg-grid opacity-20"
        style={{ 
          x: smoothMouseX,
          y: smoothMouseY,
          scale: 1.1,
        }}
      />

      {/* Click Sparks */}
      <AnimatePresence>
        {clickSparks.map(spark => (
          <motion.div
            key={spark.id}
            className="absolute pointer-events-none z-50"
            style={{ left: spark.x, top: spark.y }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[var(--color-terracotta)] border border-[var(--color-ink)]"
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 60,
                  y: Math.sin((i * Math.PI * 2) / 8) * 60,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Scattered Icon Stickers with mouse parallax */}
      {scatteredStickers.map((sticker, i) => (
        <MouseTrackingSticker 
          key={i} 
          sticker={sticker} 
          index={i} 
          smoothMouseX={smoothMouseX} 
          smoothMouseY={smoothMouseY} 
        />
      ))}

      {/* Floating Doodles */}
      {floatingDoodles.map((doodle, i) => (
        <MouseTrackingDoodle 
          key={i} 
          doodle={doodle} 
          smoothMouseX={smoothMouseX} 
          smoothMouseY={smoothMouseY} 
        />
      ))}

      {/* Large Background Sticker */}
      <BackgroundSticker y={y} rotate={rotate} smoothMouseX={smoothMouseX} />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10 mb-12 md:mb-20">
        {/* Top Sticker Labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8"
        >
          <motion.div 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)] cursor-pointer"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
            whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: [-2, 0, -2] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            FEB 25-26, 2026
          </motion.div>
          <motion.div 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)] cursor-pointer"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
            whileHover={{ scale: 1.1, rotate: -5, y: -5 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: [2, 0, 2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            VJCET Campus
          </motion.div>
          <motion.div 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-paper)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)] cursor-pointer"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-1.5 sm:gap-2">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Circle className="w-2 h-2 fill-green-500 text-green-500" />
              </motion.div>
              Registrations Open
            </span>
          </motion.div>
        </motion.div>

        {/* Main Title - Character by Character Animation */}
        <div className="overflow-hidden">
          <h1 className="font-[family-name:var(--font-ancient)] text-[18vw] sm:text-[15vw] md:text-[12vw] leading-[0.85] sm:leading-[0.9] text-[var(--color-ink)] uppercase tracking-tighter font-black flex flex-wrap">
            {codeText.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block cursor-default"
                whileHover={{ 
                  scale: 1.1, 
                  color: "var(--color-terracotta)",
                  rotate: Math.random() > 0.5 ? 5 : -5,
                  y: -10,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              className="inline-block text-[var(--color-terracotta)] mx-1 sm:mx-2 md:mx-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.3, rotate: 180 }}
            >
              <motion.span
                className="inline-block"
                animate={{ 
                  rotate: [0, 10, -10, 0], 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                &
              </motion.span>
            </motion.span>
          </h1>
        </div>
        
        <div className="overflow-hidden relative">
          <h1 className="font-[family-name:var(--font-ancient)] text-[18vw] sm:text-[15vw] md:text-[12vw] leading-[0.85] sm:leading-[0.9] text-[var(--color-ink)] uppercase tracking-tighter font-black relative">
            <span className="relative flex">
              {chaosText.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i + 5}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block cursor-default"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "var(--color-gold)",
                    rotate: Math.random() > 0.5 ? 8 : -8,
                    y: -15,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              {/* Animated underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-6" viewBox="0 0 200 15" preserveAspectRatio="none">
                <motion.path
                  d="M0,8 Q25,2 50,8 T100,8 T150,8 T200,8"
                  fill="none"
                  stroke="var(--color-terracotta)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 2.8, duration: 0.8 }}
                />
                <motion.path
                  d="M10,12 Q35,6 60,12 T110,12 T160,12 T190,12"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ delay: 3, duration: 0.6 }}
                />
              </svg>
            </span>
          </h1>
          
          {/* Animated Star Burst */}
          <motion.div
            className="absolute -right-2 md:-right-6 top-0"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 3, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-10 h-10 md:w-14 md:h-14 text-[var(--color-gold)] fill-[var(--color-gold)]" />
            </motion.div>
          </motion.div>
          
          {/* Extra decorative stars */}
          <motion.div
            className="absolute -right-8 top-12 hidden md:block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3.2, type: "spring" }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="w-6 h-6 text-[var(--color-terracotta)] fill-[var(--color-terracotta)]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Tagline with highlight animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          className="font-[family-name:var(--font-grotesk)] text-base sm:text-lg md:text-2xl text-[var(--color-stone)] mt-6 sm:mt-8 max-w-xl"
        >
          One night.{" "}
          <motion.span 
            className="bg-[var(--color-gold)] px-2 text-[var(--color-ink)] font-bold inline-block"
            whileHover={{ scale: 1.05, rotate: -2 }}
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Infinite possibilities.
          </motion.span>{" "}
          A 14-hour overnight hackathon open to all Kerala colleges.
        </motion.p>

        {/* Bottom Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 md:gap-8"
        >
          {/* Prize Pool Sticker */}
          <motion.div
            className="relative bg-[var(--color-paper)] border-3 sm:border-4 border-[var(--color-ink)] p-4 sm:p-5 md:p-6 cursor-pointer"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
            whileHover={{ scale: 1.08, rotate: 3, y: -5 }}
            whileTap={{ scale: 0.98 }}
            animate={{ rotate: [-2, 0, -2] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-[var(--color-terracotta)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity }
              }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--color-cream)]" />
            </motion.div>
            <motion.div 
              className="font-[family-name:var(--font-ancient)] text-3xl sm:text-4xl md:text-6xl font-black text-[var(--color-ink)]"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              25,000+
            </motion.div>
            <div className="font-[family-name:var(--font-data)] text-[10px] sm:text-xs md:text-sm text-[var(--color-stone)] uppercase mt-1">
              Prize Pool (INR)
            </div>
          </motion.div>

          {/* Register Button with extra flair */}
          <motion.a
            href="https://forms.gle/your-registration-form"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className="relative bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-ancient)] font-black text-base sm:text-lg md:text-2xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-3 sm:border-4 border-[var(--color-ink)] uppercase tracking-wide flex items-center gap-2 sm:gap-3 md:gap-4 group overflow-hidden"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <span className="relative z-10">Register Now</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </motion.div>
            <motion.span
              className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs border-2 border-[var(--color-ink)] z-20"
              animate={{ 
                rotate: [5, -5, 5],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ₹100
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Fun interaction hint - hidden on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="hidden sm:flex font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)] mt-6 sm:mt-8 items-center gap-2"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.span>
          click anywhere for sparks
        </motion.p>
      </div>

      {/* Scrolling Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="absolute bottom-0 left-0 right-0 w-full border-y-3 sm:border-y-4 border-[var(--color-ink)] bg-[var(--color-gold)] py-2 sm:py-3 overflow-hidden z-20"
      >
        <div className="marquee-track font-[family-name:var(--font-ancient)] font-bold text-sm sm:text-base md:text-lg text-[var(--color-ink)] uppercase tracking-wider">
          <span className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span>Innovation requires chaos</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
            <span>Build for the future</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
            <span>Sustainable Development</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
            <span>14 Hours of Code</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
            <span>All Kerala Colleges</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
          </span>
          <span className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span>Innovation requires chaos</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
            <span>Build for the future</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
            <span>Sustainable Development</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
            <span>14 Hours of Code</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
            <span>All Kerala Colleges</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current flex-shrink-0" />
          </span>
        </div>
      </motion.div>
    </header>
  );
}
