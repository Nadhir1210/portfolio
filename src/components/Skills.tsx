import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C", "C++", "C# .NET", "PHP", "R", "Flutter"]
    },
    {
      title: "Web Technologies",
      skills: ["React.js", "Next.js", "Angular", "MEAN Stack", "HTML & CSS", "REST APIs", "FastAPI", "Flask"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["NLP", "RAG", "LLM Deployment", "Prompt Engineering", "Deep Learning", "scikit-learn", "Apache Spark", "Ollama"]
    },
    {
      title: "Big Data & Cloud",
      skills: ["Hadoop", "Apache Spark", "Data Warehousing", "AWS", "Docker", "Linux"]
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "Data Processing"]
    },
    {
      title: "Networking & Security",
      skills: ["CCNA 1 & 2", "Enterprise Networks", "Security Protocols", "OSINT"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h3>Skills & Technologies</h3>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.title}</h4>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
