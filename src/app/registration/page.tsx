"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import {
  ArrowLeft,
  Lock,
  MessageCircle,
  Users,
  CreditCard,
  Star,
  Sparkles,
  Clock,
  Calendar,
  MapPin,
  Mail,
  Megaphone,
  Code,
  Terminal,
  Coffee,
  Rocket,
  Zap,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import {
  Squiggle,
  CrossDoodle,
  CircleDoodle,
  TriangleDoodle,
  ZigzagDoodle,
  StarDoodle,
  SpiralDoodle,
  ArrowDoodle,
  FloatingDoodle,
} from "@/components/Doodles";

// Animated doodle components (page-local extras)
const SquiggleLine = () => (
  <svg width="80" height="30" viewBox="0 0 80 30">
    <motion.path
      d="M5,15 Q15,5 25,15 T45,15 T65,15 T75,15"
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

const DottedCircle = () => (
  <motion.div
    className="w-12 h-12 border-3 border-dashed border-[var(--color-gold)] rounded-full"
    animate={{
      scale: [1, 1.15, 1],
      rotate: [0, 180, 360],
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
);

// Floating sticker - same as before
function FloatingSticker({
  icon: Icon,
  color,
  position,
  delay,
  rotation,
}: {
  icon: React.ElementType;
  color: string;
  position: string;
  delay: number;
  rotation: number;
}) {
  return (
    <motion.div
      className={`absolute ${position} hidden lg:block`}
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
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </motion.div>
    </motion.div>
  );
}

// Info Card Component
function InfoCard({
  icon: Icon,
  title,
  description,
  color,
  delay,
  rotation,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay: number;
  rotation: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 150 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative bg-[var(--color-paper)] border-2 sm:border-3 border-[var(--color-ink)] p-4 sm:p-6 group cursor-default"
      style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
    >
      {/* Tape decoration */}
      <div
        className="absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-4 sm:h-5 border-2 border-[var(--color-ink)]"
        style={{ backgroundColor: color, opacity: 0.8 }}
      />

      <div className="flex items-start gap-3 sm:gap-4 mt-1">
        <motion.div
          className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: color }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.div>
        <div className="min-w-0 flex-1">
          <h3 className="font-[family-name:var(--font-ancient)] text-sm sm:text-lg font-bold text-[var(--color-ink)] mb-1 group-hover:text-[var(--color-terracotta)] transition-colors">
            {title}
          </h3>
          <p className="font-[family-name:var(--font-grotesk)] text-xs sm:text-sm text-[var(--color-stone)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function RegistrationClosedPage() {
  const mainRef = useRef<HTMLElement>(null);
  const [clickSparks, setClickSparks] = useState<{ id: string; x: number; y: number }[]>([]);

  // Click spark effect
  const handleClick = (e: React.MouseEvent) => {
    const rect = mainRef.current?.getBoundingClientRect();
    if (rect) {
      const spark = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top + mainRef.current!.scrollTop,
      };
      setClickSparks(prev => [...prev, spark]);
      setTimeout(() => {
        setClickSparks(prev => prev.filter(s => s.id !== spark.id));
      }, 1000);
    }
  };

  return (
    <main
      ref={mainRef}
      onClick={handleClick}
      className="min-h-screen bg-[var(--color-cream)] overflow-x-hidden relative cursor-crosshair"
    >
      <CustomCursor />
      <div className="absolute inset-0 bg-grid opacity-40" />

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

      {/* ===== FLOATING STICKERS ===== */}
      <FloatingSticker
        icon={Code}
        color="var(--color-terracotta)"
        position="left-[3%] top-[15%]"
        delay={0.2}
        rotation={-12}
      />
      <FloatingSticker
        icon={Terminal}
        color="var(--color-gold)"
        position="right-[3%] top-[20%]"
        delay={0.4}
        rotation={8}
      />
      <FloatingSticker
        icon={Coffee}
        color="var(--color-stone)"
        position="left-[5%] bottom-[25%]"
        delay={0.6}
        rotation={15}
      />
      <FloatingSticker
        icon={Rocket}
        color="var(--color-terracotta)"
        position="right-[5%] bottom-[30%]"
        delay={0.8}
        rotation={-8}
      />
      <FloatingSticker
        icon={Zap}
        color="var(--color-gold)"
        position="left-[8%] top-[55%]"
        delay={1.0}
        rotation={10}
      />
      <FloatingSticker
        icon={Star}
        color="var(--color-terracotta)"
        position="right-[8%] top-[60%]"
        delay={1.2}
        rotation={-15}
      />

      {/* ===== FLOATING DOODLES ===== */}
      <FloatingDoodle x="2%" y="30%" delay={0.3}>
        <Squiggle />
      </FloatingDoodle>
      <FloatingDoodle x="93%" y="40%" delay={0.5}>
        <CrossDoodle />
      </FloatingDoodle>
      <FloatingDoodle x="88%" y="75%" delay={0.7}>
        <CircleDoodle />
      </FloatingDoodle>
      <FloatingDoodle x="5%" y="70%" delay={0.9}>
        <TriangleDoodle />
      </FloatingDoodle>
      <FloatingDoodle x="92%" y="15%" delay={1.1}>
        <ZigzagDoodle />
      </FloatingDoodle>
      <FloatingDoodle x="7%" y="85%" delay={1.3}>
        <StarDoodle />
      </FloatingDoodle>
      <FloatingDoodle x="90%" y="85%" delay={0.8}>
        <SpiralDoodle />
      </FloatingDoodle>
      <FloatingDoodle x="4%" y="48%" delay={1.0}>
        <ArrowDoodle />
      </FloatingDoodle>

      {/* ===== Subtle moving doodle elements ===== */}
      <motion.div
        className="absolute left-[10%] top-[38%] opacity-40 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <SquiggleLine />
      </motion.div>
      <motion.div
        className="absolute right-[10%] top-[45%] opacity-40 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 1.7 }}
      >
        <DottedCircle />
      </motion.div>

      {/* ===== Decorative Shapes ===== */}
      <motion.div
        className="absolute top-32 right-6 sm:right-16 w-12 h-12 sm:w-20 sm:h-20 bg-[var(--color-gold)] border-2 sm:border-3 border-[var(--color-ink)] rotate-12 hidden sm:block"
        style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
        animate={{ rotate: [12, 20, 12] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-48 left-6 sm:left-16 w-10 h-10 sm:w-16 sm:h-16 bg-[var(--color-terracotta)] border-2 sm:border-3 border-[var(--color-ink)] rounded-full hidden sm:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-8 h-8 sm:w-12 sm:h-12 bg-[var(--color-ink)] border-2 border-[var(--color-ink)] hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* ===== BACK BUTTON ===== */}
      <motion.div
        className="fixed top-4 left-3 sm:top-8 sm:left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="/">
          <motion.div
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-ink)] cursor-pointer"
            style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Back
          </motion.div>
        </Link>
      </motion.div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 pb-12 sm:py-28">
        {/* ===== CLOSED BADGE ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-4 sm:mb-6"
        >
          <div
            className="inline-block px-4 py-1.5 sm:px-6 sm:py-2.5 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-xs sm:text-sm uppercase tracking-widest border-2 sm:border-3 border-[var(--color-ink)]"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
          >
            <span className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Registration Closed
            </span>
          </div>
        </motion.div>

        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-3 sm:mb-4"
        >
          <h1 className="font-[family-name:var(--font-ancient)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[var(--color-ink)] leading-[0.85] relative inline-block px-8 sm:px-10">
            GATES
            <br />
            <span className="text-[var(--color-terracotta)]">CLOSED</span>
            <motion.div
              className="absolute -right-2 -top-4 sm:-right-6 sm:-top-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[var(--color-gold)] fill-[var(--color-gold)]" />
            </motion.div>
            <motion.div
              className="absolute -left-2 -bottom-2 sm:-left-6 sm:-bottom-3"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[var(--color-terracotta)]" />
            </motion.div>
          </h1>
        </motion.div>

        {/* ===== SUBTITLE ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-6 sm:mb-10 max-w-lg mx-auto px-2 sm:px-2"
        >
          <p className="font-[family-name:var(--font-grotesk)] text-sm sm:text-base text-[var(--color-stone)] leading-relaxed">
            Thank you for the incredible response! Registrations for{" "}
            <span className="font-bold text-[var(--color-ink)]">
              Code &amp; Chaos
            </span>{" "}
            have been officially closed. We&apos;re thrilled by the enthusiasm!
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-[family-name:var(--font-data)] text-xs sm:text-xs text-[var(--color-stone)] mt-2 sm:mt-3 uppercase tracking-wider"
          >
            Feb 25-26, 2026 • VJCET Campus
          </motion.p>
        </motion.div>

        {/* ===== ANIMATED LOCK ICON ===== */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="mb-8 sm:mb-12"
        >
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[var(--color-ink)] border-3 sm:border-4 border-[var(--color-ink)] rounded-full flex items-center justify-center relative"
            style={{ boxShadow: "4px 4px 0 var(--color-terracotta)" }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lock className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[var(--color-cream)]" />
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 border-2 sm:border-3 border-[var(--color-terracotta)] rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* ===== WHAT'S NEXT SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-3xl mb-6 sm:mb-12"
        >
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, rotate: -3 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ delay: 0.9 }}
            className="text-center mb-5 sm:mb-8"
          >
            <div
              className="inline-block px-3 py-1 sm:px-5 sm:py-2 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-sm uppercase tracking-wider border-2 border-[var(--color-ink)]"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Megaphone className="w-3 h-3 sm:w-4 sm:h-4" />
                What&apos;s Next?
              </span>
            </div>
          </motion.div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <InfoCard
              icon={CheckCircle2}
              title="Shortlisted? We'll Find You!"
              description="Shortlisted candidates will be contacted through WhatsApp shortly. Keep your phones close and notifications on!"
              color="var(--color-terracotta)"
              delay={1.0}
              rotation={-1}
            />
            <InfoCard
              icon={CreditCard}
              title="Payment Details Incoming"
              description="Payment details and further instructions will be shared with all shortlisted participants via WhatsApp. Stay tuned!"
              color="var(--color-gold)"
              delay={1.15}
              rotation={1}
            />
            <InfoCard
              icon={MessageCircle}
              title="Join the WhatsApp Squad"
              description="A dedicated WhatsApp group will be created for all selected participants. All event updates and coordination will happen there."
              color="var(--color-stone)"
              delay={1.3}
              rotation={1}
            />
            <InfoCard
              icon={Users}
              title="Event Details Shared"
              description="Complete event details including schedules, rules, and venue info will be shared among the participants in the WhatsApp group."
              color="var(--color-terracotta)"
              delay={1.45}
              rotation={-1}
            />
          </div>
        </motion.div>

        {/* ===== EVENT QUICK INFO ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="w-full max-w-3xl mb-8 sm:mb-14"
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {[
              {
                icon: Calendar,
                label: "Date",
                value: "Feb 25-26",
                valueLg: "Feb 25-26, 2026",
                rotation: -2,
              },
              {
                icon: Clock,
                label: "Duration",
                value: "14 Hours",
                valueLg: "14-Hour Hackathon",
                rotation: 1,
              },
              {
                icon: MapPin,
                label: "Venue",
                value: "VJCET",
                valueLg: "VJCET Campus, Kerala",
                rotation: -1,
              },
            ].map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 p-2.5 sm:p-4 bg-[var(--color-paper)] border-2 sm:border-3 border-[var(--color-ink)] text-center sm:text-left"
                style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
              >
                <div className="w-7 h-7 sm:w-10 sm:h-10 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[var(--color-ink)]" />
                </div>
                <div className="min-w-0">
                  <div className="font-[family-name:var(--font-data)] text-[8px] sm:text-xs text-[var(--color-stone)] uppercase tracking-wider">
                    {info.label}
                  </div>
                  <div className="font-[family-name:var(--font-ancient)] font-bold text-[10px] sm:text-base text-[var(--color-ink)] truncate">
                    <span className="sm:hidden">{info.value}</span>
                    <span className="hidden sm:inline">{info.valueLg}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== STAMPED MESSAGE ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ delay: 2.0, type: "spring" }}
          className="mb-8 sm:mb-14"
        >
          <div className="stamp">
            <p className="font-[family-name:var(--font-ancient)] text-sm sm:text-lg font-bold text-[var(--color-terracotta)] text-center px-1 sm:px-4">
              &quot;May the best code win!&quot;
            </p>
          </div>
        </motion.div>

        {/* ===== BACK TO HOME + CONTACT SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none"
        >
          {/* Back to Home Button */}
          <Link href="/" className="w-full sm:w-auto">
            <motion.button
              className="group relative w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[var(--color-ink)] border-2 sm:border-3 border-[var(--color-ink)] font-[family-name:var(--font-ancient)] text-sm sm:text-lg font-bold text-[var(--color-cream)] uppercase tracking-wider flex items-center justify-center gap-2 sm:gap-3"
              style={{ boxShadow: "3px 3px 0 var(--color-terracotta)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "6px 6px 0 var(--color-terracotta)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
              <motion.span
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-5 h-5 sm:w-8 sm:h-8 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Zap className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[var(--color-ink)]" />
              </motion.span>
            </motion.button>
          </Link>

          {/* Contact Button - matching home page style */}
          <motion.a
            href="https://api.whatsapp.com/send/?phone=6282031325&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex flex-col items-center px-6 sm:px-10 py-3 sm:py-4 bg-[var(--color-terracotta)] text-[var(--color-cream)] border-2 sm:border-4 border-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-bold text-sm sm:text-lg"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
          >
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Got Questions?
            </span>
            <span className="font-[family-name:var(--font-data)] text-[9px] sm:text-[10px] opacity-70 font-normal mt-1 tracking-wide">
              psst... message Benedict 👋
            </span>
          </motion.a>
        </motion.div>

        {/* Sparkle hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="flex font-[family-name:var(--font-data)] text-[10px] sm:text-xs text-[var(--color-stone)] mt-6 sm:mt-8 items-center gap-1.5 sm:gap-2"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.span>
          <span className="sm:hidden">tap anywhere for sparks</span>
          <span className="hidden sm:inline">click anywhere for sparks</span>
        </motion.p>

        {/* ===== BOTTOM DECORATIVE DIVIDER ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-8 sm:mt-16 flex items-center gap-2 sm:gap-4"
        >
          <div className="w-8 sm:w-20 h-0.5 bg-[var(--color-stone)]/30" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[var(--color-gold)] fill-[var(--color-gold)]" />
          </motion.div>
          <div
            className="px-2 py-0.5 sm:px-3 sm:py-1 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-[8px] sm:text-[10px] text-[var(--color-stone)] uppercase tracking-wider"
            style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
          >
            Code & Chaos 2026
          </div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[var(--color-gold)] fill-[var(--color-gold)]" />
          </motion.div>
          <div className="w-8 sm:w-20 h-0.5 bg-[var(--color-stone)]/30" />
        </motion.div>
      </div>
    </main>
  );
}
