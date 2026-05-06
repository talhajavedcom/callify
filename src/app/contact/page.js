import { siteConfig } from '@/config/config';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';
import OfficeLocations from '@/components/contact/OfficeLocations';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Callify — reach us via WhatsApp, email, or visit our office in Bahria Town, Lahore.',
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <OfficeLocations />
    </>
  );
}
