import { useEffect, useState } from 'react';
import Background from "./components/Background";
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getSavedLanguage, saveLanguage, type Language } from './language';
import { professionalTitle } from './roles';

export default function App() {
  const [language, setLanguage] = useState(getSavedLanguage);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    saveLanguage(nextLanguage);
  }

  useEffect(() => {
    document.documentElement.lang = language;
    const name = language === 'ja' ? '福田 城之介' : 'Jonosuke Fukuda';
    document.title = `${name} | ${professionalTitle[language]}`;
  }, [language]);

  return (
    <div className="relative min-h-screen px-4 pt-10 lg:pt-20 pb-4 lg:pb-10 font-sans">
      <Background />
      <Header language={language} onLanguageChange={changeLanguage} />
      <main className="pt-20 lg:container mx-auto lg:px-4">
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <WorkExperience language={language} />
        <Certification language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

