/**
 * Site-wide metadata. Everything the templates need that isn't a content
 * collection lives here, so Phase 2 content swaps happen in one file.
 */
export const site = {
  name: 'The Kuo Lab',
  shortName: 'Kuo Lab',
  institution: 'Michigan State University',
  pi: 'Dr. Kuo',
  /* PLACEHOLDER: replace with the lab's real one-line mission statement. */
  tagline:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  description:
    'The Kuo Lab at Michigan State University — research, publications, people, and news.',
  contact: {
    email: 'kuolab@msu.edu',
    address: [
      'The Kuo Lab',
      '123 Placeholder Hall',
      'Michigan State University',
      'East Lansing, MI 48824',
    ],
  },
  social: {
    x: 'https://x.com/',
    scholar: 'https://scholar.google.com/',
    linkedin: 'https://www.linkedin.com/',
  },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'People', href: '/people' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const;

/** PLACEHOLDER sponsors — swap for real logos in `public/` in Phase 2. */
export const sponsors = [
  'Funding Source One',
  'Funding Source Two',
  'Funding Source Three',
  'Funding Source Four',
] as const;
