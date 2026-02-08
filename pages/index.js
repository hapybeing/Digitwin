import { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProjectGallery from '../components/ProjectGallery'
import EcoToggle from '../components/EcoToggle'
import MagneticButton from '../components/MagneticButton'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Home({ ecoMode, toggleEcoMode }) {
  return (
    <div className="min-h-screen bg-deep-space-900">
      {/* Navbar */}
      <Navbar toggleEcoMode={toggleEcoMode} ecoMode={ecoMode} />

      {/* Hero Section */}
      <HeroSection />

      {/* Project Gallery */}
      <ProjectGallery />

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="glow-purple">About</span>
            </h2>
            <p className="text-deep-space-300 mb-6 text-lg leading-relaxed">
              I'm a developer and creative technologist obsessed with building experiences that push boundaries. I specialize in creating interactive, performant web applications that bridge the gap between design and functionality.
            </p>
            <p className="text-deep-space-300 mb-8 text-lg leading-relaxed">
              This site is more than a portfolio—it's an experiment in what's possible when code meets creativity. Every interaction is intentional. Every animation has purpose. Every element serves the narrative.
            </p>

            {/* Eco Mode Info */}
            {ecoMode && (
              <div className="glass accent rounded-lg p-4 mb-8 border-l-2 border-green-400">
                <p className="text-sm text-deep-space-300">
                  <span className="text-green-400 font-semibold">Eco Mode Active:</span> You're viewing a low-carbon version of this site. Heavy effects are disabled to reduce energy consumption.
                </p>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-bio-green">Tech Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Next.js',
                  'React',
                  'Tailwind CSS',
                  'Supabase',
                  'Framer Motion',
                  'Vercel',
                ].map((tech) => (
                  <div key={tech} className="glass px-4 py-2 rounded text-sm text-center">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Eco Toggle */}
            {!ecoMode && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-bio-green">Carbon Awareness</h3>
                <EcoToggle ecoMode={ecoMode} toggleEcoMode={toggleEcoMode} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="glow-cyan">Let's Create Something</span>
          </h2>
          <p className="text-deep-space-300 mb-12 text-lg">
            Interested in collaborating? Have a project in mind? Let's talk.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <MagneticButton
              href="https://github.com/hapybeing"
              external={true}
              className="glass text-bio-green hover:bg-bio-green/10"
            >
              <Github size={20} className="inline mr-2" />
              GitHub
            </MagneticButton>
            <MagneticButton
              href="https://twitter.com"
              external={true}
              className="glass text-bio-cyan hover:bg-bio-cyan/10"
            >
              <Twitter size={20} className="inline mr-2" />
              Twitter
            </MagneticButton>
            <MagneticButton
              href="mailto:hello@example.com"
              className="glass text-bio-purple hover:bg-bio-purple/10"
            >
              <Mail size={20} className="inline mr-2" />
              Email
            </MagneticButton>
          </div>

          {/* CTA Button */}
          <MagneticButton
            href="mailto:hello@example.com"
            className="bg-gradient-to-r from-bio-green to-bio-cyan text-deep-space-900 hover:shadow-glow"
          >
            Start a Conversation
          </MagneticButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-deep-space-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-deep-space-400 text-sm">
          <div className="font-mono">
            sentient digital twin © 2026
          </div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-bio-green transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-bio-green transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-bio-green transition-colors">
              Status
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
