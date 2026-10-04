# Roadmap

## In Progress
- [ ] CDN/request optimization brief (user upload `Optimize_the_existing_Next.js_website_pasted.md`) — audit done, fixes applied, report pending.

## Notes
- Site is React 18 + Vite SPA (not Next.js): no prefetch={false} concept exists; React Router performs no prefetching, so zero speculative requests already.
- Request audit: only 2 fetch() calls (lead-form submits, on-demand) — no duplication. Hero video (9MB) is homepage-only by design (required background video).
- Applied: lazy-loading on 3 below-fold images, Sitemap directive in robots.txt, immutable cache headers for /assets in vercel.json.
