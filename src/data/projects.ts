export interface Project {
  slug: string;
  name: string;
  description: { pl: string; en: string };
  stack: string[];
  url: string;
  type: 'solo' | 'team';
  highlights: string[];
  image?: string;
  // a phone app: the picture is screens, so it gets no browser bar
  phones?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'krokiet',
    name: 'Krokiet',
    description: {
      pl: 'Aplikacja na iOS i Androida do oceniania dań ze znajomymi. Jeden telefon zapisuje oceny całego stołu, a z nich powstają listy najlepszych dań, mapa miejsc i rachunek z każdego wyjścia.',
      en: 'iOS and Android app for rating dishes with friends. One phone keeps score for the whole table, and the scores become lists of your best dishes, a map of where you ate and a bill for every meal.',
    },
    stack: ['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'MapLibre', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'PostGIS', 'Bun', 'Claude Code'],
    url: 'https://krokiet.app',
    type: 'solo',
    highlights: ['Offline outbox with ids from the phone', 'Overture Maps import', 'Subscriptions through RevenueCat'],
    image: '/projects/krokiet.webp',
    phones: true,
  },
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
    image: '/projects/faunarium.webp',
  },
  {
    slug: 'get-diet',
    name: 'Get Diet',
    description: {
      pl: 'SaaS do personalizowanych planów dietetycznych. Algorytm generowania diet, eksport PDF, panel admin, integracja Stripe.',
      en: 'SaaS for personalized diet plans. Diet generation algorithm, PDF export, admin panel, Stripe integration.',
    },
    stack: ['React 18', 'TypeScript', 'Vite', 'Material UI', 'TanStack Query', 'React Hook Form', 'Zustand', 'Framer Motion', 'Stripe'],
    url: 'https://get-diet.com',
    type: 'team',
    highlights: ['Stripe subscriptions', 'PDF generation', 'Health survey system'],
    image: '/projects/getdiet.webp',
  },
];
