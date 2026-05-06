'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/Container';
import AnimateIn from '@/shared/AnimateIn';
import { FAQ_CATEGORIES } from '@/constants';

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const currentCategory = FAQ_CATEGORIES[activeCategory];

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setOpenIndex(null);
  };

  return (
    <section className="bg-callify-bg py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* ── Left — Category labels ──────────────────────────── */}
          <AnimateIn variant="fadeLeft">
            <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0">
              {FAQ_CATEGORIES.map((cat, index) => {
                const isActive = activeCategory === index;
                return (
                  <button
                    key={cat.category}
                    onClick={() => handleCategoryChange(index)}
                    className={[
                      'shrink-0 cursor-pointer rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-callify-brand text-callify-text-on-dark shadow-sm'
                        : 'text-callify-text-body hover:bg-callify-bg-alt hover:text-callify-text',
                    ].join(' ')}
                  >
                    {cat.category}
                  </button>
                );
              })}
            </div>
          </AnimateIn>

          {/* ── Right — FAQ accordion ──────────────────────────── */}
          <AnimateIn variant="fadeRight" delay={0.1}>
            <div className="flex flex-col gap-3">
              {currentCategory.items.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-callify-border bg-callify-bg transition-shadow duration-200 hover:shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-medium text-callify-text sm:text-base">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0"
                      >
                        <ChevronDown size={18} className="text-callify-brand" strokeWidth={2} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-callify-border px-5 pb-4 pt-3">
                            <p className="text-sm leading-relaxed text-callify-text-muted">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
