# Content collection forms

Fill-in templates for gathering real website content from the lab, plus a
script that converts the filled-in files into the site's Markdown content.

## Files

| File | For | How it's filled in |
| --- | --- | --- |
| `Kuo-Lab-Member-Profile-Form.docx` | Each team member + the PI | Type into the boxes in Word; email back with a photo |
| `Kuo-Lab-Content-Workbook.xlsx` | Publications, alumni, news, research areas | One row per item; dropdowns where choices are fixed |
| `import-workbook.py` | You (or Claude) | Converts the filled-in workbook into `.md` files |

## The workflow

1. **Email the two templates** to the lab (see the draft email below). Ask
   members to return the Word form + a portrait photo; collect the workbook
   from whoever curates publications/news.

2. **When the workbook comes back**, drop it in this folder and run:

   ```bash
   python3 content-forms/import-workbook.py content-forms/Kuo-Lab-Content-Workbook.xlsx
   ```

   This creates one Markdown file per row in `src/content/publications/`,
   `alumni/`, `news/`, and `research/`. It skips the yellow example rows, blank
   rows, and any file that already exists (so it's safe to re-run; pass
   `--overwrite` only if you mean to replace files).

3. **The Word member forms** are short — either add each person by hand using
   the templates in `EDITING.md`, or hand the forms to Claude and ask it to
   create the `src/content/people/` files and drop the photos in.

4. **Check and publish:**

   ```bash
   npm run build      # fails loudly if any field is malformed
   ```

   Then commit. If a field is wrong, the build names the exact file and problem.

## Photos

Members email photos alongside the Word form. Save them into
`src/content/people/` (or `public/`) and wire them into each profile when
swapping the `<Placeholder />` boxes for real `<Image />`s — see the Phase 2
checklist in the top-level `README.md`.
