import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ toggleEcoMode, ecoMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-bio-green via-bio-purple to-bio-cyan flex items-center justify-center">
            <span className="text-deep-space-900 font-bold text-sm">◆</span>
          </div>
          <span className="text-lg font-bold glow-green hidden sm:inline">sentient</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#projects" className="text-sm hover:glow-green transition-all">
            Projects
          </a>
          <a href="#about" className="text-sm hover:glow-green transition-all">
            About
          </a>
          <a href="#contact" className="text-sm hover:glow-green transition-all">
            Contact
          </a>
          
          {/* Eco Mode Toggle */}
          <button
            onClick={toggleEcoMode}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
              ecoMode
                ? 'bg-deep-space-700 border border-deep-space-500 text-deep-space-200'
                : 'glass text-bio-green hover:shadow-glow'
            }`}
          >
            {ecoMode ? '🌍 eco' : '⚡ normal'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleEcoMode}
            className={`px-3 py-1 rounded text-xs font-mono transition-all ${
              ecoMode
                ? 'bg-deep-space-700 text-deep-space-200'
                : 'glass text-bio-green'
            }`}
          >
            {ecoMode ? '🌍' : '⚡'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-bio-green">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-bio-green/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#projects" className="text-sm hover:glow-green transition-all">
              Projects
            </a>
            <a href="#about" className="text-sm hover:glow-green transition-all">
              About
            </a>
            <a href="#contact" className="text-sm hover:glow-green transition-all">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
