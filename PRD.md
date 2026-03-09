# PRD — arturwitkowski.com

## 1. Przegląd projektu

**Cel:** Osobista strona portfolio deweloperska prezentująca projekty, umiejętności i osobę Artura Witkowskiego.

**Domena:** arturwitkowski.com (Cloudflare DNS, domena już zakupiona)

**Odbiorcy:** Potencjalni klienci, rekruterzy, współpracownicy, społeczność dev.

**Ton:** Profesjonalny ale luźny — "ktoś, kto buduje prawdziwe produkty, nie tylko pisze kod". Bez korporacyjnego sztywniactwa, bez nadmiernej nieformalności.

---

## 2. Tech Stack

| Warstwa         | Technologia                      | Uzasadnienie                                                                      |
| --------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| Framework       | **Astro 5**                      | Zero JS domyślnie, Islands Architecture, wbudowane i18n, idealny do content sites |
| Styling         | **Tailwind CSS 4**               | Utility-first, dark mode via `dark:`, doskonały DX                                |
| Animacje        | **CSS + Intersection Observer**  | Lekkie, bez dodatkowego JS runtime (bez Framer Motion — to React-only)            |
| Ikony           | **Lucide Icons** (SVG)           | Spójne, lekkie, bez emoji                                                         |
| Hosting         | **Cloudflare Pages**             | Darmowe, unlimited bandwidth, git push deploy, auto SSL                           |
| Deploy          | **Static build** (`astro build`) | Najprostszy, najszybszy, zero konfiguracji serwera                                |
| i18n            | **Astro i18n routing**           | Wbudowane, `/pl/` i `/en/` prefix routing                                         |
| Package manager | **Bun**                          | Szybki, znany z innych projektów                                                  |

### Dlaczego Astro a nie Next.js?

- Portfolio to content site — nie potrzebuje React runtime w przeglądarce
- Astro ships 0kB JS domyślnie, dodaje JS tylko tam gdzie trzeba (Islands)
- Wbudowane i18n routing (Next.js static export nie obsługuje middleware i18n)
- First-class Cloudflare Pages adapter
- Prostszy mental model dla statycznej strony

---

## 3. Design System

### 3.1 Koncepcja wizualna

**Styl:** Clean Minimal z Motion-Driven akcentami

- Czyste linie, dużo białej przestrzeni
- Subtelne mikro-animacje (scroll reveal, hover effects)
- Gradient jako akcent, nie dominanta
- Dark mode jako domyślny (dev portfolio)

**Wyróżnik:** Paleta "Ocean Wave" — kolory fal oceanu (teal → blue gradient) na głębokim navy tle. Subtelny spotlight effect śledzący kursor na hero.

### 3.2 Paleta kolorów — "Ocean Wave" (D)

#### Dark Mode (domyślny)

| Rola          | Hex                 | Tailwind                | Opis                                |
| ------------- | ------------------- | ----------------------- | ----------------------------------- |
| Background    | `#0a1628`           | `--color-bg`            | Głęboki ocean navy                  |
| Surface       | `#132240`           | `--color-surface`       | Karty, nawigacja                    |
| Surface Hover | `#1a2d52`           | `--color-surface-hover` | Hover na kartach                    |
| Primary       | `#0891b2`           | `--color-primary`       | Teal — główny akcent                |
| Accent        | `#22d3ee`           | `--color-accent`        | Jasny cyan — hover, linki           |
| Blue          | `#3b82f6`           | `--color-blue`          | Niebieski do gradientów             |
| Text          | `#e2e8f0`           | `--color-text`          | Główny tekst                        |
| Text Muted    | `#94a3b8`           | `--color-text-muted`    | Drugorzędny tekst                   |
| Border        | `#1e3a5f`           | `--color-border`        | Obramowania kart                    |
| Gradient      | `#0891b2 → #3b82f6` | —                       | Gradient "fala oceanu" na CTA, name |

#### Light Mode

