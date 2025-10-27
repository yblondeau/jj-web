export interface NavLink {
  label: string;
  href: string;
}

export const nav: NavLink[] = [
  { label: 'Préparation mentale', href: '/preparation-mentale' },
  { label: 'Coaching de vie', href: '/coaching-de-vie' },
  { label: 'Coaching en entreprise', href: '/coaching-en-entreprise' },
  { label: 'À propos', href: '/a-propos' },
];
