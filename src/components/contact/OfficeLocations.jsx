import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import AnimateIn from '@/shared/AnimateIn';
import { CONTACT_INFO } from '@/constants';

export default function OfficeLocations() {
  return (
    <section className="bg-callify-bg-alt py-20 md:py-28">
      <Container>
        <SectionTitle
          label="Global Presence"
          title="Explore our office locations"
          subtitle="Visit us at our headquarters in Lahore, Pakistan."
          align="center"
        />

        <AnimateIn variant="fadeUp" delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-callify-border shadow-sm">
            <iframe
              src={CONTACT_INFO.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Callify Office Location — Bahria Town, Lahore"
              className="w-full"
            />
          </div>

          {/* Address caption */}
          <div className="mt-5 text-center">
            <p className="text-sm leading-relaxed text-callify-text-muted">
              {CONTACT_INFO.address}
            </p>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
