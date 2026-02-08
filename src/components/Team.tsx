"use client";

import { motion, useInView } from "framer-motion";
import { ChevronRight, Mail, Linkedin, Github, Star, Users } from "lucide-react";
import { useRef, useState } from "react";
import { DoodleSet3 } from "./Doodles";

const studentCoordinators = [
  {
    name: "Benedict Chacko Mathew",
    role: "Co-Coordinator",
    links: { github: "#", linkedin: "#" },
  },
  {
    name: "Kripa Sajo",
    role: "Co-Coordinator",
    links: { github: "#", linkedin: "#" },
  },
  {
    name: "Deena George",
    role: "Co-Coordinator",
    links: { github: "#", linkedin: "#" },
  },
  {
    name: "Athulya Susan Laiju",
    role: "Co-Coordinator",
    links: { github: "#", linkedin: "#" },
  },
];

const staffCoordinators = [
  { name: "Andrews Jose", role: "Faculty Coordinator" },
  { name: "Santhi M", role: "Faculty Coordinator" },
];

const volunteers = [
  { name: "Bilja K Saji", role: "Volunteer" },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[var(--color-paper)] relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Floating Doodles */}
      <DoodleSet3 />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-20 right-4 sm:right-10 w-14 h-14 sm:w-24 sm:h-24 bg-[var(--color-gold)] border-2 sm:border-3 border-[var(--color-ink)] rotate-12"
        style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
        animate={{ rotate: [12, 20, 12] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-4 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 bg-[var(--color-terracotta)] border-2 sm:border-3 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
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
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs sm:text-sm uppercase border-2 border-[var(--color-ink)] mb-4 sm:mb-6"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "-2deg" }}
          >
            The Crew
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-4xl sm:text-5xl md:text-7xl font-black text-[var(--color-ink)] leading-none">
            Meet The Team
            <motion.span
              className="inline-block ml-2 sm:ml-4"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-6 h-6 sm:w-10 sm:h-10 text-[var(--color-terracotta)] fill-[var(--color-terracotta)]" />
            </motion.span>
          </h2>
        </motion.div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Student Coordinators */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -2 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ rotate: 0 }}
            className="relative bg-[var(--color-cream)] border-3 sm:border-4 border-[var(--color-ink)] p-5 sm:p-8"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
          >
            {/* Label */}
            <motion.div 
              className="absolute -top-3 sm:-top-4 left-4 sm:left-6 px-2 sm:px-3 py-0.5 sm:py-1 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)]"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            >
              Student Coordinators
            </motion.div>

            {/* Members */}
            <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
              {studentCoordinators.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onHoverStart={() => setHoveredMember(member.name)}
                  onHoverEnd={() => setHoveredMember(null)}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between bg-[var(--color-paper)] border-2 sm:border-3 border-[var(--color-ink)] p-3 sm:p-4 cursor-pointer group"
                  style={{ boxShadow: hoveredMember === member.name ? "3px 3px 0 var(--color-terracotta)" : "2px 2px 0 var(--color-ink)" }}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-ancient)] text-sm sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors truncate">
                      {member.name}
                    </h3>
                    <p className="font-[family-name:var(--font-data)] text-[10px] sm:text-xs text-[var(--color-stone)] uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={member.links.github}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-[var(--color-ink)] text-[var(--color-cream)] flex items-center justify-center border-2 border-[var(--color-ink)]"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.a>
                    <motion.a
                      href={member.links.linkedin}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-[var(--color-terracotta)] text-[var(--color-cream)] flex items-center justify-center border-2 border-[var(--color-ink)]"
                    >
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.a>
                  </div>
                  
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-stone)] group-hover:text-[var(--color-terracotta)] group-hover:translate-x-1 transition-all ml-2 sm:ml-3 flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Staff Coordinators */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 2 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ rotate: 0 }}
            className="relative bg-[var(--color-cream)] border-3 sm:border-4 border-[var(--color-ink)] p-5 sm:p-8 h-fit"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
          >
            {/* Label */}
            <motion.div 
              className="absolute -top-3 sm:-top-4 left-4 sm:left-6 px-2 sm:px-3 py-0.5 sm:py-1 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)]"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            >
              Faculty Coordinators
            </motion.div>

            {/* Members - Compact Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              {staffCoordinators.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  onHoverStart={() => setHoveredMember(member.name)}
                  onHoverEnd={() => setHoveredMember(null)}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[var(--color-paper)] border-2 sm:border-3 border-[var(--color-ink)] p-3 sm:p-4 cursor-pointer group text-center"
                  style={{ boxShadow: hoveredMember === member.name ? "3px 3px 0 var(--color-gold)" : "2px 2px 0 var(--color-ink)" }}
                >
                  <h3 className="font-[family-name:var(--font-ancient)] text-sm sm:text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-[family-name:var(--font-data)] text-[10px] sm:text-xs text-[var(--color-stone)] uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Volunteers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="relative bg-[var(--color-cream)] border-3 sm:border-4 border-[var(--color-ink)] p-5 sm:p-8 max-w-2xl mx-auto"
          style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
        >
          {/* Label */}
          <motion.div 
            className="absolute -top-3 sm:-top-4 left-4 sm:left-6 px-2 sm:px-3 py-0.5 sm:py-1 bg-[var(--color-ink)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-[10px] sm:text-xs uppercase border-2 border-[var(--color-ink)]"
            style={{ boxShadow: "2px 2px 0 var(--color-terracotta)" }}
          >
            <Users className="w-3 h-3 sm:w-4 sm:h-4 inline-block mr-1 sm:mr-2" />
            Volunteers
          </motion.div>

          {/* Volunteer Cards */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={volunteer.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                onHoverStart={() => setHoveredMember(volunteer.name)}
                onHoverEnd={() => setHoveredMember(null)}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="px-4 sm:px-6 py-3 sm:py-4 bg-[var(--color-paper)] border-2 sm:border-3 border-[var(--color-ink)] cursor-pointer group text-center"
                style={{ boxShadow: hoveredMember === volunteer.name ? "3px 3px 0 var(--color-terracotta)" : "2px 2px 0 var(--color-ink)" }}
              >
                <h3 className="font-[family-name:var(--font-ancient)] text-sm sm:text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors">
                  {volunteer.name}
                </h3>
                <p className="font-[family-name:var(--font-data)] text-[10px] sm:text-xs text-[var(--color-stone)] uppercase tracking-wider mt-1">
                  {volunteer.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <motion.a
            href="https://api.whatsapp.com/send/?phone=6282031325&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex flex-col items-center px-6 sm:px-10 py-3 sm:py-4 bg-[var(--color-terracotta)] text-[var(--color-cream)] border-3 sm:border-4 border-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-bold text-base sm:text-lg"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
          >
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Us
            </span>
            <span className="font-[family-name:var(--font-data)] text-[9px] sm:text-[10px] opacity-70 font-normal mt-1 tracking-wide">
              psst... say hi to Benedict 👋
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
