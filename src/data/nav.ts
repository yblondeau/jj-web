import { BASE } from '../utils/paths';

export interface NavLink {
  label: string;
  href: string;
}

export const nav: NavLink[] = [
  { label: 'Préparation mentale', href: `${BASE}/preparation-mentale` },
  { label: 'Coaching de vie', href: `${BASE}/coaching-de-vie` },
  { label: 'Coaching en entreprise', href: `${BASE}/coaching-en-entreprise` },
  { label: 'À propos', href: `${BASE}/a-propos` },
];
