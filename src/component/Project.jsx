import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Mes Projets</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "Une plateforme e-commerce complète avec panier et paiement",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Manager",
    description: "Application de gestion de tâches avec authentification",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80",
    tags: ["TypeScript", "React", "Express"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio",
    description: "Site portfolio personnel avec design moderne",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const ProjectCard = ({ title, description, image, tags, demoUrl, githubUrl }: Project) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ExternalLink size={16} />
          Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </div>
  </div>
);

export default Projects;