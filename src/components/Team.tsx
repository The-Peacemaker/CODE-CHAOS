"use client";

import { motion, useInView } from "framer-motion";
import { ChevronRight, Mail, Linkedin, Github, Star, Users } from "lucide-react";
import { useRef, useState } from "react";

const studentCoordinators = [
  {
    name: "Benedict Chacko Mathew",
    role: "Lead Coordinator",
    links: { github: "#", linkedin: "#" },
  },
  {
    name: "Kripa Sajo",
    role: "Co-Coordinator",
    links: { github: "#", linkedin: "#" },
  },
];

const staffCoordinators = [
  { name: "Andrews Jose", role: "Faculty Advisor" },
  { name: "Santhi M", role: "Department Coordinator" },
];

const volunteers = [
  "Tech Team Alpha",
  "Design Squad",
  "Operations Crew",
  "Logistics Unit",
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-24 px-6 bg-[var(--color-paper)] relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 bg-[var(--color-gold)] border-3 border-[var(--color-ink)] rotate-12"
        style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
        animate={{ rotate: [12, 20, 12] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-16 h-16 bg-[var(--color-terracotta)] border-3 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-sm uppercase border-2 border-[var(--color-ink)] mb-6"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "-2deg" }}
          >
            The Crew
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-5xl md:text-7xl font-black text-[var(--color-ink)] leading-none">
            Meet The Team
            <motion.span
              className="inline-block ml-4"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-10 h-10 text-[var(--color-terracotta)] fill-[var(--color-terracotta)]" />
            </motion.span>
          </h2>
        </motion.div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Student Coordinators */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -2 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ rotate: 0 }}
            className="relative bg-[var(--color-cream)] border-4 border-[var(--color-ink)] p-8"
            style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
          >
            {/* Label */}
            <motion.div 
              className="absolute -top-4 left-6 px-3 py-1 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-data)] text-xs uppercase border-2 border-[var(--color-ink)]"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            >
              Student Coordinators
            </motion.div>

            {/* Members */}
            <div className="space-y-4 mt-4">
              {studentCoordinators.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onHoverStart={() => setHoveredMember(member.name)}
                  onHoverEnd={() => setHoveredMember(null)}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between bg-[var(--color-paper)] border-3 border-[var(--color-ink)] p-4 cursor-pointer group"
                  style={{ boxShadow: hoveredMember === member.name ? "4px 4px 0 var(--color-terracotta)" : "3px 3px 0 var(--color-ink)" }}
                >
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-ancient)] text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)] uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={member.links.github}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-8 h-8 bg-[var(--color-ink)] text-[var(--color-cream)] flex items-center justify-center border-2 border-[var(--color-ink)]"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.links.linkedin}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      className="w-8 h-8 bg-[var(--color-terracotta)] text-[var(--color-cream)] flex items-center justify-center border-2 border-[var(--color-ink)]"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-[var(--color-stone)] group-hover:text-[var(--color-terracotta)] group-hover:translate-x-1 transition-all ml-3" />
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
            className="relative bg-[var(--color-cream)] border-4 border-[var(--color-ink)] p-8"
            style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
          >
            {/* Label */}
            <motion.div 
              className="absolute -top-4 left-6 px-3 py-1 bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs uppercase border-2 border-[var(--color-ink)]"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            >
              Faculty Coordinators
            </motion.div>

            {/* Members */}
            <div className="space-y-4 mt-4">
              {staffCoordinators.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  onHoverStart={() => setHoveredMember(member.name)}
                  onHoverEnd={() => setHoveredMember(null)}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between bg-[var(--color-paper)] border-3 border-[var(--color-ink)] p-4 cursor-pointer group"
                  style={{ boxShadow: hoveredMember === member.name ? "4px 4px 0 var(--color-gold)" : "3px 3px 0 var(--color-ink)" }}
                >
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-ancient)] text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)] uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[var(--color-stone)] group-hover:text-[var(--color-terracotta)] group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Volunteer Teams */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <div className="text-center mb-6">
            <motion.div 
              className="inline-block px-3 py-1 bg-[var(--color-paper)] text-[var(--color-ink)] font-[family-name:var(--font-data)] text-sm uppercase border-2 border-[var(--color-ink)]"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            >
              <Users className="w-4 h-4 inline-block mr-2" />
              Powered by our volunteer teams
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {volunteers.map((team, index) => (
              <motion.div
                key={team}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: index % 2 === 0 ? -3 : 3 
                } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                className="px-6 py-3 bg-[var(--color-cream)] border-3 border-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-bold text-[var(--color-ink)] cursor-pointer"
                style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
              >
                {team}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="mailto:codeandchaos@vjcet.org"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-terracotta)] text-[var(--color-cream)] border-4 border-[var(--color-ink)] font-[family-name:var(--font-ancient)] font-bold text-lg"
            style={{ boxShadow: "5px 5px 0 var(--color-ink)" }}
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
