import './Experience.css'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "AI & Full-Stack Development Intern",
      company: "Multiverse IA",
      location: "Sousse, Tunisia",
      period: "June – September 2025",
      description: [
        "Developed a full React.js web project from scratch as part of the internship training program",
        "Worked on advanced Natural Language Processing (NLP), Retrieval-Augmented Generation (RAG), and Model Context Protocol (MCP) applications",
        "Built and fine-tuned machine learning and deep learning models for intelligent data analysis"
      ]
    },
    {
      title: "Cloud & Security Engineer",
      company: "Abajim",
      location: "Sousse, Tunisia",
      period: "July – August 2024",
      description: [
        "Successfully migrated infrastructure from OVH to Amazon Web Services (AWS) to improve scalability and reliability",
        "Led the transition process, ensuring seamless deployment, optimized performance, and minimal downtime"
      ]
    },
    {
      title: "Website Development Intern",
      company: "Data Soft",
      location: "Sousse, Tunisia",
      period: "Summer 2023",
      description: [
        "Developed an ERP extension for financial data transfer and tax compliance using UML",
        "Debugged and optimized system functionality with WinDev 25"
      ]
    },
    {
      title: "TurbineControl IoT Upgrade",
      company: "Société tunisienne de l'électricité et du gaz",
      location: "Sousse, Tunisia",
      period: "July – August 2022",
      description: [
        "Developed and integrated an IoT service to monitor and control gas turbine systems in real time",
        "Successfully migrated control logic from Mitsubishi PLC code to Siemens TIA Portal, ensuring full functionality and reliability"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h3>Experience</h3>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <h4>{exp.title}</h4>
            <div className="meta">
              <span className="company">{exp.company}</span>
              <span className="separator">•</span>
              <span className="location">{exp.location}</span>
              <span className="separator">•</span>
              <span className="period">{exp.period}</span>
            </div>
            <ul className="description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