| Rola          | Hex                 | Tailwind                | Opis             |
| ------------- | ------------------- | ----------------------- | ---------------- |
| Background    | `#f8fafc`           | `--color-bg`            | Jasne tło        |
| Surface       | `#ffffff`           | `--color-surface`       | Karty            |
| Surface Hover | `#f1f5f9`           | `--color-surface-hover` | Hover            |
| Primary       | `#0891b2`           | `--color-primary`       | Teal             |
| Accent        | `#0e7490`           | `--color-accent`        | Ciemniejszy cyan |
| Blue          | `#2563eb`           | `--color-blue`          | Niebieski        |
| Text          | `#0f172a`           | `--color-text`          | Ciemny tekst     |
| Text Muted    | `#64748b`           | `--color-text-muted`    | Drugorzędny      |
| Border        | `#e2e8f0`           | `--color-border`        | Obramowania      |
| Gradient      | `#0891b2 → #2563eb` | —                       | Gradient         |

#### Contrast checks

- Dark: `#e2e8f0` na `#0a1628` = ~14:1 (WCAG AAA)
- Light: `#0f172a` na `#f8fafc` = ~18:1 (WCAG AAA)
- Muted dark: `#94a3b8` na `#0a1628` = ~7:1 (WCAG AA)
- Muted light: `#64748b` na `#f8fafc` = ~5:1 (WCAG AA)

### 3.3 Typografia

| Rola                 | Font               | Weight | Rozmiar                                  |
| -------------------- | ------------------ | ------ | ---------------------------------------- |
| Nagłówek Hero (imię) | **Sora**           | 700    | 48-64px (responsive)                     |
| Nagłówki sekcji (h2) | **Sora**           | 600    | 32-40px                                  |
| Podtytuły (h3)       | **Sora**           | 500    | 20-24px                                  |
| Body text            | **DM Sans**        | 400    | 16-18px                                  |
| Body emphasis        | **DM Sans**        | 500    | 16-18px                                  |
| Tagline              | **DM Sans**        | 400    | 18-20px                                  |
| Code / tech tags     | **JetBrains Mono** | 400    | 13-14px                                  |
| Labels / captions    | **DM Sans**        | 500    | 12-14px, uppercase, letter-spacing 1.5px |

**Google Fonts import:**

```
Sora:wght@400;500;600;700
DM+Sans:wght@400;500;600;700
JetBrains+Mono:wght@400;500
```

**Dlaczego Sora + DM Sans?**

- Sora: geometryczny, nowoczesny, wyrazisty — idealny do nagłówków dev portfolio
- DM Sans: czytelny, cieplejszy niż Inter, ale równie profesjonalny — świetny do body
- JetBrains Mono: standard dla kodu, rozpoznawalny przez devów
- Wszystkie trzy dobrze wspierają polskie znaki (ą, ć, ę, ł, ń, ó, ś, ź, ż)

**Line height:** 1.5-1.6 dla body, 1.1-1.2 dla nagłówków
**Max line length:** 65-75 znaków (max-w-prose / max-w-2xl)

### 3.4 Spacing Scale

Bazujemy na Tailwind default (4px grid):

- Section padding: `py-24` (96px) / `py-16` (64px mobile)
- Container: `max-w-5xl mx-auto px-6`
- Card padding: `p-6` (24px) / `p-8` (32px)
- Gap between cards: `gap-6` (24px)
- Element spacing: `space-y-4` do `space-y-8`

### 3.5 Border Radius

| Element      | Radius               |
| ------------ | -------------------- |
| Karty        | `rounded-2xl` (16px) |
| Przyciski    | `rounded-xl` (12px)  |
| Tagi tech    | `rounded-lg` (8px)   |
| Ikony social | `rounded-xl` (12px)  |
| Avatary      | `rounded-full`       |

### 3.6 Shadows & Effects

**Dark mode:** Minimalne shadow, focus na border + subtle glow

```css
/* Card hover glow */
box-shadow: 0 0 30px rgba(8, 145, 178, 0.08);

/* Spotlight effect (hero, kursor) */
background: radial-gradient(
  600px circle at var(--mouse-x) var(--mouse-y),
  rgba(8, 145, 178, 0.06),
  transparent 40%
);
```

**Light mode:** Subtle shadow

```css
box-shadow:
  0 1px 3px rgba(0, 0, 0, 0.05),
  0 1px 2px rgba(0, 0, 0, 0.03);
```

