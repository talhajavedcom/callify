'use client';

import { useEffect, useState } from 'react';
import Container from '@/components/Container';
import AnimateIn from '@/shared/AnimateIn';
import { TERMS_SECTIONS } from '@/constants';

const termsContent = {
  'our-services': {
    title: 'Our Services',
    paragraphs: [
      'Callify provides automated order verification call services for e-commerce businesses in Pakistan. Our platform enables Shopify and WooCommerce store owners to send automated calls to customers for order confirmation, helping reduce bogus orders and return-to-origin (RTO) rates.',
      'The information provided when using our Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws.',
      'Our Services are designed to be used for legitimate business communication purposes only. Any misuse of the platform for spamming, harassment, or fraudulent activities is strictly prohibited and will result in immediate account termination.',
    ],
  },
  'property-rights': {
    title: 'Property Rights',
    paragraphs: [
      'Unless otherwise indicated, the Site and Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.',
      'The Content and Marks are provided on the Services "AS IS" for your information and personal use only. No part of the Services, Content, or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, or distributed in any way without our express prior written consent.',
      'If you are eligible to use the Services, you are granted a limited license to access and use the Services and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.',
    ],
  },
  'prohibited-activities': {
    title: 'Prohibited Activities',
    paragraphs: [
      'You may not access or use the Services for any purpose other than that for which we make them available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.',
      'As a user of the Services, you agree not to: systematically retrieve data to create a collection or database; trick, defraud, or mislead us and other users; circumvent, disable, or interfere with security features; use the Services to send unsolicited bulk communications or spam calls.',
      'You also agree not to use any automated system (including robots, spiders, or similar tools) to access the Services; make any unauthorized use of the Services; or use the Services as part of any effort to compete with us or to build a competing product or service.',
    ],
  },
  'services-management': {
    title: 'Services Management',
    paragraphs: [
      'We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms; (3) refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your contributions or any portion thereof.',
      'We also reserve the right to: (4) remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.',
      'We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems, or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time.',
    ],
  },
  'contact-information': {
    title: 'Contact Information',
    paragraphs: [
      'In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:',
      'Callify Pakistan — First Floor, Building#91-B, Commercial Tulip Block Sector C Bahria Town, Lahore, Pakistan. Email: support@callify.pk | WhatsApp: 0335-8936571.',
      'We aim to respond to all inquiries within 24–48 business hours. For urgent issues, please reach out via WhatsApp for faster assistance.',
    ],
  },
};

export default function TermsContent() {
  const [activeId, setActiveId] = useState(TERMS_SECTIONS[0].id);

  // Track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 }
    );

    TERMS_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-callify-bg py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* ── Left — Sidebar nav ──────────────────────────────── */}
          <AnimateIn variant="fadeLeft">
            <nav className="sticky top-24" aria-label="Terms sections">
              <ul className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
                {TERMS_SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={[
                        'block shrink-0 rounded-lg px-3 py-2 text-sm transition-colors duration-200',
                        activeId === section.id
                          ? 'font-medium text-callify-brand bg-callify-brand/5'
                          : 'text-callify-text-muted hover:text-callify-text hover:bg-callify-bg-alt',
                      ].join(' ')}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </AnimateIn>

          {/* ── Right — Content ─────────────────────────────────── */}
          <AnimateIn variant="fadeRight" delay={0.1}>
            <div className="flex flex-col gap-12">
              {TERMS_SECTIONS.map((section) => {
                const content = termsContent[section.id];
                return (
                  <article key={section.id} id={section.id}>
                    <h2 className="mb-4 text-xl font-bold text-callify-text sm:text-2xl">
                      {content.title}
                    </h2>
                    {content.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="mb-3 text-sm leading-relaxed text-callify-text-body sm:text-base last:mb-0"
                      >
                        {para}
                      </p>
                    ))}
                  </article>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
