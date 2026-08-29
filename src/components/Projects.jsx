import React, { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Vaani-Setu (वाणी-सेतु)',
    category: 'Web Development',
    description: 'A multilingual AI-driven citizen welfare platform empowering people across India to discover, understand, and apply for government schemes in 12+ Indian languages.',
    tech: ['React.js', 'JavaScript', 'Vite', 'Speech API', 'CSS3'],
    features: [
      'Multilingual conversational assistant for government scheme discovery',
      'Instant eligibility verification and simplified application guidance',
      'Voice recognition & speech synthesis in 12+ Indian languages',
      'Mobile-first responsive interface designed for high accessibility'
    ],
    github: 'https://github.com/mihir1245anand/Vaani_setu',
    live: 'https://vaani-setu-rho.vercel.app',
    featured: true,
    color: '#06b6d4'
  },
  {
    id: 2,
    title: 'Amazon E-Commerce Clone',
    category: 'Web Development',
    description: 'An authentic e-commerce web application replicating Amazon with interactive product showcases, dynamic shopping cart management, and modern UI.',
    tech: ['React.js', 'JavaScript', 'Vite', 'CSS3', 'State Management'],
    features: [
      'Full shopping cart workflow (Add, Remove, Quantity adjustments)',
      'Amazon-inspired responsive product grids and banner carousels',
      'Real-time price calculation and cart status persistence',
      'Mobile-friendly responsive header with quick navigation drawer'
    ],
    github: 'https://github.com/mihir1245anand/Amazon-clone',
    live: 'https://amazonclone-livid-gamma.vercel.app/',
    featured: true,
    color: '#f59e0b'
  },
  {
    id: 3,
    title: 'DevFolio — Personal Portfolio',
    category: 'Web Development',
    description: 'A modern, high-performance developer portfolio website designed to showcase projects, DSA milestones, skills, certifications, and contact flow.',
    tech: ['React.js', 'Vite', 'CSS3', 'Modern Design System'],
    features: [
      'Dark neon aesthetic with glassmorphism and smooth micro-interactions',
      'Interactive project showcase with category filtering & live demos',
      'Verified milestones, coding profiles, and certification links',
      'Direct FlowCV resume integration and responsive contact form'
    ],
    github: 'https://github.com/mihir1245anand/protfolio',
    live: 'https://protfolio-flame-three.vercel.app',
    featured: true,
    color: '#8b5cf6'
  }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Web Development']

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory)

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-header fade-in-element visible">
          <div className="section-tag">What I've Built</div>
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world projects I've built to apply my skills, solve practical challenges, and deliver great user experiences.
          </p>
          <div className="divider"></div>
        </div>

        {/* Category Filters */}
        <div className="projects-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card fade-in-element visible">
              <div
                className="project-card-top"
                style={{ background: project.color }}
              ></div>

              <div className="project-card-body">
                <div className="project-cat">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="project-feature">
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={14} />
                    GitHub
                  </a>

                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      className="project-link live"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
