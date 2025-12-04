import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Nadhir Ben Halima. All rights reserved.</p>
        <p className="footer-note">Built with React, TypeScript & Vite</p>
      </div>
    </footer>
  )
}

export default Footer
