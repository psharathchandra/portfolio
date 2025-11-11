export default function About() {
  return (
    <section className="bg-light py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column: 25% with cards */}
          <div className="md:w-1/4">
            <div className="grid grid-cols-2 gap-4">
              {/* Experience Card */}
              <div className="bg-light p-4 rounded-lg shadow-md hover:shadow-lg transition border border-dark/10">
                <h3 className="font-bold text-xl text-dark">3+</h3>
                <p className="text-dark/60 text-sm">Years Experience</p>
              </div>
              
              {/* Projects Card */}
              <div className="bg-light p-4 rounded-lg shadow-md hover:shadow-lg transition border border-dark/10">
                <h3 className="font-bold text-xl text-dark">20+</h3>
                <p className="text-dark/60 text-sm">Projects</p>
              </div>
              
              {/* Companies Card */}
              <div className="bg-light p-4 rounded-lg shadow-md hover:shadow-lg transition border border-dark/10">
                <h3 className="font-bold text-xl text-dark">2+</h3>
                <p className="text-dark/60 text-sm">Companies</p>
              </div>
              
              {/* Skills Card */}
              <div className="bg-light p-4 rounded-lg shadow-md hover:shadow-lg transition border border-dark/10">
                <h3 className="font-bold text-xl text-dark">10+</h3>
                <p className="text-dark/60 text-sm">Technologies</p>
              </div>
            </div>
          </div>

          {/* Right column: 75% with description */}
          <div className="md:w-3/4 space-y-6">
            <p className="text-dark/70 text-lg leading-relaxed">
            I’m a Full Stack Software Engineer passionate about building end-to-end, cloud-native solutions combining scalable backends, intuitive frontends, and reliable deployment pipelines. I specialize in Java Spring Boot microservices, REST APIs, and modern JavaScript ecosystems like React, Redux, Node.js, and TypeScript.
            </p>
            <p className="text-dark/70 text-lg leading-relaxed">
              At Cognizant, I contributed to the development and maintenance of a large-scale U.S. wireless operator customer portal, optimizing microservices, database queries, and secure JWT-based authentication. I collaborated with cross-functional teams using Agile practices and streamlined deployments via AWS, Docker, and GitLab CI/CD for mission-critical systems.
            </p>
            <p className="text-dark/70 text-lg leading-relaxed">
            Currently at TechElevate, I build modular, reusable UI components while integrating backend APIs for educational platforms. Focused on system design, architecture trade-offs, and AI-assisted engineering, I deliver complete solutions from UI/UX and backend to cloud deployment and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
