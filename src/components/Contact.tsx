import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h3>Get in Touch</h3>
      <div className="contact-content">
        <p className="contact-intro">
          I'm always interested in hearing about new opportunities and collaborations.
          Feel free to reach out!
        </p>
        <div className="contact-methods">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h4>Email</h4>
              <a href="mailto:nadhir.benhalima.software@gmail.com">nadhir.benhalima.software@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <h4>Phone</h4>
              <a href="tel:+21699584634">+216 99584634</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/nadhir-benhalima-74b047227" target="_blank" rel="noopener">
                linkedin.com/in/nadhir-benhalima-74b047227
              </a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h4>Location</h4>
              <span style={{color: 'var(--text-light)'}}>Sousse, Tunisia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
