import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ChevronDown, ChevronUp, Terminal } from 'lucide-react';

const COLLAPSED_LINES = 3;

export default function ExpandablePrompt({
  content = '',
  title = 'Operational Briefing',
}) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const lines = content.split('\n');
  const collapsedPreview = lines.slice(0, COLLAPSED_LINES).join('\n');
  const hasMore = lines.length > COLLAPSED_LINES;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for environments without clipboard API
      const el = document.createElement('textarea');
      el.value = content;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        background: 'var(--color-bg-surface)',
        borderColor: 'var(--color-border)',
        fontFamily: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
      }}
    >
      {/* Terminal title bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{
          background: 'rgba(0,0,0,0.35)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center gap-2.5">
          {/* Traffic light dots */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          </div>
          <Terminal size={13} style={{ color: 'var(--color-text-muted)' }} />
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {title}
          </span>
        </div>

        {/* Copy button */}
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors"
          style={{
            background: copied
              ? 'rgba(34,197,94,0.15)'
              : 'rgba(255,255,255,0.05)',
            color: copied ? '#22c55e' : 'var(--color-text-muted)',
            border: `1px solid ${copied ? 'rgba(34,197,94,0.3)' : 'var(--color-border)'}`,
          }}
          title="Copy to clipboard"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                className="flex items-center gap-1"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                <Check size={12} />
                Copied!
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                className="flex items-center gap-1"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                <Copy size={12} />
                Copy
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Content area */}
      <div className="relative">
        {/* Line numbers gutter */}
        <div className="flex">
          <div
            className="select-none py-4 px-3 text-right flex-shrink-0 border-r"
            style={{
              borderColor: 'var(--color-border)',
              background: 'rgba(0,0,0,0.2)',
              minWidth: '2.5rem',
            }}
          >
            {(expanded ? lines : collapsedPreview.split('\n')).map((_, i) => (
              <div
                key={i}
                className="text-xs leading-6"
                style={{ color: 'var(--color-text-muted)', opacity: 0.4 }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code content */}
          <div className="flex-1 overflow-x-auto">
            <AnimatePresence initial={false}>
              {!expanded ? (
                <motion.pre
                  key="collapsed"
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 text-sm leading-6 whitespace-pre-wrap break-words"
                  style={{ color: 'var(--color-accent)', margin: 0 }}
                >
                  {collapsedPreview}
                  {hasMore && (
                    <span style={{ color: 'var(--color-text-muted)', opacity: 0.5 }}>
                      {'\n'}...
                    </span>
                  )}
                </motion.pre>
              ) : (
                <motion.pre
                  key="expanded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 text-sm leading-6 whitespace-pre-wrap break-words overflow-y-auto"
                  style={{
                    color: 'var(--color-accent)',
                    margin: 0,
                    maxHeight: '28rem',
                  }}
                >
                  {content}
                </motion.pre>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Collapsed fade gradient overlay */}
        {!expanded && hasMore && (
          <div
            className="absolute bottom-10 inset-x-0 h-10 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent, var(--color-bg-surface))`,
            }}
          />
        )}
      </div>

      {/* Expand / Collapse toggle */}
      {hasMore && (
        <motion.button
          onClick={() => setExpanded((v) => !v)}
          whileHover={{ background: 'rgba(255,255,255,0.04)' }}
          whileTap={{ scale: 0.99 }}
          className="w-full flex items-center justify-center gap-2 py-2.5 border-t text-xs font-medium tracking-widest uppercase transition-colors"
          style={{
            borderColor: 'var(--color-border)',
            color: 'var(--color-text-muted)',
            background: 'rgba(0,0,0,0.2)',
          }}
        >
          {expanded ? (
            <>
              <ChevronUp size={13} />
              Collapse
            </>
          ) : (
            <>
              <ChevronDown size={13} />
              Read Full Briefing
            </>
          )}
        </motion.button>
      )}
    </div>
  );
}
