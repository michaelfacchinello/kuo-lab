# Content collection forms

One workbook to gather real website content from the lab, plus a script that
converts the filled-in rows into the site's Markdown content.

## Files

| File | For | How it's filled in |
| --- | --- | --- |
| `Kuo-Lab-Content-Workbook.xlsx` | Members, publications, alumni, news, projects | One row per item, one tab per type; dropdowns where choices are fixed |
| `import-workbook.py` | You (or Claude) | Converts the filled-in workbook into `.md` files |

The workbook has five tabs. Everyone in the lab fills in a row on the
**Members** tab; whoever curates publications, news, alumni, and projects uses
those tabs. Each tab has grey hint notes and one yellow example row.

## The workflow

1. **Share the workbook** with the lab (see the draft email in the chat). Ask
   each member to add a row to the **Members** tab, and to email their photo
   separately.

2. **When the workbook comes back**, drop it in this folder and run:

   ```bash
   python3 content-forms/import-workbook.py content-forms/Kuo-Lab-Content-Workbook.xlsx
   ```

   This creates one Markdown file per row in `src/content/people/`,
   `publications/`, `alumni/`, `news/`, and `projects/`. It skips the yellow
   example rows, blank rows, and any file that already exists — so it's safe to
   re-run as more rows trickle in. Pass `--overwrite` only if you mean to
   replace existing files.

3. **Check and publish:**

   ```bash
   npm run build      # fails loudly if any field is malformed
   ```

   Then commit. If a field is wrong, the build names the exact file and problem.

## Notes

- **The PI** fills in a Members row too — set the **Role** column to `PI`. That
  row is written to `people/kuo.md` with the PI layout. The lab's one-line
  mission statement (homepage hero) isn't in the workbook — it lives in
  `src/lib/site.ts`; edit it there or ask Claude.

- **Photos** aren't in the workbook. Members email them separately; save each
  into `src/content/people/` (or `public/`) and wire it in when swapping the
  `<Placeholder />` boxes for real images — see the Phase 2 checklist in the
  top-level `README.md`.

- **Email privacy:** a member who writes `do not publish` (or leaves Email
  blank) simply won't have an email shown on the site.
