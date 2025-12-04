import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import AchievementBadges from './components/AchievementBadges'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Loading from './components/Loading'
import ParticlesBackground from './components/ParticlesBackground'
import ScrollIndicator from './components/ScrollIndicator'

function App() {
  return (
    <div className="app">
      <Loading />
      <ParticlesBackground />
      <ScrollProgress />
      <ScrollIndicator />
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
        <AchievementBadges />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
