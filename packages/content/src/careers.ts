import type { Seo } from './types';

export const seo: Seo = {
  title: 'Careers at Kstar International',
  description:
    'Explore opportunities to work, learn and grow with Kstar International and its organizations.'
};

export const hero = {
  eyebrow: 'Careers at Kstar',
  title: 'Build Your Career Around Meaningful Work.',
  paragraphs: [
    'We are building an organization shaped by creativity, curiosity, collaboration and the desire to create opportunity for others.',
    'If that sounds like the kind of environment where you would like to grow, we would like to hear from you.'
  ]
};

export const working = {
  eyebrow: 'Working at Kstar',
  title: 'Bring Your Skills. Keep Growing.',
  paragraphs: [
    'At Kstar, we value people who are willing to learn, contribute ideas and take responsibility for meaningful work.',
    'Depending on available opportunities, our teams may include people working across:'
  ],
  areas: [
    'creativity',
    'communications',
    'program coordination',
    'sports',
    'music',
    'events',
    'technology',
    'data',
    'research',
    'partnerships',
    'administration',
    'and community engagement'
  ]
};

export const valued = {
  eyebrow: 'What We Value',
  title: 'The People We Work Best With.',
  items: [
    { title: 'Curiosity', text: 'People who ask questions and keep learning.' },
    { title: 'Initiative', text: 'People who are willing to turn ideas into action.' },
    { title: 'Collaboration', text: 'People who communicate and work well with others.' },
    { title: 'Responsibility', text: 'People who take ownership of what they do.' },
    { title: 'Creativity', text: 'People who are willing to explore new possibilities.' },
    { title: 'Integrity', text: 'People who approach their work with honesty and respect.' }
  ]
};

export const vacancies = {
  eyebrow: 'Open Opportunities',
  title: 'Current Vacancies',
  lead: 'Available opportunities will be published here when recruitment is open.',
  empty:
    'There are currently no published vacancies. Follow our official channels or check this page again for future opportunities.',
  items: [] as { title: string; type: string; location: string; href: string }[]
};

export const cta = {
  eyebrow: 'Careers',
  title: 'Interested in Joining Kstar?',
  text: 'When an opportunity becomes available, review the role requirements carefully and submit your application through the official application process.',
  primary: { label: 'View Opportunities', href: '#vacancies' },
  secondary: { label: 'Contact Us', href: '/contact' }
};
