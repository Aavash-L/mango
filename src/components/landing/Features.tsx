"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import {
  Bell,
  BarChart3,
  GraduationCap,
  Radio,
  Users,
  Compass,
  FileText,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Trade Callouts",
    description: "Real-time trade ideas with entries, targets, and stop losses.",
  },
  {
    icon: BarChart3,
    title: "Market Insights",
    description: "Daily analysis and market breakdowns from experienced traders.",
  },
  {
    icon: GraduationCap,
    title: "Education Library",
    description: "Comprehensive courses, guides, and strategy breakdowns.",
  },
  {
    icon: Radio,
    title: "Live Sessions",
    description: "Weekly live trading sessions and market walkthroughs.",
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Connect with focused traders in a premium Discord environment.",
  },
  {
    icon: Compass,
    title: "Mentorship",
    description: "Guidance from traders who have been where you want to go.",
  },
  {
    icon: FileText,
    title: "Weekly Recaps",
    description: "Performance reviews and trade journals to track your growth.",
  },
  {
    icon: MessageSquare,
    title: "Direct Support",
    description: "Get your questions answered quickly by the team and community.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mango/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="What You Get"
          title="Everything You Get."
          description="Mango gives you the tools, insights, and community you need to level up your trading — completely free."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <div className="group relative bg-surface/30 dark:bg-surface border border-border/30 dark:border-border/40 rounded-xl p-5 hover:border-mango/20 hover:bg-surface/60 dark:hover:bg-surface-light transition-all duration-300 h-full hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-mango/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={20} className="text-mango" />
                </div>
                <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                <p className="text-xs text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
