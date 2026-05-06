import { siteConfig } from '@/config/config';
import Hero from '@/components/home/hero/Hero';
import HowItWorks from '@/components/home/how-it-works/HowItWorks';
import FraudProtection from '@/components/home/fraud-protection/FraudProtection';
import FeaturesSection from '@/components/home/features-section/FeaturesSection';
import PricingPreview from '@/components/home/pricing-preview/PricingPreview';

export const metadata = {
  title: 'Callify | Automated Order Verification for eCommerce',
  description:
    'Automate order verification calls for your Shopify or WooCommerce store in Urdu or English. Reduce bogus orders and increase delivery rates with Callify.',
  alternates: { canonical: `${siteConfig.url}/` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FraudProtection />
      <FeaturesSection />
      <PricingPreview />
    </>
  );
}
