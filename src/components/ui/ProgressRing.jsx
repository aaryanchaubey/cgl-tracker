import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export default function ProgressRing({
  percentage = 0,
  size = 80,
  strokeWidth = 8,
  color,
  label,
  sublabel,
}) {
  const clampedPct = Math.min(100, Math.max(0, percentage));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Animate the percentage counter in center
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(count, clampedPct, {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    return controls.stop;
  }, [clampedPct]);

  const strokeColor = color || 'var(--color-accent)';
  const targetOffset = circumference - (clampedPct / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 rotate-[-90deg]"
      >
        {/* Glow filter definition */}
        <defs>
          <filter id={`ring-glow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={strokeWidth}
          strokeOpacity={0.35}
        />

        {/* Progress arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: targetOffset }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          filter={`url(#ring-glow-${size})`}
          style={{
            filter: `drop-shadow(0 0 ${strokeWidth}px ${strokeColor})`,
          }}
        />
      </svg>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center leading-tight">
        {label ? (
          <span
            className="font-bold"
            style={{
              fontSize: size * 0.18,
              color: strokeColor,
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            {label}
          </span>
        ) : (
          <motion.span
            className="font-bold tabular-nums"
            style={{
              fontSize: size * 0.2,
              color: strokeColor,
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            {rounded}%
          </motion.span>
        )}
        {sublabel && (
          <span
            className="font-medium leading-none mt-0.5"
            style={{
              fontSize: size * 0.12,
              color: 'var(--color-text-muted)',
            }}
          >
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}
