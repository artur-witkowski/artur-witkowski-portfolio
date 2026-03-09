import pl from './pl.json';
import en from './en.json';

const translations = { pl, en } as const;

export type Lang = 'pl' | 'en';

export function t(key: string, lang: Lang): string {
  const keys = key.split('.');
  let value: unknown = translations[lang];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'pl' ? 'en' : 'pl';
}
