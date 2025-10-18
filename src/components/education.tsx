import Timeline from './organisms/timeline';

export default function Education() {
  const educationItems = [
    {
      title: "Master of Computer Science",
      subtitle: 'Arizona State University',
      period: '2023 - 2025',
      description: [
      ],
      tags: []
    },
    {
      title: "Bachelor of Engineering in Electronics",
      subtitle: 'Sreenidhi Institute of Science and Technology',
      period: '2017 - 2021',
      description: [
      ],
      tags: []
    }
  ];

  return (
    <section className="bg-light py-20" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">Education</h2>
        </div>

        <Timeline items={educationItems} overlapAmount="8" />
      </div>
    </section>
  );
}
