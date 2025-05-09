import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skill';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
