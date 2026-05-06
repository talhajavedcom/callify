export function getMailtoUrl(subject = '') {
  const base = `mailto:${PERSONAL_INFO.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
