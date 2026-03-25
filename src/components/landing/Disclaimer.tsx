"use client";

import AnimatedSection from "../ui/AnimatedSection";
import { AlertTriangle, TrendingDown, Search } from "lucide-react";
import Link from "next/link";

const disclaimers = [
  {
    icon: AlertTriangle,
    title: "Educational Only",
    description:
      "This is educational content, not personalized investment advice. All trading decisions are yours alone.",
  },
  {
    icon: TrendingDown,
    title: "Substantial Risk",
    description:
      "Options trading can result in total loss of capital. 0DTE options are extremely risky and not suitable for everyone.",
  },
  {
    icon: Search,
    title: "Do Your Own Research",
    description:
      "Always verify ideas independently. No guarantee of accuracy or profitability is made or implied.",
  },
];

export default function Disclaimer() {
  return (
    <section className="py-16 border-t border-border/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {disclaimers.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-surface/30 dark:bg-surface border border-border/30 dark:border-border/40"
              >
                <div className="w-10 h-10 rounded-lg bg-mango/10 flex items-center justify-center mb-3">
                  <item.icon size={20} className="text-mango/80" />
                </div>
                <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted/60 mt-6">
            By using Mango, you agree to our{" "}
            <Link href="/disclosures" className="text-mango/70 hover:text-mango underline underline-offset-2 transition-colors">
              Risk Disclosure &amp; Terms of Service
            </Link>
            . Past performance does not guarantee future results.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
