import type { Seo } from './types';

export const partner = {
  seo: {
    title: 'Partner With Kstar International',
    description:
      'Kstar welcomes collaboration with organizations and individuals whose work aligns with our mission.'
  } satisfies Seo,
  hero: {
    eyebrow: 'Partnerships',
    title: 'Stronger Opportunities Are Built Together.',
    paragraphs: [
      'Kstar welcomes collaboration with organizations and individuals whose work aligns with our mission.',
      'Partnerships may involve:'
    ]
  },
  areas: [
    'programs',
    'mentorship',
    'training',
    'events',
    'research',
    'technology',
    'talent development',
    'knowledge sharing',
    'community initiatives',
    'or access to opportunities'
  ],
  cta: {
    eyebrow: 'Start Here',
    title: 'Interested in Collaborating?',
    text: 'Tell us about your organization, idea and the kind of partnership you have in mind.',
    primary: { label: 'Start a Partnership Conversation', href: '/contact' },
    secondary: { label: 'Get Involved', href: '/get-involved' }
  }
};

export const updates = {
  seo: {
    title: 'News & Updates | Kstar International',
    description:
      'Stay informed about Kstar programs, organizational updates, events, partnerships and opportunities.'
  } satisfies Seo,
  hero: {
    eyebrow: 'News & Updates',
    title: 'Ideas, Activities and Opportunities.',
    text: 'Stay informed about Kstar programs, organizational updates, events, partnerships and opportunities.'
  },
  categories: [
    'Kstar International',
    'Kstar Malezi Foundation',
    'ClickData Tanzania',
    'Creativity',
    'Sports',
    'Music',
    'Events',
    'Opportunities'
  ],
  empty:
    'There are no published updates yet. Follow our official channels or check this page again for news, events and opportunities.',
  items: [] as {
    title: string;
    category: string;
    date: string;
    excerpt: string;
    href: string;
  }[]
};

export const privacy = {
  seo: {
    title: 'Privacy Policy | Kstar International',
    description:
      'How information submitted through the Kstar International website may be collected, used and protected.'
  } satisfies Seo,
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  paragraphs: [
    'Kstar International respects the privacy of visitors who interact with our website.',
    'This page explains how information submitted through our website may be collected, used and protected.'
  ],
  note: 'The full privacy policy should eventually be reviewed against the actual technologies, analytics platforms, forms and data-processing systems used on the new website.'
};

export const terms = {
  seo: {
    title: 'Terms of Use | Kstar International',
    description:
      'The terms that govern the use of the Kstar International website and the information, resources and services made available through it.'
  } satisfies Seo,
  eyebrow: 'Legal',
  title: 'Terms of Use',
  paragraphs: [
    'These terms govern the use of the Kstar International website and the information, resources and services made available through it.',
    'By using this website, you agree to use its content and services responsibly and in accordance with applicable requirements.'
  ]
};
