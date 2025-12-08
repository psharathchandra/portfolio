export default function Projects() {
  const projects = [
    {
      title: "Project Management System",
      description: "Built a MERN-based Defect Tracking System with a modular React frontend (custom hooks, Redux, lazy loading) and secure Express.js APIs powered by JWT auth, RBAC, and MongoDB. The tool improved team productivity and defect traceability through structured workflows and clear role-based visibility.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Redux", "Bootstrap"],
      image: "assets/images/DefectTrackingSystem.png",
      links: {
        demo: "https://defect-tracking-system.vercel.app/",
        github: "https://github.com/psharathchandra/defectTrackingSystem"
      }
    },
    {
      title: "Disaster Response Dashboard",
      description: "Developed an interactive Disaster Response Dashboard using JavaScript, D3.js, and NLP (n-grams, TF-IDF) to visualize incident patterns, sentiment trends, and resource needs. Delivered custom insights that helped users quickly understand impact areas and priority zones.",
      technologies: ["D3.js", "NLP", "JavaScript"],
      image: "assets/images/DisasterResponseDashboard.png",
      links: {
        demo: "https://psharathchandra.github.io/Disaster-response-dashboard/",
        github: "https://github.com/psharathchandra/Disaster-response-dashboard"
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

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md border border-dark/10 overflow-hidden flex flex-col md:flex-row items-stretch"
            >
              {/* Image - left on md+, top on mobile */}
              <div className="p-6 md:w-1/3 w-full h-56 md:h-auto flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-dark mb-2">{project.title}</h3>
                  <p className="text-dark/70 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-dark/5 text-dark/70 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-4">
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-light border border-dark/10 text-dark rounded-md shadow-sm text-sm hover:bg-dark/5 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white border border-dark/10 text-dark rounded-md shadow-sm text-sm hover:bg-dark/5 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
