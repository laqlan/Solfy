/**
 * Customer testimonials data.
 * All testimonials with ratings, content, and customer information.
 */

export interface Testimonial {
  id: string;
  rating: number;
  content: string;
  author: {
    name: string;
    initial: string;
    location: string;
    type: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    rating: 5,
    content: 'He instalado 9 paneles con inversor. Asesoramiento de 10. Instalación en menos de 1 mes. Los instaladores muy atentos y cuidadosos. Encantado con mi instalación.',
    author: {
      name: 'Pedro Cernuda',
      initial: 'P',
      location: 'Madrid',
      type: 'Cliente unifamiliar',
    },
  },
  {
    id: '2',
    rating: 5,
    content: 'Contactamos con 5 empresas y Solfy fue la única que detectó las sombras de mi tejado y propuso microinversores. Se nota cuando hablas con personas que saben lo que hacen.',
    author: {
      name: 'Frank Martín',
      initial: 'F',
      location: 'Barcelona',
      type: 'Cliente unifamiliar',
    },
  },
  {
    id: '3',
    rating: 5,
    content: 'Ya está la instalación funcionando. Felicitar al comercial y al equipo técnico. Nos han informado de todo y se han encargado de todo, no me he tenido que preocupar de nada.',
    author: {
      name: 'Toñi Gago',
      initial: 'T',
      location: 'Valencia',
      type: 'Cliente unifamiliar',
    },
  },
];

/**
 * Review schema generator for JSON-LD structured data.
 */
export function generateReviewSchema(testimonial: Testimonial) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
    },
    reviewBody: testimonial.content,
    author: {
      '@type': 'Person',
      name: testimonial.author.name,
    },
  };
}
