"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import AnimatedSection from "../ui/AnimatedSection";

const faqs = [
  {
    question: "What exactly is Mango?",
    answer:
      "Mango is a premium trading community that provides real-time trade callouts, market analysis, educational content, and a focused community of serious traders. It's designed for traders who want to improve consistently, not chase hype.",
  },
  {
    question: "What markets do you cover?",
    answer:
      "We primarily cover equities, options, and forex, with growing coverage of crypto markets. Our strategies are designed to be versatile and applicable across multiple asset classes.",
  },
  {
    question: "Is this a signal service?",
    answer:
      "No. While we provide trade callouts, Mango is built around education and community. We want you to understand why a trade is being taken, not just blindly follow entries. The goal is to make you a better, more independent trader.",
  },
  {
    question: "What experience level do I need?",
    answer:
      "Mango is designed for all levels — from traders just getting started to experienced professionals. Our education library covers fundamentals through advanced strategies, and the community is supportive of all skill levels.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Absolutely. There are no long-term commitments or cancellation fees. You can cancel your subscription at any time and retain access through the end of your billing period.",
  },
  {
    question: "How is Mango different from other trading groups?",
    answer:
      "We focus on quality over quantity. Every callout includes full reasoning, risk management is non-negotiable, and our community is actively moderated to keep the environment focused and productive. No spam, no pump-and-dumps, no noise.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Questions? Answered."
          description="Everything you need to know about joining Mango."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="border border-border/50 rounded-xl overflow-hidden bg-surface/30 hover:border-border transition-colors duration-200">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-sm font-medium pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={18} className="text-muted" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
