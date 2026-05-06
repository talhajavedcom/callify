import Container from '@/components/Container';
import AnimateIn from '@/shared/AnimateIn';

export default function PrivacyHero() {
  return (
    <section className="bg-callify-bg-hero py-16 md:py-20">
      <Container>
        <AnimateIn variant="fadeUp">
          <div className="mx-auto max-w-2xl text-center">
            {/* Label pill */}
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center rounded-full bg-callify-label-bg px-4 py-1.5 text-xs font-medium tracking-wide text-callify-label-text">
                Legal
              </span>
            </div>

            <h1 className="text-[2rem] font-bold leading-tight text-callify-text sm:text-[2.5rem] md:text-[3rem]">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-4 text-sm text-callify-text-muted">
              Last modified: November 15, 2023
            </p>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