---

## 4. Layout & Sekcje

**Typ:** Single Page Application (scroll-based, bez oddzielnych route'ów poza i18n)

### 4.1 Nawigacja (sticky)

```
┌─────────────────────────────────────────────────────┐
│  AW    O mnie   Projekty   Kontakt    [PL|EN] [◐]  │
└─────────────────────────────────────────────────────┘
```

- Sticky top z `backdrop-blur-md` + `bg-surface/80`
- Logo: tekst "AW" w foncie Sora Bold z gradient kolorem
- Linki smooth scroll do sekcji
- Toggle języka (PL/EN)
- Toggle dark/light mode (ikona sun/moon)
- Na mobile: hamburger menu z slide-in panel
- Highlight aktywnej sekcji na podstawie scroll position (Intersection Observer)
- Pojawia się z lekkim fade-in po scrollu 100px (na hero jest ukryty)

### 4.2 Hero Section

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Cześć, jestem                                      │
│  Artur Witkowski.        ← gradient text, Sora 700  │
│                                                     │
│  Turning ideas into products                        │
│  with TypeScript & AI.   ← DM Sans, text-muted      │
│                                                     │
│  [GH]  [LI]  [@]        ← social links, hover glow │
│                                                     │
│              ↓ scroll    ← subtle bounce anim       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

- Full viewport height (`min-h-screen`)
- Spotlight effect — radial gradient podążający za kursorem
- Staggered entrance animation: greeting → name → tagline → social links (delays: 0, 100ms, 200ms, 400ms)
- Gradient na imieniu: `bg-gradient-to-r from-primary to-blue bg-clip-text text-transparent`
- Scroll indicator na dole (animated chevron down)
- Social links: GitHub (prywatny), LinkedIn, Email
- Opcjonalnie w przyszłości: zdjęcie profilowe po prawej stronie (na razie bez)

### 4.3 O mnie

```
┌─────────────────────────────────────────────────────┐
│  O MNIE                     ← section label, accent │
│                                                     │
│  Fullstack developer z 5.5-letnim doświadczeniem.   │
│  Na co dzień pracuję jako Frontend Developer w      │
│  Profil Software (Gdynia). Po godzinach buduję      │
│  własne produkty — od gier strategicznych po        │
│  aplikacje do planowania posiłków.                  │
│                                                     │
│  [React] [TypeScript] [Next.js] [Node.js] [...]     │
│  ← animated tech tags, scroll reveal                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

- Krótki opis (3-4 zdania, luźny ton)
- Tech stack jako tagi z ikonami (devicons lub simple-icons SVG)
- Tagi pogrupowane: Frontend | Backend | Tools
- Scroll reveal animation (fade-up z stagger)
- Opcjonalnie: subtle background pattern (dots grid lub noise texture, opacity 3-5%)

**Tech tagi do wyświetlenia:**

Frontend:

- React, Next.js, TypeScript, Tailwind CSS, React Native

Backend:

- Node.js, PostgreSQL, Prisma, Drizzle ORM

Tools:

- Docker, Git, GitHub Actions, Figma, Claude Code

### 4.4 Projekty

```
┌─────────────────────────────────────────────────────┐
│  PROJEKTY                                           │
│                                                     │
│  ┌────────────────────────────────────────────────┐ │
│  │  [screenshot/preview]                          │ │
│  │                                                │ │
│  │  Faunarium                                     │ │
│  │  Turowa gra strategiczna 1v1 na heksagonalnej  │ │
│  │  planszy 2.5D z systemem rankingowym ELO.      │ │
│  │                                                │ │
│  │  [React] [PixiJS] [Socket.IO] [Bun] [Postgres] │ │
│  │                                                │ │
│  │  [Odwiedź →]                  Solo project 🎯  │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
│  ┌────────────────────────────────────────────────┐ │
│  │  [screenshot/preview]                          │ │
│  │                                                │ │
│  │  Kociołek                                      │ │
│  │  Aplikacja do planowania posiłków i list       │ │
│  │  zakupów dla par i domowników. PWA + native.   │ │
│  │                                                │ │
│  │  [React] [Hono] [TanStack] [Capacitor]         │ │
│  │                                                │ │
│  │  [Odwiedź →]                  Solo project 🎯  │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
│  ┌────────────────────────────────────────────────┐ │
│  │  [screenshot/preview]                          │ │
│  │                                                │ │
│  │  Get Diet                                      │ │
│  │  SaaS do personalizowanych planów              │ │
│  │  dietetycznych z algorytmem AI.                │ │
│  │                                                │ │
│  │  [React] [MUI] [Express] [Stripe]              │ │
│  │                                                │ │
│  │  [Odwiedź →]              Team project (front) │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
└─────────────────────────────────────────────────────┘
```

- Karty full-width (jedna pod drugą, nie grid)
- Każda karta: screenshot (placeholder do dodania) + info
- Hover: subtle lift (`translateY(-4px)`) + border glow
- Tech tagi przy każdym projekcie
- Badge: "Solo project" lub "Team project (frontend)"
- Link "Odwiedź" do live URL
- Scroll reveal: karty pojawiają się z fade-up, staggered
- Screenshot: `aspect-video rounded-xl` z subtle border, placeholder gradient do czasu dodania prawdziwych screenshotów

#### Dane projektów:

**Faunarium**

- URL: faunarium.net
- Opis PL: "Turowa gra strategiczna 1v1 na heksagonalnej planszy 2.5D. Multiplayer real-time, system rankingowy ELO, system frakcji i umiejętności jednostek."
- Opis EN: "Turn-based 1v1 strategy game on a 2.5D hexagonal board. Real-time multiplayer, ELO ranking system, faction and unit ability system."
- Stack: React 19, TypeScript, PixiJS 8, Socket.IO, Bun, PostgreSQL, Capacitor, Docker
- Typ: Solo project
- Wyróżniki: monorepo (Turborepo), CI/CD (GitHub Actions), PWA + mobile (Capacitor)

**Kociołek**

- URL: kociolek.artur-witkowski.com
- Opis PL: "Aplikacja do planowania posiłków i list zakupów dla par i domowników. Skanowanie kodów kreskowych, integracja AI, powiadomienia push."
- Opis EN: "Meal planning and shopping list app for couples and households. Barcode scanning, AI integration, push notifications."
- Stack: React 19, TypeScript, Hono, TanStack Router/Query, Drizzle ORM, PostgreSQL, Capacitor, Bun
- Typ: Solo project
- Wyróżniki: monorepo (Turborepo), E2E type safety (Hono RPC), PWA + mobile

**Get Diet**

- URL: get-diet.com
- Opis PL: "SaaS do personalizowanych planów dietetycznych. Algorytm generowania diet, eksport PDF, panel admin, integracja Stripe."
- Opis EN: "SaaS for personalized diet plans. Diet generation algorithm, PDF export, admin panel, Stripe integration."
- Stack: React 18, TypeScript, Material UI, Express.js, Drizzle ORM, PostgreSQL, Stripe
- Typ: Team project (frontend)
- Wyróżniki: subskrypcje Stripe, generowanie PDF, system ankiet zdrowotnych

### 4.5 Kontakt

```
┌─────────────────────────────────────────────────────┐
│  KONTAKT                                            │
│                                                     │
│  Chcesz pogadać? Napisz do mnie.                   │
│                                                     │
│  [Email]     [LinkedIn]     [GitHub]                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

- Prosty, minimalistyczny
- 3 linki: email (mailto:), LinkedIn, GitHub
- Każdy jako karta/przycisk z ikoną + label
- Hover animation: subtle scale + glow

### 4.6 Footer

```
┌─────────────────────────────────────────────────────┐
│  © 2026 Artur Witkowski · Zbudowane z Astro & ☕    │
└─────────────────────────────────────────────────────┘
```

- Minimalistyczny, jedna linia
- Opcjonalnie: "Zbudowane z Astro" jako Easter egg

---

## 5. Animacje & Interakcje

### 5.1 Scroll Reveal (Intersection Observer)

```css
/* Elementy wchodzą z fade + translateY */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- Trigger: element w 15% viewport
- Stagger: każdy kolejny element +100ms delay
- Once: animacja odpala się raz (nie resetuje przy scrollu w górę)

### 5.2 Hero Spotlight

```js
// Radial gradient podążający za kursorem
document.addEventListener("mousemove", (e) => {
  hero.style.setProperty("--mouse-x", `${e.clientX}px`);
  hero.style.setProperty("--mouse-y", `${e.clientY}px`);
});
```

### 5.3 Hover Effects

| Element         | Efekt                                                | Czas  |
| --------------- | ---------------------------------------------------- | ----- |
| Nav links       | Color transition do accent                           | 200ms |
| Social icons    | Scale 1.05 + background accent/10                    | 200ms |
| Karty projektów | TranslateY(-4px) + border-color accent + subtle glow | 300ms |
| Tech tagi       | Background lighten                                   | 150ms |
| CTA buttons     | Brightness 1.1 + translateY(-1px)                    | 200ms |

### 5.4 Dark/Light Mode Toggle

- Ikona: Sun → Moon (smooth rotate + scale transition)
- Transition: `transition-colors duration-300` na body
- Domyślnie: preferencja systemowa (`prefers-color-scheme`)
- Persystencja: `localStorage`
- Tailwind: `darkMode: 'class'`

### 5.5 Accessibility — prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. i18n — Wielojęzyczność

### Strategia

- **Routing:** `/pl/` (polski) i `/en/` (angielski) prefix
- **Detekcja:** Na pierwszym wejściu sprawdź `navigator.language` / `Accept-Language` header
- **Domyślny:** Polski (ale redirect na podstawie detekcji)
- **Przechowywanie:** `localStorage` zapamiętuje wybór użytkownika
- **URL główny:** `arturwitkowski.com` → redirect do `/pl/` lub `/en/`
- **SEO:** `<link rel="alternate" hreflang="pl">` i `hreflang="en"`

### Pliki tłumaczeń

```
src/
  i18n/
    pl.json    ← polskie tłumaczenia
    en.json    ← angielskie tłumaczenia
    index.ts   ← helper do pobierania tłumaczeń
```

Tłumaczymy: nav labels, sekcje, opisy projektów, tagline, meta tags.

---

## 7. Responsywność

### Breakpointy (Tailwind default)

| Breakpoint | Szerokość  | Zmiany                                       |
| ---------- | ---------- | -------------------------------------------- |
| Mobile     | < 640px    | Single column, hamburger nav, mniejsze fonty |
| Tablet     | 640-1024px | Rozszerzony layout, widoczny nav             |
| Desktop    | > 1024px   | Pełny layout, spotlight effect, hover        |

### Kluczowe zachowania mobilne

- Nav → hamburger z slide-in panelem
- Hero tekst: 32-36px (zamiast 48-64px)
- Karty projektów: pełna szerokość, mniejszy padding
- Tech tagi: scroll horizontal jeśli za dużo
- Touch targets: minimum 44x44px
- Spotlight effect: wyłączony na touch devices

---

## 8. SEO & Meta

```html
<title>Artur Witkowski — Fullstack TypeScript Developer</title>
<meta
  name="description"
  content="Turning ideas into products with TypeScript & AI. Fullstack developer portfolio."
/>
<meta property="og:title" content="Artur Witkowski — Developer Portfolio" />
<meta
  property="og:description"
  content="Turning ideas into products with TypeScript & AI."
/>
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

- Open Graph image: 1200x630px z imieniem, tagline, gradient ocean tło
- Favicon: "AW" monogram w gradient kolorach
- Sitemap: auto-generowany przez Astro
- robots.txt: allow all

---

## 9. Performance Targets

| Metryka                  | Cel                        |
| ------------------------ | -------------------------- |
| Lighthouse Performance   | > 95                       |
| First Contentful Paint   | < 1.0s                     |
| Largest Contentful Paint | < 1.5s                     |
| Cumulative Layout Shift  | < 0.05                     |
| Total JS shipped         | < 10kB (dzięki Astro)      |
| Total page weight        | < 200kB (bez screenshotów) |

### Optymalizacje

- Fonty: `font-display: swap`, preload najważniejszych weightów
- Obrazy: WebP/AVIF, `loading="lazy"`, `srcset` responsive
- CSS: Tailwind purge unused
- Zero render-blocking JS (Astro static)

---

## 10. Struktura plików

```
artur-witkowski-com/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── projects/          ← screenshoty projektów
│       ├── faunarium.webp
│       ├── kociolek.webp
│       └── get-diet.webp
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro  ← client:load island
│   │   ├── LangToggle.astro
│   │   └── ScrollReveal.astro
│   ├── layouts/
│   │   └── Layout.astro       ← base HTML, fonts, meta, theme script
│   ├── pages/
│   │   ├── index.astro        ← redirect do /pl/ lub /en/
│   │   ├── pl/
│   │   │   └── index.astro    ← polska wersja
│   │   └── en/
│   │       └── index.astro    ← angielska wersja
│   ├── i18n/
│   │   ├── pl.json
│   │   ├── en.json
│   │   └── index.ts
│   ├── data/
│   │   └── projects.ts       ← dane projektów (łatwa edycja!)
│   └── styles/
│       └── global.css         ← custom CSS, animacje, theme vars
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
└── PRD.md                     ← ten plik
```

---

## 11. Content — łatwa edycja

Wszystkie treści w jednym miejscu do łatwej edycji:

- **`src/data/projects.ts`** — lista projektów z opisami PL/EN, stackiem, URL
- **`src/i18n/pl.json`** i **`en.json`** — wszystkie teksty UI
- **`public/projects/`** — screenshoty (podmiana pliku = update)

W przyszłości można łatwo dodać:

- CMS (np. Keystatic — works with Astro, file-based, zero DB)
- Blog (Astro Content Collections z MDX)
- Nowe projekty (dodaj obiekt do `projects.ts`)

---

## 12. Informacje kontaktowe

| Kanał             | Wartość                      |
| ----------------- | ---------------------------- |
| Email             | (do uzupełnienia)            |
| GitHub (prywatny) | github.com/artur-witkowski   |
| GitHub (praca)    | github.com/arturwitkowski-ps |
| LinkedIn          | (do uzupełnienia)            |

---

## 13. Fazy implementacji

### Faza 1 — MVP (ta sesja)

- [x] PRD i design system
- [ ] Scaffold Astro + Tailwind + Cloudflare Pages
- [ ] Layout base (Nav, Footer, theme toggle)
- [ ] Hero section z animacjami
- [ ] Sekcja O mnie z tech tags
- [ ] Sekcja Projekty (placeholder screenshoty)
- [ ] Sekcja Kontakt
- [ ] Dark/Light mode
- [ ] i18n (PL + EN)
- [ ] Responsywność mobile
- [ ] Deploy na Cloudflare Pages

### Faza 2 — Polish

- [ ] Prawdziwe screenshoty projektów
- [ ] Zdjęcie profilowe
- [ ] OG image
- [ ] Favicon (AW monogram)
- [ ] Fine-tune animacji
- [ ] Lighthouse audit → 95+

### Faza 3 — Przyszłość (opcjonalne)

- [ ] Blog (Astro Content Collections)
- [ ] CMS (Keystatic)
- [ ] CV do pobrania
- [ ] Formularz kontaktowy
- [ ] Analytics (Cloudflare Web Analytics — darmowe, bez cookies)

---

## 14. Checklist jakości (pre-delivery)

- [ ] Brak emoji jako ikon — tylko Lucide SVG
- [ ] `cursor-pointer` na wszystkich klikalnych elementach
- [ ] Hover z smooth transitions (150-300ms)
- [ ] Kontrast tekstu min 4.5:1 (WCAG AA) w obu trybach
- [ ] `focus-visible:ring-2` dla keyboard nav
- [ ] `prefers-reduced-motion` respektowane
- [ ] Responsywne: 375px, 768px, 1024px, 1440px
- [ ] Brak horizontal scroll na mobile
- [ ] Touch targets min 44x44px
- [ ] `alt` text na obrazkach
- [ ] `sr-only` labels na icon-only buttons
- [ ] Smooth scroll (`scroll-behavior: smooth`)
- [ ] Font `display: swap`
- [ ] Lazy loading obrazków
