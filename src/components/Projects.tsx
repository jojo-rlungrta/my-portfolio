import project1 from '../assets/portfolio_projects_im01.webp';
import project2 from '../assets/portfolio_projects_im02.webp';
import project3 from '../assets/portfolio_projects_im03.webp';
import project4 from '../assets/portfolio_projects_im07.webp';
import project5 from '../assets/portfolio_projects_im08.webp';
import project6 from '../assets/portfolio_projects_im04.webp';
import project7 from '../assets/portfolio_projects_im05.webp';
import project8 from '../assets/portfolio_projects_im06.webp';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import type { Language } from '../language';

const roles = {
  'Front-end Developer': 'フロントエンドエンジニア',
  'Web Project Manager': 'Webディレクター',
} as const;

export default function Projects({ language }: { language: Language }) {
  const projects = [
    {
      id: 1,
      title: { en: 'Printing Company Official Website', ja: '印刷会社の公式サイト' },
      url: 'https://www.label-japan.co.jp/',
      role: ['Front-end Developer', 'Web Project Manager'],
      tech: ['React', 'Next.js', 'PHP', 'WordPress', 'SCSS', 'JavaScript', 'jQuery', 'Webpack', 'Git'],
      description: {
        en: 'Redesigned a printing company website, improving UI and mobile/tablet usability. Handled both direction and front-end development, including a contact form and WordPress integration for easy content management.',
        ja: '印刷会社の公式サイトをリニューアルし、UIとスマートフォン・タブレットでの使いやすさを改善。ディレクションとフロントエンド開発を担当し、問い合わせフォームの実装や、コンテンツを更新しやすくするWordPress連携を行いました。',
      },
      img: project1,
    },
    {
      id: 2,
      title: { en: 'Railway Company Official Website', ja: '鉄道会社の公式サイト' },
      url: 'https://www.keihan.co.jp/',
      role: ['Web Project Manager'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: {
        en: 'Led a large-scale renewal by consolidating three railway websites into one, improving accessibility and site management.',
        ja: '鉄道関連の3サイトを1つに統合する大規模リニューアルを主導し、アクセシビリティとサイト管理を改善しました。',
      },
      img: project2,
    },
    {
      id: 3,
      title: { en: 'Credit Card Company Official Website', ja: 'クレジットカード会社の公式サイト' },
      url: 'https://www.eposcard.co.jp/',
      role: ['Web Project Manager'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: {
        en: 'Directed the redesign of a platinum credit card landing page, tripling applications through improved design and usability.',
        ja: 'プラチナカードのランディングページのリニューアルをディレクションし、デザインと使いやすさの改善により申込数が3倍に増加しました。',
      },
      img: project3,
    },
    {
      id: 4,
      title: { en: 'Food Manufacturer Official Website', ja: '食品メーカーの公式サイト' },
      url: 'https://www.kikkoman.com/en/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: {
        en: 'Led the JavaScript development of a CMS-integrated product search system, connecting products with recipes while prioritizing usability and seamless user experience.',
        ja: 'CMSと連携する商品検索システムのJavaScript開発を主導しました。商品とレシピを結び付け、スムーズに閲覧できるよう操作性に配慮しました。',
      },
      img: project4,
    },
    {
      id: 5,
      title: { en: 'Online Shopping Service Introduction Site', ja: 'ネットショップ運営サービスの紹介サイト' },
      url: 'https://business.kuronekoyamato.co.jp/raku-uru/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: {
        en: 'Developed site-wide reusable components, carefully designing CSS to ensure consistent functionality and appearance across all pages.',
        ja: 'サイト全体で再利用できるコンポーネントを開発し、各ページで機能と見た目が揃うようCSSを設計しました。',
      },
      img: project5,
    },
    {
      id: 6,
      title: { en: 'Pharmaceutical Product Search Site', ja: '製薬会社の製品検索サイト' },
      url: 'https://www.otsuka.co.jp/cil/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: {
        en: 'Built a JavaScript-based product search system using customer-updated CSV files, supporting free-word search, partial matches, and pagination for results over 10 items.',
        ja: '顧客が更新するCSVを使った製品検索システムをJavaScriptで実装。フリーワード検索、部分一致検索、検索結果が10件を超える場合のページ分割に対応しました。',
      },
      img: project6,
    },
    {
      id: 7,
      title: { en: 'Insurance Company Official Website', ja: '保険会社の公式サイト' },
      url: 'https://neofirst.co.jp/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: {
        en: 'Designed an insurance request form with conditional elements via URL queries, Yahoo! login integration, and postal code suggestion features.',
        ja: '保険の資料請求フォームを設計し、URLクエリに応じた項目の出し分け、Yahoo!ログイン連携、郵便番号による入力補助に対応しました。',
      },
      img: project7,
    },
    {
      id: 8,
      title: { en: 'Jewelry Manufacturer Official Website', ja: '宝飾品メーカーの公式サイト' },
      url: 'https://www.ishifuku-kinzoku.co.jp/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: {
        en: 'Handled the front-end of the official homepage, implementing sliders and dynamic topic displays using jQuery and AJAX with JSON.',
        ja: '公式サイトのフロントエンドを担当し、jQueryでスライダーを実装したほか、AJAXで取得したJSONを使ってトピックスを動的に表示しました。',
      },
      img: project8,
    },
  ] as const;

  // 公式カラー設定
  const techColors: Record<string, string> = {
    React: '#61DAFB',
    'Next.js': '#000000',
    PHP: '#777BB4',
    WordPress: '#21759B',
    SCSS: '#CC6699',
    JavaScript: '#F7DF1E',
    jQuery: '#0769AD',
    Webpack: '#8DD6F9',
    Git: '#F05032',
  };

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-semibold tracking-wide">
        {language === 'ja' ? '制作実績' : 'Projects'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title[language]}${language === 'ja' ? '（新しいタブで開きます）' : ' (opens in new tab)'}`}
            className="group block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-white p-2 lg:p-4">
              <img
                src={project.img}
                alt={project.title[language]}
                className="w-full h-64 object-contain transition-transform duration-300 lg:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                              text-center text-white opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 px-4">
                <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
                  {project.title[language]}
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </h3>
              </div>
            </div>

            {/* Details */}
            <div className="p-2 lg:p-4">
              <h3 className="text-lg font-semibold">{project.title[language]}</h3>

              {/* ✅ Role badges (白枠＋白文字＋背景なし) */}
              <div className="flex flex-wrap gap-2 mt-2 mb-2">
                {project.role.map((r) => (
                  <span
                    key={r}
                    className="inline-block text-white text-sm px-3 py-1 border border-white font-semibold"
                  >
                    {language === 'ja' ? roles[r] : r}
                  </span>
                ))}
              </div>



              {/* ✅ Tech badges（公式カラー + React/Webpack/JSは黒文字） */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech) => {
                  const bg = techColors[tech] || '#555';
                  const isBright = ['#F7DF1E', '#61DAFB', '#8DD6F9'].includes(bg); // JS, React, Webpack
                  return (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: bg,
                        color: isBright ? '#000' : '#fff',
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <p className="text-sm mt-2">{project.description[language]}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
