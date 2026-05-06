import { siteConfig } from '@/config/config';
import GuideHero from '@/components/guide/GuideHero';
import FaqSection from '@/components/guide/FaqSection';

export const metadata = {
  title: 'Guide',
  description:
    'Find answers to frequently asked questions about Callify — setup, usage, safety, compliance, and support.',
  alternates: { canonical: `${siteConfig.url}/guide` },
};

export default function GuidePage() {
  return (
    <>
      <GuideHero />
      <FaqSection />
    </>
  );
}
