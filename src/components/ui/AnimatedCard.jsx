import { motion } from 'framer-motion';

export default function AnimatedCard({
  children,
  className = '',
  onClick,
  delay = 0,
  glow = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={
        onClick
          ? { scale: 1.025, y: -2 }
          : { scale: 1.01, y: -1 }
      }
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={`
        relative rounded-xl border p-5
        backdrop-blur-md
        transition-shadow duration-300
        ${onClick ? 'cursor-pointer select-none' : ''}
        ${className}
      `}
      style={{
        background: 'var(--color-bg-card)',
        borderColor: glow ? 'var(--color-accent)' : 'var(--color-border)',
        boxShadow: glow
          ? '0 0 18px -4px var(--color-accent), 0 4px 24px rgba(0,0,0,0.4)'
          : '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      {/* Subtle inner highlight at top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-xl"
        style={{
          background: glow
            ? 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
            : 'linear-gradient(90deg, transparent, var(--color-border), transparent)',
          opacity: glow ? 0.8 : 0.4,
        }}
      />

      {children}
    </motion.div>
  );
}
