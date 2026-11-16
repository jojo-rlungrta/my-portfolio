import type { Language } from '../language';

export default function Footer({ language }: { language: Language }) {
  return (
    // Keep the contact section clear of the landing sprite as the 1920 × 369 planet scales.
    <footer className="mt-[max(170px,calc(19.21875vw_+_104px))] sm:mt-[calc(19.21875vw_+_146px)] lg:mt-[calc(max(369px,19.21875vw)_+_196px)] text-center text-sm lg:text-lg">
      {language === 'ja' ? '© 2025 j.fukuda ポートフォリオ' : '© 2025 j.fukuda Portfolio'}
    </footer>
  );
}
