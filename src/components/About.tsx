import type { Language } from '../language';

const about = {
  en: {
    title: 'About Me',
    paragraphs: [
      'I’m a front-end developer and web director. I started building websites for major companies at Atlas21 in 2017, where I spent about five years in front-end development and three in web direction across projects.',
      'I build search features, forms, and dynamic interfaces with JavaScript and integrate them with content management systems. My direction work covers requirements, information architecture, and coordination through launch. I also maintain WordPress sites and improve performance, accessibility, and technical SEO.',
      'During my stay in Canada from October 2025 to September 2026, I continued working on projects for clients in Japan, took on a WordPress project directly from a local business, and evaluated AI model responses in English.',
    ],
  },
  ja: {
    title: '自己紹介',
    paragraphs: [
      'フロントエンドエンジニア兼Webディレクターです。2017年に株式会社あとらす二十一で大手企業のWebサイト制作に携わり始め、案件に応じてフロントエンド開発を累計約5年、Webディレクションを累計約3年担当しました。',
      'JavaScriptによる検索機能・フォーム・動的UIの実装やCMS連携を得意としています。ディレクションでは要件定義、情報設計、公開までの関係者調整を担当し、WordPressサイトの保守や表示速度・アクセシビリティ・技術的SEOの改善にも取り組んでいます。',
      '2025年10月から2026年9月までのカナダ滞在中は、国内案件を継続しながら、現地事業者からWordPressサイトの改修を直接受注し、英語でのAIモデルの回答評価も経験しました。',
    ],
  },
};

export default function About({ language }: { language: Language }) {
  const { title, paragraphs } = about[language];

  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
      <div className="mt-6 max-w-4xl space-y-3">
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}
