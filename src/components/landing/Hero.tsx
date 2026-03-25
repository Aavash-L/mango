"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mango/10 border border-mango/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-mango animate-pulse" />
              <span className="text-xs font-medium text-mango tracking-wide">
                Free to join — open now
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Trade smarter
              <br />
              with a{" "}
              <span className="text-mango">real</span>
              <br />
              community.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted leading-relaxed mb-8 max-w-lg"
            >
              Stop trading alone. Join a premium community of focused traders
              who share real insights, proven strategies, and the discipline to
              win consistently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="https://discord.gg/XuxvCnxZpH" size="lg">
                Join for Free <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="#why-mango" variant="secondary" size="lg">
                Learn More
              </Button>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-surface-light to-surface border-2 border-background flex items-center justify-center text-[10px] font-bold text-mango"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">
                  Trusted by{" "}
                  <span className="text-mango">2,000+</span> traders
                </p>
                <p className="text-xs text-muted">Join the community today</p>
              </div>
            </motion.div>
          </div>

          {/* Right visual — Abstract dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main dashboard card */}
              <div className="relative bg-surface/80 backdrop-blur-sm rounded-2xl border border-border p-6 shadow-lg shadow-black/5">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted font-mono">mango.live</span>
                </div>

                {/* Chart area */}
                <div className="relative h-48 mb-6">
                  <svg
                    viewBox="0 0 400 180"
                    fill="none"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(232,146,10,0.12)" />
                        <stop offset="100%" stopColor="rgba(232,146,10,0)" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <motion.path
                      d="M0 160 L30 140 L60 145 L90 120 L120 130 L150 90 L180 95 L210 60 L240 70 L270 40 L300 50 L330 25 L360 30 L400 10 L400 180 L0 180 Z"
                      fill="url(#chartGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 1 }}
                    />
                    {/* Line */}
                    <motion.path
                      d="M0 160 L30 140 L60 145 L90 120 L120 130 L150 90 L180 95 L210 60 L240 70 L270 40 L300 50 L330 25 L360 30 L400 10"
                      stroke="#E8920A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                    />
                    {/* Dot at end */}
                    <motion.circle
                      cx="400"
                      cy="10"
                      r="4"
                      fill="#E8920A"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2 }}
                    />
                  </svg>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Portfolio", value: "+24.8%", color: "text-green-600 dark:text-green-400" },
                    { label: "Win Rate", value: "84%", color: "text-mango" },
                    { label: "Avg Return", value: "+4.2%", color: "text-green-600 dark:text-green-400" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-surface/60 rounded-xl p-3">
                      <p className="text-[10px] text-muted uppercase tracking-wider mb-1">
                        {stat.label}
                      </p>
                      <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-xl p-3 shadow-lg shadow-black/8 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <TrendingUp size={18} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-medium">New Signal</p>
                  <p className="text-[10px] text-muted">AAPL — Long Entry</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
