'use client';

import { useEffect, useState } from 'react';
import Container from '@/components/Container';
import AnimateIn from '@/shared/AnimateIn';
import { PRIVACY_SECTIONS } from '@/constants';

const privacyContent = {
  'who-we-are': {
    title: 'Who we are',
    paragraphs: [
      'Callify Pakistan is an automated order verification call service provider for e-commerce businesses. Our website address is: https://callify.pk. We are headquartered at First Floor, Building#91-B, Commercial Tulip Block Sector C Bahria Town, Lahore, Pakistan.',
      'Our mission is to help Shopify and WooCommerce store owners reduce bogus orders and improve their order confirmation process through automated calling solutions.',
      'This privacy policy sets out how Callify uses and protects any information that you provide when you use this website or our services.',
    ],
  },
  comments: {
    title: 'Comments',
    paragraphs: [
      "When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.",
      'An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.',
    ],
  },
  media: {
    title: 'Media',
    paragraphs: [
      'If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.',
      'We may use uploaded media for the purpose of providing our services, improving user experience, and maintaining the functionality of our platform.',
    ],
  },
  cookies: {
    title: 'Cookies',
    paragraphs: [
      'If you leave a comment on our site you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.',
      'If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.',
      'When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks.',
    ],
  },
  'embedded-content': {
    title: 'Embedded content from other websites',
    paragraphs: [
      'Pages on this site may include embedded content (e.g., videos, images, articles, maps, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.',
      'These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.',
    ],
  },
  'who-we-share': {
    title: 'Who we share your data with',
    paragraphs: [
      'We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.',
      'We may share data with our integration partners (Shopify, WooCommerce) solely for the purpose of providing our call verification services. All data sharing is done securely and in compliance with applicable data protection regulations.',
      'If you request a password reset, your IP address will be included in the reset email for security purposes.',
    ],
  },
  'how-long': {
    title: 'How long we retain your data',
    paragraphs: [
      'If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.',
      'For users that register on our website, we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.',
      'Call logs and order verification data are retained for a period of 12 months for analytics and compliance purposes, after which they are automatically purged from our systems.',
    ],
  },
  'your-rights': {
    title: 'What rights you have over your data',
    paragraphs: [
      'If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.',
      'You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.',
      'To exercise any of these rights, please contact us at support@callify.pk or via WhatsApp at 0335-8936571.',
    ],
  },
  'where-sent': {
    title: 'Where your data is sent',
    paragraphs: [
      'Visitor comments may be checked through an automated spam detection service. Call data is processed on secure servers located in Pakistan and may be transmitted to our cloud infrastructure providers for processing and storage.',
      'We use industry-standard encryption (SSL/TLS) to protect data in transit. All stored data is encrypted at rest using AES-256 encryption standards.',
      'We take all reasonable precautions to ensure that your data is secure and in accordance with this privacy policy. If you have any concerns about your data, please contact us immediately.',
    ],
  },
};

export default function PrivacyContent() {
  const [activeId, setActiveId] = useState(PRIVACY_SECTIONS[0].id);

  // Track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 }
    );

    PRIVACY_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-callify-bg py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* ── Left — Sidebar nav ──────────────────────────────── */}
          <AnimateIn variant="fadeLeft">
            <nav className="sticky top-24" aria-label="Privacy sections">
              <ul className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
                {PRIVACY_SECTIONS.map((section) => (
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
              {PRIVACY_SECTIONS.map((section) => {
                const content = privacyContent[section.id];
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
