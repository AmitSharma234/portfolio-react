import Hero from './hero.jsx';
import Skill from './skill.jsx';
import Project from './projects.jsx';
import Contact from './contact.jsx';
import Education from './education.jsx';
import Experience from './experience.jsx';
import About from './about.jsx';


function Home() {
  return (
    <>
  <Hero />
  <About />
  <Education />
  <Experience />
  
  <Skill />
  <Project />
  <Contact />
    </>
  )
}
export default Home;