import AnimateIn from '@/shared/AnimateIn';

export default function SectionTitle({ title, subtitle, label, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';
  const spacing = (className || '').trim() || 'mb-14 lg:mb-16';

  return <AnimateIn variant="fadeUp" className={`${spacing} ${alignment}`}></AnimateIn>;
}
