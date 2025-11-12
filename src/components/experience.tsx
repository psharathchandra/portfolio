import Timeline from './organisms/timeline';

export default function Experience() {
 const experiences = [
  {
    title: 'Web Developer',
    subtitle: 'TechElevate, Cincinnati, OH',
    period: 'Jun 2025 – Present',
    description: [
      'Built scalable UIs with React, Redux, Next.js, and TypeScript for education platforms.',
      'Developed secure REST APIs with Express.js and JWT, improving system reliability.'
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Express.js', 'JWT', 'AWS']
  },
  {
    title: 'Jr. Software Engineer',
    subtitle: 'Cognizant',
    period: 'Nov 2021 – Aug 2023',
    description: [
      'Engineered microservices for a U.S. telecom portal using Spring Boot and REST APIs.',
      'Improved API response times by 25% via query optimization and caching strategies.',
      'Automated CI/CD deployments to AWS, ensuring secure, high-availability systems.'
    ],
    tags: ['Spring Boot', 'ReactJS', 'Redux', 'SQL Server', 'AWS', 'Jenkins', 'Microservices']
  }
];



  return (
    <section className="bg-light py-20" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">Experience</h2>
        </div>

        <Timeline items={experiences} />
      </div>
    </section>
  );
}