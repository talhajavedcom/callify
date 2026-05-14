# Order Verifier

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind v4
- next-sitemap (postbuild)

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

## Production build & start

```bash
npm run build   # runs next build then next-sitemap
npm run start   # serve the built app
```

`next-sitemap` writes `sitemap.xml` to the `out/` folder (per `next-sitemap.config.js`). Ensure your deploy copies `out/sitemap.xml` (and related generated files) to the site root so `/sitemap.xml` resolves. `public/robots.txt` already points to `https://talhajaved.com/sitemap.xml`.

## Deployment tips

- Vercel/Node hosting: `npm run build` (postbuild generates sitemap), then `npm run start`.
- Static hosting: also run `next export` if you need pure static output; copy `out/` plus `public/` to your host and keep `sitemap.xml` at the root URL.
- Environment: no secrets committed; keep API keys server-side only.

## SEO / Search Console checklist

- Pages use the Next.js Metadata API for titles/descriptions and OG/Twitter (cover images are absolute via helper).
- `robots.txt` allows crawling and references `/sitemap.xml`; submit that sitemap in Google Search Console after deploy.
- Add Google Search Console verification by setting `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in your hosting environment.
- Keep one `<h1>` per page; blog content uses `<h2>` sections only.
- Monitor Core Web Vitals (LCP/CLS/INP) in Lighthouse and Search Console; prioritize hero image sizing and JS bundle size.
- If you change the domain, update `siteUrl` in `next-sitemap.config.js` and `siteConfig.url` in `src/config/config.js`, then rerun `npm run build`.

**Backlinks (what to do + how):** see [docs/BACKLINK_GUIDE.md](docs/BACKLINK_GUIDE.md).

## Scripts

- `npm run dev` – dev server
- `npm run build` – production build + sitemap generation
- `npm run start` – serve production build
- `npm run lint` / `lint:fix` – ESLint
- `npm run format` / `format:check` – Prettier
