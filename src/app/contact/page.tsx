"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { Send, MessageCircle, Mail, Twitter } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Join our community server.",
    link: "#",
    linkText: "Join Discord",
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Follow us for updates.",
    link: "#",
    linkText: "@MangoTrading",
  },
  {
    icon: Mail,
    title: "Email",
    description: "For business inquiries.",
    link: "mailto:hello@mango.trade",
    linkText: "hello@mango.trade",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-mango/5 rounded-full blur-[120px]" />

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
                Get in <span className="gradient-text">Touch.</span>
              </h1>
              <p className="text-lg text-muted max-w-xl mx-auto">
                Have a question, partnership idea, or just want to say hello?
                We&apos;d love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {/* Contact form */}
              <AnimatedSection>
                <div className="bg-surface/50 border border-border/50 rounded-2xl p-6 sm:p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-mango/10 border border-mango/20 flex items-center justify-center mx-auto mb-4">
                        <Send size={24} className="text-mango" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-sm text-muted">
                        We&apos;ll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-mango/50 focus:ring-1 focus:ring-mango/20 transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-mango/50 focus:ring-1 focus:ring-mango/20 transition-all duration-200"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-mango/50 focus:ring-1 focus:ring-mango/20 transition-all duration-200"
                          placeholder="What's this about?"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-mango/50 focus:ring-1 focus:ring-mango/20 transition-all duration-200 resize-none"
                          placeholder="Your message..."
                        />
                      </div>
                      <Button className="w-full">
                        Send Message <Send size={16} className="ml-2" />
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              {/* Contact methods */}
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-2">
                      Other Ways to Reach Us
                    </h2>
                    <p className="text-sm text-muted leading-relaxed">
                      Prefer a different channel? Connect with us through any of
                      these platforms.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <a
                        key={method.title}
                        href={method.link}
                        className="group flex items-start gap-4 bg-surface/30 border border-border/30 rounded-xl p-5 hover:border-mango/20 hover:bg-surface/60 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-mango/10 flex items-center justify-center shrink-0 group-hover:bg-mango/20 transition-colors duration-300">
                          <method.icon size={20} className="text-mango" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold mb-0.5">
                            {method.title}
                          </h3>
                          <p className="text-xs text-muted mb-1">
                            {method.description}
                          </p>
                          <span className="text-xs text-mango font-medium">
                            {method.linkText}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Business hours */}
                  <div className="bg-surface/30 border border-border/30 rounded-xl p-5 mt-6">
                    <h3 className="text-sm font-semibold mb-2">Response Time</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      We typically respond within 24 hours. For urgent matters,
                      reach out via Discord for the fastest response.
                    </p>
                  </div>
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
