/**
 * Build a site-root-relative URL that respects Astro's `base` config.
 *
 * On GitHub Pages project sites the whole site is served from `/<repo>/`, so
 * every internal href and asset path has to be prefixed. Always route internal
 * links through this helper rather than hardcoding a leading slash.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const rest = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return rest ? `${base}/${rest}` : `${base}/`;
}

/** True when `href` is the current page (used for nav active state). */
export function isActive(currentPath: string, href: string): boolean {
  const target = url(href).replace(/\/+$/, '');
  const current = currentPath.replace(/\/+$/, '');
  if (target === url('/').replace(/\/+$/, '')) return current === target;
  return current === target || current.startsWith(`${target}/`);
}
