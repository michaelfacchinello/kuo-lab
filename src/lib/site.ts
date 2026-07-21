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
    github: 'https://github.com/',
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
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * Research focus areas. PLACEHOLDER copy — real descriptions go here in Phase 2.
 * The `topic` values on publications match these titles so the Publications
 * filter and the Research page stay in sync.
 */
export const researchAreas = [
  {
    title: 'Computational Modeling',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  },
  {
    title: 'Experimental Systems',
    summary:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  },
  {
    title: 'Data & Methods',
    summary:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    body: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
  },
] as const;

/** PLACEHOLDER sponsors — swap for real logos in `public/` in Phase 2. */
export const sponsors = [
  'Funding Source One',
  'Funding Source Two',
  'Funding Source Three',
  'Funding Source Four',
] as const;
