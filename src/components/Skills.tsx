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
  },
  {
    title: { en: 'CMS and server-side development', ja: 'CMS・サーバーサイド' },
    items: [
      { name: 'WordPress', Icon: SiWordpress, color: '#21759B' },
      { name: 'Movable Type', Icon: FaFileCode, color: '#FFFFFF' },
      { name: 'PowerCMS X', Icon: FaLayerGroup, color: '#FFFFFF' },
      { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
    ],
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

export default function Skills({ language }: { language: Language }) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-semibold tracking-wide">
        {language === 'ja' ? 'スキル' : 'Skills'}
      </h2>

      <div className="mt-6 space-y-6">
        {technicalGroups.map(({ title, items }) => (
          <div key={title.en}>
            <h3 className="text-lg font-semibold">{title[language]}</h3>
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
      </div>
    </section>
  );
}
