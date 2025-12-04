import { useState, useEffect } from 'react'
import './ScrollIndicator.css'

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="scroll-indicator">
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`scroll-dot ${index === activeSection ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
          aria-label={`Go to ${section.label}`}
        >
          <span className="scroll-tooltip">{section.label}</span>
        </button>
      ))}
    </div>
  )
}

export default ScrollIndicator
