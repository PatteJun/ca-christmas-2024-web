import { languages } from './translations';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return 'de';
}

export function useTranslations(lang: keyof typeof languages) {
  return languages[lang];
}