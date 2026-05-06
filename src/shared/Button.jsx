import Link from 'next/link';

const variants = {
  primary:
    'bg-linear-to-r from-accent to-accent-hover text-white font-medium shadow-[0_0_20px_rgba(96,165,250,0.15)] hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]',
  secondary:
    'bg-linear-to-r from-accent2/10 to-accent2/5 text-accent2 border border-accent2/20 hover:border-accent2/40',
  outline:
    'border border-border text-text-secondary hover:border-border-hover hover:text-text-primary hover:bg-white/3',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/4',
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm gap-2',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2.5',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  icon: Icon,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
          {Icon && <Icon size={16} />}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {Icon && <Icon size={16} />}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
