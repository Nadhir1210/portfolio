import { useState, useEffect } from 'react'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.style.setProperty('--primary', '#3b82f6')
      root.style.setProperty('--primary-hover', '#60a5fa')
      root.style.setProperty('--text', '#f1f5f9')
      root.style.setProperty('--text-light', '#cbd5e1')
      root.style.setProperty('--bg', '#0f172a')
      root.style.setProperty('--bg-alt', '#1e293b')
      root.style.setProperty('--border', '#334155')
      root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.5)')
    } else {
      root.style.setProperty('--primary', '#2563eb')
      root.style.setProperty('--primary-hover', '#1d4ed8')
      root.style.setProperty('--text', '#1e293b')
      root.style.setProperty('--text-light', '#475569')
      root.style.setProperty('--bg', '#ffffff')
      root.style.setProperty('--bg-alt', '#f8fafc')
      root.style.setProperty('--border', '#e2e8f0')
      root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.1)')
    }
  }, [isDark])

  return (
    <button 
      className="theme-toggle" 
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
    >
      <div className={`toggle-icon ${isDark ? 'dark' : 'light'}`}>
        {isDark ? '🌙' : '☀️'}
      </div>
    </button>
  )
}

export default ThemeToggle
