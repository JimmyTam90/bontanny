# bontanny (PrimeGearLab spoke)

Next.js 14.2.35, App Router, JavaScript, Tailwind 3. Served through the Hub at https://primegearlab.com/bontanny.

- `basePath: '/bontanny'` -> pages, `/_next/static` and `public/` files are all under `/bontanny` (logo: `/bontanny/logo.png`, file `public/logo.png`).
- Hub: merge `docs/hub-vercel-rewrite.json` into the Hub's `vercel.json` (both the exact path and `:path*` rewrite are required).
- Affiliate links: only via `lib/affiliate.js`; `npm run check:links` validates the mapping offline.
- Commands: `npm install`, `npm run build`, `npm run lint`.
