import project1 from '../assets/portfolio_im10.png';
import project2 from '../assets/portfolio_im11.png';
import project3 from '../assets/portfolio_im12.png';
import project4 from '../assets/portfolio_im13.png';

export default function Projects() {
  const projects = [
    { id: 1, type: 'pc', title: 'Project 1', img: project1 },
    { id: 2, type: 'pc', title: 'Project 1', img: project2 },
    { id: 3, type: 'pc', title: 'Project 1', img: project3 },
    { id: 4, type: 'pc', title: 'Project 1', img: project4 },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      {projects.map((project) => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src={project.img} alt={project.title} />
        </div>
      ))}
    </section>
  );
}
