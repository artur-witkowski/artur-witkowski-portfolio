# arturwitkowski.com

Personal developer portfolio built with Astro 5 and Tailwind CSS 4.

## Stack

- **Framework:** Astro 5 (static build)
- **Styling:** Tailwind CSS 4
- **Hosting:** Cloudflare Pages
- **Package manager:** Bun

## Features

- Dark/light mode with system preference detection
- i18n (Polish + English) with prefix-based routing
- WebGL animated background (grainient shader)
- Animated tech tickers with brand-colored icons
- Project cards with browser frame screenshots
- Responsive design (mobile-first)
- WCAG AA accessible

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
bun run preview
```

## Deploy

```bash
wrangler pages deploy ./dist
```
