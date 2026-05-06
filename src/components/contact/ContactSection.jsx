'use client';

import { useState } from 'react';
import { MessageCircle, MapPin, Mail, Headphones } from 'lucide-react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import AnimateIn from '@/shared/AnimateIn';
import { CONTACT_INFO } from '@/constants';

const contactItems = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: CONTACT_INFO.whatsapp,
    href: `https://wa.me/923358936571`,
  },
  {
    icon: MapPin,
    title: 'Location',
    detail: CONTACT_INFO.address,
  },
  {
    icon: Mail,
    title: 'Feedback',
    detail: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Headphones,
    title: 'Report Issue',
    detail: 'Get priority support',
    href: `https://wa.me/923358936571`,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-callify-bg py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left — Contact info ─────────────────────────────── */}
          <AnimateIn variant="fadeLeft">
            <h2 className="mb-3 text-[1.6rem] font-bold leading-tight text-callify-text sm:text-[1.85rem]">
              How can we help you today?
            </h2>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-callify-text-muted sm:text-base">
              Reach out to us through any of the channels below, or fill in the form and we&apos;ll
              get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? 'a' : 'div';
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'group flex items-start gap-4 rounded-xl p-3 -mx-3 transition-colors duration-200 hover:bg-callify-bg-alt',
                    }
                  : {
                      className: 'flex items-start gap-4 p-3 -mx-3',
                    };

                return (
                  <Wrapper key={item.title} {...wrapperProps}>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-callify-bg-dark">
                      <Icon size={18} className="text-callify-text-on-dark" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-callify-text">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-callify-text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </AnimateIn>

          {/* ── Right — Contact form ────────────────────────────── */}
          <AnimateIn variant="fadeRight" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-callify-border bg-callify-bg p-6 shadow-sm sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1.5 block text-xs font-medium text-callify-text-body"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full rounded-lg border border-callify-border bg-callify-bg px-4 py-2.5 text-sm text-callify-text outline-none transition-colors duration-200 placeholder:text-callify-text-light focus:border-callify-brand focus:ring-1 focus:ring-callify-brand/20"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-xs font-medium text-callify-text-body"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="w-full rounded-lg border border-callify-border bg-callify-bg px-4 py-2.5 text-sm text-callify-text outline-none transition-colors duration-200 placeholder:text-callify-text-light focus:border-callify-brand focus:ring-1 focus:ring-callify-brand/20"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-callify-text-body"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-lg border border-callify-border bg-callify-bg px-4 py-2.5 text-sm text-callify-text outline-none transition-colors duration-200 placeholder:text-callify-text-light focus:border-callify-brand focus:ring-1 focus:ring-callify-brand/20"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-medium text-callify-text-body"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full rounded-lg border border-callify-border bg-callify-bg px-4 py-2.5 text-sm text-callify-text outline-none transition-colors duration-200 placeholder:text-callify-text-light focus:border-callify-brand focus:ring-1 focus:ring-callify-brand/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-callify-text-body"
                >
                  Comments / Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                  className="w-full resize-none rounded-lg border border-callify-border bg-callify-bg px-4 py-2.5 text-sm text-callify-text outline-none transition-colors duration-200 placeholder:text-callify-text-light focus:border-callify-brand focus:ring-1 focus:ring-callify-brand/20"
                />
              </div>

              {/* Submit */}
              <div className="mt-6">
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
