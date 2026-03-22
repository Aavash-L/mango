"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"logo" | "text" | "exit">("logo");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("text"), 600);
    const timer2 = setTimeout(() => setPhase("exit"), 1800);
    const timer3 = setTimeout(() => onComplete(), 2400);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 40%, transparent 70%)",
            }}
          />

          {/* Animated rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: [0, 0.3, 0], scale: [0.3, 1.2 + i * 0.3, 1.5 + i * 0.3] }}
              transition={{
                duration: 2,
                delay: 0.2 * i,
                ease: "easeOut",
              }}
              className="absolute rounded-full border border-mango/20"
              style={{ width: 120 + i * 60, height: 120 + i * 60 }}
            />
          ))}

          {/* Mango icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative z-10"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="loadMangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <radialGradient id="loadMangoShine" cx="35%" cy="30%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
                <filter id="loadGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M38 8C38 8 42 4 48 6C44 10 40 14 38 16C36 14 38 8 38 8Z"
                fill="#22c55e"
                opacity="0.9"
              />
              <path
                d="M34 16C34 16 36 12 38 10"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.7"
              />
              <ellipse
                cx="32"
                cy="36"
                rx="18"
                ry="22"
                fill="url(#loadMangoGrad)"
                filter="url(#loadGlow)"
                transform="rotate(-10 32 36)"
              />
              <ellipse
                cx="32"
                cy="36"
                rx="18"
                ry="22"
                fill="url(#loadMangoShine)"
                transform="rotate(-10 32 36)"
              />
            </svg>

            {/* Glow behind icon */}
            <motion.div
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(245,158,11,0.5) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Brand text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={phase !== "logo" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-8 text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Man<span className="gradient-text">go</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={phase !== "logo" ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted text-sm mt-2 tracking-widest uppercase"
            >
              Trade Smarter Together
            </motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-16 w-48 h-0.5 bg-surface-light rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-mango-dark via-mango to-mango-light rounded-full"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
