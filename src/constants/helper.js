import { siteConfig } from '@/config/config';

export function getMailtoUrl(subject = '') {
  const base = `mailto:${siteConfig.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

export function getWhatsAppUrl(message = '') {
  const num = '923358936571';
  return message ? `https://wa.me/${num}?text=${encodeURIComponent(message)}` : `https://wa.me/${num}`;
}

export function formatPrice(amount) {
  return `Rs ${amount.toLocaleString('en-PK')}`;
}
