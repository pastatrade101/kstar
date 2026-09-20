export type Seo = {
  title: string;
  description: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/** Eyebrow + title + optional lead — the heading unit used across every section. */
export type SectionHead = {
  eyebrow?: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
};

export type Card = {
  title: string;
  kicker?: string;
  text: string;
  cta?: Cta;
  icon?: string;
};

export type Field = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
  required?: boolean;
};
