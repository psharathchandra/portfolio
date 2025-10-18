import Navbar from "@/components/navbar";
import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />     
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Footer />
    </>
  );
}
