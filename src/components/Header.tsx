import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">Nadhir Benhalima</h1>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('experience')}>Experience</a>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
            <a onClick={() => scrollToSection('education')}>Education</a>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
            <a onClick={() => scrollToSection('certifications')}>Certifications</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
            <a href="/assets/Nadhir-Benhalima.pdf" target="_blank" rel="noopener" className="cv-link">
              CV (PDF)
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
