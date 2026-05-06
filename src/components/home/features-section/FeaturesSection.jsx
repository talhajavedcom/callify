'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import Card from '@/shared/Card';
import { FEATURES } from '@/constants';

// Import custom icons
import featureIcon1 from '@/assets/features/feature-icon1.webp';
import featureIcon2 from '@/assets/features/feature-icon2.webp';
import featureIcon3 from '@/assets/features/feature-icon3.webp';
import featureIcon4 from '@/assets/features/feature-icon4.webp';
import featureIcon5 from '@/assets/features/feature-icon5.webp';
import featureIcon6 from '@/assets/features/feature-icon6.webp';
import featureIcon7 from '@/assets/features/feature-icon7.webp';
import featureIcon8 from '@/assets/features/feature-icon8.webp';
import featureIcon9 from '@/assets/features/feature-icon9.webp';

// Map feature icon keys to imported PNGs
const iconMap = {
  shopify: featureIcon1,
  woocommerce: featureIcon2,
  api: featureIcon3,
  branded: featureIcon4,
  calling: featureIcon5,
  retry: featureIcon6,
  analytics: featureIcon7,
  service: featureIcon8,
  setup: featureIcon9,
};

export default function FeaturesSection() {
  return (
    <section className="bg-callify-bg py-20 md:py-28">
      <Container>
        <SectionTitle
          label="Features & Benefits"
          title="Unlock the Power of Callify"
          subtitle="Experience the peace of mind that comes with automated order verification calls for your e-commerce store."
          align="center"
        />

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const iconSrc = iconMap[feature.icon] || featureIcon1;
            return (
              <Card
                key={feature.id}
                delay={index * 0.08}
                className="flex flex-col items-center border border-callify-border bg-callify-bg text-center"
              >
                {/* Custom Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center">
                  <Image
                    src={iconSrc}
                    alt={feature.title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-callify-text">{feature.title}</h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-callify-text-muted">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button href="/contact" variant="primary" size="lg" arrow>
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
