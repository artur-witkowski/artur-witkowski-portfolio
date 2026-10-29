export interface Project {
  slug: string;
  name: string;
  description: { pl: string; en: string };
  stack: string[];
  url: string;
  type: 'solo' | 'team';
  highlights: string[];
  image?: string;
  // an app, not a website: the picture is its screens on this colour, so it gets no browser bar
  backdrop?: string;
  // store pages, shown as buttons next to "Visit"
  stores?: { label: string; url: string; icon: 'apple' | 'play' }[];
}

export const projects: Project[] = [
  {
    slug: 'lockabulary',
    name: 'Lockabulary',
    description: {
      pl: 'Aplikacja na iPhone\'a i Maca do nauki słówek. Na telefonie blokuje aplikacje, w których tracisz czas, dopóki nie odpowiesz na kilka pytań. Na Macu co 15 do 70 minut pracy rozmywa ekran na krótki quiz.',
      en: 'iPhone and Mac app for learning vocabulary. On the phone it locks the apps you lose time in until you answer a few words. On the Mac it blurs the screen for a short quiz every 15 to 70 minutes of work.',
    },
    stack: ['Swift', 'SwiftUI', 'AppKit', 'Screen Time API', 'CloudKit', 'StoreKit', 'WidgetKit', 'Python', 'Claude Code'],
    url: '/lockabulary',
    type: 'solo',
    highlights: ['Screen Time shield on iPhone', 'CloudKit sync with no server', 'FSRS spaced repetition'],
    image: '/projects/lockabulary.webp',
    backdrop: '#F6CDB8',
    // one app record for both, so one Apple ID
    stores: [
      { label: 'iPhone', url: 'https://apps.apple.com/app/id6827322789?platform=iphone', icon: 'apple' },
      { label: 'Mac', url: 'https://apps.apple.com/app/id6827322789?platform=mac', icon: 'apple' },
    ],
  },
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
    backdrop: '#FFD66E',
    stores: [
      { label: 'iPhone', url: 'https://apps.apple.com/app/id6813079137', icon: 'apple' },
      { label: 'Android', url: 'https://play.google.com/store/apps/details?id=com.arturwitkowski.krokiet', icon: 'play' },
    ],
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
