/**
 * Method/process steps data.
 * Describes the 6-step installation process.
 */

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const methodSteps: MethodStep[] = [
  {
    number: '01',
    title: 'Estudio personalizado',
    description: 'Analizamos tu consumo y diseñamos la solución exacta para tu hogar.',
    icon: 'search',
  },
  {
    number: '02',
    title: 'Visita técnica',
    description: 'Un ingeniero revisa tu vivienda y confirma todos los detalles in situ.',
    icon: 'home-check',
  },
  {
    number: '03',
    title: 'Permisos y subvenciones',
    description: 'Tramitamos todos los permisos y ayudas por ti. No mueves un dedo.',
    icon: 'document',
  },
  {
    number: '04',
    title: 'Instalación rápida',
    description: 'Montamos tu instalación en pocos días, sin complicaciones ni obras prolongadas.',
    icon: 'sun',
  },
  {
    number: '05',
    title: 'Legalización y excedentes',
    description: 'Damos de alta tu instalación y gestionamos la compensación de la energía sobrante.',
    icon: 'check',
  },
  {
    number: '06',
    title: 'Monitoreo y soporte',
    description: 'Controla tu producción en tiempo real y disfruta de soporte continuo de por vida.',
    icon: 'monitor',
  },
];
