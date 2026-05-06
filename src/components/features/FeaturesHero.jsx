import Image from 'next/image';
import Container from '@/components/Container';
import AnimateIn from '@/shared/AnimateIn';
import heroBg from '@/assets/hero-section/hero-bg.webp';

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-callify-brand/20 py-16 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={heroBg}
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>

      <Container className="relative z-10">
        <AnimateIn variant="fadeRight">
          <div className="max-w-3xl">
            <h1 className="text-[2rem] font-bold leading-tight text-callify-text sm:text-[2.5rem] md:text-[3rem]">
              Features
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-callify-text-body sm:text-base">
              Callify automates order verification with smart voice calls - reducing fake orders,
              boosting delivery success, and streamlining customer communication for modern
              eCommerce.
            </p>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
