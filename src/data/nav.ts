import { withBase } from '../utils/paths';

export interface NavLink {
  label: string;
  href: string;
}

export const nav: NavLink[] = [
  { label: 'Préparation mentale', href: withBase('/preparation-mentale') },
  { label: 'Coaching de vie', href: withBase('/coaching-de-vie') },
  { label: 'Coaching en entreprise', href: withBase('/coaching-en-entreprise') },
  { label: 'À propos', href: withBase('/a-propos') },
];
