import './Hero.css'
import '../components/TypingEffect.css'
import TypingEffect from './TypingEffect'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="profile-image-mobile">
            <img src="/portfolio/assets/profile.jpg" alt="Nadhir Ben Halima" />
          </div>
          <h2 className="hero-title">
            <TypingEffect 
              texts={[
                "Software Engineer & AI Specialist",
                "Full-Stack Developer",
                "Data Science Enthusiast",
                "Machine Learning Engineer"
              ]} 
            />
          </h2>
          <p className="hero-description">
            Passionate about AI, machine learning, and full-stack development. 
            Specializing in Data Science, NLP, and building intelligent systems that solve real-world problems.
          </p>
          <div className="hero-actions">
            <a href="/portfolio/assets/Nadhir-Benhalima.pdf" target="_blank" rel="noopener" className="btn btn-primary">
              View CV (PDF)
            </a>
            <a 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-image-container">
            <img src="/portfolio/assets/profile.jpg" alt="Nadhir Ben Halima" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
