import type { Language } from '../language';

const about = {
  en: {
    title: 'About Me',
    paragraphs: [
      'From April 2017 to October 2024, I worked on websites for major companies at Atlas21. I spent about three years on web direction and five on front-end development, including JavaScript features and CMS integrations.',
      'Since November 2024, I have directed, developed, and maintained Label Japan’s website. I also build and optimize websites for two Japanese web agencies as a freelancer. While living in Canada, I took on a WordPress project for a local business and evaluated AI model responses in English.',
    ],
  },
  ja: {
    title: '自己紹介',
    paragraphs: [
      '2017年4月から2024年10月まで、株式会社あとらす二十一で大手企業のWebサイト制作に携わりました。Webディレクションを累計約3年、JavaScriptでの機能開発やCMS連携などのフロントエンド開発を累計約5年担当しました。',
      '2024年11月から株式会社ラベルジャパンの公式サイトのディレクション・開発・保守を担当しています。現在は国内のWeb制作会社2社からサイト構築や表示速度の改善も請け負っています。カナダ滞在中には現地事業者のWordPressサイト改修や英語でのAIモデル評価を経験しました。',
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
