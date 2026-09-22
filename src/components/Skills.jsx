import React, { useEffect, useRef, useState } from 'react'
import { Code2, Cpu, Layers, Wrench, Server, Database, Sparkles } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    icon: Code2,
    skills: [
      { name: 'C++', percent: 90 },
      { name: 'JavaScript (ES6+)', percent: 90 },
      { name: 'Python', percent: 78 },
      { name: 'HTML5 & CSS3', percent: 95 }
    ]
  },
  {
    name: 'Core CS Concepts',
    icon: Cpu,
    skills: [
      { name: 'Data Structures & Algorithms', percent: 88 },
      { name: 'Object-Oriented Programming', percent: 88 },
      { name: 'Problem Solving & Optimization', percent: 90 },
      { name: 'System Architecture Basics', percent: 75 }
    ]
  },
  {
    name: 'Frontend Engineering',
    icon: Layers,
    skills: [
      { name: 'React.js & Hooks', percent: 88 },
      { name: 'Tailwind CSS & Modern CSS', percent: 85 },
      { name: 'Responsive Layouts & DOM', percent: 92 },
      { name: 'State Management & Context', percent: 82 }
    ]
  },
  {
    name: 'Backend & Databases',
    icon: Server,
    skills: [
      { name: 'Node.js & Express.js', percent: 82 },
      { name: 'MongoDB & Mongoose', percent: 78 },
      { name: 'RESTful API Architecture', percent: 85 },
      { name: 'WebSockets & Real-Time Sync', percent: 74 }
    ]
  },
  {
    name: 'Tools & DevOps',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub Workflows', percent: 88 },
      { name: 'Postman & API Testing', percent: 84 },
      { name: 'Vite & Build Tooling', percent: 85 },
      { name: 'VS Code & Debugging', percent: 92 }
    ]
  }
]

const TECH_BADGES = [
  'C++', 'Data Structures', 'Algorithms', 'OOP', 'JavaScript', 'React.js',
  'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'WebSockets', 'Tailwind CSS',
  'Git', 'GitHub', 'Postman', 'HTML5', 'CSS3', 'Vite'
]

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section section-alt" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-element visible">
          <div className="section-tag">What I Know</div>
          <h2 className="section-title">My <span>Skills</span></h2>
          <p className="section-subtitle">
            A snapshot of my technical skills — developed through coursework, competitive programming, and consistent daily practice.
          </p>
          <div className="divider"></div>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const IconComponent = cat.icon
            return (
              <div key={idx} className="skill-category-card fade-in-element visible">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">
                    <IconComponent size={20} />
                  </div>
                  <span className="skill-cat-name">{cat.name}</span>
                </div>
                <div className="skill-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-item-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percent}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: animated ? `${skill.percent}%` : '0%',
                            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="skill-tags-section fade-in-element visible">
          <p className="skill-tags-title">Tech Stack at a Glance</p>
          <div className="skill-tags">
            {TECH_BADGES.map((badge, idx) => (
              <span key={idx} className="tech-badge">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
