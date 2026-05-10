/**
 * Site-wide configuration and metadata.
 * This is the single source of truth for site information, SEO defaults, and contact details.
 */

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  phone: string;
  email: string;
  social: {
    twitter?: string;
    facebook?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Solfy',
  description: 'Instalación de placas solares y aerotermia en toda España. Estudio personalizado gratuito, gestión completa, garantía de hasta 25 años.',
  url: 'https://solfy.net', // Update with actual production domain
  ogImage: '/og-image.jpg', // Create this image or update path
  phone: '+34621409711',
  email: 'info@solfy.net',
  social: {
    // Add social media handles when available
    twitter: '@solfy',
    facebook: 'solfy',
  },
};

/**
 * Organization schema for JSON-LD structured data.
 * Used site-wide for SEO and search engine understanding.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    // Add actual social media URLs when available
    'https://twitter.com/solfy',
    'https://facebook.com/solfy',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ES',
  },
};
