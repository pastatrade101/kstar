import type { Field, Seo } from './types';

export const seo: Seo = {
  title: 'Contact Kstar International',
  description:
    'Contact Kstar International for partnerships, programs, opportunities, collaborations and general enquiries.'
};

export const hero = {
  eyebrow: 'Contact Kstar',
  title: 'Start a Conversation.',
  paragraphs: [
    'Have a question, opportunity, partnership idea or project you would like to discuss?',
    'Send us a message and our team will direct your enquiry to the appropriate organization or department.'
  ]
};

export const options = {
  eyebrow: 'Contact Options',
  title: 'Reach the Right Team.',
  items: [
    {
      title: 'General Enquiries',
      text: 'For questions about Kstar International, our programs and general activities.',
      meta: 'info@kstar.com',
      href: 'mailto:info@kstar.com',
      cta: { label: 'Email Kstar', href: 'mailto:info@kstar.com' },
      icon: 'mail'
    },
    {
      title: 'Kstar Malezi Foundation',
      text: 'For enquiries relating to gifted individuals, partnerships, mentorship and foundation programs.',
      cta: { label: 'Visit Foundation', href: '/kstar-malezi-foundation' },
      icon: 'seed'
    },
    {
      title: 'ClickData Tanzania',
      text: 'For enquiries relating to data literacy, training, capacity building and data-focused collaboration.',
      cta: { label: 'Visit ClickData', href: '/clickdata-tanzania' },
      icon: 'chart'
    }
  ]
};

export const formIntro = {
  eyebrow: 'Send a Message',
  title: 'Tell Us What You Have in Mind.',
  text: 'Our team will review your message and respond through the contact details you provide.'
};

export const fields: Field[] = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
    required: true
  },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+255 ...' },
  {
    name: 'enquiryType',
    label: 'Enquiry Type',
    type: 'select',
    required: true,
    options: [
      'General Enquiry',
      'Partnership',
      'Program Enquiry',
      'Media Enquiry',
      'Careers',
      'Kstar Malezi Foundation',
      'ClickData Tanzania',
      'Other'
    ]
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'What would you like to discuss?',
    required: true
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Write your message here...',
    required: true
  }
];

export const submitLabel = 'Send Message';

export const success = {
  title: 'Message Received.',
  paragraphs: [
    'Thank you for contacting Kstar.',
    'Our team will review your message and respond through the contact details you provided.'
  ]
};
