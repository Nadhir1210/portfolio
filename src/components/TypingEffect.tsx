import { useState, useEffect } from 'react'

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

const TypingEffect = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span>
      {displayText}
      <span className="typing-cursor">|</span>
    </span>
  )
}

export default TypingEffect
