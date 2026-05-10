/**
 * Frequently Asked Questions data.
 * Used in the FAQ section with accordion functionality.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'savings',
    question: '¿Cuánto puedo ahorrar realmente en mi factura de la luz?',
    answer: 'El ahorro medio de nuestros clientes está entre el 50% y el 90% sobre la factura eléctrica anual, dependiendo del consumo y de las horas de sol de tu zona. En el estudio personalizado te damos una cifra concreta para tu caso, sin compromiso.',
  },
  {
    id: 'cost',
    question: '¿Cuánto cuesta una instalación y cómo se financia?',
    answer: 'Trabajamos con financiación desde 39€/mes con nuestros partners bancarios. La inversión inicial se amortiza generalmente entre 5 y 8 años, y la garantía de los paneles es de hasta 25 años.',
  },
  {
    id: 'subsidies',
    question: '¿Hay subvenciones disponibles? ¿Os ocupáis vosotros?',
    answer: 'Sí. Existen tres ayudas principales: bonificaciones del IBI, fondos Next Generation y deducción del 20% en el IRPF. Tramitamos todo nosotros — desde la solicitud hasta la legalización — para que no tengas que preocuparte por papeleo.',
  },
  {
    id: 'roof',
    question: '¿Se pueden instalar en cualquier tejado?',
    answer: 'Casi siempre, sí. Hemos instalado en tejados de teja, pizarra, cubiertas planas, naves industriales y comunidades de vecinos. La única excepción habitual son los tejados de paja. En el estudio gratuito confirmamos si tu cubierta es viable.',
  },
  {
    id: 'timeline',
    question: '¿Cuánto tarda toda la instalación, de principio a fin?',
    answer: 'Desde la firma hasta tener los paneles funcionando, normalmente entre 4 y 8 semanas. La instalación física se realiza en 1-3 días. El resto del tiempo lo ocupan los trámites administrativos, que gestionamos íntegramente nosotros.',
  },
  {
    id: 'cloudy',
    question: '¿Y si tengo un día nublado o no estoy en casa?',
    answer: 'Los paneles producen también con cielo nublado, aunque menos. Cuando generes más de lo que consumes, el excedente se vierte a la red y te lo compensan en factura. Y si añades una batería solar, almacenas tu propia energía para usarla cuando la necesites.',
  },
];

/**
 * FAQ schema generator for JSON-LD structured data.
 * Helps with rich snippets in search results.
 */
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
