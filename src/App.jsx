import './App.css'
import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Header from './components/Header.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Resume from './sections/Resume.jsx'
import Contact from './sections/Contact.jsx'
import Testimonials from './sections/Testimonials.jsx'
import AIChat from './sections/AIChat.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Helmet>
        <title>Lidu Tech | Lidetu Portfolio</title>
      </Helmet>
      <ThemeToggle />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Testimonials />
      <AIChat />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
