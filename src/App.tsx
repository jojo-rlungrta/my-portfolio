import Background from "./components/Background";
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen px-4 pt-10 lg:pt-20 pb-4 lg:pb-10 font-sans">
      <Background />
      <Header />
      <main className="pt-20 lg:container mx-auto lg:px-4">
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

