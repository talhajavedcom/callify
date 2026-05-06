'use client';

import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import AnimateIn from '@/shared/AnimateIn';
import { PRICING_PLANS, PRICING_INCLUDES, TRUST_BADGES } from '@/constants';

export default function PricingPlans() {
  const defaultIndex = PRICING_PLANS.findIndex((p) => p.popular) ?? 1;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const selectedPlan = PRICING_PLANS[selectedIndex];

  return (
    <section className="bg-callify-bg py-20 md:py-28">
      <Container>
        <SectionTitle
          label="Features & Benefits"
          title="Choose a pricing plan that works for you"
          subtitle="Flexible plans designed for businesses of all sizes with no hidden fees."
          align="center"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ── Left — Plan selector ────────────────────────────── */}
          <AnimateIn variant="fadeLeft" className="flex h-full flex-col">
            <div className="flex flex-1 flex-col justify-between gap-4">
              {PRICING_PLANS.map((plan, index) => {
                const isActive = selectedIndex === index;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedIndex(index)}
                    className={[
                      'group relative flex w-full flex-1 cursor-pointer items-center gap-4 rounded-xl px-5 py-5 text-left transition-all duration-200',
                      isActive
                        ? 'bg-callify-pricing-active text-callify-text-on-dark shadow-lg'
                        : 'border border-callify-border bg-callify-bg text-callify-text hover:border-callify-brand/30 hover:shadow-sm',
                    ].join(' ')}
                  >
                    {/* Radio dot */}
                    <span
                      className={[
                        'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200',
                        isActive
                          ? 'border-callify-text-on-dark bg-callify-text-on-dark'
                          : 'border-callify-border bg-transparent group-hover:border-callify-brand/40',
                      ].join(' ')}
                    >
                      {isActive && <span className="h-2.5 w-2.5 rounded-full bg-callify-brand" />}
                    </span>

                    {/* Plan details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-semibold">{plan.name}</span>
                        {plan.popular && (
                          <span
                            className={[
                              'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
                              isActive
                                ? 'bg-white/20 text-callify-text-on-dark'
                                : 'bg-callify-label-bg text-callify-label-text',
                            ].join(' ')}
                          >
                            <Star size={10} /> Popular
                          </span>
                        )}
                      </div>
                      <p
                        className={[
                          'mt-1 text-sm leading-relaxed',
                          isActive ? 'text-white/80' : 'text-callify-text-muted',
                        ].join(' ')}
                      >
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="shrink-0 text-right">
                      <span className="text-xl font-bold">Rs {plan.price.toLocaleString()}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Trust badges below selector */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-callify-brand" />
                  <span className="text-xs font-medium text-callify-text-body sm:text-sm">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* ── Right — Includes card ───────────────────────────── */}
          <AnimateIn variant="fadeRight" delay={0.15} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-callify-border bg-callify-bg p-7 shadow-sm sm:p-9">
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-xl font-bold text-callify-text">{selectedPlan.name}</h3>
                {selectedPlan.popular && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-callify-label-bg px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-callify-label-text">
                    <Star size={10} /> Popular
                  </span>
                )}
              </div>
              <p className="text-3xl font-bold text-callify-brand">
                Rs {selectedPlan.price.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-callify-text-muted">{selectedPlan.description}</p>

              <hr className="my-6 border-callify-border" />

              <p className="mb-5 text-sm font-medium text-callify-text">Includes:</p>

              <ul className="flex flex-col gap-3.5">
                {PRICING_INCLUDES.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-callify-brand"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm text-callify-text-body">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-9">
                <Button href="/contact" variant="primary" size="lg" arrow className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
