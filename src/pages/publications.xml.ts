import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../lib/site';
import { url } from '../lib/url';

export async function GET(context: APIContext) {
  const publications = (await getCollection('publications')).sort(
    (a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title),
  );

  return rss({
    title: `${site.name} — Publications`,
    description: `Publications from ${site.name} at ${site.institution}.`,
    // Channel link should point at the deployed site root, base path included.
    site: new URL(import.meta.env.BASE_URL, context.site ?? 'https://example.com'),
    items: publications.map((entry) => ({
      title: entry.data.title,
      description: `${entry.data.authors.join(', ')}. ${entry.data.venue}, ${entry.data.year}.`,
      // Only a year is known, so date to Jan 1 — enough for feed ordering.
      pubDate: new Date(Date.UTC(entry.data.year, 0, 1)),
      categories: [entry.data.type, entry.data.topic],
      link: entry.data.doi ? `https://doi.org/${entry.data.doi}` : url('/publications'),
    })),
    customData: '<language>en-us</language>',
  });
}
