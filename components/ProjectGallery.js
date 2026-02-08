import { useEffect, useState } from 'react'
import { Github, ExternalLink, Code2, Image as ImageIcon, Palette } from 'lucide-react'
import { getProjects } from '../lib/supabase'
import MagneticButton from './MagneticButton'

const categoryIcons = {
  web: <Code2 size={24} />,
  code: <Code2 size={24} />,
  design: <Palette size={24} />,
  photography: <ImageIcon size={24} />,
}

const categoryColors = {
  web: 'from-bio-cyan to-bio-green',
  code: 'from-bio-purple to-bio-pink',
  design: 'from-bio-pink to-bio-purple',
  photography: 'from-bio-green to-bio-cyan',
}

function MeshGradientPlaceholder({ category }) {
  const colors = categoryColors[category] || 'from-bio-green to-bio-purple'

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-30`}
      style={{
        filter: 'blur(40px)',
        animation: 'morph 6s ease-in-out infinite',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-bio-green/30 opacity-50">
          {categoryIcons[category]}
        </div>
      </div>
    </div>
  )
}

export default function ProjectGallery() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      const data = await getProjects()
      setProjects(data)
      setLoading(false)
    }

    fetchProjects()
  }, [])

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'code', label: 'Code' },
    { id: 'design', label: 'Design' },
    { id: 'photography', label: 'Photography' },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-green">Projects</span>
          </h2>
          <p className="text-deep-space-300 max-w-2xl mx-auto">
            A collection of work that spans web development, interactive design, and visual storytelling.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                filter === cat.id
                  ? 'glass accent text-bio-green shadow-glow'
                  : 'glass text-deep-space-300 hover:text-bio-green'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass rounded-xl aspect-video overflow-hidden animate-pulse" />
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group glass rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-video bg-deep-space-700 overflow-hidden">
                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <MeshGradientPlaceholder category={project.category} />
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="glass px-3 py-1 rounded-full inline-flex items-center gap-2">
                      <span className="text-bio-green">{categoryIcons[project.category]}</span>
                      <span className="text-xs font-mono text-bio-green capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 glow-purple group-hover:glow-green transition-all">
                    {project.title}
                  </h3>
                  <p className="text-deep-space-300 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.project_url && (
                      <MagneticButton
                        href={project.project_url}
                        external={true}
                        className="flex-1 glass text-xs text-bio-green hover:bg-bio-green/10"
                      >
                        <Github size={16} className="inline mr-2" />
                        View
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-deep-space-300">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
