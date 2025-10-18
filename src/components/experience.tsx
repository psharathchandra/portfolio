import Timeline from './organisms/timeline';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      subtitle: 'Company Name',
      period: '2022 - Present',
      description: [
        'Led development of key features for enterprise web applications',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 40%'
      ],
      tags: ['React', 'Node.js', 'AWS']
    },
    {
      title: 'Software Developer',
      subtitle: 'Previous Company',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing applications',
        'Collaborated with cross-functional teams to deliver projects on time',
        'Optimized database queries improving performance by 30%'
      ],
      tags: ['TypeScript', 'Express', 'MongoDB']
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