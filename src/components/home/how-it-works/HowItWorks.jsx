'use client';

import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import AnimateIn from '@/shared/AnimateIn';
import { HOW_IT_WORKS_STEPS } from '@/constants';

export default function HowItWorks() {
  return (
    <section className="bg-callify-bg py-20 md:py-28">
      <Container>
        <SectionTitle
          label="How it works"
          title="Behind the Scenes of Callify"
          subtitle="Save time and Reduce bogus orders with automated order verification calls."
          align="center"
        />

        {/* Steps grid */}
        <div className="relative mt-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
          {/* Connector line — desktop only */}
          {/* Positioned exactly behind the dots: pill height (approx 32px) + mb-6 (24px) + half dot (7px) = ~63px */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[62px] hidden h-[2px] bg-[#D4D4D4] md:block" />

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <AnimateIn
              key={step.step}
              variant="fadeUp"
              delay={index * 0.15}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step label pill */}
              <div className="mb-6 flex items-center justify-center rounded-md bg-[#EBEBEB] px-5 py-1.5 text-[13px] font-medium tracking-wide text-[#111111]">
                {step.step}
              </div>

              {/* Dot */}
              <div className="relative z-10 mb-8 h-3.5 w-3.5 shrink-0 rounded-full bg-[#D4D4D4] ring-[8px] ring-callify-bg" />

              {/* Step title */}
              <h3 className="mb-2 text-lg font-semibold text-callify-text">{step.title}</h3>

              {/* Step description */}
              <p className="mx-auto max-w-[260px] text-[14px] leading-relaxed text-callify-text-muted">
                {step.description}
              </p>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
