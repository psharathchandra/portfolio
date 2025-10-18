export default function Skills() {
  const skills = {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
    backend: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Postman']
  };

  return (
    <section className="bg-light py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="bg-light p-6 rounded-lg shadow-md border border-dark/10">
              <h3 className="text-xl font-semibold text-dark capitalize mb-4">{category}</h3>
              <ul className="space-y-2">
                {categorySkills.map((skill) => (
                  <li key={skill} className="text-dark/70 flex items-center">
                    <span className="mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
