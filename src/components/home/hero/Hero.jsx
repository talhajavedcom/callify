'use client';

import { Check } from 'lucide-react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import AnimateIn from '@/shared/AnimateIn';
import { TRUST_BADGES } from '@/constants';
import heroImg from '@/assets/hero-section/hero-section-img.webp';
import heroBg from '@/assets/hero-section/hero-bg.webp';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-callify-brand/20">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={heroBg}
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Decorative glow / blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-callify-brand/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-callify-brand/[0.04] blur-2xl" />

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100vh-3.5rem)] grid-cols-1 items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-8">
          {/* ── Left column — text ──────────────────────────────── */}
          <AnimateIn variant="fadeLeft" className="order-1 lg:order-1">
            {/* Heading */}
            <h1 className="text-[2.2rem] font-bold leading-tight tracking-tight text-callify-text sm:text-[3rem] md:text-[3.5rem]">
              Welcome to Callify
            </h1>
            <h2 className="text-[2.2rem] font-bold leading-tight text-callify-brand sm:text-[3rem] md:text-[3.5rem]">
              Shopify
            </h2>

            {/* Body paragraph */}
            <p className="mt-5 max-w-[500px] text-[15px] leading-relaxed text-callify-text-body sm:text-base">
              Send automated order confirmation calls in urdu or english to any Mobile number in
              Pakistan. Available for all Shopify &amp; Woocommerce stores
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
              <Button variant="primary" size="lg" arrow>
                Shopify App
              </Button>
              <Button
                href="/pricing"
                variant="ghost"
                size="lg"
                className="!px-2 font-medium text-callify-text-body"
              >
                View plans and pricing
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-16 flex flex-wrap items-center gap-6 sm:gap-8">
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-callify-brand">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[13px] font-medium text-callify-text-body sm:text-sm">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* ── Right column — illustration ─────────────────────── */}
          <AnimateIn
            variant="fadeRight"
            delay={0.2}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[550px]">
              <Image
                src={heroImg}
                alt="Callify App Preview"
                width={800}
                height={800}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
