import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const variants = {
  // filled green — main CTAs
  primary:
    'bg-callify-brand text-callify-text-on-dark hover:bg-callify-brand-dark shadow-callify-btn hover:shadow-callify-btn-hover',
  // bordered — light backgrounds
  outline:
    'bg-transparent text-callify-text border border-callify-border hover:border-callify-brand-muted hover:text-callify-brand',
  // bordered white — dark backgrounds
  outlineDark:
    'bg-transparent text-callify-text-on-dark border border-white/20 hover:border-white/50 hover:bg-white/5',
  // muted green pill — "Shopify App", "24/7 Live Chat"
  muted:
    'bg-callify-label-bg text-callify-label-text hover:bg-callify-brand-muted hover:text-callify-brand-dark',
  // text only
  ghost: 'bg-transparent text-callify-text-body hover:text-callify-text hover:bg-black/5',
};

const sizes = {
  sm: 'px-4 py-2 text-xs gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3 text-sm gap-2',
  xl: 'px-8 py-3.5 text-base gap-2.5',
};

const iconSize = { sm: 13, md: 15, lg: 15, xl: 17 };

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  arrow = false,
  icon: Icon,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const cls = [
    'inline-flex items-center justify-center font-medium rounded-full',
    'transition-all duration-200 ease-out cursor-pointer select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-callify-brand/50 focus-visible:ring-offset-2',
    disabled ? 'opacity-50 pointer-events-none' : '',
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const sz = iconSize[size] ?? 15;

  const inner = (
    <>
      {Icon && <Icon size={sz} strokeWidth={1.8} />}
      {children}
      {arrow && <ArrowRight size={sz} strokeWidth={2} />}
    </>
  );

  if (href) {
    if (external)
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
          {inner}
        </a>
      );
    return (
      <Link href={href} className={cls} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls} {...props}>
      {inner}
    </button>
  );
}
