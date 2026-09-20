import type { Seo } from './types';

export const seo: Seo = {
  title: 'Kstar International | Creativity, Talent, Sports & Innovation',
  description:
    'Kstar International connects creativity, talent, sports, ideas and innovation to opportunities that help individuals and communities grow.'
};

export const hero = {
  eyebrow: 'Kstar International',
  title: 'Turning Passion Into Possibility.',
  text: 'Kstar International is a platform for creativity, talent, sports, ideas and innovation — connecting people with opportunities to learn, grow, collaborate and make an impact.',
  primary: { label: 'Explore Kstar', href: '/what-we-do' },
  secondary: { label: 'Get Involved', href: '/get-involved' },
  supportingLink: { label: 'Discover our organizations', href: '/organizations' },
  stats: [
    { value: 6, suffix: '', label: 'Areas of focus across talent, ideas and knowledge' },
    { value: 3, suffix: '', label: 'Departments built around creativity, sports and music' },
    { value: 2, suffix: '', label: 'Independent organizations within the Kstar ecosystem' }
  ]
};

export const intro = {
  eyebrow: 'About Kstar',
  title: 'Where Ideas, Talent and Opportunity Come Together.',
  paragraphs: [
    'Great potential exists everywhere.',
    'What is often missing is the right environment, guidance, exposure and opportunity to turn that potential into something meaningful.',
    'Kstar International was created to help bridge that gap.',
    'We bring people together around creativity, sports, talent development, innovation, knowledge and collaboration — creating opportunities for individuals to discover what they can do and take meaningful steps forward.'
  ],
  cta: { label: 'About Kstar', href: '/about' }
};

export const brandStatement = {
  title: 'We Believe Potential Deserves Opportunity.',
  paragraphs: [
    'Talent can begin anywhere.',
    'An idea can come from anyone.',
    'Our role is to help create environments where people can express their abilities, develop their skills, connect with others and transform ambition into action.'
  ]
};

export const whoWeAre = {
  eyebrow: 'Our Story',
  title: 'Building Platforms for People to Grow.',
  paragraphs: [
    'Founded in 2025, Kstar International is driven by a simple belief: people achieve more when passion is supported by knowledge, opportunity and meaningful connections.',
    'Our work brings together creativity, sports, talent, entrepreneurship, dialogue, events and community-focused initiatives.',
    'Through our programs, departments and organizations, we aim to create spaces where individuals can discover opportunities, strengthen their abilities and move closer to their goals.'
  ],
  vision: {
    title: 'Our Vision',
    text: 'To see people confidently transform their ideas, talents and ambitions into meaningful realities.'
  },
  mission: {
    title: 'Our Mission',
    text: 'To connect passion with purpose by creating opportunities for creativity, sports, talent development, innovation, knowledge sharing and collaboration.'
  }
};

export const promise = {
  eyebrow: 'Our Promise',
  title: 'From Potential to Progress.',
  lead: 'We do more than celebrate talent. We create opportunities for people to:',
  items: [
    'discover their strengths',
    'develop practical skills',
    'express ideas',
    'connect with others',
    'participate in meaningful programs',
    'access new opportunities',
    'and turn their ambitions into action'
  ]
};

export const departments = {
  eyebrow: 'Our Departments',
  title: 'Different Passions. One Purpose.',
  lead: 'Kstar International operates through specialized departments designed to discover, nurture and showcase talent.',
  items: [
    {
      slug: 'creativity',
      name: 'Department of Creativity',
      kicker: 'Imagine. Create. Express.',
      text: 'A platform for creative individuals to develop their ideas, sharpen their abilities and share their work with wider audiences. The department encourages creativity across different disciplines and provides opportunities for learning, collaboration and exposure.',
      cta: { label: 'Explore Creativity', href: '/what-we-do/creativity' },
      photo: 'creativity' as const,
      icon: 'spark'
    },
    {
      slug: 'sports',
      name: 'Department of Sports',
      kicker: 'Talent Needs Opportunity.',
      text: 'Our sports initiatives focus on identifying ability, encouraging development and creating opportunities for athletes to grow both physically and professionally. We believe sport can build confidence, discipline, teamwork and opportunity.',
      cta: { label: 'Explore Sports', href: '/what-we-do/sports' },
      photo: 'sports' as const,
      icon: 'trophy'
    },
    {
      slug: 'music',
      name: 'Department of Music',
      kicker: 'Create. Perform. Connect.',
      text: 'The Department of Music supports emerging musical talent by creating spaces for learning, expression, collaboration and performance. From developing skills to connecting artists with opportunities, we aim to help creativity find its audience.',
      cta: { label: 'Explore Music', href: '/what-we-do/music' },
      photo: 'music' as const,
      icon: 'music'
    }
  ]
};

