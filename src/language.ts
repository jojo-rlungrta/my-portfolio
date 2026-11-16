export type Language = 'en' | 'ja';

const DEFAULT_LANGUAGE: Language = 'ja';
// The old key stored English even when the visitor had never selected it.
const STORAGE_KEY = 'portfolio-language-preference';

export function getSavedLanguage(): Language {
  try {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return savedLanguage === 'en' || savedLanguage === 'ja' ? savedLanguage : DEFAULT_LANGUAGE;
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
