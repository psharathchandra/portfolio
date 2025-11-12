export default function Skills() {
  const skills = [
    'Java',  'Spring Boot',  'Hibernate', 'Spring Security', 'Spring MVC',
     'Microservices', 'JPA', 'RESTful APIs', 'JUnit', 'Mockito', 'GitLab CI/CD', 'Docker', 'AWS (EC2, S3, Lambda, ECS)',
      'JavaScript (ES6+)', 'React.js', 
     'Redux', 'TypeScript', 'D3.js','Express.js', 'Node.js', 
     'HTML5', 'CSS3', 'Bootstrap','Tailwind CSS', 'MongoDB', 'SQL', 'Agile Methodologies', 'Async programming', 'Design Patterns', 'Cloud Native Development'
  ];

  return (
    <section className="bg-light py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-dark">Skills & Technologies</h2>
          <p className="text-dark/70 mt-2">A quick glance at tools, frameworks and technologies I have expertise in.</p>
        </div>

        {/* Horizontal row of skill chips. Scrollable on small screens, wraps on md+ */}
        <div className="mt-8">
          <div className="flex gap-3 items-center justify-start overflow-x-auto md:flex-wrap md:justify-center py-2 px-2">
            {skills.map((skill) => (
              <b key={skill}><span
                
                className="inline-flex items-center px-4 py-2 bg-white border border-dark/10 text-dark rounded-full shadow-sm text-sm whitespace-nowrap"
              >
                {skill}
              </span></b>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
