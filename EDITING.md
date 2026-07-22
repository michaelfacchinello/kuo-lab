# How to Update the Kuo Lab Website

*A guide for lab members. No coding knowledge needed — if you can edit a text
file, you can update the site.*

---

## The one idea to understand

**Every item on the website is one small text file.** One file per person, per
paper, per news item. To add something, you copy an existing file and change the
words. To remove something, you delete its file. The site rebuilds itself around
whatever files exist — grids grow, lists re-sort, filter menus update on their
own.

| To change… | Edit this |
| --- | --- |
| News | a file in `src/content/news/` |
| Publications | a file in `src/content/publications/` |
| Current members (incl. PI bio) | a file in `src/content/people/` |
| Alumni | a file in `src/content/alumni/` |
| Research focus areas | a file in `src/content/research/` |
| Lab name, mission statement, contact info, social links | `src/lib/site.ts` (fields are labeled — change text between the quotes only) |
| Photos in the Gallery | `src/pages/gallery.astro` (ask for help the first time) |

## Editing without installing anything

1. Go to the repository on **github.com** and log in.
2. Click into the folder (e.g. `src/content/people/`).
3. **To edit:** click a file, then the ✏️ pencil icon, make your change, press
   the green **Commit changes** button.
4. **To add:** open an existing file, copy all its text, go back, click
   **Add file → Create new file**, give it a name like `sam-park.md`, paste,
   edit the details, commit.
5. **To remove:** open the file → "…" menu → **Delete file** → commit.

Your change is saved instantly. It appears on the live site the next time a
deploy runs (see "Going live" at the end).

## Rules that keep you out of trouble

- **Keep the `---` lines** at the top and bottom of the header block. The
  labeled fields live between them; the person's bio / item's text goes below.
- **Keep text inside the quotes:** change `title: 'PhD Student'` to
  `title: 'Lab Manager'` — don't remove the quotes.
- **Dates** are written `2026-07-22` (year-month-day).
- **Don't worry about breaking the site.** Every change is checked before
  publishing. If a field is misspelled or missing, the update is rejected with a
  message naming the exact file and problem — the live site keeps showing the
  last good version. Nothing you commit can take the site down.
- Every previous version is saved forever, so any mistake can be undone.

---

## Copy-paste templates

### New team member → `src/content/people/firstname-lastname.md`

```markdown
---
name: 'Sam Park'
title: 'PhD Student'
role: 'member'
order: 5
interests: ['Chromatin & Epigenetics']
email: 'parksam@msu.edu'
---

One or two sentences about Sam's research interests go here.
```

- `order` controls position on the page (lower = earlier).
- Optional extra lines: `website: '…'`, `scholar: '…'`, `cv: '…'`.
- The `interests` entries should match research area titles so tags look
  consistent (see the files in `src/content/research/` for the current list).

### New publication → `src/content/publications/2026-short-title.md`

```markdown
---
title: 'Full title of the paper goes here'
authors: ['Sam Park', 'Jane Doe', 'M. Kuo']
venue: 'Journal of Biological Chemistry'
year: 2026
type: 'journal'
topic: 'Gene Expression & Regulation'
selected: false
doi: '10.1234/example.5678'
---

Optional: one-paragraph plain-language summary of the paper.
```

- `type` must be exactly one of: `journal`, `conference`, `preprint`.
- `topic` must match one of the research area titles — that's what the filter
  menu uses.
- `selected: true` also features it in the "Selected Publications" section.
- `doi:` and `pdf:` lines are optional — delete them if there's no link yet.

### New news item → `src/content/news/short-name.md`

```markdown
---
title: 'Kuo Lab paper accepted at JBC'
date: 2026-08-15
summary: 'One sentence shown on the news feed and homepage.'
tags: ['publications']
---

The full story goes here. As many paragraphs as you like.
```

- Newest date automatically appears first, and the top 3 show on the homepage.
- `tags` is free-form — use whatever labels make sense (`awards`, `people`,
  `talks`, `funding`…).

### New alumni entry → `src/content/alumni/firstname-lastname.md`

```markdown
---
name: 'Sam Park'
title: 'PhD, 2027'
years: '2022–2027'
now: 'Postdoctoral Fellow, Example University'
---
```

- Alumni are listed alphabetically by name, so there's no order field.

### New research focus area → `src/content/research/short-name.md`

```markdown
---
title: 'Protein Homeostasis'
summary: 'One or two sentences shown on the homepage card and at the top of the Research page section.'
order: 4
---

The full description shown on the Research page. As many paragraphs as you
like.
```

- `order` controls the sequence on the Research page and homepage.
- The homepage cards and the Research page both update automatically —
  adding this file is all it takes.
- Use the same `title` spelling in publications' `topic:` field so the
  "Publications in this area" link and filter menu connect.

### Graduating someone

1. Delete their file from `src/content/people/`.
2. Add a file for them in `src/content/alumni/`.

---

## Going live

While the site is in private/preview mode, edits are saved but published
manually: repo → **Actions** tab → **Deploy to GitHub Pages** → **Run
workflow**. Once the site launches publicly, publishing becomes automatic —
every committed change appears on the live site within about two minutes.
