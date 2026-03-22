"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex R.",
    role: "Swing Trader",
    content:
      "Mango completely changed how I approach the market. The callouts are solid, but the real value is the community and the discipline it builds.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Day Trader",
    content:
      "I've been in a dozen trading groups. Mango is the only one that felt like a real community, not just a signal service. The education alone is worth it.",
    rating: 5,
  },
  {
    name: "James M.",
    role: "Options Trader",
    content:
      "The quality of analysis here is on another level. Clean setups, clear risk management, and a team that actually cares about your growth.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Forex Trader",
    content:
      "Joined skeptical after bad experiences with other groups. Three months in, my consistency has improved dramatically. This is the real deal.",
    rating: 5,
  },
  {
    name: "Maria C.",
    role: "Crypto & Equities",
    content:
      "What I love about Mango is the no-BS approach. No hype, no screenshots of P&L — just solid education and a supportive community.",
    rating: 5,
  },
  {
    name: "Ryan T.",
    role: "Part-Time Trader",
    content:
      "As someone who trades part-time, the recaps and alerts are invaluable. I never feel like I'm missing out, even with a full-time job.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mango/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Social Proof"
          title="Hear From Our Members."
          description="Don't take our word for it. Here's what traders inside Mango have to say."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 0.1}>
              <div className="h-full bg-surface/50 border border-border/50 rounded-2xl p-6 hover:border-mango/20 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-mango fill-mango"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mango/30 to-mango/10 flex items-center justify-center text-sm font-bold text-mango">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
