import { Home, ArrowLeft } from 'lucide-react';
import Container from '@/shared/Container';
import Button from '@/shared/Button';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center">
      <div className="pointer-events-none absolute inset-0 gradient-mesh-strong" />
      <Container className="relative z-10 text-center">
        <span className="gradient-text font-display text-7xl font-bold sm:text-9xl">404</span>
        <h1 className="mt-4 font-display text-2xl font-bold text-text-primary sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button href="/" icon={Home}>
            Back Home
          </Button>
          <Button href="/contact" variant="outline" icon={ArrowLeft}>
            Contact Me
          </Button>
        </div>
      </Container>
    </section>
  );
}
