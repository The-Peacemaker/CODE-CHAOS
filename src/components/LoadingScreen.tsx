"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const letters = "CODE&CHAOS".split("");
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-[#faf7f2] z-[100] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Grid Paper Background */}
          <div className="absolute inset-0 grid-paper opacity-50" />
          
          {/* Decorative Shapes */}
          <motion.div
            className="absolute top-20 left-20 w-24 h-24 border-4 border-[#1a1a1a]"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 right-32 w-16 h-16 bg-[#c45c3e]"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-20 h-20 border-4 border-[#d4a574] rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Bouncing Letters */}
            <div className="flex gap-1">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  className={`font-[family-name:var(--font-ancient)] text-5xl md:text-7xl font-black ${
                    letter === "&" ? "text-[#c45c3e]" : "text-[#1a1a1a]"
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-6 font-[family-name:var(--font-data)] text-sm text-[#8b7355] uppercase tracking-[0.3em]"
            >
              VJCET Hackathon 2026
            </motion.p>

            {/* Fun Loading Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 w-64"
            >
              <div className="h-3 w-full bg-[#1a1a1a] border-2 border-[#1a1a1a] relative overflow-hidden">
                <motion.div
                  className="absolute h-full bg-[#c45c3e]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.4, ease: "easeInOut" }}
                />
              </div>
              <div className="flex justify-between mt-2 font-[family-name:var(--font-data)] text-[10px] text-[#8b7355] uppercase">
                <span>Loading awesome stuff</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Corner Stamps */}
          <motion.div
            initial={{ opacity: 0, rotate: -12 }}
            animate={{ opacity: 1, rotate: -12 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 left-8 stamp font-[family-name:var(--font-data)] text-[10px] text-[#c45c3e] uppercase"
          >
            Feb 25-26
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, rotate: 8 }}
            animate={{ opacity: 1, rotate: 8 }}
            transition={{ delay: 0.7 }}
            className="absolute top-8 right-8 px-3 py-1 bg-[#1a1a1a] text-[#faf7f2] font-[family-name:var(--font-data)] text-[10px] uppercase"
          >
            VJCET
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-8 left-8 font-[family-name:var(--font-ancient)] text-lg text-[#d4a574]"
          >
            Build. Break. Repeat.
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
