import Link from 'next/link';
import Image from 'next/image';
import Container from '@/shared/Container';
import { FOOTER_COL_1, FOOTER_COL_2 } from '@/constants';
import { siteConfig } from '@/config/config';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#b0b8b0]">
      {/* ── Main body ─────────────────────────────────────────── */}
      <Container>
        <div
          className="grid grid-cols-1 gap-10 py-14
                        sm:grid-cols-2
                        md:grid-cols-[1fr_auto_auto] md:gap-20"
        >
          {/* Col 1 — brand + tagline */}
          <div className="max-w-[260px]">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2.5 group focus-visible:outline-none"
              aria-label="Callify — home"
            >
              <Image
                src="/Logo.svg"
                alt="Callify logo"
                width={32}
                height={28}
                className="h-7 w-auto transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>
            <p className="text-sm leading-relaxed text-[#8a9490]">
              Send automated order confirmation calls in urdu or english to any Mobile number in
              Pakistan.
            </p>
          </div>

          {/* Col 2 — nav links */}
          <div className="flex flex-col gap-4">
            {FOOTER_COL_1.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-[#8a9490] transition-colors duration-150 hover:text-white focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — resource links */}
          <div className="flex flex-col gap-4">
            {FOOTER_COL_2.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-sm text-[#8a9490] transition-colors duration-150 hover:text-white focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* ── Bottom bar ────────────────────────────────────────── */}
      <div className="border-t border-white/[0.07]">
        <Container>
          <div
            className="flex flex-col gap-3 py-5
                          sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-xs text-[#5a6460]">© {siteConfig.copyright}</p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms-and-conditions"
                className="text-xs text-[#5a6460] transition-colors duration-150 hover:text-[#b0b8b0] focus-visible:outline-none"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="text-xs text-[#5a6460] transition-colors duration-150 hover:text-[#b0b8b0] focus-visible:outline-none"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
