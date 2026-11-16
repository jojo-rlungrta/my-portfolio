import { FaCode, FaFileCode, FaLayerGroup } from 'react-icons/fa';
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLighthouse,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSass,
  SiWebpack,
  SiWordpress,
} from 'react-icons/si';
import type { Language } from '../language';

const technicalGroups = [
  {
    title: { en: 'Front-end development', ja: 'フロントエンド開発' },
    items: [
      { name: 'HTML', Icon: SiHtml5, color: '#E44D26' },
      { name: 'CSS', Icon: SiCss3, color: '#264DE4' },
      { name: 'SCSS', Icon: SiSass, color: '#CC6699' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'jQuery', Icon: SiJquery, color: '#0769AD' },
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
    ],
    detail: {
      en: 'Responsive development, search features, forms, and dynamic interfaces.',
      ja: 'レスポンシブ実装、検索機能、フォーム、動的UIの開発。',
    },
  },
  {
    title: { en: 'CMS and server-side development', ja: 'CMS・サーバーサイド' },
    items: [
      { name: 'WordPress', Icon: SiWordpress, color: '#21759B' },
      { name: 'Movable Type', Icon: FaFileCode, color: '#FFFFFF' },
      { name: 'PowerCMS X', Icon: FaLayerGroup, color: '#FFFFFF' },
      { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
    ],
    detail: {
      en: 'CMS integration, editorial workflows, and WordPress maintenance.',
      ja: 'CMS連携、コンテンツ更新環境の構築、WordPressの保守。',
    },
  },
  {
    title: { en: 'Development and auditing tools', ja: '開発・検証ツール' },
    items: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
      { name: 'Webpack', Icon: SiWebpack, color: '#8DD6F9' },
      { name: 'Visual Studio Code', Icon: FaCode, color: '#59B8FF' },
      { name: 'Chrome DevTools', Icon: SiGooglechrome, color: '#59B8FF' },
      { name: 'Lighthouse', Icon: SiLighthouse, color: '#FF826B' },
    ],
  },
];

const practiceGroups = [
  {
    title: { en: 'Web direction', ja: 'Webディレクション' },
    detail: {
      en: 'Client interviews, requirements, information architecture, scheduling, and quality control. Coordination across clients, designers, and engineers.',
      ja: '顧客ヒアリング、要件定義、情報設計、進行・品質管理。顧客・デザイナー・エンジニア間の調整。',
    },
  },
  {
    title: { en: 'Site quality and technical SEO', ja: 'サイト品質・技術的SEO' },
    detail: {
      en: 'Performance audits and optimization, accessibility improvements, semantic HTML, and structured data.',
      ja: '表示速度の計測・改善、アクセシビリティ対応、セマンティックHTML、構造化データの実装。',
    },
  },
  {
    title: { en: 'Working in English', ja: '英語での実務' },
    detail: {
      en: 'Clarifying requirements with international clients and evaluating AI responses using instructions in English.',
      ja: '海外クライアントとの英語での要件確認、英文の指示に基づくAIモデルの回答評価。',
    },
  },
];

export default function Skills({ language }: { language: Language }) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-semibold tracking-wide">
        {language === 'ja' ? 'スキル' : 'Skills'}
      </h2>

      <div className="mt-6 space-y-6">
        {technicalGroups.map(({ title, items, detail }) => (
          <div key={title.en}>
            <h3 className="text-lg font-semibold">{title[language]}</h3>
            {detail && <p className="mt-1 text-sm">{detail[language]}</p>}
            <ul className="mt-4 grid grid-cols-3 min-[375px]:grid-cols-4 sm:grid-cols-7 gap-x-3 gap-y-4">
              {items.map(({ name, Icon, color }) => (
                <li key={name} className="flex flex-col items-center text-center">
                  <Icon
                    className="mb-1 h-9 w-9 sm:h-10 sm:w-10"
                    style={{ color }}
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="grid gap-4 md:grid-cols-3">
          {practiceGroups.map(({ title, detail }) => (
            <div key={title.en}>
              <h3 className="text-lg font-semibold">{title[language]}</h3>
              <p className="mt-1 text-sm">{detail[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
