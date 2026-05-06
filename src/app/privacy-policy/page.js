import { siteConfig } from '@/config/config';
import PrivacyHero from '@/components/privacy/PrivacyHero';
import PrivacyContent from '@/components/privacy/PrivacyContent';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Learn about how Callify collects, uses, and protects your personal data — our privacy policy covers cookies, data retention, and your rights.',
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}
