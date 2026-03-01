"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
    ArrowLeft,
    Trophy,
    Lightbulb,
    Zap,
    Code,
    Brain,
    Bot,
    Star,
    Sparkles,
    Terminal,
    Coffee,
    Rocket,
    Crown
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

const Confetti = () => {
    const [pieces, setPieces] = useState<{ id: number; x: number; delay: number; color: string; size: number }[]>([]);

    useEffect(() => {
        const colors = ["var(--color-terracotta)", "var(--color-gold)", "var(--color-ink)", "var(--color-cream)"];
        const newPieces = Array.from({ length: 60 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // random start horizontal %
            delay: Math.random() * 2, // stagger falling
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4, // 4 to 12px
        }));
        setPieces(newPieces);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            {pieces.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute top-0 border border-[var(--color-ink)]"
                    style={{
                        left: `${p.x}%`,
                        backgroundColor: p.color,
                        width: p.size,
                        height: p.size,
                    }}
                    initial={{ y: -50, rotate: 0, opacity: 1 }}
                    animate={{
                        y: ["0vh", "120vh"],
                        rotate: [0, 360, 720],
                        opacity: [1, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        delay: p.delay,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
            ))}
        </div>
    );
};

export default function ResultCoolPage() {
    const mainRef = useRef<HTMLElement>(null);
    const [clickSparks, setClickSparks] = useState<{ id: string; x: number; y: number }[]>([]);

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
            className="min-h-screen bg-[var(--color-cream)] overflow-x-hidden relative cursor-crosshair pb-24"
        >
            <CustomCursor />
            <Confetti />
            <div className="absolute inset-0 bg-grid opacity-30" />

            {/* Sparks */}
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
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-3 h-3 bg-[var(--color-gold)] border-[1.5px] border-[var(--color-ink)]"
                                initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                                animate={{
                                    x: Math.cos((i * Math.PI * 2) / 6) * 100,
                                    y: Math.sin((i * Math.PI * 2) / 6) * 100,
                                    opacity: 0,
                                    scale: 0,
                                    rotate: 180,
                                }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        ))}
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Floating doodles */}
            <FloatingDoodle x="5%" y="10%" delay={0.2}><Squiggle /></FloatingDoodle>
            <FloatingDoodle x="85%" y="15%" delay={0.4}><CrossDoodle /></FloatingDoodle>
            <FloatingDoodle x="10%" y="85%" delay={0.6}><TriangleDoodle /></FloatingDoodle>
            <FloatingDoodle x="90%" y="75%" delay={0.8}><CircleDoodle /></FloatingDoodle>
            <FloatingDoodle x="80%" y="90%" delay={1.0}><StarDoodle /></FloatingDoodle>
            <FloatingDoodle x="15%" y="50%" delay={0.5}><ArrowDoodle /></FloatingDoodle>


            {/* Back button */}
            <motion.div
                className="fixed top-4 left-3 sm:top-8 sm:left-8 z-50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <Link href="/">
                    <motion.div
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-ink)] cursor-pointer"
                        style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
                        whileHover={{ scale: 1.05, x: -5, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        BACK
                    </motion.div>
                </Link>
            </motion.div>


            <div className="relative z-10 flex flex-col items-center pt-24 px-4 sm:px-6 max-w-7xl mx-auto">

                {/* Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -20, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: -3 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="mb-8"
                >
                    <div className="px-6 py-2 bg-[var(--color-ink)] text-[var(--color-gold)] font-[family-name:var(--font-data)] font-bold text-sm uppercase tracking-[0.2em] border-2 border-[var(--color-gold)]"
                        style={{ boxShadow: "4px 4px 0 var(--color-terracotta)" }}>
                        Our Hackathon is officially over
                    </div>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mb-16 relative"
                >
                    <h1 className="font-[family-name:var(--font-ancient)] text-[4.5rem] sm:text-[7rem] md:text-[9rem] font-black leading-[0.8] text-[var(--color-ink)] uppercase">
                        THE
                        <br />
                        <motion.span
                            className="text-[var(--color-terracotta)] inline-block mt-2"
                            animate={{ rotate: [0, 2, -2, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            RESULTS
                        </motion.span>
                    </h1>
                    <motion.div
                        className="absolute -right-8 sm:-right-16 top-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                        <Star className="w-12 h-12 sm:w-20 sm:h-20 text-[var(--color-gold)] fill-[var(--color-gold)]" />
                    </motion.div>
                </motion.div>

                {/* =========================================================
            Sect 1: PODIUM (Top 3)
           ========================================================= */}
                <div className="w-full mt-8 mb-32">
                    <div className="flex flex-col items-center justify-center mb-32 md:mb-40">
                        <h2 className="font-[family-name:var(--font-ancient)] text-4xl sm:text-5xl md:text-6xl font-black text-[var(--color-ink)] flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center px-4">
                            <Crown className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[var(--color-terracotta)]" />
                            <span>Main Hackathon</span>
                            <Crown className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[var(--color-terracotta)]" />
                        </h2>
                        <div className="w-32 h-2 bg-[var(--color-gold)] border border-[var(--color-ink)] mt-6 skew-x-12" />
                    </div>

                    <div className="flex flex-col md:flex-row items-end justify-center gap-10 sm:gap-8 lg:gap-10 h-auto md:h-[500px] mt-16 md:mt-0">

                        {/* Rank 2 (Left): Best Innovative Idea */}
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                            className="w-full md:w-1/3 flex flex-col items-center mt-12 md:mt-0"
                        >
                            <div className="w-full bg-[var(--color-paper)] border-3 border-b-0 border-[var(--color-ink)] p-4 sm:p-6 text-center transform -skew-x-2 relative group hover:-translate-y-4 transition-transform duration-300">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[var(--color-ink)] text-[var(--color-cream)] px-3 sm:px-4 py-1 font-[family-name:var(--font-data)] font-bold text-[10px] sm:text-xs uppercase tracking-wider border-2 border-[var(--color-ink)] z-10 rotate-2 group-hover:bg-[var(--color-terracotta)] transition-colors whitespace-nowrap">
                                    Best Innovative Idea
                                </div>
                                <Lightbulb className="w-10 h-10 mx-auto text-[var(--color-ink)] mb-4 mt-2" />
                                <h3 className="font-[family-name:var(--font-ancient)] font-bold text-2xl sm:text-3xl text-[var(--color-ink)] mb-2 uppercase break-words">
                                    kryPsis
                                </h3>
                            </div>
                            <div className="w-full h-[150px] md:h-[220px] bg-[var(--color-terracotta)] flex flex-col items-center justify-end pb-8 border-x-3 border-t-3 border-[var(--color-ink)]"
                                style={{ background: 'repeating-linear-gradient(45deg, var(--color-ink), var(--color-ink) 10px, var(--color-terracotta) 10px, var(--color-terracotta) 20px)' }}>
                                <div className="text-[var(--color-ink)] font-[family-name:var(--font-data)] text-lg mb-2 opacity-80">#2</div>
                                <div className="px-5 py-2 bg-[var(--color-paper)] text-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-black text-2xl border-2 border-[var(--color-ink)] transform rotate-2"
                                    style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}>
                                    2K
                                </div>
                            </div>
                        </motion.div>

                        {/* Rank 1 (Center): Champions */}
                        <motion.div
                            initial={{ y: 300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.0, type: "spring", stiffness: 90 }}
                            className="w-full md:w-1/3 flex flex-col items-center order-first md:order-none z-10"
                        >
                            <div className="w-full bg-[var(--color-ink)] border-4 border-b-0 border-[var(--color-ink)] p-6 sm:p-10 text-center relative group hover:-translate-y-4 transition-transform duration-300"
                                style={{ boxShadow: "0 -8px 0 var(--color-paper)" }}>
                                <motion.div
                                    className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 bg-[var(--color-cream)] rounded-full p-2 border-4 border-[var(--color-ink)]"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-[var(--color-gold)] fill-[var(--color-gold)]" />
                                </motion.div>
                                <div className="font-[family-name:var(--font-data)] font-bold text-sm tracking-widest text-[var(--color-gold)] uppercase mb-2 mt-8">
                                    Champions
                                </div>
                                <h3 className="font-[family-name:var(--font-ancient)] font-black text-3xl sm:text-4xl lg:text-5xl text-[var(--color-cream)] uppercase break-words leading-none">
                                    Bitwise<br />Operators
                                </h3>
                            </div>
                            <div className="w-full h-[220px] md:h-[350px] bg-[var(--color-gold)] flex flex-col items-center justify-end pb-8 border-x-4 border-t-0 border-[var(--color-ink)] relative overflow-hidden">
                                {/* Background stripes */}
                                <div className="absolute inset-0 opacity-10"
                                    style={{ background: 'repeating-linear-gradient(-45deg, var(--color-ink), var(--color-ink) 20px, transparent 20px, transparent 40px)' }} />

                                <div className="relative z-10 text-[var(--color-ink)] font-[family-name:var(--font-data)] text-2xl mb-4 font-black">#1</div>
                                <div className="relative z-10 px-8 py-3 bg-[var(--color-ink)] text-[var(--color-cream)] font-[family-name:var(--font-ancient)] font-black text-4xl border-4 border-[var(--color-gold)]"
                                    style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}>
                                    18K
                                </div>
                            </div>
                        </motion.div>

                        {/* Rank 3 (Right): Best Implementation */}
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
                            className="w-full md:w-1/3 flex flex-col items-center mt-12 md:mt-0"
                        >
                            <div className="w-full bg-[var(--color-paper)] border-3 border-b-0 border-[var(--color-ink)] p-4 sm:p-6 text-center transform skew-x-2 relative group hover:-translate-y-4 transition-transform duration-300">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[var(--color-ink)] text-[var(--color-cream)] px-3 sm:px-4 py-1 font-[family-name:var(--font-data)] font-bold text-[10px] sm:text-xs uppercase tracking-wider border-2 border-[var(--color-ink)] z-10 -rotate-2 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-ink)] transition-colors whitespace-nowrap">
                                    Best Implementation
                                </div>
                                <Zap className="w-10 h-10 mx-auto text-[var(--color-ink)] mb-4 mt-2" />
                                <h3 className="font-[family-name:var(--font-ancient)] font-bold text-2xl sm:text-3xl text-[var(--color-ink)] mb-2 uppercase break-words">
                                    Dark Vortex
                                </h3>
                            </div>
                            <div className="w-full h-[150px] md:h-[180px] bg-[var(--color-stone)] flex flex-col items-center justify-end pb-8 border-x-3 border-t-3 border-[var(--color-ink)]"
                                style={{ background: 'repeating-linear-gradient(-45deg, var(--color-ink), var(--color-ink) 10px, var(--color-stone) 10px, var(--color-stone) 20px)' }}>
                                <div className="text-[var(--color-ink)] font-[family-name:var(--font-data)] text-lg mb-2 opacity-80">#3</div>
                                <div className="px-5 py-2 bg-[var(--color-paper)] text-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-black text-2xl border-2 border-[var(--color-ink)] transform -rotate-2"
                                    style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}>
                                    2K
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* =========================================================
            Sect 2: QUIZ & CHALLENGES
           ========================================================= */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 }}
                    className="w-full mt-24 mb-16"
                >
                    <div className="flex flex-col items-center justify-center mb-16">
                        <h2 className="font-[family-name:var(--font-ancient)] text-3xl sm:text-5xl font-black text-[var(--color-ink)] flex items-center gap-4 uppercase text-center">
                            <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-[var(--color-ink)]" />
                            Quiz & Challenges
                            <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-[var(--color-ink)]" />
                        </h2>
                        <div className="w-48 h-2 bg-[var(--color-terracotta)] border border-[var(--color-ink)] mt-4 skew-x-12" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
                        {/* Technical Quiz */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="bg-[var(--color-cream)] border-4 border-[var(--color-ink)] p-6 relative"
                            style={{ boxShadow: "6px 6px 0 var(--color-terracotta)" }}
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--color-terracotta)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center rotate-12">
                                <Code className="w-6 h-6 text-[var(--color-cream)]" />
                            </div>
                            <div className="text-[var(--color-stone)] font-[family-name:var(--font-data)] text-xs font-bold uppercase tracking-widest mb-4 ml-8">Technical Quiz</div>
                            <h3 className="font-[family-name:var(--font-ancient)] text-3xl font-black text-[var(--color-ink)] uppercase leading-tight mb-6">
                                Bitwise Operators
                            </h3>
                            <div className="inline-block bg-[var(--color-ink)] text-[var(--color-gold)] font-[family-name:var(--font-ancient)] text-xl font-bold px-4 py-1 border-2 border-[var(--color-ink)] transform -skew-x-6">
                                1K PRIZE
                            </div>
                        </motion.div>

                        {/* Non-Technical Quiz */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="bg-[var(--color-gold)] border-4 border-[var(--color-ink)] p-6 relative md:translate-y-8"
                            style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--color-ink)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center -rotate-12">
                                <Coffee className="w-6 h-6 text-[var(--color-cream)]" />
                            </div>
                            <div className="text-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs font-bold uppercase tracking-widest mb-4 ml-8 opacity-80">Non-Technical Quiz</div>
                            <h3 className="font-[family-name:var(--font-ancient)] text-3xl font-black text-[var(--color-ink)] uppercase leading-tight mb-6">
                                Ecobots
                            </h3>
                            <div className="inline-block bg-[var(--color-paper)] text-[var(--color-ink)] font-[family-name:var(--font-ancient)] text-xl font-bold px-4 py-1 border-2 border-[var(--color-ink)] transform skew-x-6">
                                1K PRIZE
                            </div>
                        </motion.div>

                        {/* AI Prompt Challenge */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="bg-[var(--color-paper)] border-4 border-[var(--color-ink)] p-6 relative"
                            style={{ boxShadow: "6px 6px 0 var(--color-gold)" }}
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center rotate-6">
                                <Bot className="w-6 h-6 text-[var(--color-ink)]" />
                            </div>
                            <div className="text-[var(--color-stone)] font-[family-name:var(--font-data)] text-xs font-bold uppercase tracking-widest mb-4 ml-8">AI Prompt Challenge</div>
                            <h3 className="font-[family-name:var(--font-ancient)] text-3xl font-black text-[var(--color-ink)] uppercase leading-tight mb-6">
                                Core Dumpers
                            </h3>
                            <div className="inline-block bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-ancient)] text-xl font-bold px-4 py-1 border-2 border-[var(--color-ink)] transform -skew-x-6">
                                1K PRIZE
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

                {/* Sparkle hint footer */}
                <div className="mt-12 opacity-50 hover:opacity-100 transition-opacity pb-10">
                    <p className="flex font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)] items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        click anywhere for sparks
                    </p>
                </div>

            </div>
        </main>
    );
}
