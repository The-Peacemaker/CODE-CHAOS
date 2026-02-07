"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Star } from "lucide-react";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "Who can participate in Code & Chaos?",
    answer:
      "Any student currently enrolled in a college in Kerala can participate. Teams of 2-4 members are accepted. Both undergraduate and postgraduate students are welcome.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, any hardware you might need, and your college ID. We'll provide food, beverages, and a collaborative workspace. Don't forget comfortable clothes for the overnight coding session!",
  },
  {
    question: "Do I need prior hackathon experience?",
    answer:
      "Not at all! Code & Chaos welcomes participants of all skill levels. Whether you're a beginner or experienced coder, you'll find challenges suited to your abilities. Mentors will be available to help.",
  },
  {
    question: "What are the judging criteria?",
    answer:
      "Projects are evaluated on Innovation (25%), Technical Implementation (25%), Impact & Relevance (25%), and Presentation (25%). Focus on solving real problems with scalable solutions.",
  },
  {
    question: "Can I start working on my project before the hackathon?",
    answer:
      "No pre-built projects are allowed. All coding must be done during the 14-hour hackathon period. However, you can come with ideas and do research beforehand.",
  },
  {
    question: "What happens during the Midnight Quiz?",
    answer:
      "Around midnight, we'll have a fun quiz session with prizes! It's a great way to take a break, test your knowledge, and win additional rewards. Participation is optional but highly encouraged.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[var(--color-paper)] relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-20 right-4 sm:right-10 w-12 h-12 sm:w-20 sm:h-20 bg-[var(--color-gold)] border-2 sm:border-3 border-[var(--color-ink)] rotate-12"
        style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
        animate={{ rotate: [12, 20, 12] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-4 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 bg-[var(--color-terracotta)] border-2 sm:border-3 border-[var(--color-ink)] rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
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
            Got Questions?
          </motion.div>
          
          <h2 className="font-[family-name:var(--font-ancient)] text-4xl sm:text-5xl md:text-7xl font-black text-[var(--color-ink)] leading-none">
            FAQ
            <span className="relative inline-block ml-2 sm:ml-4">
              <Star className="w-5 h-5 sm:w-8 sm:h-8 text-[var(--color-terracotta)] fill-[var(--color-terracotta)]" />
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 font-[family-name:var(--font-grotesk)] text-base sm:text-lg text-[var(--color-stone)]">
            Everything you need to know before entering the chaos
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotate: openIndex === index ? 0 : (index % 2 === 0 ? -1 : 1)
              } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-[var(--color-cream)] border-2 sm:border-3 border-[var(--color-ink)]"
              style={{ boxShadow: openIndex === index ? "4px 4px 0 var(--color-terracotta)" : "3px 3px 0 var(--color-ink)" }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ x: 5 }}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left group"
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  <motion.div
                    className="w-6 h-6 sm:w-8 sm:h-8 bg-[var(--color-gold)] border-2 border-[var(--color-ink)] rounded-full flex items-center justify-center font-[family-name:var(--font-ancient)] font-bold text-xs sm:text-sm flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.div>
                  <span className="font-[family-name:var(--font-ancient)] text-sm sm:text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-terracotta)] transition-colors pr-2 sm:pr-4">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] flex items-center justify-center"
                >
                  {openIndex === index ? (
                    <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--color-terracotta)]" />
                  ) : (
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--color-ink)]" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t-2 border-dashed border-[var(--color-ink)]/30">
                      <p className="pt-3 sm:pt-4 font-[family-name:var(--font-grotesk)] text-sm sm:text-base text-[var(--color-stone)] leading-relaxed pl-8 sm:pl-12">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <motion.div 
            className="inline-block bg-[var(--color-paper)] border-2 sm:border-3 border-[var(--color-ink)] p-4 sm:p-6"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)", rotate: "1deg" }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-[var(--color-terracotta)] mb-2 sm:mb-3" />
            <p className="font-[family-name:var(--font-grotesk)] text-sm sm:text-base text-[var(--color-stone)] mb-2 sm:mb-3">
              Still have questions?
            </p>
            <motion.a
              href="mailto:codeandchaos@vjcet.org"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-[family-name:var(--font-ancient)] font-bold text-sm sm:text-base border-2 border-[var(--color-ink)]"
              style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            >
              Reach out to us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
