import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../lib/site';
import { url } from '../lib/url';

export async function GET(context: APIContext) {
  const news = (await getCollection('news')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: `${site.name} — News`,
    description: `News and updates from ${site.name} at ${site.institution}.`,
    // Channel link should point at the deployed site root, base path included.
    site: new URL(import.meta.env.BASE_URL, context.site ?? 'https://example.com'),
    items: news.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      categories: [...entry.data.tags],
      // url() keeps the `base` prefix so links resolve on GitHub Pages.
      link: url(`/news/${entry.id}`),
    })),
    customData: '<language>en-us</language>',
  });
}
