"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      trailId++;
      setTrail(prev => [...prev.slice(-5), { x: e.clientX, y: e.clientY, id: trailId }]);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-hover")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[9998] hidden md:block"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            left: point.x - 3,
            top: point.y - 3,
          }}
        >
          <div 
            className="w-1.5 h-1.5 bg-[#c45c3e] rounded-full"
            style={{ opacity: (index + 1) / trail.length * 0.5 }}
          />
        </motion.div>
      ))}

      {/* Main cursor - X shape */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          rotate: isHovering ? 45 : 0,
          scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.3,
        }}
      >
        <div className="relative w-8 h-8">
          {/* Cross shape */}
          <div className={`absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 transition-colors duration-200 ${isHovering ? 'bg-[#c45c3e]' : 'bg-[#1a1a1a]'}`} />
          <div className={`absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transition-colors duration-200 ${isHovering ? 'bg-[#c45c3e]' : 'bg-[#1a1a1a]'}`} />
          
          {/* Corner accents on hover */}
          {isHovering && (
            <>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#c45c3e]"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#c45c3e]"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#c45c3e]"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#c45c3e]"
              />
            </>
          )}
        </div>
      </motion.div>

      {/* Cursor label on hover */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9999] hidden md:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            x: mousePosition.x + 20,
            top: mousePosition.y + 20,
          }}
          transition={{ duration: 0.2 }}
          style={{ left: 0 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider bg-[#1a1a1a] text-[#faf7f2] px-2 py-1">
            click
          </span>
        </motion.div>
      )}
    </>
  );
}
