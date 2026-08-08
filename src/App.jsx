import './App.css'
import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Header from './components/Header.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import Stats from './sections/Stats.jsx'
import Services from './sections/Services.jsx'

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Lidu Tech | Abinet Portfolio</title>
      </Helmet>
      <ThemeToggle />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
