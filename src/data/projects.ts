export interface Project {
  slug: string;
  name: string;
  description: { pl: string; en: string };
  stack: string[];
  url: string;
  type: 'solo' | 'team';
  highlights: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'faunarium',
    name: 'Faunarium',
    description: {
      pl: 'Turowa gra strategiczna 1v1 na heksagonalnej planszy 2.5D. Multiplayer real-time, system rankingowy ELO, system frakcji i umiejętności jednostek.',
      en: 'Turn-based 1v1 strategy game on a 2.5D hexagonal board. Real-time multiplayer, ELO ranking system, faction and unit ability system.',
    },
    stack: ['React 19', 'TypeScript', 'PixiJS 8', 'Socket.IO', 'Bun', 'PostgreSQL', 'Capacitor', 'Docker', 'Turborepo', 'GitHub Actions'],
    url: 'https://faunarium.net',
    type: 'solo',
    highlights: ['Monorepo (Turborepo)', 'CI/CD (GitHub Actions)', 'PWA + mobile (Capacitor)'],
    image: '/projects/faunarium.png',
  },
  {
    slug: 'kociolek',
    name: 'Kociołek',
    description: {
      pl: 'Aplikacja do planowania posiłków i list zakupów dla par i domowników. Skanowanie kodów kreskowych, integracja AI, powiadomienia push.',
      en: 'Meal planning and shopping list app for couples and households. Barcode scanning, AI integration, push notifications.',
    },
    stack: ['React 19', 'TypeScript', 'Hono', 'TanStack Router', 'Drizzle ORM', 'PostgreSQL', 'Capacitor', 'Bun', 'Turborepo'],
    url: 'https://kociolek.arturwitkowski.com',
    type: 'solo',
    highlights: ['Monorepo (Turborepo)', 'E2E type safety (Hono RPC)', 'PWA + mobile'],
    image: '/projects/kociolek.png',
  },
  {
    slug: 'get-diet',
    name: 'Get Diet',
    description: {
      pl: 'SaaS do personalizowanych planów dietetycznych. Algorytm generowania diet, eksport PDF, panel admin, integracja Stripe.',
      en: 'SaaS for personalized diet plans. Diet generation algorithm, PDF export, admin panel, Stripe integration.',
    },
    stack: ['React 18', 'TypeScript', 'Material UI', 'Express.js', 'Drizzle ORM', 'PostgreSQL', 'Stripe'],
    url: 'https://get-diet.com',
    type: 'team',
    highlights: ['Stripe subscriptions', 'PDF generation', 'Health survey system'],
    image: '/projects/getdiet.png',
  },
];
