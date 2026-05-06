import { siteConfig } from '@/config/config';
import PricingHero from '@/components/pricing/PricingHero';
import PricingPlans from '@/components/pricing/PricingPlans';

export const metadata = {
  title: 'Pricing',
  description:
    'Callify offers flexible pricing plans for businesses of all sizes. Choose from Standard, Business, Corporate, or Ultimate plans.',
  alternates: { canonical: `${siteConfig.url}/pricing` },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
    </>
  );
}
