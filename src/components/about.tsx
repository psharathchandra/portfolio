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
              I am a passionate Software Engineer with a strong foundation in both frontend and backend development. 
              My journey began with a deep curiosity for creating user-friendly web applications, which has evolved into 
              a comprehensive understanding of the full development lifecycle.
            </p>
            <p className="text-dark/70 text-lg leading-relaxed">
              Specializing in React, Next.js, and Node.js, I&apos;ve had the opportunity to work on diverse projects 
              ranging from e-commerce platforms to real-time analytics dashboards. My approach combines clean code 
              practices with innovative problem-solving to deliver scalable and efficient solutions.
            </p>
            <p className="text-dark/70 text-lg leading-relaxed">
              I thrive in collaborative environments where I can contribute to meaningful projects while continuously 
              learning and adapting to new technologies. Whether it&apos;s optimizing performance, implementing complex 
              features, or mentoring team members, I&apos;m always excited to take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
