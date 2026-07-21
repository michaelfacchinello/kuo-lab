// @ts-check
import { defineConfig } from 'astro/config';

// ---------------------------------------------------------------------------
// DEPLOYMENT CONFIG — update these two values for your GitHub Pages setup.
//
//  Project site   →  https://<user>.github.io/<repo>/
//                    site: 'https://<user>.github.io', base: '/<repo>'
//  User/org site  →  https://<user>.github.io/
//                    site: 'https://<user>.github.io', base: '/'
//  Custom domain  →  https://kuolab.example.edu/
//                    site: 'https://kuolab.example.edu', base: '/'
//                    ...and add `public/CNAME` containing the bare domain.
// ---------------------------------------------------------------------------
export default defineConfig({
  site: 'https://example.github.io',
  base: '/kuo-lab',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
