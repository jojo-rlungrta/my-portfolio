import type { Language } from '../language';
import { frontendDeveloper, webDirector } from '../roles';

const items = [
  {
    id: 'atlas21',
    company: { en: 'Atlas21 Co., Ltd.', ja: '株式会社あとらす二十一' },
    segments: [
      {
        id: 'employee',
        period: { en: 'Apr 2017 – Oct 2024 (Full-time)', ja: '2017年4月〜2024年10月（正社員）' },
        roles: [webDirector, frontendDeveloper],
        detail: {
          en: [
            'Credit card landing page (Apr – Oct 2021): Directed a redesign of the platinum card application flow. Applications rose to about three times their previous level after launch.',
            'Pharmaceutical product search (Apr – Aug 2022): Built JavaScript keyword search, partial matching, and pagination using CSV data maintained by the client.',
            'Insurance request form (Jun – Oct 2023): Implemented conditional fields, front-end integration with Yahoo! login, and postal code address suggestions.',
            'Railway website consolidation (Oct 2023 – Oct 2024): Coordinated requirements across three related sites. Analyzed the JSON feed and JavaScript rendering for service alerts and clarified the implementation requirements with the development team.',
          ],
          ja: [
            'カード会社のLP改善（2021年4月〜10月）：プラチナカードの申込導線の改善をディレクションし、公開後の申込数が従来の約3倍に増加。',
            '製薬会社の製品検索（2022年4月〜8月）：顧客が更新するCSVをもとに、フリーワード・部分一致検索とページネーションをJavaScriptで実装。',
            '保険会社の資料請求フォーム（2023年6月〜10月）：項目の動的切り替え、Yahoo!ログイン連携のフロントエンド対応、郵便番号による住所入力補助を実装。',
            '鉄道会社の関連3サイト統合（2023年10月〜2024年10月）：関係部署との要件調整を担当。運行情報のJSONとJavaScriptの表示処理を解析し、開発チームと実装仕様を整理。',
          ],
        },
      },
    ],
  },
  {
    id: 'label-japan',
    company: { en: 'Label Japan Co., Ltd.', ja: '株式会社ラベルジャパン' },
    segments: [
      {
        id: 'employee',
        period: { en: 'Nov 2024 – Sep 2025 (Full-time)', ja: '2024年11月〜2025年9月（正社員）' },
        roles: [webDirector, frontendDeveloper],
        detail: {
          en: [
            'Directed and developed the official website redesign, from gathering requirements and coordinating with the designer to managing delivery and quality.',
            'Built a contact form with React, Next.js, and PHP, and set up WordPress so the client could update content independently.',
          ],
          ja: [
            '公式サイトのリニューアルで、要件整理、デザイナーとの仕様調整、進行・品質管理から開発まで担当。',
            'React・Next.js・PHPで問い合わせフォームを開発し、顧客自身でコンテンツを更新できるWordPress環境を構築。',
          ],
        },
      },
      {
        id: 'contract',
        period: { en: 'Oct 2025 – Present (Contract)', ja: '2025年10月〜現在（業務委託）' },
        roles: [webDirector, frontendDeveloper],
        detail: {
          en: ['Continue to maintain and operate the company’s official website and implement improvements as requested.'],
          ja: ['公式サイトの保守・運用を継続し、要望に応じたサイト改善・改修を担当。'],
        },
      },
    ],
  },
  {
    id: 'freelance',
    company: { en: 'Other Freelance Work(Based in Canada from October 2025 to September 2026)', ja: 'その他の業務委託・個人受注（2025年10月～2026年9月までカナダ滞在）' },
    segments: [
      {
        id: 'ai-evaluation',
        period: { en: 'Nov 2025 – Sep 2026 (Contract)', ja: '2025年11月～2026年9月（業務委託）' },
        roles: [{ en: 'AI Model Evaluation', ja: 'AIモデル評価' }],
        detail: {
          en: ['Evaluated the quality and suitability of AI model responses for Invisible Technologies, following written instructions in English.'],
          ja: ['米国企業Invisible Technologiesとの業務委託契約にて、英文の指示に基づき、AIモデルの回答の品質・適切性を評価。'],
        },
      },
      {
        id: 'canada',
        period: { en: 'Jan 2026 (Direct Client Project)', ja: '2026年1月（個人受注）' },
        roles: [frontendDeveloper],
        detail: {
          en: ['Took on a WordPress project directly from a local business. Clarified requirements in English, fixed video controls and layout issues, and recommended hosting improvements after tracing slow response times to server resource limits.'],
          ja: ['現地事業者からWordPressサイトの改修を直接受注。英語で要件を確認し、動画の再生制御やレイアウトを修正。表示遅延の主因がサーバーのリソース制限にあると特定し、ホスティング環境の改善を提案。'],
        },
      },
      {
        id: 'japan',
        period: { en: 'Feb 2026 – Present（Contract）', ja: '2026年2月〜現在（業務委託）' },
        roles: [frontendDeveloper],
        detail: {
          en: [
            'Develop websites and improve site performance as a contractor for two web production agencies in Japan.',
            'Optimized images and JavaScript on a WordPress site. Its Lighthouse Performance score rose from 57 to 81 on mobile and from 75 to 81 on desktop.',
            'Rebuilt a sheet metal contractor’s website with responsive layouts, semantic HTML, structured data, and a WordPress editing workflow.',
          ],
          ja: [
            '国内のWeb制作会社2社と業務委託契約を結び、サイト構築やパフォーマンス改善を担当。',
            'WordPressサイトの画像やJavaScriptを最適化。Lighthouseのパフォーマンススコアをモバイルで57から81、デスクトップで75から81に改善。',
            '建築板金会社のサイトを再構築し、レスポンシブ対応、セマンティックHTML、構造化データ、WordPressの更新環境を実装。',
          ],
        },
      },
    ],
  },
];