export const whatWeDo = {
  eyebrow: 'What We Do',
  title: 'Creating Opportunity Around Talent and Ideas.',
  lead: 'Our work is designed around one central goal: helping people move from potential to meaningful progress.',
  items: [
    {
      title: 'Discover & Promote Creativity',
      text: 'We identify creative talent and provide platforms where ideas, skills and artistic expression can be developed and shared.',
      icon: 'spark'
    },
    {
      title: 'Develop Talent',
      text: 'Through mentorship, learning opportunities, programs and practical experiences, we help individuals strengthen their capabilities.',
      icon: 'growth'
    },
    {
      title: 'Create Constructive Dialogue',
      text: 'We bring people together to exchange ideas, share experiences and explore solutions through meaningful conversation.',
      icon: 'dialogue'
    },
    {
      title: 'Connect People & Opportunities',
      text: 'We create connections between individuals, professionals, institutions, organizations and communities.',
      icon: 'connect'
    },
    {
      title: 'Support Business Ideas',
      text: 'We provide platforms where promising ideas can be presented, challenged, improved and connected with opportunities for growth.',
      icon: 'idea'
    },
    {
      title: 'Produce & Manage Events',
      text: 'We develop experiences that bring communities, ideas, talent and organizations together — from concept development to event execution.',
      icon: 'event'
    }
  ],
  cta: { label: 'See What We Do', href: '/what-we-do' }
};

export const ecosystem = {
  eyebrow: 'Our Organizations',
  title: 'One Vision. Different Areas of Impact.',
  lead: 'Kstar International works alongside specialized organizations with distinct missions and areas of focus.'
};

export const whyKstar = {
  eyebrow: 'Why We Exist',
  title: 'Potential Should Not Be Limited by Lack of Opportunity.',
  paragraphs: [
    'People often have ideas, talent and ambition long before they have access to the right platforms.',
    'Kstar exists to help create those platforms.',
    'We work to build environments where people can:'
  ],
  items: [
    { title: 'Be Discovered', text: 'Give talent and promising ideas greater visibility.' },
    { title: 'Learn', text: 'Build practical knowledge and skills.' },
    {
      title: 'Connect',
      text: 'Meet people, organizations and opportunities that can support progress.'
    },
    { title: 'Participate', text: 'Take part in programs, events and initiatives.' },
    {
      title: 'Grow',
      text: 'Turn experience, knowledge and exposure into meaningful development.'
    }
  ]
};

export const values = {
  eyebrow: 'Our Values',
  title: 'The Principles Behind Our Work.',
  items: [
    {
      title: 'Innovation',
      text: 'We welcome fresh thinking and explore better ways to create opportunity.'
    },
    {
      title: 'Excellence',
      text: 'We pursue quality in the programs, experiences and services we deliver.'
    },
    {
      title: 'Empowerment',
      text: 'We help people build the confidence, skills and opportunities they need to move forward.'
    },
    {
      title: 'Collaboration',
      text: 'We believe meaningful progress happens when people share ideas, knowledge and resources.'
    },
    {
      title: 'Evidence-Based Thinking',
      text: 'We value information, learning and insight when making decisions and designing programs.'
    },
    {
      title: 'Resilience',
      text: 'We encourage persistence, learning and continuous improvement.'
    }
  ]
};

export const impact = {
  eyebrow: 'Our Direction',
  title: 'Building More Than Programs.',
  paragraphs: [
    'Our goal is to build an ecosystem where talent, knowledge, creativity and opportunity continuously strengthen one another.',
    'Every connection made, skill developed, idea supported and opportunity created contributes to something bigger:'
  ],
  highlight: 'people becoming more capable of shaping their own future.'
};

export const getInvolvedCta = {
  eyebrow: 'Join the Journey',
  title: 'There Is a Place for You at Kstar.',
  paragraphs: [
    'You can contribute your skills, collaborate on a project, support a program, share an opportunity or simply start a conversation.',
    'If you believe in creating possibilities for others, we would like to hear from you.'
  ],
  primary: { label: 'Get Involved', href: '/get-involved' },
  secondary: { label: 'Contact Us', href: '/contact' }
};

export const contactCta = {
  eyebrow: 'Start a Conversation',
  title: "Have an Idea? Let's Talk.",
  text: 'Whether you want to collaborate, propose an initiative, work with one of our organizations or learn more about Kstar, send us a message.',
  cta: { label: 'Contact Kstar', href: '/contact' }
};

/** Reusable featured CTA blocks (copy §16). */
export const featuredCtas = [
  {
    title: 'Discover What Is Possible.',
    text: "Explore Kstar's programs, organizations and opportunities.",
    cta: { label: 'Explore Kstar', href: '/what-we-do' }
  },
  {
    title: 'Have Talent? An Idea? A Vision?',
    text: 'There may be an opportunity to develop it, share it or connect with others who can help move it forward.',
    cta: { label: 'Get Involved', href: '/get-involved' }
  },
  {
    title: "Let's Build Something Meaningful.",
    text: 'We welcome organizations and individuals interested in creating opportunities together.',
    cta: { label: 'Partner With Us', href: '/partner-with-us' }
  }
];
