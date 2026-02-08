import { useState, useEffect } from 'react'
import { Github, Mail, ExternalLink, Code2, Image as ImageIcon, Palette, ArrowUpRight } from 'lucide-react'
import { getProjects } from '../lib/supabase'

export default function Home({ ecoMode, toggleEcoMode }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects()
      setProjects(data)
      setLoading(false)
    }
    fetchProjects()

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ background: 'linear-gradient(135deg, #050711 0%, #0a0e27 50%, #050711 100%)' }}>
      {/* Navigation - Minimal & Elegant */}
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

      {/* Hero - Premium & Dramatic */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated background elements */}
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
            {/* Intro text */}
            <div style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              color: '#39ff14',
              letterSpacing: '0.15em',
              marginBottom: '2rem',
              opacity: 0.7,
            }}>
              CREATIVE DEVELOPER & TECHNOLOGIST
            </div>

            {/* Main heading */}
            <h1 style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontWeight: '900',
              lineHeight: '1.05',
              marginBottom: '2rem',
              color: '#e8ecff',
              letterSpacing: '-0.02em',
            }}>
              Design
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #39ff14 0%, #00ffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                meets Code
              </span>
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1.15rem',
              color: '#a0afd9',
              lineHeight: '1.7',
              maxWidth: '600px',
              marginBottom: '3rem',
              fontWeight: '400',
            }}>
              I build digital experiences that are beautiful, intentional, and performant. Every pixel, every interaction, every animation serves a purpose.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#projects"
                style={{
                  padding: '16px 40px',
                  background: 'linear-gradient(135deg, #39ff14 0%, #00ffff 100%)',
                  color: '#050711',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: '0 20px 60px rgba(57, 255, 20, 0.15)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 30px 80px rgba(57, 255, 20, 0.3)';
                  e.target.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 20px 60px rgba(57, 255, 20, 0.15)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                View Work <ArrowUpRight size={18} />
              </a>
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
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#39ff14';
                  e.target.style.background = 'rgba(57, 255, 20, 0.05)';
                  e.target.style.color = '#39ff14';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(57, 255, 20, 0.4)';
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#a0afd9';
                }}
              >
                About Me
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
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

      {/* Projects Section - The Showcase */}
      <section id="projects" style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section header */}
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

          {/* Projects Grid */}
          {loading ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{
                  height: '400px',
                  background: 'rgba(26, 31, 58, 0.3)',
                  borderRadius: '12px',
                  animation: 'pulse 2s infinite',
                }} />
              ))}
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}>
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    transform: hoveredProject === idx ? 'translateY(-12px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project card */}
                  <div style={{
                    background: 'rgba(26, 31, 58, 0.5)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(57, 255, 20, 0.1)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: hoveredProject === idx ? '0 30px 80px rgba(57, 255, 20, 0.1)' : '0 10px 40px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.4s',
                  }}>
                    {/* Image Container */}
                    <div
                      style={{
                        height: '240px',
                        background: getGradientByCategory(project.category),
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      {project.image_url && (
                        <img
                          src={project.image_url}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: hoveredProject === idx ? 'scale(1.08)' : 'scale(1)',
                            transition: 'transform 0.4s',
                          }}
                        />
                      )}
                      {/* Overlay */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: hoveredProject === idx ? 'rgba(5, 7, 17, 0.3)' : 'rgba(5, 7, 17, 0)',
                        transition: 'background 0.4s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {!project.image_url && getCategoryIcon(project.category)}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '2rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem',
                      }}>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: '800',
                          color: '#39ff14',
                          letterSpacing: '0.1em',
                          opacity: 0.6,
                        }}>
                          {project.category.toUpperCase()}
                        </span>
                      </div>

                      <h3 style={{
                        fontSize: '1.5rem',
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
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.gap = '1rem';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.gap = '0.5rem';
                          }}
                        >
                          View Project <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
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
                I'm a creative developer who believes that great design and solid engineering aren't mutually exclusive. They're complementary forces that create magic.
              </p>
              <p style={{
                color: '#a0afd9',
                fontSize: '1.05rem',
                lineHeight: '1.8',
                marginBottom: '2rem',
              }}>
                Specializing in Next.js, React, and modern web technologies, I craft experiences that are beautiful, performant, and delightful to interact with.
              </p>

              {/* Tech Stack */}
              <div>
                <h3 style={{
                  fontSize: '0.85rem',
                  fontWeight: '800',
                  color: '#e8ecff',
                  letterSpacing: '0.1em',
                  marginBottom: '1rem',
                  opacity: 0.7,
                }}>
                  TECH STACK
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                }}>
                  {['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Vercel'].map((tech) => (
                    <div
                      key={tech}
                      style={{
                        padding: '0.75rem 1rem',
                        background: 'rgba(57, 255, 20, 0.05)',
                        border: '1px solid rgba(57, 255, 20, 0.1)',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        color: '#a0afd9',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(57, 255, 20, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.3)';
                        e.currentTarget.style.color = '#39ff14';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(57, 255, 20, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.1)';
                        e.currentTarget.style.color = '#a0afd9';
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Visual element */}
            <div style={{
              position: 'relative',
              height: '500px',
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
                <div style={{
                  textAlign: 'center',
                  color: '#39ff14',
                  fontSize: '3rem',
                  opacity: 0.2,
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
        zIndex: 1,
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
                e.currentTarget.style.background = 'rgba(57, 255, 20, 0.1)';
                e.currentTarget.style.borderColor = '#39ff14';
                e.currentTarget.style.color = '#39ff14';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(26, 31, 58, 0.4)';
                e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.2)';
                e.currentTarget.style.color = '#a0afd9';
              }}
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #39ff14, #00ffff)',
                color: '#050711',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.95rem',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 20px 60px rgba(57, 255, 20, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(57, 255, 20, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(57, 255, 20, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={18} /> Say Hello
            </a>
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
        zIndex: 1,
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
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

function getGradientByCategory(category) {
  const gradients = {
    web: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(57, 255, 20, 0.15))',
    code: 'linear-gradient(135deg, rgba(191, 64, 191, 0.15), rgba(255, 0, 110, 0.15))',
    design: 'linear-gradient(135deg, rgba(255, 0, 110, 0.15), rgba(191, 64, 191, 0.15))',
    photography: 'linear-gradient(135deg, rgba(57, 255, 20, 0.15), rgba(0, 255, 255, 0.15))',
  }
  return gradients[category] || gradients.web
}

function getCategoryIcon(category) {
  const iconMap = {
    web: <Code2 size={40} style={{ color: 'rgba(57, 255, 20, 0.3)' }} />,
    code: <Code2 size={40} style={{ color: 'rgba(191, 64, 191, 0.3)' }} />,
    design: <Palette size={40} style={{ color: 'rgba(255, 0, 110, 0.3)' }} />,
    photography: <ImageIcon size={40} style={{ color: 'rgba(57, 255, 20, 0.3)' }} />,
  }
  return iconMap[category] || iconMap.web
}
