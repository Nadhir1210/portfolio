import { useState, useEffect } from 'react'
import './Loading.css'

const Loading = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="spinner"></div>
        <h2 className="loading-text">Nadhir Ben Halima</h2>
        <p className="loading-subtitle">Loading Portfolio...</p>
      </div>
    </div>
  )
}

export default Loading
