import type { Language } from '../language';

export default function Certification({ language }: { language: Language }) {
  const isJapanese = language === 'ja';

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-semibold tracking-wide">
        {isJapanese ? '資格・語学' : 'Certifications & Language'}
      </h2>
      <ul className="mt-6 space-y-3">
        <li>
          <p>{isJapanese ? '基本情報技術者試験' : 'Fundamental Information Technology Engineer (Japan, National Certification)'}</p>
          <p className="text-sm">{isJapanese ? '2014年4月' : 'Apr 2014'}</p>
        </li>
        <li>
          <p>{isJapanese ? 'TOEIC Listening & Reading Test：695点' : 'TOEIC Listening & Reading Test: 695'}</p>
          <p className="text-sm">{isJapanese ? '2026年10月' : 'Oct 2026'}</p>
        </li>
      </ul>
    </section>
  );
}
