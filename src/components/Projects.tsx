import project1 from '../assets/portfolio_projects_im01.webp';
import project2 from '../assets/portfolio_projects_im02.webp';
import project3 from '../assets/portfolio_projects_im03.webp';
import project4 from '../assets/portfolio_projects_im07.webp';
import project5 from '../assets/portfolio_projects_im08.webp';
import project6 from '../assets/portfolio_projects_im04.webp';
import project7 from '../assets/portfolio_projects_im05.webp';
import project8 from '../assets/portfolio_projects_im06.webp';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Printing Company Official Website',
      url: 'https://www.label-japan.co.jp/',
      role: ['Front-end Developer', 'Web Project Manager'],
      tech: ['React', 'Next.js', 'PHP', 'WordPress', 'SCSS', 'JavaScript', 'jQuery', 'Webpack', 'Git'],
      description:
        'Redesigned a printing company website, improving UI and mobile/tablet usability. Handled both direction and front-end development, including a contact form and WordPress integration for easy content management.',
      img: project1,
    },
    {
      id: 2,
      title: 'Railway Company Official Website',
      url: 'https://www.keihan.co.jp/',
      role: ['Web Project Manager'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description:
        'Led a large-scale renewal by consolidating three railway websites into one, improving accessibility and site management.',
      img: project2,
    },
    {
      id: 3,
      title: 'Credit Card Company Official Website',
      url: 'https://www.eposcard.co.jp/',
      role: ['Web Project Manager'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description:
        'Directed the redesign of a platinum credit card landing page, tripling applications through improved design and usability.',
      img: project3,
    },
    {
      id: 4,
      title: 'Food Manufacturer Official Website',
      url: 'https://www.kikkoman.com/en/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description:
        'Led the JavaScript development of a CMS-integrated product search system, connecting products with recipes while prioritizing usability and seamless user experience.',
      img: project4,
    },
    {
      id: 5,
      title: 'Online Shopping Service Introduction Site',
      url: 'https://business.kuronekoyamato.co.jp/raku-uru/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description:
        'Developed site-wide reusable components, carefully designing CSS to ensure consistent functionality and appearance across all pages.',
      img: project5,
    },
    {
      id: 6,
      title: 'Pharmaceutical Product Search Site',
      url: 'https://www.otsuka.co.jp/cil/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description:
        'Built a JavaScript-based product search system using customer-updated CSV files, supporting free-word search, partial matches, and pagination for results over 10 items.',
      img: project6,
    },
    {
      id: 7,
      title: 'Insurance Company Official Website',
      url: 'https://neofirst.co.jp/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description:
        'Designed an insurance request form with conditional elements via URL queries, Yahoo! login integration, and postal code suggestion features.',
      img: project7,
    },
    {
      id: 8,
      title: 'Jewelry Manufacturer Official Website',
      url: 'https://www.ishifuku-kinzoku.co.jp/',
      role: ['Front-end Developer'],
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description:
        'Handled the front-end of the official homepage, implementing sliders and dynamic topic displays using jQuery and AJAX with JSON.',
      img: project8,
    },
  ];

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
      <h2 className="text-3xl font-semibold tracking-wide">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} (opens in new tab)`}
            className="group block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-white p-2 lg:p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-contain transition-transform duration-300 lg:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                              text-center text-white opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 px-4">
                <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
                  {project.title}
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </h3>
              </div>
            </div>

            {/* Details */}
            <div className="p-2 lg:p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>

              {/* ✅ Role badges (白枠＋白文字＋背景なし) */}
              <div className="flex flex-wrap gap-2 mt-2 mb-2">
                {project.role.map((r) => (
                  <span
                    key={r}
                    className="inline-block text-white text-sm px-3 py-1 border border-white font-semibold"
                  >
                    {r}
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

              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
