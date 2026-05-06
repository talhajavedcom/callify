import { siteConfig } from '@/config/config';
import FeaturesHero from '@/components/features/FeaturesHero';
import FeaturesGrid from '@/components/features/FeaturesGrid';

export const metadata = {
  title: 'Features',
  description:
    'Explore all Callify features — Shopify integration, WooCommerce support, branded calls, auto-retry, real-time analytics, and more.',
  alternates: { canonical: `${siteConfig.url}/features` },
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeaturesGrid />
    </>
  );
}
