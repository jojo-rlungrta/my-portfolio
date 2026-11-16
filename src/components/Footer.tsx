import type { Language } from '../language';

export default function Footer({ language }: { language: Language }) {
  return (
    <footer className="mt-[170px] sm:mt-[250px] lg:mt-[500px] text-center text-sm lg:text-lg">
      {language === 'ja' ? '© 2025 j.fukuda ポートフォリオ' : '© 2025 j.fukuda Portfolio'}
    </footer>
  );
}
