# Lab Website — Project Spec

**Institution:** Michigan State University
**Build tool:** Claude Code
**Deployment:** Static site, hosted on **GitHub Pages** (required — no backend/server-rendered components)

---

## 1. Overview

A multi-page academic lab website showcasing research, publications, team members, and news. Clean, modern design with light/dark mode support, built in MSU brand colors.

**Lab name:** The Kuo Lab (also acceptable as "Kuo Lab" in tighter spaces like nav/footer)

**Build phase: Prototype first.** Before real content is gathered, build the site with placeholder/sample content throughout so the design and structure can be reviewed and tested. This means:
- All body copy: lorem ipsum text (sized appropriately for each section — short for cards/bios, longer for research descriptions)
- All images: placeholder images (e.g. `placehold.co`, or gray boxes labeled "Image Here" / "Team Photo Here" / "Research Photo Here")
- Section and page titles: real, descriptive titles (e.g. "Research Focus", "Recent Publications", "Meet the Team") — these should NOT be placeholder text, since the goal is to test navigation, layout, and information architecture
- "The Kuo Lab" / "Kuo Lab" used wherever the lab name appears (header, footer, page titles, hero)
- Publications, news items, and team members: 3–5 sample entries each, using lorem ipsum for names/descriptions where real data isn't available yet, clearly fake but plausible (e.g. "Jane Doe, PhD Student")

Once this prototype is reviewed and approved, the placeholder content gets swapped for real content from the checklist in Section 5 — structure and components should not need to change.

---

## 2. Pages & Features

### Home
- Hero section: lab name, PI name, one-line mission statement
- Recent news highlights (3–5 latest items)
- Featured / recent publications
- Quick links to Research, People, Publications

### Research
- Overview of lab's core research themes (2–4 focus areas, short descriptions)
- Optional: individual project pages/sections with images or diagrams
- Funding / sponsor logos

### Publications
- Filterable, sortable list (by year, topic, or type: journal / conference / preprint)
- Auto-formatted citations with links to PDF/DOI where available
- "Selected publications" highlighted separately from full list
- Search functionality

### People
- PI profile: photo, bio, CV link, contact info
- Current members: photo, role, research interest, link to personal site/socials
- Alumni list: name, current position
- "Join us" / recruiting section

### News
- Chronological feed (awards, papers accepted, talks, new members, etc.)
- Optional tags/categories

### Contact
- Location/map (MSU campus, East Lansing)
- Email, mailing address
- Social links (Twitter/X, GitHub, Google Scholar, LinkedIn)

### Extras
- Light/dark mode toggle (persisted via localStorage in the deployed site)
- RSS feed for news/publications

---

## 3. Design Direction

- **Style:** Clean, minimal, modern — generous whitespace, sticky nav, consistent header/footer across pages
- **Typography:** Sans-serif headings; body text sans or serif (finalize once in context)
- **Light/dark mode:** Full toggle support across all pages

### Color Palette — Michigan State University Brand Colors

**Core:**
| Name | Hex |
|---|---|
| Spartan Green (primary) | `#18453B` |
| White | `#FFFFFF` |
| Black (text/accessibility) | `#000000` |

**Accent greens** (hover states, tags, highlights, charts):
| Name | Hex |
|---|---|
| Kelly Green | `#008208` |
| Excellence Green | `#0B9A6D` |
| Lime Green | `#7BBD00` |

**Mode mapping:**
- *Light mode:* white background, Spartan Green nav/headers/accents, black body text
- *Dark mode:* near-black background, Spartan Green (or brightened variant) for headers/accents, white/light-gray body text, accent greens for interactive elements

---

## 4. Tech Stack (required)

- **Static site generator, fully static output — no server/backend:** Astro (recommended) or Next.js with `output: 'export'`. Both build to plain HTML/CSS/JS that GitHub Pages can serve directly.
- Markdown-based content collections for News and Publications (easy to update without touching code)
- **Deployment: GitHub Pages**
  - Use a GitHub Actions workflow to build the static site and publish to the `gh-pages` branch (or the `/docs` folder on `main`) on every push
  - If using a custom domain, add a `CNAME` file to the build output and configure DNS accordingly
  - If hosted at `username.github.io/repo-name` (not a custom domain), set the site's base path/config accordingly (e.g. Astro's `base` config) so asset links resolve correctly
  - No environment variables, databases, or server functions — everything must resolve at build time

---

## 5. Content Checklist (gather before building)

- [ ] Lab name + mission statement
- [ ] PI bio + photo + CV
- [ ] Research focus areas (2–4, with descriptions)
- [ ] Publications list (BibTeX file ideal, or structured list w/ year, authors, title, venue, links)
- [ ] Current team members (name, role, photo, interests, links)
- [ ] Alumni list (name, current position)
- [ ] News items (title, date, short description)
- [ ] Contact details (email, address, social links)
- [ ] Funding/sponsor logos (if any)

---

## 6. Handoff Note for Claude Code

**Phase 1 (now):** Hand this spec to Claude Code and ask it to scaffold the project as a **fully static site** (Astro or Next.js static export), build reusable components (nav, footer, publication card, member card), and populate every page with **lorem ipsum text and placeholder images** as described in Section 1 — using "The Kuo Lab" as the site name throughout, with real section/page titles. Set up a **GitHub Actions workflow to build and deploy to GitHub Pages** on push so it's viewable and testable live.

**Phase 2 (later):** Once the prototype is reviewed, swap placeholder content for real content using the checklist in Section 5 — the BibTeX file for Publications, real bios/photos for People, etc. Structure and components should carry over unchanged.
