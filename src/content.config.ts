import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Namespace import of Astro's bundled zod v4. The `z` binding re-exported from
// 'astro:content' is deprecated in Astro 7.
import * as z from 'astro/zod';

/**
 * News — one Markdown file per item. Body is the full post; `summary` is used
 * in feed cards and the RSS description.
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

/**
 * Publications — one Markdown file per paper. Body is an optional abstract or
 * plain-language summary; everything needed for the citation is frontmatter.
 */
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'preprint']),
    topic: z.string(),
    selected: z.boolean().default(false),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().optional(),
  }),
});

/**
 * People — one Markdown file per current lab member. Body is the bio.
 * `order` controls display order; the PI (`role: 'pi'`) is rendered separately.
 */
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    role: z.enum(['pi', 'member']),
    interests: z.array(z.string()).default([]),
    order: z.number().default(99),
    email: z.string().optional(),
    website: z.string().optional(),
    github: z.string().optional(),
    scholar: z.string().optional(),
    cv: z.string().optional(),
  }),
});

/**
 * Alumni — one Markdown file per person, same copy-paste pattern as `people`.
 * Only frontmatter is used; no body needed.
 */
const alumni = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/alumni' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    years: z.string(),
    now: z.string(),
  }),
});

/**
 * Research areas — one Markdown file per focus area. Frontmatter holds the
 * title/summary shown on cards; the body is the long description on the
 * Research page. `topic` values on publications should match these titles.
 */
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { news, publications, people, alumni, research };
