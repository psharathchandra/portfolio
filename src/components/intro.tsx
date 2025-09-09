// Reusable button component
type ActionButtonProps = {
  href: string;
  children: React.ReactNode;
  download?: boolean;
  target?: string;
  rel?: string;
};

function ActionButton({ href, children, download, target, rel }: ActionButtonProps) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      className="px-6 py-2 bg-gray-200 text-dark rounded-lg font-semibold shadow hover:bg-gray-300 transition"
    >
      {children}
    </a>
  );
}

function Portrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg flex items-center justify-center bg-white">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
}

function ProfileInfo() {
  return (
    <>
     <p className="text-2xl mb-4">Hello, I'm</p>
      <h1 className="text-5xl font-bold mb-4">Sharath Chandra</h1>
      <p className="text-2xl mb-6">Software Engineer</p>
      <div className="flex gap-4 mb-6">
        <ActionButton href="mailto:sharath.chandra@example.com">Contact</ActionButton>
        <ActionButton href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</ActionButton>
        
      </div>
    </>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-6 mt-2">
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
        <img src="/github.svg" alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
      </a>
      <a href="https://leetcode.com/yourleetcode" target="_blank" rel="noopener noreferrer">
        <img src="/leetcode.svg" alt="LeetCode" className="w-8 h-8 hover:scale-110 transition" />
      </a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" />
      </a>
    </div>
  );
}

export default function Intro() {
  return (
    <section className="bg-light text-dark min-h-[calc(100vh-60px)] flex items-center justify-center">
      <div className="flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        {/* Left Column: Portrait */}
        <div className="flex-1 flex items-center justify-center">
          <Portrait src="/profile.jpg" alt="Sharath Chandra Portrait" />
        </div>
        {/* Right Column: Info & Actions */}
        <div className="flex-1 flex flex-col justify-center items-center pr-10">
          <ProfileInfo />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
