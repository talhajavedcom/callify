'use client';

import { motion } from 'framer-motion';

/**
 * SectionTitle
 *
 * Matches the screenshot exactly:
 *   • Small green pill label  →  "Features & Benefits"
 *   • Bold centered heading   →  "Unlock the Power of Callify"
 *   • Muted subtitle          →  "Experience the peace of mind..."
 *
 * Props:
 *   label     string   — pill text above heading  (optional)
 *   title     string   — main bold heading         (required)
 *   subtitle  string   — muted paragraph below     (optional)
 *   align     'center' | 'left'                    (default: 'center')
 *   className string   — extra wrapper classes     (optional)
 */
export default function SectionTitle({ label, title, subtitle, align = 'center', className = '' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={['mb-12', isCenter ? 'text-center' : 'text-left', className]
        .filter(Boolean)
        .join(' ')}
    >
      {/* ── Label pill ─────────────────────────────────────── */}
      {label && (
        <div className={`mb-4 ${isCenter ? 'flex justify-center' : ''}`}>
          <span className="inline-flex items-center rounded-full bg-callify-label-bg px-4 py-1.5 text-xs font-medium text-callify-label-text tracking-wide">
            {label}
          </span>
        </div>
      )}

      {/* ── Heading ────────────────────────────────────────── */}
      <h2 className="text-[1.6rem] font-bold leading-tight text-callify-text sm:text-[1.85rem] md:text-[2rem]">
        {title}
      </h2>

      {/* ── Subtitle ───────────────────────────────────────── */}
      {subtitle && (
        <p
          className={[
            'mt-3 text-sm leading-relaxed text-callify-text-muted sm:text-base',
            isCenter ? 'mx-auto max-w-xl' : 'max-w-xl',
          ].join(' ')}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
