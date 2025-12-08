export default function Certifications() {
  const certifications = [
    {
      name: "Neo4j Certified Professional",
      issuer: "Neo4j",
      date: "2025",
      credentialId: "d59796ac-3ed7-4c9f-a406-8f1423369ed9",
      link: "https://graphacademy.neo4j.com/c/d59796ac-3ed7-4c9f-a406-8f1423369ed9/"
    },
    {
      name: "Neo4j Graph Data Science Certification",
      issuer: "Neo4j",
      date: "2025",
      credentialId: "a06ac7ae-5294-461a-b618-576bbf15c638",
      link: "https://graphacademy.neo4j.com/c/a06ac7ae-5294-461a-b618-576bbf15c638/"
    },
    {
      name: "NPTEL Certified - Programming C",
      issuer: "NPTEL",
      date: "2019",
      credentialId: "NPTEL18CS31S113922961810174577",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL18CS31S113922961810174577"
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-dark/10">
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
