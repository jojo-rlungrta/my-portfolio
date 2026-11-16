import type { Language } from '../language';

const about = {
  en: {
    title: 'About Me',
    paragraphs: [
      'From April 2017 to October 2024, I worked at Atlas21 for nearly eight years, primarily developing and managing websites for major companies. I gained approximately five years of experience as a front-end engineer and three years as a web director. My key projects included a credit card landing page redesign, after which applications tripled, and the integration and redesign of three websites for a major railway company.',

      'In November 2024, I joined Label Japan, taking responsibility for the entire lifecycle of its corporate website, from direction and development to maintenance. In October 2025, I transitioned to freelance contracting to pursue a working holiday in Canada. While continuing to work with Japanese companies, I independently secured a website improvement project from a local Canadian business and worked on AI model evaluation in English for a US-based company.',

      'I currently work as a freelancer with multiple Japanese companies, providing a wide range of services, including web direction, website development, performance optimization, and WordPress maintenance.',

      'My strength lies in combining my experience as a front-end engineer and a web director to solve problems with both technical feasibility and business objectives in mind. I work across a wide range of project stages, from requirements definition and specification planning to design, implementation, maintenance, and continuous improvement, with a focus on enhancing the quality and value of websites.',
    ],
  },
  ja: {
    title: '自己紹介',
    paragraphs: [
      '2017年4月から2024年10月まで、株式会社あとらす二十一にて約8年間、大手企業を中心としたWebサイト制作・開発に従事しました。フロントエンドエンジニアとして累計約5年、Webディレクターとして累計約3年の経験を持ち、大手クレジットカード会社のLPリニューアル後に申込数が約3倍に増加した実績や、大手鉄道会社の3サイト統合リニューアルなどに携わりました。',

      '2024年11月より株式会社ラベルジャパンにて、自社公式サイトのディレクションから開発・保守運用まで一貫して担当。2025年10月にはカナダでのワーキングホリデーを機に業務委託契約へ移行し、国内企業のWeb制作業務を継続しながら、現地事業者からのWebサイト改修案件の直接受注や、米国企業での英語によるAIモデル評価業務も経験しました。',

      '現在はフリーランスとして、国内の複数企業と契約を結び、Webディレクション、サイト構築、パフォーマンス改善、WordPressの保守運用など、幅広い業務に従事しています。',

      'フロントエンドエンジニアとWebディレクター、双方の経験を活かし、技術的な実現性とビジネス上の目的を踏まえた課題解決ができることが私の強みです。要件定義・仕様策定から設計・実装、公開後の運用・改善まで、幅広い工程に対応し、Webサイトの品質と価値の向上に取り組んでいます。',
    ],
  },
};

export default function About({ language }: { language: Language }) {
  const { title, paragraphs } = about[language];

  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
      <div className="mt-6 space-y-3">
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}
