import { useState } from 'react'

export default function MagneticButton({ children, onClick, href, external = false, className = '' }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseClassName = `magnetic-btn relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${className}`

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
    },
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClassName}
        {...commonProps}
      >
        <span className="relative z-10">{children}</span>
      </a>
    )
  }

  return (
    <button onClick={onClick} className={baseClassName} {...commonProps}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}
