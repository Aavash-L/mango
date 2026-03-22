"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "$50",
    period: "/month",
    description: "Full access, cancel anytime.",
    features: [
      "All trade callouts",
      "Market insights & analysis",
      "Community Discord access",
      "Weekly recaps",
      "Education library",
      "Live session recordings",
      "Priority support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Lifetime",
    price: "$999",
    period: "one-time",
    description: "Pay once, access forever.",
    features: [
      "Everything in Monthly — forever",
      "Mentorship sessions",
      "Custom trade plans",
      "Early access to new features",
      "Exclusive lifetime member badge",
      "Founding member perks",
      "Member-only events",
    ],
    cta: "Go Lifetime",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Pricing"
          title="Simple, Transparent Pricing."
          description="No hidden fees, no upsells. Pick the plan that works for you and start trading smarter today."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full rounded-2xl p-6 lg:p-8 flex flex-col ${
                  plan.popular
                    ? "bg-gradient-to-b from-mango/10 to-surface border-2 border-mango/30 glow-box"
                    : "bg-surface/50 border border-border/50"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-mango text-background">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.popular ? "text-mango" : "text-muted"
                        }`}
                      />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#"
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
