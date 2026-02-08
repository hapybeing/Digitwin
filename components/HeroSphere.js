import { useEffect, useRef, useState } from 'react'

export default function HeroSphere({ mousePos }) {
  const canvasRef = useRef(null)
  const [animationFrame, setAnimationFrame] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resizeCanvas()

    let frameCount = 0
    const particles = []
    const particleCount = 150

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const radius = 100 + Math.random() * 30

      particles.push({
        x: Math.sin(phi) * Math.cos(theta) * radius,
        y: Math.sin(phi) * Math.sin(theta) * radius,
        z: Math.cos(phi) * radius,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: (Math.random() - 0.5) * 2,
        originalRadius: radius,
      })
    }

    const centerX = canvas.offsetWidth / 2
    const centerY = canvas.offsetHeight / 2

    const animate = () => {
      frameCount++

      // Clear canvas
      ctx.fillStyle = 'rgba(5, 7, 17, 0.1)'
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Update and draw particles
      particles.forEach((p, i) => {
        // Rotate particles
        const angleX = frameCount * 0.0005
        const angleY = frameCount * 0.0008
        const angleZ = frameCount * 0.0003

        // Rotation matrices
        let x = p.x
        let y = p.y
        let z = p.z

        // Rotate around Y axis
        let newX = x * Math.cos(angleY) - z * Math.sin(angleY)
        let newZ = x * Math.sin(angleY) + z * Math.cos(angleY)
        x = newX
        z = newZ

        // Rotate around X axis
        let newY = y * Math.cos(angleX) - z * Math.sin(angleX)
        newZ = y * Math.sin(angleX) + z * Math.cos(angleX)
        y = newY
        z = newZ

        // Cursor influence
        const dx = centerX - mousePos.x
        const dy = centerY - mousePos.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 300

        if (dist < maxDist) {
          const influence = (1 - dist / maxDist) * 0.3
          const pullX = (dx / dist) * influence * 50
          const pullY = (dy / dist) * influence * 50

          x += pullX
          y += pullY
        }

        // Heartbeat pulse
        const pulse = Math.sin(frameCount * 0.03) * 0.1 + 1
        const scale = pulse * (1 + Math.sin(i + frameCount * 0.01) * 0.1)

        // Project to 2D
        const scale2D = 300 / (z + 300)
        const screenX = centerX + x * scale2D * scale
        const screenY = centerY + y * scale2D * scale

        // Depth-based opacity
        const opacity = (z + 200) / 400
        const brightness = Math.max(0.3, opacity)

        // Draw particle
        const size = 2 * scale2D * (1 + Math.sin(frameCount * 0.02 + i) * 0.5)
        ctx.fillStyle = `rgba(57, 255, 20, ${opacity * 0.6})`
        ctx.fillRect(screenX - size / 2, screenY - size / 2, size, size)

        // Update particle position with subtle drift
        p.x = x
        p.y = y
        p.z = z
      })

      // Draw outer glow circle
      const gradient = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, 150)
      gradient.addColorStop(0, 'rgba(57, 255, 20, 0.2)')
      gradient.addColorStop(1, 'rgba(57, 255, 20, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Draw breathing ring
      const ringSize = 120 + Math.sin(frameCount * 0.02) * 20
      ctx.strokeStyle = `rgba(57, 255, 20, ${0.3 + Math.sin(frameCount * 0.02) * 0.2})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, ringSize, 0, Math.PI * 2)
      ctx.stroke()

      setAnimationFrame(frameCount)
      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [mousePos])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        border: '1px solid rgba(57, 255, 20, 0.2)',
        background: 'linear-gradient(135deg, rgba(57, 255, 20, 0.05), rgba(0, 255, 255, 0.02))',
        boxShadow: '0 0 60px rgba(57, 255, 20, 0.1)',
      }}
    />
  )
}
