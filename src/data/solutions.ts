/**
 * Solutions/product offerings data.
 * TypeScript interfaces ensure type safety when using this data across components.
 */

export interface Solution {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  iconColor: string;
}

export const solutions: Solution[] = [
  {
    id: 'residential',
    number: '01',
    title: 'Viviendas unifamiliares',
    description: 'Genera tu propia energía y reduce tu factura hasta un 90%. Estudio gratuito y financiación desde 39€/mes.',
    icon: 'home',
    link: '/products#residential',
    iconColor: '#c5b440',
  },
  {
    id: 'communities',
    number: '02',
    title: 'Comunidades de vecinos',
    description: 'Aprovecha la cubierta del edificio. Ahorro repartido entre todos los propietarios y gestión completa de subvenciones.',
    icon: 'building',
    link: '/products#communities',
    iconColor: '#7eaa84',
  },
  {
    id: 'business',
    number: '03',
    title: 'Empresas e industria',
    description: 'Reduce el coste eléctrico de tu negocio hasta un 70%. Subvenciones, amortización rápida y deducción del IRPF.',
    icon: 'factory',
    link: '/products#business',
    iconColor: '#5fb0cb',
  },
];

/**
 * Product schema generator for JSON-LD structured data.
 * Helps search engines understand our product offerings.
 */
export function generateProductSchema(solution: Solution) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: solution.title,
    description: solution.description,
    category: 'Solar Panel Installation',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '39',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '39',
        priceCurrency: 'EUR',
        unitText: 'MONTH',
      },
      availability: 'https://schema.org/InStock',
    },
  };
}
