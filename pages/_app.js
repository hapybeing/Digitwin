import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [ecoMode, setEcoMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved eco mode preference
    const savedEcoMode = localStorage.getItem('ecoMode') === 'true'
    setEcoMode(savedEcoMode)
    
    if (savedEcoMode) {
      document.body.classList.add('eco-mode')
    }
  }, [])

  const toggleEcoMode = () => {
    const newEcoMode = !ecoMode
    setEcoMode(newEcoMode)
    localStorage.setItem('ecoMode', newEcoMode)
    
    if (newEcoMode) {
      document.body.classList.add('eco-mode')
    } else {
      document.body.classList.remove('eco-mode')
    }
  }

  if (!mounted) return null

  return (
    <Component {...pageProps} ecoMode={ecoMode} toggleEcoMode={toggleEcoMode} />
  )
}

export default MyApp
