import { motion } from 'framer-motion';

const sizeMap = {
  sm: { ring: 24, stroke: 3, text: 'text-xs' },
  md: { ring: 48, stroke: 4, text: 'text-sm' },
  lg: { ring: 80, stroke: 6, text: 'text-base' },
};

export default function LoadingSpinner({ size = 'md', text, centerPage = false }) {
  const { ring, stroke, text: textSize } = sizeMap[size] || sizeMap.md;
  const r = (ring - stroke * 2) / 2;
  const circumference = 2 * Math.PI * r;

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative" style={{ width: ring, height: ring }}>
        {/* Track ring */}
        <svg
          width={ring}
          height={ring}
          viewBox={`0 0 ${ring} ${ring}`}
          className="absolute inset-0 rotate-[-90deg]"
        >
          <circle
            cx={ring / 2}
            cy={ring / 2}
            r={r}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth={stroke}
          />
        </svg>

        {/* Animated gradient ring */}
        <svg
          width={ring}
          height={ring}
          viewBox={`0 0 ${ring} ${ring}`}
          className="absolute inset-0 rotate-[-90deg]"
          style={{
            filter: `drop-shadow(0 0 ${stroke * 2}px var(--color-accent))`,
          }}
        >
          <defs>
            <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="1" />
            </linearGradient>
          </defs>
          <motion.circle
            cx={ring / 2}
            cy={ring / 2}
            r={r}
            fill="none"
            stroke="url(#spinner-gradient)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{
              strokeDashoffset: [circumference * 0.75, circumference * 0.1, circumference * 0.75],
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ originX: '50%', originY: '50%' }}
          />
        </svg>

        {/* Rotating outer glow dot */}
        <motion.div
          className="absolute"
          style={{
            width: stroke * 1.5,
            height: stroke * 1.5,
            borderRadius: '50%',
            background: 'var(--color-accent)',
            boxShadow: `0 0 ${stroke * 3}px var(--color-accent)`,
            top: stroke / 2,
            left: '50%',
            transformOrigin: `0 ${r + stroke}px`,
            marginLeft: -(stroke * 0.75),
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {text && (
        <motion.p
          className={`${textSize} font-medium tracking-widest uppercase`}
          style={{ color: 'var(--color-text-muted)', fontFamily: '"JetBrains Mono", monospace' }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (centerPage) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{ background: 'var(--color-bg)' }}
      >
        {spinner}
      </div>
    );
  }

  return spinner;
}
