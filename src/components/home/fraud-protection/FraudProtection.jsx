'use client';

import { CheckCircle } from 'lucide-react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import AnimateIn from '@/shared/AnimateIn';
import { FRAUD_FEATURES } from '@/constants';
import fraudProtection from '@/assets/fraud-protection/fraud-protection.webp';
import Image from 'next/image';

export default function FraudProtection() {
  return (
    <section className="bg-callify-bg-alt py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left column — text ──────────────────────────────── */}
          <AnimateIn variant="fadeLeft">
            {/* Label pill */}
            <div className="mb-5">
              <span className="inline-flex items-center rounded-full bg-callify-label-bg px-4 py-1.5 text-xs font-medium tracking-wide text-callify-label-text">
                Fraud Protection
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-4 text-[1.6rem] font-bold leading-tight text-callify-text sm:text-[1.85rem] md:text-[2rem]">
              Automate Order Verification &amp; Safeguard Your Business
            </h2>

            {/* Body */}
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-callify-text-muted sm:text-base">
              Protect your e-commerce store from fake orders and reduce return-to-origin (RTO) rates
              with automated call verification. Every order is confirmed directly with the customer.
            </p>

            {/* Checklist — two columns */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {FRAUD_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-callify-brand"
                    strokeWidth={2}
                  />
                  <span className="text-sm leading-relaxed text-callify-text-body">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button href="/contact" variant="primary" size="lg" arrow>
              24/7 Live Chat
            </Button>
          </AnimateIn>

          {/* ── Right column — illustration ─────────────────────── */}
          <AnimateIn variant="fadeRight" delay={0.2}>
            <Image src={fraudProtection} alt="Fraud Protection" />
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
