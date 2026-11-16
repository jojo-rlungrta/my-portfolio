import type { Language } from '../language';

const languages = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
] as const;

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const isJapanese = language === 'ja';

  return (
    <header className={`relative mb-20 text-center ${isJapanese ? 'max-[500px]:min-h-40' : ''}`}>
      <div className="absolute inset-x-0 bottom-full mb-1 flex justify-end lg:container lg:mb-3 lg:px-4">
        <div
          role="group"
          aria-label={isJapanese ? '表示言語' : 'Display language'}
          className="inline-flex gap-1 rounded-full border border-white/50 bg-[#2d2d50] p-0.5 lg:p-1"
        >
          {languages.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              lang={code}
              aria-pressed={language === code}
              onClick={() => onLanguageChange(code)}
              className={`rounded-full px-3 py-1 text-sm font-semibold leading-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:py-2 ${
                language === code ? 'bg-white text-[#2d2d50]' : 'text-white hover:bg-white/20'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <h1 className={`font-bold text-white drop-shadow-lg lg:text-7xl ${isJapanese ? 'text-5xl sm:text-6xl' : 'text-6xl'}`}>
        {isJapanese ? '福田 城之介' : 'Jonosuke Fukuda'}
      </h1>
      <p className="mt-2 text-2xl lg:text-3xl drop-shadow-md">
        {isJapanese ? 'フロントエンドエンジニア' : 'Frontend Developer'}
      </p>
    </header>
  );
}
