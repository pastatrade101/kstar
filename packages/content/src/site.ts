import type { NavItem } from './types';

export const brand = {
  name: 'Kstar International',
  /** Brand lockup used in the header, footer and mobile drawer. */
  group: 'Kstar (T) Group',
  short: 'Kstar',
  legal: 'Kstar International Limited',
  tagline: 'Turn Your Desires Into Reality.',
  founded: 2025,
  description:
    'Creating opportunities around creativity, talent, sports, innovation and knowledge.',
  descriptions: {
    words20:
      'Kstar International creates opportunities around creativity, talent, sports, innovation and knowledge by connecting people, ideas and meaningful platforms.',
    words40:
      'Kstar International is an organization focused on creating opportunities around creativity, talent, sports, innovation and knowledge. We build platforms that help people discover their abilities, strengthen their skills, connect with others and transform ambition into meaningful progress.',
    words80:
      'Kstar International creates platforms where creativity, talent, sports, ideas and knowledge can connect with meaningful opportunities. Through specialized departments, programs, events and independent organizations, we help individuals discover their potential, develop practical abilities and build valuable connections. Our work is guided by the belief that talent can emerge anywhere and that access to the right environment, information and opportunity can help people transform ambition into meaningful progress.'
  },
  email: 'info@kstar.com'
};

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'What We Do',
    href: '/what-we-do',
    children: [
      { label: 'Overview', href: '/what-we-do' },
      { label: 'Creativity', href: '/what-we-do/creativity' },
      { label: 'Sports', href: '/what-we-do/sports' },
      { label: 'Music', href: '/what-we-do/music' }
    ]
  },
  {
    label: 'Kstar (T) Group',
    href: '/organizations',
    children: [
      { label: 'All Organizations', href: '/organizations' },
      { label: 'Kstar Malezi Foundation', href: '/kstar-malezi-foundation' },
      { label: 'ClickData Tanzania', href: '/clickdata-tanzania' }
    ]
  },
  { label: 'Updates', href: '/updates' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' }
];

export const primaryCta = { label: 'Get Involved', href: '/get-involved' };
export const secondaryCta = { label: 'Contact Us', href: '/contact' };

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
  { label: 'X', href: 'https://www.x.com', icon: 'x' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: 'youtube' }
];

export const footer = {
  intro: {
    title: 'Kstar International',
    tagline: 'Turn Your Desires Into Reality.',
    text: 'Creating opportunities around creativity, talent, sports, innovation and knowledge.'
  },
  columns: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'What We Do', href: '/what-we-do' },
        { label: 'Careers', href: '/careers' },
        { label: 'Get Involved', href: '/get-involved' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Kstar (T) Group',
      links: [
        { label: 'Kstar Malezi Foundation', href: '/kstar-malezi-foundation' },
        { label: 'ClickData Tanzania', href: '/clickdata-tanzania' }
      ]
    },
    {
      title: 'Departments',
      links: [
        { label: 'Creativity', href: '/what-we-do/creativity' },
        { label: 'Sports', href: '/what-we-do/sports' },
        { label: 'Music', href: '/what-we-do/music' }
      ]
    }
  ],
  follow: {
    title: 'Follow Kstar',
    text: 'Stay connected with our latest activities, programs and opportunities.'
  },
  bottom: {
    copyright: `© ${new Date().getFullYear()} Kstar International Limited. All rights reserved.`,
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' }
    ]
  }
};

/** Contextual button copy — used instead of repeating "Learn More". */
export const buttonCopy = {
  general: [
    'Explore Kstar',
    'Discover Our Work',
    'See What We Do',
    'About Kstar',
    'Get Involved',
    'Contact Us'
  ],
  programs: ['Explore Programs', 'Discover Opportunities', 'View Initiatives', 'Join the Program'],
  organizations: ['Visit the Foundation', 'Explore ClickData', 'Discover the Organization'],
  partnerships: [
    'Partner With Us',
    'Start a Conversation',
    'Discuss a Partnership',
    'Collaborate With Kstar'
  ],
  careers: ['View Opportunities', 'Explore Careers', 'Join Our Team']
};

export const formMicrocopy = {
  required: 'This field is required.',
  invalidEmail: 'Enter a valid email address.',
  invalidPhone: 'Enter a valid phone number.',
  loading: 'Sending...',
  error: "We couldn't send your message. Please try again.",
  success: 'Thank you. Your message has been received.'
};

export const notFound = {
  eyebrow: 'Page Not Found',
  title: 'Looks Like This Page Took a Different Path.',
  text: 'The page you are looking for may have moved or may no longer be available.',
  primary: { label: 'Return Home', href: '/' },
  secondary: { label: 'Contact Us', href: '/contact' }
};
