import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

export default function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', img: project1 },
    { id: 2, title: 'Project 2', img: project2 },
    { id: 3, title: 'Project 3', img: project3 },
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
