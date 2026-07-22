# The Kuo Lab — Website

Static site for The Kuo Lab at Michigan State University, built with [Astro](https://astro.build)
and deployed to GitHub Pages.

> **Status: Phase 1 prototype.** Every piece of body copy is lorem ipsum and every image is a
> labelled placeholder box. Section and page titles are real. See [Phase 2](#phase-2-real-content)
> for the content swap.

## Local development

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at `http://localhost:4321/kuo-lab/` — note the `/kuo-lab/` base path (see
[Deployment](#deployment)).

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Type-check `.astro` and `.ts` files |

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to
`main`. Nothing runs at request time — the output in `dist/` is plain HTML, CSS, and JS.

### One-time setup

1. Create the repo on GitHub and push this project to the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Set `site` and `base` in [`astro.config.mjs`](astro.config.mjs) to match where the site lives:

   | Hosting | `site` | `base` |
   | --- | --- | --- |
   | Project site (`user.github.io/kuo-lab`) | `'https://user.github.io'` | `'/kuo-lab'` |
   | User/org site (`user.github.io`) | `'https://user.github.io'` | `'/'` |
   | Custom domain | `'https://kuolab.example.edu'` | `'/'` |

   It is currently configured as a **project site at `/kuo-lab`**. If the repository has a different
   name, `base` must match it or every stylesheet and link will 404 on the deployed site.

4. For a custom domain, also add a `public/CNAME` file containing just the bare domain
   (e.g. `kuolab.example.edu`) and point DNS at GitHub Pages.

> Internal links go through the `url()` helper in [`src/lib/url.ts`](src/lib/url.ts) so the base path
> is applied everywhere. **Do not hardcode leading-slash hrefs** — use `url('/research')`, not
> `/research`, or the link will break on a project site.

## Editing content

Most updates are Markdown edits and need no code changes.

| What | Where |
| --- | --- |
| News items | `src/content/news/*.md` — one file per item |
| Publications | `src/content/publications/*.md` — one file per paper |
| People | `src/content/people/*.md` — one file per member; body is the bio |
| Alumni | `src/content/alumni/*.md` — one file per person |
| Research focus areas | `src/content/research/*.md` — one file per area |
| Lab name, PI, contact, socials, sponsors | `src/lib/site.ts` |

Frontmatter fields for each collection are defined and validated in
[`src/content.config.ts`](src/content.config.ts). A missing or misspelled field fails the build with
a specific error rather than shipping a broken page.

The `topic` value on a publication should match a research area title in `site.ts` — that is what
links the Research page's "Publications in this area" filter to the Publications page.

## Project structure

```
src/
  components/     Nav, Footer, ThemeToggle, PageHeader, Placeholder,
                  PublicationCard, MemberCard, NewsCard
  content/        Markdown + JSON content collections
  layouts/        BaseLayout (head, theme script, nav, footer)
  lib/            site metadata, base-aware url() helper, date formatting
  pages/          One file per route; rss.xml.ts and publications.xml.ts are feeds
  styles/         global.css — MSU palette + light/dark tokens
public/           Static assets copied verbatim (favicon, future CNAME, logos)
```

## Design notes

- **Colors** are MSU brand values, defined once as CSS custom properties in `src/styles/global.css`
  and referenced through semantic tokens (`--bg`, `--text`, `--brand`, `--accent`).
- **Dark mode** brightens Spartan Green (`#18453B`), which is too dark to read against a near-black
  background. Theme choice persists in `localStorage` and is applied by an inline script in
  `BaseLayout.astro` before first paint, so there is no flash of the wrong theme.
- **Placeholder images** are self-contained CSS/SVG boxes rather than calls to an image host, so the
  site renders identically offline and in CI.
- **Publications filtering** (search, year, type, topic, sort) is plain client-side JavaScript over
  `data-` attributes. It requires no backend and degrades to the full list if JS is unavailable.

## Phase 2: real content

Swap placeholders for real content per the checklist in `lab-website-spec.md` §5. The structure and
components carry over unchanged:

- [ ] Mission statement, PI bio, photo, CV → `src/lib/site.ts`, `src/content/people/kuo.md`
- [ ] Research focus areas → `src/content/research/`
- [ ] Publications (from BibTeX) → `src/content/publications/`
- [ ] Team members and alumni → `src/content/people/`, `src/content/alumni/`
- [ ] News items → `src/content/news/`
- [ ] Contact details and socials → `src/lib/site.ts`
- [ ] Replace every `<Placeholder />` with a real image (see
      [Astro's image guide](https://docs.astro.build/en/guides/images/))
- [ ] Funding/sponsor logos → `public/`, referenced from the Research page
