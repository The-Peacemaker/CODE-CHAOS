"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Sparkles, Star, Zap, Calendar, Users, Coffee, Code, Terminal, Rocket } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";

// Animated doodle components
const Squiggle = () => (
  <svg width="60" height="30" viewBox="0 0 60 30">
    <motion.path
      d="M5,15 Q15,5 25,15 T45,15 T55,15"
      fill="none"
      stroke="var(--color-terracotta)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
);

const CircleDoodle = () => (
  <motion.div
    className="w-12 h-12 border-3 border-[var(--color-gold)] rounded-full"
    animate={{ 
      scale: [1, 1.2, 1],
      borderRadius: ["50%", "30%", "50%"],
    }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
);

const CrossDoodle = () => (
  <svg width="30" height="30" viewBox="0 0 30 30">
    <motion.path
      d="M5,5 L25,25 M25,5 L5,25"
      fill="none"
      stroke="var(--color-stone)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1, rotate: [0, 90, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

const TriangleDoodle = () => (
  <svg width="40" height="40" viewBox="0 0 40 40">
    <motion.path
      d="M20,5 L35,35 L5,35 Z"
      fill="none"
      stroke="var(--color-gold)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

// Floating icon sticker
function FloatingSticker({ icon: Icon, color, position, delay, rotation }: {
  icon: React.ElementType;
  color: string;
  position: string;
  delay: number;
  rotation: number;
}) {
  return (
    <motion.div
      className={`absolute ${position} hidden sm:block`}
      initial={{ scale: 0, rotate: rotation - 20 }}
      animate={{ scale: 1, rotate: rotation }}
      transition={{ delay, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="p-3 bg-[var(--color-paper)] border-2 border-[var(--color-ink)]"
        style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
        animate={{ 
          y: [0, -10, 0],
          rotate: [rotation, rotation + 5, rotation],
        }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </motion.div>
    </motion.div>
  );
}

export default function RegistrationPage() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown to February 15, 2026
  useEffect(() => {
    const targetDate = new Date("2026-02-15T00:00:00"); // Registration opens date
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--color-cream)] overflow-hidden relative cursor-crosshair">
      {/* Custom Cursor */}
      <CustomCursor />
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Floating Stickers */}
      <FloatingSticker icon={Code} color="var(--color-terracotta)" position="left-[5%] top-[15%]" delay={0.2} rotation={-12} />
      <FloatingSticker icon={Terminal} color="var(--color-gold)" position="right-[8%] top-[20%]" delay={0.4} rotation={8} />
      <FloatingSticker icon={Coffee} color="var(--color-stone)" position="left-[8%] bottom-[25%]" delay={0.6} rotation={15} />
      <FloatingSticker icon={Rocket} color="var(--color-terracotta)" position="right-[5%] bottom-[30%]" delay={0.8} rotation={-8} />
      
      {/* Floating Doodles */}
      <motion.div 
        className="absolute left-[3%] top-[40%] opacity-60 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Squiggle />
      </motion.div>
      <motion.div 
        className="absolute right-[3%] top-[45%] opacity-60 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <CircleDoodle />
      </motion.div>
      <motion.div 
        className="absolute left-[10%] bottom-[15%] opacity-60 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 1.4 }}
      >
        <CrossDoodle />
      </motion.div>
      <motion.div 
        className="absolute right-[12%] top-[60%] opacity-60 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 1.6 }}
      >
        <TriangleDoodle />
      </motion.div>

      {/* Back Button */}
      <motion.div
        className="absolute top-6 left-4 sm:top-8 sm:left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="/">
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-sm text-[var(--color-ink)] cursor-pointer"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </motion.div>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ delay: 0.2 }}
          className="mb-5"
        >
          <motion.div
            className="px-4 py-2 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs sm:text-sm uppercase"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
            animate={{ rotate: [-5, -3, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Clock className="w-4 h-4" />
              </motion.div>
              Coming Soon
            </span>
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="font-[family-name:var(--font-ancient)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[var(--color-ink)] leading-none">
            <span className="relative inline-block">
              REGISTER
              <motion.div
                className="absolute -right-4 -top-4 sm:-right-6 sm:-top-6"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ 
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity }
                }}
              >
                <Star className="w-6 h-6 sm:w-10 sm:h-10 text-[var(--color-gold)] fill-[var(--color-gold)]" />
              </motion.div>
            </span>
          </h1>
          <motion.div
            className="relative inline-block mt-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="font-[family-name:var(--font-ancient)] text-3xl sm:text-5xl md:text-6xl font-black text-[var(--color-terracotta)]">
              SOON
            </span>
            {/* Animated underline */}
            <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 100 10" preserveAspectRatio="none">
              <motion.path
                d="M0,5 Q25,0 50,5 T100,5"
                fill="none"
                stroke="var(--color-terracotta)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex gap-3 sm:gap-4 md:gap-5">
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Mins" },
              { value: countdown.seconds, label: "Secs" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -3 : 3 }}
                animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -3 : 3 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                className="bg-[var(--color-paper)] border-3 border-[var(--color-ink)] p-3 sm:p-4 md:p-5 text-center min-w-[60px] sm:min-w-[80px] md:min-w-[95px]"
                style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
              >
                <motion.div
                  key={item.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="font-[family-name:var(--font-ancient)] text-2xl sm:text-4xl md:text-5xl font-black text-[var(--color-ink)]"
                >
                  {String(item.value).padStart(2, '0')}
                </motion.div>
                <div className="font-[family-name:var(--font-data)] text-[10px] sm:text-xs text-[var(--color-stone)] uppercase mt-1">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ delay: 1.2 }}
          className="bg-[var(--color-paper)] border-3 sm:border-4 border-[var(--color-ink)] p-5 sm:p-7 max-w-lg mx-auto relative"
          style={{ boxShadow: "5px 5px 0 var(--color-ink)" }}
        >
          {/* Tape decoration */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-[var(--color-gold)]/80 border-2 border-[var(--color-ink)]" />
          
          <motion.div
            className="absolute -right-3 -top-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-[var(--color-terracotta)]" />
          </motion.div>

          <p className="font-[family-name:var(--font-grotesk)] text-base sm:text-lg text-[var(--color-ink)] text-center leading-relaxed">
            We are putting the{" "}
            <span className="bg-[var(--color-gold)] px-2 font-bold">finishing touches</span>{" "}
            on the registration portal. Get ready for{" "}
            <span className="font-bold text-[var(--color-terracotta)]">14 hours</span>{" "}
            of intense coding, amazing food, and unforgettable memories!
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <motion.div 
              className="flex items-center gap-2 px-3 py-1.5 bg-[var(--color-cream)] border-2 border-[var(--color-ink)] text-xs font-[family-name:var(--font-data)]"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-4 h-4 text-[var(--color-terracotta)]" />
              Feb 25-26, 2026
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-3 py-1.5 bg-[var(--color-cream)] border-2 border-[var(--color-ink)] text-xs font-[family-name:var(--font-data)]"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4 text-[var(--color-gold)]" />
              Teams of 2-4
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-3 py-1.5 bg-[var(--color-cream)] border-2 border-[var(--color-ink)] text-xs font-[family-name:var(--font-data)]"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 text-[var(--color-terracotta)]" />
              ₹100 Entry
            </motion.div>
          </div>
        </motion.div>

        {/* Fun Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8 font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)] text-center flex items-center gap-2"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Coffee className="w-4 h-4" />
          </motion.span>
          Fuel up & get ready to code through the night!
        </motion.p>
      </div>
    </main>
  );
}
