"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { ArrowRight, Target, Eye, Gem, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision Over Volume",
    description:
      "We don't chase every setup. We wait for the right ones, execute with discipline, and protect capital above all else.",
  },
  {
    icon: Eye,
    title: "Transparency First",
    description:
      "Every callout, every loss, every win — it's all documented. No cherry-picking results, no hiding bad trades.",
  },
  {
    icon: Gem,
    title: "Quality Environment",
    description:
      "We actively curate our community. No spam, no noise, no ego. Just focused traders helping each other improve.",
  },
  {
    icon: Users,
    title: "Growth Together",
    description:
      "Trading can be isolating. Mango exists so you never have to figure it out alone. We rise together.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 relative overflow-hidden">

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-mango/10 text-mango border border-mango/20 mb-6">
                Our Story
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Trading is better{" "}
                <span className="text-mango">together.</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
                Mango was born from a simple frustration: most trading communities
                are full of noise, empty promises, and zero accountability. We
                built something different.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                  What is Mango?
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Mango is a free trading community built for traders who take
                  their craft seriously. We combine real-time trade insights,
                  structured education, and a curated community to create an
                  environment where traders actually improve.
                </p>
                <p className="text-muted leading-relaxed">
                  We&apos;re not a signal service. We&apos;re not a course factory. We&apos;re
                  a community of traders committed to consistency, discipline, and
                  continuous growth.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                  Who is it for?
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Mango is for traders at every level who share one thing in common:
                  they&apos;re serious about getting better. Whether you&apos;re just
                  starting out or you&apos;ve been in the market for years, this
                  community is built to accelerate your growth.
                </p>
                <p className="text-muted leading-relaxed">
                  If you want a place where quality matters more than quantity,
                  where every trade has a reason behind it, and where the community
                  has your back — Mango is for you.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mango/[0.02] to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-mango/10 text-mango border border-mango/20 mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                What We Stand For.
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="bg-surface/50 border border-border/50 rounded-2xl p-6 h-full hover:border-mango/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-mango/10 border border-mango/20 flex items-center justify-center mb-4">
                      <value.icon size={22} className="text-mango" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-surface" />

                <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                    The Vision
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    We&apos;re building more than a trading group. We&apos;re building a
                    brand that represents what modern trading should look like —
                    clean, disciplined, community-driven, and focused on real
                    results.
                  </p>
                  <p className="text-muted leading-relaxed mb-8">
                    The future of Mango extends beyond callouts and charts. We&apos;re
                    creating tools, experiences, and opportunities that help our
                    members build lasting success in the markets and beyond. This
                    is just the beginning.
                  </p>
                  <Button href="#" size="lg">
                    Join for Free <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