export default function WorkExperience({ language }: { language: Language }) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-semibold tracking-wide">
        {language === 'ja' ? '職務経歴' : 'Work Experience'}
      </h2>
      <div className="relative mt-6">
        <ol className="relative after:absolute after:left-[10px] md:after:left-[33px] after:bottom-0 after:w-[15px] after:h-[15px] after:rounded-full after:bg-white">
          {items.map((item) => (
            <li key={item.id}>
              {/* 会社名*/}
              <div className="mt-4">
                <h3 className="font-bold text-lg">{item.company[language]}</h3>
              </div>

              {/* セグメント（期間ごと） */}
              <ol className="mt-4 ml-4 md:ml-10">
                {item.segments.map((seg) => (
                  <li key={seg.id} className="mt-0 pt-0 pl-5 md:pl-10 relative [&:nth-child(n+2)]:pt-[20px] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[2px] before:bg-white [&:nth-child(1)]:before:top-[3px] after:absolute after:top-[3px] after:left-[-7px] after:w-[15px] after:h-[15px] after:rounded-full after:bg-white [&:nth-child(n+2)]:after:top-[23px]">
                    <div>
                      {/* 期間 */}
                      <p className="text-base font-semibold">{seg.period[language]}</p>

                      {/* ロール */}
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        {seg.roles.map((r) => (
                          <span
                            key={r.en}
                            className="inline-block text-sm font-semibold px-3 py-1 border border-white text-white"
                          >
                            {r[language]}
                          </span>
                        ))}
                      </div>

                      {/* 詳細 */}
                      <ul className="mt-3">
                        {seg.detail[language].map((paragraph) => (
                          <li key={paragraph} className="list-none text-sm pl-[20px] relative [&:nth-child(n+2)]:mt-[10px] before:absolute before:left-0 before:top-[9px] before:w-[8px] before:h-[1px] before:bg-white">{paragraph}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
