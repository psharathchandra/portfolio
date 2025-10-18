export default function Certifications() {
  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "ABC123XYZ",
      link: "https://www.credential.net/abc123xyz"
    },
    {
      name: "Professional Full-Stack Engineer",
      issuer: "Meta",
      date: "2023",
      credentialId: "META789",
      link: "https://www.credential.net/meta789"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "FCC456",
      link: "https://www.freecodecamp.org/certification/abc123"
    }
  ];

  return (
    <section className="bg-light py-20" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-light p-6 rounded-lg shadow-md border border-dark/10">
              <h3 className="text-xl font-semibold text-dark mb-2">{cert.name}</h3>
              <p className="text-dark/70 mb-1">Issuer: {cert.issuer}</p>
              <p className="text-dark/70 mb-1">Date: {cert.date}</p>
              <p className="text-dark/70 mb-4">Credential ID: {cert.credentialId}</p>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark/70 hover:text-dark transition-colors"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
