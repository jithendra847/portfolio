import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Marquee } from './components/Marquee';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { EducationLearning } from './components/EducationLearning';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ThemeProvider } from './context/ThemeContext';

export function App() {
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);
  const [triggerId, setTriggerId] = useState(null);

  const handleOpenCaseStudy = (slug, originTriggerId) => {
    setSelectedProjectSlug(slug);
    setTriggerId(originTriggerId || null);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProjectSlug(null);
  };

  return (
    <ThemeProvider>
      <div className="app-root">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Marquee />
          <Skills />
          <Projects onOpenCaseStudy={handleOpenCaseStudy} />
          <CompetitiveProgramming />
          <EducationLearning />
          <Contact />
        </main>
        <Footer />

        {selectedProjectSlug && (
          <ProjectModal
            selectedSlug={selectedProjectSlug}
            onClose={handleCloseCaseStudy}
            onSelectProject={setSelectedProjectSlug}
            triggerId={triggerId}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
