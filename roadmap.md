# Roadmap

## Done
- [x] CDN/request optimization brief (user upload `Optimize_the_existing_Next.js_website_pasted.md`) — audited, fixes applied, validated, reported in chat.
- [x] Blog author system: "Wasif Rashid" byline with founder-page link on blog list + post pages, Person schema in BlogPosting JSON-LD.

## Notes
- Site is React 18 + Vite SPA (not Next.js): no prefetch={false} concept exists; React Router performs no prefetching, so zero speculative requests already.
- Request audit: only 2 fetch() calls (lead-form submits, on-demand) — no duplication. Hero video (9MB) is homepage-only by design (required background video).
- Applied: lazy-loading on 3 below-fold images, Sitemap directive in robots.txt, immutable cache headers for /assets in vercel.json.
- CDN usage must be measured post-deployment (Vercel/hosting dashboard) — cannot claim a reduction without data.
