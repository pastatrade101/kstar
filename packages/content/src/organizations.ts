import type { Seo } from './types';

export const seo: Seo = {
  title: 'Our Organizations | Kstar International',
  description:
    'Discover Kstar Malezi Foundation and ClickData Tanzania, the specialized organizations within the wider Kstar ecosystem.'
};

export const hero = {
  eyebrow: 'Our Organizations',
  title: 'Different Missions. Shared Commitment to Growth.',
  paragraphs: [
    'Kstar works through specialized organizations designed to address different areas of opportunity and development.',
    'Each organization has its own focus, programs and identity while sharing a commitment to helping people and institutions grow.'
  ]
};

export const organizations = [
  {
    index: '01',
    slug: 'kstar-malezi-foundation',
    name: 'Kstar Malezi Foundation',
    kicker: 'Recognizing and Nurturing Potential.',
    cardKicker: 'Nurturing Gifted Potential.',
    accent: 'foundation' as const,
    text: 'Focused on gifted, talented and creative individuals, the Foundation works across identification, awareness, advocacy, guidance and development.',
    cardText:
      'Kstar Malezi Foundation focuses on identifying, supporting and creating opportunities for gifted, talented and creative individuals. Its work includes talent identification, awareness, advocacy, guidance and youth-focused development initiatives.',
    short:
      'Kstar Malezi Foundation identifies, supports and advocates for gifted, talented and creative individuals by creating access to awareness, guidance, development and meaningful opportunities.',
    cta: { label: 'Explore Kstar Malezi Foundation', href: '/kstar-malezi-foundation' },
    cardCta: { label: 'Visit Kstar Malezi Foundation', href: '/kstar-malezi-foundation' },
    icon: 'seed',
    photo: 'guidance' as const
  },
  {
    index: '02',
    slug: 'clickdata-tanzania',
    name: 'ClickData Tanzania',
    kicker: 'Strengthening the Way People Use Data.',
    cardKicker: 'Turning Data Into Better Decisions.',
    accent: 'data' as const,
    text: 'ClickData Tanzania builds data literacy and practical analytical capacity to help people and organizations make more informed decisions.',
    cardText:
      'ClickData Tanzania helps individuals and organizations strengthen their ability to understand, analyze and use data. Its work focuses on data literacy, evidence-based thinking and practical capacity development.',
    short:
      'ClickData Tanzania develops data literacy and analytical capacity, helping individuals and organizations understand information and use evidence to make better decisions.',
    cta: { label: 'Explore ClickData Tanzania', href: '/clickdata-tanzania' },
    cardCta: { label: 'Visit ClickData Tanzania', href: '/clickdata-tanzania' },
    icon: 'chart',
    photo: 'dataDashboard' as const
  }
];
