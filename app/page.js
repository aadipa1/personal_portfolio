import Image from "next/image";
import Section1 from "./components/Section1";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#151515]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Section1 />
        <section id="about" className="min-h-screen py-16">
          <AboutSection />
        </section>
        <section id="projects" className="min-h-screen py-16">
          <ProjectSection />
        </section>
        <section id="contact" className="min-h-screen py-16">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}