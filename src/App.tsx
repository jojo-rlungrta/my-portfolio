import Background from "./components/Background";
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Qualification from './components/Qualification';
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
        <Education />
        <Qualification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

