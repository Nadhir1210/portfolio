import './Projects.css'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "AI Oil Price Prediction & Advisory Platform",
      description: "Real-time oil price monitoring and forecasting web application with RAG system for investment insights and financial analysis",
      technologies: ["React.js", "Next.js", "FastAPI", "MCP", "RAG", "ML/DL Models"]
    },
    {
      title: "PFA - BigData & Machine Learning Project",
      description: "Large-scale data processing and predictive analysis system using Hadoop and Apache Spark",
      technologies: ["Hadoop", "Apache Spark", "Machine Learning", "Big Data"]
    },
    {
      title: "Water Footprint Reduction Advisory Website",
      description: "Angular-based advisory platform for sustainable water usage with integrated LLM chatbot for personalized advice",
      technologies: ["Angular", "LLM", "Chatbot", "Environmental Tech"]
    },
    {
      title: "Virtual Try-On for Zen Clothing Brand",
      description: "IEEE challenge project - Implemented virtual try-on feature using OOTDiffusion model integrated into mobile app",
      technologies: ["OOTDiffusion", "Computer Vision", "Mobile Integration", "AI"]
    },
    {
      title: "React Website for Industrial Machinery Company",
      description: "Designed, developed, and hosted a professional company website",
      technologies: ["React", "Web Hosting", "Responsive Design"]
    },
    {
      title: "Stock Management System for Bank",
      description: "Enterprise stock management system with inventory tracking, supplier management, and automated alerts",
      technologies: ["JavaFX", "Java", "MySQL"]
    },
    {
      title: "Grocery Delivery App",
      description: "Android grocery delivery application with user authentication and seamless UI/UX",
      technologies: ["Java", "Android", "Material UI"]
    },
    {
      title: "School Management System",
      description: "Comprehensive system with student calendar, class management, and library module",
      technologies: ["Python", "Tkinter", "MySQL"]
    }
  ]

  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} className="project-link">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
