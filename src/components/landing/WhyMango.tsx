"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { Shield, Users, Target, Zap, TrendingUp, BookOpen } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Real Community",
    description:
      "Not just a chat room. A focused group of serious traders who share ideas, challenge each other, and grow together.",
  },
  {
    icon: Target,
    title: "Quality Callouts",
    description:
      "Every trade idea is backed by clear reasoning. No random signals — just well-researched setups with defined risk.",
  },
  {
    icon: BookOpen,
    title: "Learn by Doing",
    description:
      "Structured education combined with live market application. Understand the why behind every move.",
  },
  {
    icon: TrendingUp,
    title: "Proven Consistency",
    description:
      "We focus on repeatable processes, not lucky wins. Build the habits and systems that lead to long-term results.",
  },
  {
    icon: Shield,
    title: "Premium Environment",
    description:
      "No noise, no spam, no pump-and-dumps. A clean, curated space where quality comes first.",
  },
  {
    icon: Zap,
    title: "Execution Speed",
    description:
      "Get real-time insights and alerts when they matter. Never miss a setup because you were too late.",
  },
];

export default function WhyMango() {
  return (
    <section id="why-mango" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Mango"
          title="Built Different."
          description="Most trading groups are noise. Mango is a curated community of traders who are serious about getting better — together."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.1}>
              <div className="group relative h-full bg-surface/50 border border-border/50 rounded-2xl p-6 hover:border-mango/30 transition-all duration-300 hover:bg-surface/80">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-mango/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-mango/10 border border-mango/20 flex items-center justify-center mb-4 group-hover:bg-mango/20 transition-colors duration-300">
                    <reason.icon size={22} className="text-mango" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
