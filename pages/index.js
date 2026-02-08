import { useState, useEffect, useRef } from 'react'
import { Github, Mail, ArrowUpRight } from 'lucide-react'
import { getProjects } from '../lib/supabase'

export default function Home({ ecoMode, toggleEcoMode }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredProject, setHoveredProject] = useState(null)
  const [cardTilt, setCardTilt] = useState({})
  const cursorRef = useRef(null)

  const projectImages = {
    'ARIES': 'https://nyrcqqekvxtkqdoxzwzt.supabase.co/storage/v1/object/public/project-images/IMG-20260208-WA0004.jpg',
    'Digital Alchemy': 'https://nyrcqqekvxtkqdoxzwzt.supabase.co/storage/v1/object/public/project-images/IMG-20260208-WA0005.jpg',
    'Asther': 'https://nyrcqqekvxtkqdoxzwzt.supabase.co/storage/v1/object/public/project-images/IMG_20260208_164129.jpg',
    'Photography': 'https://nyrcqqekvxtkqdoxzwzt.supabase.co/storage/v1/object/public/project-images/IMG-20260208-WA0002.jpg',
  }

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects()
      setProjects(data)
      setLoading(false)
    }
    fetchProjects()

    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleCardHover = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (mousePos.x - rect.left) / rect.width
    const y = (mousePos.y - rect.top) / rect.height
    
    setCardTilt({
      ...cardTilt,
      [index]: {
        rotateX: (y - 0.5) * 8,
        rotateY: (x - 0.5) * -8,
      }
    })
    setHoveredProject(index)
  }

  const handleCardLeave = (index) => {
    setCardTilt({ ...cardTilt, [index]: { rotateX: 0, rotateY: 0 } })
    setHoveredProject(null)
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #050711 0%, #0a0e27 50%, #050711 100%)',
      overflow: 'hidden',
      cursor: 'none',
    }}>
      {/* Custom Cursor */}
      <div ref={cursorRef} style={{
        position: 'fixed',
        width: '8px',
        height: '8px',
        background: '#39ff14',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 20px rgba(57, 255, 20, 0.5)',
        transition: 'all 0.1s',
      }} />

      {/* Film Grain Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2"/%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" opacity="0.03"/%3E%3C/svg%3E")',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.5,
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 40,
        background: scrollY > 100 ? 'rgba(5, 7, 17, 0.7)' : 'transparent',
        backdropFilter: scrollY > 100 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 100 ? '1px solid rgba(57, 255, 20, 0.08)' : 'none',
        transition: 'all 0.4s ease',
        padding: '1.5rem 0',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '800',
            color: '#39ff14',
            letterSpacing: '0.1em',
            textShadow: scrollY > 100 ? '0 0 15px rgba(57, 255, 20, 0.4)' : 'none',
            transition: 'text-shadow 0.3s',
          }}>
            SENTIENT
          </div>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <a href="#projects" style={{ color: '#a0afd9', fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s', borderBottom: '1px solid transparent' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#39ff14'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>Work</a>
            <a href="#about" style={{ color: '#a0afd9', fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s', borderBottom: '1px solid transparent' }} onMouseEnter={(e) => e.target.style.borderBottomColor = '#39ff14'} onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}>About</a>
            <button
              onClick={toggleEcoMode}
              style={{
                padding: '8px 14px',
                background: ecoMode ? 'rgba(16, 185, 129, 0.15)' : 'rgba(57, 255, 20, 0.1)',
                border: `1px solid ${ecoMode ? '#10b981' : '#39ff14'}`,
                color: ecoMode ? '#10b981' : '#39ff14',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              {ecoMode ? '◯' : '⚡'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Kinetic Text Reveal */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10,
      }}>
        {/* Animated Background Particles */}
        <div style={{
          position: 'absolute',
          top: '5%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(57, 255, 20, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 15s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(191, 64, 191, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 18s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              color: '#39ff14',
              letterSpacing: '0.15em',
              marginBottom: '2rem',
              opacity: 0.7,
              animation: 'slideInDown 0.8s ease-out',
            }}>
              CREATIVE DEVELOPER & TECHNOLOGIST
            </div>

            {/* Kinetic Text Reveal */}
            <h1 style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontWeight: '900',
              lineHeight: '1.05',
              marginBottom: '2rem',
              color: '#e8ecff',
              letterSpacing: '-0.02em',
            }}>
              <div style={{ overflow: 'hidden', display: 'inline-block' }}>
                <span style={{
                  display: 'inline-block',
                  animation: 'slideUp 0.8s ease-out 0.1s both',
                }}>
                  Design
                </span>
              </div>
              <br />
              <div style={{ overflow: 'hidden', display: 'inline-block' }}>
                <span style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #39ff14 0%, #00ffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'slideUp 0.8s ease-out 0.2s both',
                }}>
                  meets Code
                </span>
              </div>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: '#a0afd9',
              lineHeight: '1.7',
              maxWidth: '600px',
              marginBottom: '3rem',
              fontWeight: '400',
              animation: 'slideUp 0.8s ease-out 0.3s both',
              opacity: 0,
            }}>
              I build digital experiences that are beautiful, intentional, and performant. Every pixel, every interaction, every animation serves a purpose.
            </p>

            {/* Magnetic CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'slideUp 0.8s ease-out 0.4s both', opacity: 0 }}>
              <MagneticButton href="#projects" mousePos={mousePos}>
                <ArrowUpRight size={18} /> View Work
              </MagneticButton>
              <a
                href="#about"
                style={{
                  padding: '16px 40px',
                  background: 'transparent',
                  border: '1.5px solid rgba(57, 255, 20, 0.4)',
                  color: '#a0afd9',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#39ff14'
                  e.target.style.background = 'rgba(57, 255, 20, 0.05)'
                  e.target.style.color = '#39ff14'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(57, 255, 20, 0.4)'
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#a0afd9'
                }}
              >
                About Me
              </a>
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.75rem',
          color: '#39ff14',
          opacity: 0.5,
          animation: 'bounce 2s infinite',
        }}>
          ↓ SCROLL
        </div>
      </section>

      {/* Projects Section - Bento Grid */}
      <section id="projects" style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '5rem' }}>
            <div style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              color: '#39ff14',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
              opacity: 0.7,
            }}>
              PORTFOLIO
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '900',
              color: '#e8ecff',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
            }}>
              Selected Work
            </h2>
            <p style={{ color: '#a0afd9', fontSize: '1.1rem', maxWidth: '600px' }}>
              A carefully curated collection of projects that showcase my approach to design and development.
            </p>
          </div>

          {/* Bento Box Grid */}
          {loading ? (
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{
                  height: i === 0 ? '500px' : '350px',
                  background: 'rgba(26, 31, 58, 0.3)',
                  borderRadius: '12px',
                  animation: 'pulse 2s infinite',
                }} />
              ))}
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              gridAutoRows: '350px',
            }}>
              {projects.map((project, idx) => {
                const isFeatured = project.title === 'ARIES'
                return (
                  <div
                    key={project.id}
                    style={{
                      gridColumn: isFeatured ? 'span 2' : 'span 1',
                      gridRow: isFeatured ? 'span 2' : 'span 1',
                      perspective: '1000px',
                      cursor: 'pointer',
                    }}
                    onMouseMove={(e) => handleCardHover(e, idx)}
                    onMouseLeave={() => handleCardLeave(idx)}
                  >
                    <div style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      transform: cardTilt[idx] ? `rotateX(${cardTilt[idx].rotateX}deg) rotateY(${cardTilt[idx].rotateY}deg)` : 'rotateX(0) rotateY(0)',
                      transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.320, 1)',
                      transformStyle: 'preserve-3d',
                    }}>
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(26, 31, 58, 0.5)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(57, 255, 20, 0.1)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: hoveredProject === idx ? '0 30px 80px rgba(57, 255, 20, 0.1)' : '0 10px 40px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.4s',
                      }}>
                        {/* Project Image */}
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          overflow: 'hidden',
                        }}>
                          <img
                            src={projectImages[project.title] || 'https://via.placeholder.com/400'}
                            alt={project.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transform: hoveredProject === idx ? 'scale(1.1)' : 'scale(1)',
                              transition: 'transform 0.4s',
                            }}
                          />
                        </div>

                        {/* Overlay */}
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: hoveredProject === idx ? 'rgba(5, 7, 17, 0.4)' : 'rgba(5, 7, 17, 0.6)',
                          transition: 'background 0.4s',
                        }} />

                        {/* Content */}
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '2rem',
                          background: 'linear-gradient(to top, rgba(5, 7, 17, 0.9), transparent)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          height: '100%',
                        }}>
                          <div style={{
                            fontSize: '0.7rem',
                            fontWeight: '800',
                            color: '#39ff14',
                            letterSpacing: '0.1em',
                            marginBottom: '1rem',
                            opacity: 0.7,
                          }}>
                            {project.category.toUpperCase()}
                          </div>

                          <h3 style={{
                            fontSize: isFeatured ? '2rem' : '1.4rem',
                            fontWeight: '800',
                            color: '#e8ecff',
                            marginBottom: '0.75rem',
                            lineHeight: '1.2',
                          }}>
                            {project.title}
                          </h3>

                          <p style={{
                            color: '#a0afd9',
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}>
                            {project.description}
                          </p>

                          {project.project_url && (
                            <a
                              href={project.project_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#39ff14',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s',
                                width: 'fit-content',
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.gap = '1rem'}
                              onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                            >
                              View Project <ArrowUpRight size={16} />
                            </a>
                          )}
                        </div>

                        {/* System Online Indicator */}
                        <div style={{
                          position: 'absolute',
                          top: '1.5rem',
                          right: '1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.7rem',
                          color: '#39ff14',
                          fontWeight: '700',
                          letterSpacing: '0.05em',
                        }}>
                          <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#39ff14',
                            animation: 'pulse 2s infinite',
                          }} />
                          LIVE
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Left: Text */}
            <div>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: '700',
                color: '#39ff14',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                opacity: 0.7,
              }}>
                ABOUT ME
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '900',
                color: '#e8ecff',
                marginBottom: '2rem',
                lineHeight: '1.1',
              }}>
                Building the future,<br /> one line at a time.
              </h2>
              <p style={{
                color: '#a0afd9',
                fontSize: '1.05rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
              }}>
                I'm a creative developer obsessed with the space where design meets engineering. I don't believe one should compromise the other — the best experiences are born when both work in sync.
              </p>
              <p style={{
                color: '#a0afd9',
                fontSize: '1.05rem',
                lineHeight: '1.8',
                marginBottom: '2rem',
              }}>
                I specialize in building modern web experiences that feel intentional, responsive, and alive. From smooth motion systems to performance-first architecture, every detail is designed to serve both function and feeling.
              </p>

              {/* Floating Tech Stack */}
              <div>
                <h3 style={{
                  fontSize: '0.85rem',
                  fontWeight: '800',
                  color: '#e8ecff',
                  letterSpacing: '0.1em',
                  marginBottom: '1.5rem',
                  opacity: 0.7,
                }}>
                  TECH STACK
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}>
                  {['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Vercel'].map((tech, i) => (
                    <div
                      key={tech}
                      style={{
                        padding: '10px 16px',
                        background: 'rgba(57, 255, 20, 0.08)',
                        border: '1px solid rgba(57, 255, 20, 0.2)',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        color: '#a0afd9',
                        fontWeight: '600',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                        animation: `floatIn 0.6s ease-out ${i * 0.1}s both`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(57, 255, 20, 0.15)'
                        e.currentTarget.style.borderColor = '#39ff14'
                        e.currentTarget.style.color = '#39ff14'
                        e.currentTarget.style.transform = 'translateY(-4px)'
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(57, 255, 20, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(57, 255, 20, 0.08)'
                        e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.2)'
                        e.currentTarget.style.color = '#a0afd9'
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Rotating Wireframe Cube or Visual Element */}
            <div style={{
              position: 'relative',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(57, 255, 20, 0.1), rgba(0, 255, 255, 0.05))',
                borderRadius: '12px',
                border: '1px solid rgba(57, 255, 20, 0.2)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Rotating Heart/Sentient Symbol */}
                <div style={{
                  fontSize: '6rem',
                  opacity: 0.2,
                  animation: 'rotate 8s linear infinite',
                }}>
                  ◆
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            color: '#39ff14',
            letterSpacing: '0.15em',
            marginBottom: '1rem',
            opacity: 0.7,
          }}>
            GET IN TOUCH
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            color: '#e8ecff',
            marginBottom: '1.5rem',
          }}>
            Let's collaborate.
          </h2>
          <p style={{
            color: '#a0afd9',
            fontSize: '1.1rem',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem',
          }}>
            Have an interesting project? Let's talk about how we can create something amazing together.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/hapybeing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 24px',
                background: 'rgba(26, 31, 58, 0.4)',
                border: '1px solid rgba(57, 255, 20, 0.2)',
                color: '#a0afd9',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(57, 255, 20, 0.1)'
                e.currentTarget.style.borderColor = '#39ff14'
                e.currentTarget.style.color = '#39ff14'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(26, 31, 58, 0.4)'
                e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.2)'
                e.currentTarget.style.color = '#a0afd9'
              }}
            >
              <Github size={18} /> GitHub
            </a>
            <MagneticButton href="mailto:hello@example.com" mousePos={mousePos} isPrimary={true}>
              <Mail size={18} /> Say Hello
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(57, 255, 20, 0.08)',
        textAlign: 'center',
        color: '#7a8bc4',
        fontSize: '0.85rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <p>sentient digital twin © 2026</p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.5; }
          50% { transform: translateX(-50%) translateY(10px); opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

function MagneticButton({ href, children, mousePos, isPrimary }) {
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 })
  const buttonRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const buttonX = rect.left + rect.width / 2
    const buttonY = rect.top + rect.height / 2

    const distance = Math.hypot(mousePos.x - buttonX, mousePos.y - buttonY)
    const pullRadius = 100

    if (distance < pullRadius) {
      const angle = Math.atan2(mousePos.y - buttonY, mousePos.x - buttonX)
      const pull = (pullRadius - distance) / pullRadius

      setButtonPos({
        x: Math.cos(angle) * pull * 20,
        y: Math.sin(angle) * pull * 20,
      })
    } else {
      setButtonPos({ x: 0, y: 0 })
    }
  }

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setButtonPos({ x: 0, y: 0 })}
      style={{
        padding: '16px 40px',
        background: isPrimary ? 'linear-gradient(135deg, #39ff14, #00ffff)' : 'transparent',
        color: isPrimary ? '#050711' : '#a0afd9',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: '700',
        fontSize: '0.95rem',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: isPrimary ? '0 20px 60px rgba(57, 255, 20, 0.15)' : 'none',
        transform: `translate(${buttonPos.x}px, ${buttonPos.y}px)`,
        border: isPrimary ? 'none' : '1.5px solid rgba(57, 255, 20, 0.4)',
      }}
    >
      {children}
    </a>
  )
}
