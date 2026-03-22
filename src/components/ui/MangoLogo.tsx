"use client";

interface MangoLogoProps {
  size?: number;
  className?: string;
}

export default function MangoLogo({ size = 32, className = "" }: MangoLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Mango fruit shape */}
      <defs>
        <linearGradient id="mangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <radialGradient id="mangoShine" cx="35%" cy="30%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Leaf */}
      <path
        d="M38 8C38 8 42 4 48 6C44 10 40 14 38 16C36 14 38 8 38 8Z"
        fill="#22c55e"
        opacity="0.9"
      />
      {/* Stem */}
      <path
        d="M34 16C34 16 36 12 38 10"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Mango body */}
      <ellipse
        cx="32"
        cy="36"
        rx="18"
        ry="22"
        fill="url(#mangoGrad)"
        filter="url(#glow)"
        transform="rotate(-10 32 36)"
      />
      {/* Shine overlay */}
      <ellipse
        cx="32"
        cy="36"
        rx="18"
        ry="22"
        fill="url(#mangoShine)"
        transform="rotate(-10 32 36)"
      />
    </svg>
  );
}
