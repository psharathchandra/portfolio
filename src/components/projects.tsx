export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management and payment processing.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/projects/ecommerce.jpg",
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/yourusername/project"
      }
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "/projects/taskmanager.jpg",
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/yourusername/project"
      }
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization and reporting features.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "/projects/dashboard.jpg",
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/yourusername/project"
      }
    }
  ];

  return (
    <section className="bg-light py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-light rounded-lg shadow-md border border-dark/10 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-2">{project.title}</h3>
                <p className="text-dark/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-dark/5 text-dark/70 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark/70 hover:text-dark transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark/70 hover:text-dark transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
