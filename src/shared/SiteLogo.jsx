'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/config';

export default function SiteLogo({ className = '', onClick, size = 'default' }) {
  const heightClass = size === 'sm' ? 'h-7 w-auto sm:h-8' : 'h-9 w-auto sm:h-10 md:h-11';

  return (
    <Link
      className={`inline-flex items-center transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary ${className}`}
      href="/"
      onClick={onClick}
    >
      <Image
        src={siteConfig.logoImage}
        alt={`${siteConfig.name} — home`}
        width={200}
        height={40}
        className={heightClass}
        priority={size !== 'sm'}
        sizes="(max-width: 768px) 180px, 220px"
      />
    </Link>
  );
}
