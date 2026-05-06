import { siteConfig } from '@/config/config';
import TermsHero from '@/components/terms/TermsHero';
import TermsContent from '@/components/terms/TermsContent';

export const metadata = {
  title: 'Terms and Conditions',
  description:
    'Read the terms and conditions for using Callify services — our policies on usage, property rights, prohibited activities, and more.',
  alternates: { canonical: `${siteConfig.url}/terms-and-conditions` },
};

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  );
}
