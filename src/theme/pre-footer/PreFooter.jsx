'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/shared/Container';

export default function PreFooter() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* ── Label pill ──────────────────────────────────── */}
          <div className="mb-5 inline-flex items-center justify-center rounded-full bg-[#dde9e2] px-4 py-1.5">
            <span className="text-xs font-medium text-[#4a7260] tracking-wide">Get Started</span>
          </div>

          {/* ── Heading ─────────────────────────────────────── */}
          <h2 className="mb-4 text-[1.75rem] font-bold leading-tight text-[#1a1a1a] sm:text-[2rem] md:text-[2.25rem]">
            Unlock the Power of Next Generation Communication
          </h2>

          {/* ── Subtext ─────────────────────────────────────── */}
          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-[#7a7a7a] sm:text-base">
            Callify Pakistan delivers efficient and cost-effective robocall solutions, ensuring
            seamless communication with your audience.
          </p>

          {/* ── CTA button ──────────────────────────────────── */}
          <Link
            href="/contact"
            className={[
              'inline-flex items-center gap-2 rounded-full px-7 py-3',
              'bg-[#5c8a72] text-white text-sm font-medium',
              'shadow-[0_2px_8px_rgba(92,138,114,0.30)]',
              'hover:bg-[#4a7260]',
              'hover:shadow-[0_4px_16px_rgba(92,138,114,0.40)]',
              'transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c8a72]/50',
            ].join(' ')}
          >
            Contact Us
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
