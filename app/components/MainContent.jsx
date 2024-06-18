import React from 'react';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';

const MainContent = () => {
  return (
    <div>
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
  );
};

export default MainContent;
