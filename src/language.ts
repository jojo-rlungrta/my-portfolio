export type Language = 'en' | 'ja';

export const DEFAULT_LANGUAGE: Language = 'en';
const STORAGE_KEY = 'portfolio-language';

export function getSavedLanguage(): Language {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'ja' ? 'ja' : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function saveLanguage(language: Language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // The switch still works when browser storage is unavailable.
  }
}
