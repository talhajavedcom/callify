'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import Container from '@/shared/Container';
import { NAV_LINKS } from '@/constants';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'sticky top-0 z-50 bg-[#1a1a1a] text-white',
        'transition-shadow duration-300',
        scrolled ? 'shadow-[0_1px_0_rgba(255,255,255,0.06)]' : '',
      ].join(' ')}
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-8">
          {/* ── Logo ──────────────────────────────────────────── */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 shrink-0 group focus-visible:outline-none"
            aria-label="Callify — home"
          >
            <Image
              src="/Logo.svg"
              alt="Callify logo"
              width={32}
              height={28}
              priority
              style={{ width: 'auto', height: '1.75rem' }}
              className="transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          {/* ── Desktop nav & CTA ───────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <nav className="flex items-center gap-7" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'text-[13px] transition-colors duration-150 focus-visible:outline-none',
                      active
                        ? 'text-white font-medium'
                        : 'text-[#b0b8b0] hover:text-white font-normal',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center">
              <Link
                href="/contact"
                className={[
                  'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5',
                  'bg-[#5c8a72] text-white text-[13px] font-medium',
                  'transition-all duration-200',
                  'hover:bg-[#4a7260]',
                  'shadow-[0_2px_8px_rgba(92,138,114,0.28)]',
                  'hover:shadow-[0_4px_14px_rgba(92,138,114,0.38)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c8a72]/50',
                ].join(' ')}
              >
                Get Support
                <ArrowRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────── */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-[#b0b8b0] hover:text-white hover:bg-white/8 transition-colors duration-150 focus-visible:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>
      </Container>

      {/* ── Mobile menu ─────────────────────────────────────────── */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <Container>
          <nav
            className="flex flex-col gap-1 py-3 border-t border-white/8"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'px-3 py-2.5 rounded-lg text-sm transition-colors duration-150',
                    active
                      ? 'text-white bg-white/8 font-medium'
                      : 'text-[#b0b8b0] hover:text-white hover:bg-white/5',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2 pb-1">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={[
                  'flex items-center justify-center gap-1.5 w-full rounded-full px-4 py-2.5',
                  'bg-[#5c8a72] text-white text-sm font-medium',
                  'transition-all duration-200 hover:bg-[#4a7260]',
                ].join(' ')}
              >
                Get Support
                <ArrowRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
