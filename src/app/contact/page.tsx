"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Instagram, Music2 } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    title: "Instagram",
    description: "Follow us for daily content.",
    link: "https://www.instagram.com/mangoestrading/",
    linkText: "@mangoestrading",
  },
  {
    icon: Music2,
    title: "TikTok",
    description: "Watch our trading videos.",
    link: "https://www.tiktok.com/@mangotradingllc",
    linkText: "@mangotradingllc",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-mango/10 text-mango border border-mango/20 mb-6">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Get in <span className="text-mango">Touch.</span>
              </h1>
              <p className="text-lg text-muted max-w-xl mx-auto">
                Connect with us on social media — we&apos;d love to hear from you.
              </p>
            </motion.div>

            <div className="max-w-md mx-auto">
              <AnimatedSection>
                <div className="space-y-4">
                  {socials.map((social) => (
                    <a
                      key={social.title}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 bg-surface/30 border border-border/30 rounded-xl p-5 hover:border-mango/20 hover:bg-surface/60 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-mango/10 flex items-center justify-center shrink-0 group-hover:bg-mango/20 transition-colors duration-300">
                        <social.icon size={20} className="text-mango" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-0.5">
                          {social.title}
                        </h3>
                        <p className="text-xs text-muted mb-1">
                          {social.description}
                        </p>
                        <span className="text-xs text-mango font-medium">
                          {social.linkText}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
