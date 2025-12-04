import './Education.css'

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  description?: string
}

const Education = () => {
  const education: EducationItem[] = [
    {
      degree: "Software Engineering Degree (Data Science & AI specialty)",
      institution: "Ecole Polytechnique de Sousse - GFI",
      location: "Sousse, Tunisia",
      period: "2023 - 2026",
      description: "Specializing in Data Science, Artificial Intelligence, and Software Engineering"
    },
    {
      degree: "Maths-Physics Preparatory Class for Engineering Studies",
      institution: "École supérieure des sciences et de la technologie de Hammam Sousse",
      location: "Sousse, Tunisia",
      period: "2018 - 2022",
      description: "Intensive preparation in mathematics and physics for engineering schools"
    },
    {
      degree: "Tunisian Baccalaureate in Mathematics",
      institution: "High School",
      location: "Tunisia",
      period: "2018",
      description: "Honors: Good"
    }
  ]

  return (
    <section id="education" className="education">
      <h3>Education</h3>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="card">
            <h4>{edu.degree}</h4>
            <div className="meta">
              <span className="institution">{edu.institution}</span>
              <span className="separator">•</span>
              <span className="location">{edu.location}</span>
              <span className="separator">•</span>
              <span className="period">{edu.period}</span>
            </div>
            {edu.description && <p className="description">{edu.description}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
