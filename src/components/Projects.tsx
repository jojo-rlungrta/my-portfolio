import project1 from '../assets/portfolio_projects_im01.png';
import project2 from '../assets/portfolio_projects_im02.png';
import project3 from '../assets/portfolio_projects_im03.png';
import project4 from '../assets/portfolio_projects_im04.png';
import project5 from '../assets/portfolio_projects_im05.png';
import project6 from '../assets/portfolio_projects_im06.png';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Printing Company Official Website',
      url: 'https://www.label-japan.co.jp/',
      period: 'Oct 2024 - Sep 2025',
      role: 'Front-end Developer & Web Director',
      tech: ['React', 'Next.js', 'PHP', 'WordPress', 'SCSS', 'JavaScript', 'jQuery', 'Webpack', 'Git'],
      description: 'Redesigned a printing company website, improving UI and mobile/tablet usability. Handled both direction and front-end development, including a contact form and WordPress integration for easy content management.',
      img: project1,
    },
    {
      id: 2,
      title: 'Railway Company Official Website',
      url: 'https://www.keihan.co.jp/',
      period: 'Oct 2023 - Oct 2024',
      role: 'Web Director',
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: 'Led a large-scale renewal by consolidating three railway websites into one, improving accessibility and site management.',
      img: project2,
    },
    {
      id: 3,
      title: 'Platinum Credit Card Landing Page',
      url: 'https://www.eposcard.co.jp/',
      period: 'Apr 2023 - Oct 2023',
      role: 'Web Director',
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: 'Directed the redesign of a platinum credit card landing page, tripling applications through improved design and usability.',
      img: project3,
    },
    {
      id: 4,
      title: 'Pharmaceutical Product Search Site',
      url: 'https://www.otsuka.co.jp/cil/',
      period: 'Jan 2023 - Apr 2023',
      role: 'Front-end Developer',
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: 'Built a JavaScript-based product search system using customer-updated CSV files, supporting free-word search, partial matches, and pagination for results over 10 items.',
      img: project4,
    },
    {
      id: 5,
      title: 'Insurance Material Request Form',
      url: 'https://neofirst.co.jp/',
      period: 'Sep 2022 - Dec 2022',
      role: 'Front-end Developer',
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: 'Designed an insurance request form with conditional elements via URL queries, Yahoo! login integration, and postal code suggestion features.',
      img: project5,
    },
    {
      id: 6,
      title: 'Jewelry Manufacturer Official Website',
      url: 'https://www.ishifuku-kinzoku.co.jp/',
      period: 'Aug 2022 - Sep 2022',
      role: 'Front-end Developer',
      tech: ['SCSS', 'JavaScript', 'jQuery', 'Webpack'],
      description: 'Handled the front-end of the official homepage, implementing sliders and dynamic topic displays using jQuery and AJAX with JSON.',
      img: project6,
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} (opens in new tab)`}
            className="group block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* 画像＋hover caption */}
            <div className="relative overflow-hidden bg-white p-2 lg:p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-contain transition-transform duration-300 lg:group-hover:scale-105"
              />

              {/* マスク */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* キャプション（hover時のみPC） */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                              text-center text-white opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 px-4">
                <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
                  {project.title}
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </h3>
              </div>
            </div>

            {/* カード下部の詳細 */}
            <div className="p-2 lg:p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.period}</p>
              <p className="text-sm mt-1"><strong>Role:</strong> {project.role}</p>
              <p className="text-sm mt-1"><strong>Tech:</strong> {project.tech.join(', ')}</p>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
