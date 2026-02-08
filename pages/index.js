import { useState, useEffect } from 'react'
import { Github, Mail, ExternalLink, Code2, Image as ImageIcon, Palette, Menu, X } from 'lucide-react'
import { getProjects } from '../lib/supabase'

const categoryColors = {
  web: { bg: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(57, 255, 20, 0.1))', icon: <Code2 size={20} /> },
  code: { bg: 'linear-gradient(135deg, rgba(191, 64, 191, 0.1), rgba(255, 0, 110, 0.1))', icon: <Code2 size={20} /> },
  design: { bg: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(191, 64, 191, 0.1))', icon: <Palette size={20} /> },
  photography: { bg: 'linear-gradient(135deg, rgba(57, 255, 20, 0.1), rgba(0, 255, 255, 0.1))', icon: <ImageIcon size={20} /> },
}

export default function Home({ ecoMode, toggleEcoMode }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

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
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 40,
        background: scrollY > 50 ? 'rgba(26, 31, 58, 0.4)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(57, 255, 20, 0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #39ff14, #00ffff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#050711',
            }}>
              ◆
            </div>
            <span style={{ fontSize: '18px', fontWeight: '800', color: '#39ff14', textShadow: '0 0 20px rgba(57, 255, 20, 0.5)' }}>sentient</span>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#projects" style={{ color: '#a0afd9', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s' }}>Projects</a>
            <a href="#about" style={{ color: '#a0afd9', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s' }}>About</a>
            <button
              onClick={toggleEcoMode}
              style={{
                padding: '8px 16px',
                background: ecoMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(57, 255, 20, 0.2)',
                border: `1.5px solid ${ecoMode ? '#10b981' : '#39ff14'}`,
                color: ecoMode ? '#10b981' : '#39ff14',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              {ecoMode ? '🌍 eco' : '⚡ normal'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        marginTop: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(57, 255, 20, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(191, 64, 191, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 10s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '8px 16px',
            background: 'rgba(26, 31, 58, 0.5)',
            border: '1px solid rgba(57, 255, 20, 0.2)',
            borderRadius: '50px',
            marginBottom: '2rem',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#39ff14', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#39ff14', letterSpacing: '0.05em' }}>AI-POWERED EXPERIENCE</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '900',
            marginBottom: '1rem',
            lineHeight: '1.1',
          }}>
            <span style={{ color: '#39ff14', textShadow: '0 0 20px rgba(57, 255, 20, 0.5), 0 0 40px rgba(57, 255, 20, 0.2)' }}>Sentient</span>
            <br />
            <span style={{ color: '#bf40bf', textShadow: '0 0 20px rgba(191, 64, 191, 0.5), 0 0 40px rgba(191, 64, 191, 0.2)' }}>Digital Twin</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#a0afd9',
            marginBottom: '2rem',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto 2rem',
          }}>
            A dynamic portfolio that adapts to you. Every visit is unique. Every interaction is intentional. This isn't just a website—it's an autonomous agent representing my work.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <a
              href="#projects"
              style={{
                padding: '14px 36px',
                background: 'linear-gradient(135deg, #39ff14, #00ffff)',
                color: '#050711',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '0.95rem',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 0 30px rgba(57, 255, 20, 0.2)',
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 0 50px rgba(57, 255, 20, 0.4), 0 20px 40px rgba(57, 255, 20, 0.2)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 0 30px rgba(57, 255, 20, 0.2)'}
            >
              Explore Projects
            </a>
            <a
              href="#about"
              style={{
                padding: '14px 36px',
                background: 'rgba(26, 31, 58, 0.4)',
                border: '1.5px solid #39ff14',
                color: '#39ff14',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '0.95rem',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(57, 255, 20, 0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(26, 31, 58, 0.4)'}
            >
              Learn More
            </a>
          </div>

          <div style={{
            display: 'inline-block',
            background: 'rgba(26, 31, 58, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(57, 255, 20, 0.15)',
            borderRadius: '12px',
            padding: '1.5rem',
            fontSize: '0.85rem',
            color: '#39ff14',
            fontFamily: 'monospace',
          }}>
            Next.js • Tailwind • Supabase • React
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '4rem 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              color: '#39ff14',
              textShadow: '0 0 20px rgba(57, 255, 20, 0.5)',
            }}>
              Projects
            </h2>
            <p style={{ color: '#a0afd9', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
              A collection of work spanning web development, interactive design, and visual storytelling.
            </p>
          </div>

          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{
                  height: '350px',
                  background: 'rgba(26, 31, 58, 0.4)',
                  borderRadius: '16px',
                  animation: 'pulse 2s infinite',
                }} />
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  style={{
                    background: 'rgba(26, 31, 58, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(57, 255, 20, 0.15)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(57, 255, 20, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Project Image/Placeholder */}
                  <div
                    style={{
                      height: '200px',
                      background: categoryColors[project.category]?.bg || 'linear-gradient(135deg, rgba(57, 255, 20, 0.1), rgba(191, 64, 191, 0.1))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {project.image_url ? (
                      <img src={project.image_url} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ opacity: 0.3, color: '#39ff14' }}>
                        {categoryColors[project.category]?.icon}
                      </div>
                    )}
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(26, 31, 58, 0.7)',
                      border: '1px solid rgba(57, 255, 20, 0.3)',
                      padding: '0.5rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#39ff14',
                    }}>
                      {categoryColors[project.category]?.icon}
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem',
                      color: '#bf40bf',
                      transition: 'color 0.3s',
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: '#a0afd9',
                      fontSize: '0.95rem',
                      marginBottom: '1rem',
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
                          e.currentTarget.style.color = '#00ffff';
                          e.currentTarget.style.gap = '1rem';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#39ff14';
                          e.currentTarget.style.gap = '0.5rem';
                        }}
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '4rem 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(26, 31, 58, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(57, 255, 20, 0.15)',
            borderRadius: '16px',
            padding: '3rem',
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              marginBottom: '1.5rem',
              color: '#bf40bf',
              textShadow: '0 0 20px rgba(191, 64, 191, 0.3)',
            }}>
              About
            </h2>
            <p style={{ color: '#a0afd9', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              I'm a developer and creative technologist obsessed with building experiences that push boundaries. I specialize in creating interactive, performant web applications that bridge the gap between design and functionality.
            </p>
            <p style={{ color: '#a0afd9', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              This site is more than a portfolio—it's an experiment in what's possible when code meets creativity. Every interaction is intentional. Every animation has purpose. Every element serves the narrative.
            </p>

            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', color: '#39ff14' }}>Tech Stack</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem',
              }}>
                {['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Vercel'].map((tech) => (
                  <div
                    key={tech}
                    style={{
                      background: 'rgba(57, 255, 20, 0.05)',
                      border: '1px solid rgba(57, 255, 20, 0.2)',
                      padding: '1rem',
                      borderRadius: '12px',
                      textAlign: 'center',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#a0afd9',
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '4rem 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1, marginBottom: '2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: '1rem',
            color: '#00ffff',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
          }}>
            Let's Create Something
          </h2>
          <p style={{ color: '#a0afd9', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Interested in collaborating? Let's talk about your next project.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/hapybeing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                background: 'rgba(26, 31, 58, 0.4)',
                border: '1px solid rgba(57, 255, 20, 0.2)',
                color: '#39ff14',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(57, 255, 20, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(26, 31, 58, 0.4)';
                e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.2)';
              }}
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #39ff14, #00ffff)',
                color: '#050711',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                transition: 'all 0.3s',
                boxShadow: '0 0 30px rgba(57, 255, 20, 0.2)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 50px rgba(57, 255, 20, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(57, 255, 20, 0.2)'}
            >
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 1.5rem',
        borderTop: '1px solid rgba(57, 255, 20, 0.1)',
        textAlign: 'center',
        color: '#7a8bc4',
        fontSize: '0.9rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <p>sentient digital twin © 2026 — Built with intention</p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
