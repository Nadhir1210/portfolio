import './Certifications.css'

interface Certification {
  name: string
  issuer: string
  file?: string
}

const Certifications = () => {
  const certifications: Certification[] = [
    { name: "Microsoft Azure AI-900 (AI Fundamentals)", issuer: "Microsoft" },
    { name: "Building Transformer-Based NLP Applications", issuer: "NVIDIA" },
    { name: "Fundamentals of Deep Learning", issuer: "NVIDIA" },
    { 
      name: "CCNA 1 & 2 Certification", 
      issuer: "Cisco",
      file: "/certifications/ccna-introduction-to-networks.png"
    },
    { 
      name: "CCNA Introduction to Networks - Certificate", 
      issuer: "Cisco",
      file: "/certifications/nadhirbenhalima-3GI-CCNA1-S1-202-certificate (1).pdf"
    },
    { 
      name: "CCNA Introduction to Networks - Letter", 
      issuer: "Cisco",
      file: "/certifications/nadhirbenhalima-3GI-CCNA1-S1-202-letter.pdf"
    },
    { name: "BLS (Basic Life Support) Certification", issuer: "Healthcare" },
    { name: "Securinet OSINT Formation", issuer: "Securinet" },
    { name: "2nd Place - IEEE Xtreme Hub Competition", issuer: "IEEE (2023)" },
    { 
      name: "IBM Blockchain Foundation Developer (BC0201EN)", 
      issuer: "IBM",
      file: "/certifications/IBMDeveloperSkillsNetwork BC0201EN Certificate _ Cognitive Class.pdf"
    },
    { 
      name: "Hadoop (BD0111EN)", 
      issuer: "IBM",
      file: "/certifications/IBM BD0111EN Certificate _ Cognitive Class.pdf"
    },
    { 
      name: "Big Data Fundamentals (BD0101EN)", 
      issuer: "IBM",
      file: "/certifications/IBM BD0101EN Certificate _ Cognitive Class.pdf"
    },
    { 
      name: "Spark Fundamentals (BD0211EN)", 
      issuer: "BigDataUniversity",
      file: "/certifications/BigDataUniversity BD0211EN Certificate _ Cognitive Class.pdf"
    },
    { name: "Supervised & Unsupervised Learning with scikit-learn", issuer: "Datacamp" },
    { 
      name: "Introduction to Data Science (DS0101EN)", 
      issuer: "Cognitive Class",
      file: "/certifications/Cognitive Class DS0101EN Certificate _ Cognitive Class.pdf"
    },
    { name: "Intermediate to R", issuer: "Online Course" }
  ]

  const leadership = [
    {
      title: "IEEE EPS Student Branch Tunisia - Member",
      period: "2023 - Present",
      description: "Worked on various technical projects and ranked 2nd in the IEEE Xtreme Hub Competition"
    },
    {
      title: "Founding Member of Microsoft IT Lab, ESSTHS University",
      period: "2022 - 2023",
      description: "Event Coordinator - Led event management efforts and facilitated tech workshops for students"
    },
    {
      title: "IEEE Membership Tunisia - Member",
      period: "2021 - Present",
      description: "Participated in competitive programming contests and algorithmic challenges"
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="cert-container">
        <div className="cert-section">
          <h3>Certifications & Awards</h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-icon">🏆</div>
                <div className="cert-content">
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                  {cert.file && (
                    <a 
                      href={cert.file} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cert-view-link"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="leadership-section">
          <h3>Leadership & Activities</h3>
          <div className="leadership-list">
            {leadership.map((item, index) => (
              <div key={index} className="card leadership-card">
                <h4>{item.title}</h4>
                <div className="meta">{item.period}</div>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="languages-section">
          <h3>Languages</h3>
          <div className="languages-grid">
            <div className="language-item">
              <span className="language-name">Arabic</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">Fluent</span>
            </div>
            <div className="language-item">
              <span className="language-name">French</span>
              <span className="language-level">Fluent</span>
            </div>
            <div className="language-item">
              <span className="language-name">German</span>
              <span className="language-level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
