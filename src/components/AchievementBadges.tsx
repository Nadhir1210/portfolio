import { useState, useEffect } from 'react'
import './AchievementBadges.css'

interface Badge {
  id: number
  icon: string
  title: string
  description: string
  unlocked: boolean
}

const AchievementBadges = () => {
  const [badges, setBadges] = useState<Badge[]>([
    { id: 1, icon: '🎓', title: 'Education Master', description: 'Engineering Student', unlocked: true },
    { id: 2, icon: '💼', title: 'Professional', description: '4+ Internships Completed', unlocked: true },
    { id: 3, icon: '🏆', title: 'IEEE Champion', description: '2nd Place IEEE Xtreme', unlocked: true },
    { id: 4, icon: '🤖', title: 'AI Specialist', description: 'NLP & RAG Expert', unlocked: true },
    { id: 5, icon: '☁️', title: 'Cloud Expert', description: 'AWS Migration Lead', unlocked: true },
    { id: 6, icon: '📜', title: 'Certified Pro', description: '15+ Certifications', unlocked: true },
    { id: 7, icon: '🚀', title: 'Project Master', description: '8+ Major Projects', unlocked: true },
    { id: 8, icon: '🌐', title: 'Full-Stack Dev', description: 'MEAN Stack Expert', unlocked: true }
  ])

  const [showBadges, setShowBadges] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadges(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="achievements" className="achievements">
      <h3>Achievements & Milestones</h3>
      <div className={`badges-grid ${showBadges ? 'show' : ''}`}>
        {badges.map((badge, index) => (
          <div 
            key={badge.id} 
            className={`badge-card ${badge.unlocked ? 'unlocked' : 'locked'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="badge-icon">{badge.icon}</div>
            <h4 className="badge-title">{badge.title}</h4>
            <p className="badge-description">{badge.description}</p>
            {badge.unlocked && <div className="badge-shine"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default AchievementBadges
