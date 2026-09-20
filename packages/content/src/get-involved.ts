import type { Field, Seo } from './types';

export const seo: Seo = {
  title: 'Get Involved | Kstar International',
  description:
    'Volunteer, collaborate, mentor or partner with Kstar International and help create opportunities around talent, creativity and knowledge.'
};

export const hero = {
  eyebrow: 'Get Involved',
  title: 'Your Skills Can Help Create Opportunity.',
  paragraphs: [
    'Meaningful impact is rarely created by one person or one organization.',
    'It happens when people contribute their experience, knowledge, networks and ideas toward something bigger.',
    'There are different ways to become part of Kstar.'
  ]
};

export const ways = {
  eyebrow: 'Ways to Get Involved',
  title: 'Six Ways to Contribute.',
  items: [
    {
      title: 'Volunteer',
      text: 'Contribute your time and skills to programs, activities and events.',
      icon: 'hand'
    },
    {
      title: 'Become a Mentor',
      text: 'Share your experience and help emerging talent learn and grow.',
      icon: 'compass'
    },
    {
      title: 'Partner With Us',
      text: 'Collaborate with Kstar or one of our organizations on programs, initiatives or events.',
      icon: 'connect'
    },
    {
      title: 'Share an Opportunity',
      text: 'Know about a program, competition, scholarship, training opportunity or platform that could benefit our community? Tell us about it.',
      icon: 'megaphone'
    },
    {
      title: 'Collaborate on a Project',
      text: 'Have an idea aligned with our mission? We are open to exploring meaningful collaborations.',
      icon: 'idea'
    },
    {
      title: 'Support Our Programs',
      text: 'Organizations and individuals can contribute resources, expertise, services or other forms of support toward selected initiatives.',
      icon: 'shield'
    }
  ]
};

export const formIntro = {
  eyebrow: 'Get Involved Form',
  title: 'Tell Us How You Would Like to Contribute.',
  paragraphs: [
    'Complete the form below and tell us a little about yourself.',
    'Our team will review your submission and contact you when there is a relevant opportunity to collaborate.'
  ]
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
    name: 'intent',
    label: 'I Would Like To',
    type: 'select',
    required: true,
    options: [
      'Volunteer',
      'Become a Mentor',
      'Partner With Kstar',
      'Collaborate on a Project',
      'Share an Opportunity',
      'Support a Program',
      'Other'
    ]
  },
  {
    name: 'interest',
    label: 'Area of Interest',
    type: 'select',
    required: true,
    options: [
      'Creativity',
      'Sports',
      'Music',
      'Talent Development',
      'Events',
      'Business & Entrepreneurship',
      'Data & Research',
      'Kstar Malezi Foundation',
      'ClickData Tanzania',
      'Communications',
      'Technology',
      'Other'
    ]
  },
  {
    name: 'skills',
    label: 'Skills / Experience',
    type: 'textarea',
    placeholder: 'Tell us about the skills or experience you would like to contribute.'
  },
  {
    name: 'availability',
    label: 'Availability',
    type: 'text',
    placeholder: 'Tell us when and how you are available.'
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Anything else you would like us to know?'
  }
];

export const submitLabel = 'Submit Interest';

export const success = {
  title: 'Thank You for Reaching Out.',
  paragraphs: [
    'Your submission has been received.',
    'Our team will review your information and contact you when there is a suitable opportunity to connect.'
  ]
};
