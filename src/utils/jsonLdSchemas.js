import { siteConfig } from '@/config/config';

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'ContactAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/contact/`,
      },
    },
  };
}
