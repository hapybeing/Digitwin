import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import MagneticButton from './MagneticButton'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating blob 1 */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-bio-green/10 to-transparent rounded-full blur-3xl liquid-blob"
          style={{
            top: '20%',
            right: '-10%',
            transform: `translateZ(${-scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />

        {/* Floating blob 2 */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-l from-bio-purple/10 to-transparent rounded-full blur-3xl liquid-blob"
          style={{
            bottom: '10%',
            left: '-5%',
            animationDelay: '2s',
            transform: `translateZ(${-scrollY * 0.3}px)`,
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(57, 255, 20, 0.05) 25%, rgba(57, 255, 20, 0.05) 26%, transparent 27%, transparent 74%, rgba(57, 255, 20, 0.05) 75%, rgba(57, 255, 20, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(57, 255, 20, 0.05) 25%, rgba(57, 255, 20, 0.05) 26%, transparent 27%, transparent 74%, rgba(57, 255, 20, 0.05) 75%, rgba(57, 255, 20, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
            backgroundPosition: `0px ${scrollY * 0.5}px`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Subtitle */}
        <div className="mb-8 flex justify-center">
          <div className="glass px-4 py-2 rounded-full inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-bio-green animate-pulse" />
            <span className="text-xs font-mono text-bio-green">AI-POWERED EXPERIENCE</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="kinetic-text mb-8">
          <span className="glow-green block mb-2">Sentient</span>
          <span className="glow-purple block">Digital Twin</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-deep-space-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          A dynamic portfolio that adapts to you. Every visit is unique. Every interaction is intentional. This isn't just a website—it's an autonomous agent representing my craft.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <MagneticButton
            href="#projects"
            className="bg-gradient-to-r from-bio-green to-bio-cyan text-deep-space-900 hover:shadow-glow"
          >
            Explore Projects
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="glass border border-bio-green/50 text-bio-green hover:border-bio-green hover:bg-bio-green/5"
          >
            Get in Touch
          </MagneticButton>
        </div>

        {/* Tech Stack Preview */}
        <div className="glass px-6 py-4 rounded-lg inline-block mb-12">
          <p className="text-xs font-mono text-deep-space-400 mb-2">BUILT WITH</p>
          <p className="text-sm text-bio-green font-mono">Next.js • Tailwind • Supabase • Framer Motion</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-bio-green opacity-50" size={24} />
      </div>

      {/* Parallax Accent Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bio-green/50 to-transparent"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
    </section>
  )
}
