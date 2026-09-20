import type { Seo } from './types';

export const seo: Seo = {
  title: 'What We Do | Kstar International',
  description:
    'Explore Kstar International programs across creativity, sports, talent development, events, business ideas and collaboration.'
};

export const hero = {
  eyebrow: 'What We Do',
  title: 'Creating Platforms for Talent, Ideas and Opportunity.',
  text: 'Our work focuses on helping people discover their potential, strengthen their abilities and connect with opportunities.'
};

export const focusAreas = {
  eyebrow: 'Our Focus Areas',
  title: 'Eight Ways We Create Opportunity.',
  items: [
    {
      title: 'Creativity',
      text: 'Supporting people with creative ideas and abilities through learning, exposure and collaboration.',
      icon: 'spark',
      href: '/what-we-do/creativity'
    },
    {
      title: 'Sports',
      text: 'Encouraging athletic development, discipline and access to opportunities.',
      icon: 'trophy',
      href: '/what-we-do/sports'
    },
    {
      title: 'Music',
      text: 'Creating environments where emerging musical talent can develop and express itself.',
      icon: 'music',
      href: '/what-we-do/music'
    },
    {
      title: 'Talent Development',
      text: 'Supporting individuals through guidance, mentorship, learning and practical experience.',
      icon: 'growth'
    },
    {
      title: 'Business Ideas',
      text: 'Providing platforms where promising ideas can be explored, presented and strengthened.',
      icon: 'idea'
    },
    {
      title: 'Events & Experiences',
      text: 'Creating meaningful events that bring people, communities and organizations together.',
      icon: 'event'
    },
    {
      title: 'Constructive Dialogue',
      text: 'Encouraging meaningful conversations around ideas, challenges, creativity and development.',
      icon: 'dialogue'
    },
    {
      title: 'Global Connections',
      text: 'Building relationships that connect people to wider networks, experiences and opportunities.',
      icon: 'globe'
    }
  ]
};

export const cta = {
  eyebrow: 'Partnerships',
  title: 'Have an Idea That Fits Our Mission?',
  text: 'We are open to partnerships, collaborative programs and initiatives aligned with our purpose.',
  primary: { label: 'Partner With Kstar', href: '/partner-with-us' },
  secondary: { label: 'Contact Us', href: '/contact' }
};

export const departments = [
  {
    slug: 'creativity',
    name: 'Creativity',
    eyebrow: 'Department of Creativity',
    seo: {
      title: 'Creativity | Kstar International',
      description:
        'Kstar creates spaces where creative people can explore ideas, improve their abilities, collaborate and showcase their work.'
    },
    title: 'Turn Ideas Into Expression.',
    paragraphs: [
      'Creativity gives people the ability to imagine possibilities beyond what already exists.',
      'At Kstar, we want creative people to have spaces where they can explore ideas, improve their abilities, collaborate and showcase their work.'
    ],
    listTitle: 'Areas May Include',
    list: [
      'visual creativity',
      'design',
      'writing',
      'digital content',
      'photography',
      'film',
      'creative technology',
      'performing arts',
      'and other forms of creative expression'
    ],
    cta: { label: 'Explore Opportunities', href: '/get-involved' },
    icon: 'spark',
    photo: 'creativity' as const,
    photoSecondary: 'creativeStudio' as const
  },
  {
    slug: 'sports',
    name: 'Sports',
    eyebrow: 'Department of Sports',
    seo: {
      title: 'Sports | Kstar International',
      description:
        'Kstar sports initiatives create opportunities where emerging athletes can improve their abilities and connect with environments that support development.'
    },
    title: 'Developing Talent Beyond the Game.',
    paragraphs: [
      'Sport can develop more than physical ability.',
      'It builds discipline, confidence, teamwork, resilience and ambition.',
      "Kstar's sports initiatives aim to create opportunities where emerging athletes can improve their abilities and connect with environments that support their development."
    ],
    listTitle: 'What Sport Builds',
    list: ['discipline', 'confidence', 'teamwork', 'resilience', 'ambition'],
    cta: { label: 'Explore Sports Programs', href: '/get-involved' },
    icon: 'trophy',
    photo: 'sports' as const,
    photoSecondary: 'sportsYouth' as const
  },
  {
    slug: 'music',
    name: 'Music',
    eyebrow: 'Department of Music',
    seo: {
      title: 'Music | Kstar International',
      description:
        'Kstar aims to provide emerging musical talent with opportunities to learn, collaborate, create and perform.'
    },
    title: 'Give Talent a Stage.',
    paragraphs: [
      'Music creates connections across people, experiences and cultures.',
      'Kstar aims to provide emerging musical talent with opportunities to learn, collaborate, create and perform.'
    ],
    listTitle: 'Opportunities May Include',
    list: ['learning', 'collaboration', 'creation', 'performance'],
    cta: { label: 'Explore Music Opportunities', href: '/get-involved' },
    icon: 'music',
    photo: 'music' as const,
    photoSecondary: 'musicStudio' as const
  }
];
