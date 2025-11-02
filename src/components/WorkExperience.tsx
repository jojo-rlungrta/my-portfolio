export default function WorkExperience() {
  const items = [
    {
      company: 'Label Japan Co., Ltd. — Tokyo, Japan (Freelance / Remote)',
      segments: [
        {
          period: 'Oct 2024 – Present',
          roles: ['Web Project Manager', 'Front-end Developer'],
          detail: [
            'Managed full redesign of the company website, improving UI and mobile/tablet usability.',
            'Developed a contact form using React, Next.js, and PHP to enhance client communication.',
            'Integrated WordPress for easier content updates and organization.',
            'Coordinated between clients and designers to ensure high-quality delivery.',
            'I’m currently responsible for website maintenance and operations.',
          ],
        },
      ],
    },
    {
      company: 'Atlas21 Co., Ltd. — Tokyo, Japan (Permanent)',
      segments: [
        {
          period: 'Apr 2023 – Oct 2024',
          roles: ['Web Project Manager'],
          detail: [
            'Directed the redesign of a platinum credit card landing page, increasing applications threefold through better design and usability.',
            'Led a large-scale renewal of a railway company’s website by combining three sites into one for improved accessibility and management.',
            'Handled scheduling, quality control, and team coordination; project received strong client feedback for quality and delivery.',
          ],
        },
        {
          period: 'Apr 2017 – Mar 2023',
          roles: ['Front-end Developer'],
          detail: [
            'Developed JavaScript functionality for a CMS-integrated product search system (Food manufacturer).',
            'Created reusable site-wide components for an online shopping service introduction site.',
            'Built a JavaScript-based product search system for a pharmaceutical website.',
            'Designed an insurance request form with conditional elements and postal code auto-fill.',
          ],
        },
      ],
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-semibold tracking-wide">Work Experience</h2>
      <div className="relative mt-6">
        <ol className="relative after:absolute after:left-[10px] md:after:left-[33px] after:bottom-0 after:w-[15px] after:h-[15px] after:rounded-full after:bg-white">
          {items.map((item, i) => (
            <li key={i}>
              {/* 会社名*/}
              <div className="mt-4">
                <h3 className="font-bold text-lg">{item.company}</h3>
              </div>

              {/* セグメント（期間ごと） */}
              <ol className="mt-4 ml-4 md:ml-10">
                {item.segments.map((seg, j) => (
                  <li key={j} className="mt-0 pt-0 pl-5 md:pl-10 relative [&:nth-child(n+2)]:pt-[20px] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[2px] before:bg-white [&:nth-child(1)]:before:top-[3px] after:absolute after:top-[3px] after:left-[-7px] after:w-[15px] after:h-[15px] after:rounded-full after:bg-white [&:nth-child(n+2)]:after:top-[23px]">
                    <div>
                      {/* 期間 */}
                      <p className="text-base font-semibold">{seg.period}</p>

                      {/* ロール */}
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        {seg.roles.map((r) => (
                          <span
                            key={r}
                            className="inline-block text-sm font-semibold px-3 py-1 border border-white text-white"
                          >
                            {r}
                          </span>
                        ))}
                      </div>

                      {/* 詳細 */}
                      <ul className="mt-3">
                        {seg.detail.map((p, k) => (
                          <li key={k} className="list-none text-sm pl-[20px] relative [&:nth-child(n+2)]:mt-[10px] before:absolute before:left-0 before:top-[9px] before:w-[8px] before:h-[1px] before:bg-white">{p}</li>
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
