import React from 'react'
import { Code, BookOpen, Trophy, GitFork } from 'lucide-react'

const TIMELINE_DATA = [
  {
    icon: Code,
    color: 'var(--accent-purple)',
    org: 'CodeChef · LeetCode · HackerRank',
    date: '2023 — Present',
    title: 'Competitive Programming & DSA Practice',
    desc: 'Solved 325+ DSA problems across platforms (268 on CodeChef, 57 on LeetCode) covering arrays, strings, recursion, trees, and dynamic programming. Regularly participating in rated coding contests to boost speed, accuracy, and algorithmic insight.',
    skills: ['C++', 'DSA', 'Problem Solving', 'Algorithms']
  },
  {
    icon: BookOpen,
    color: 'var(--accent-blue)',
    org: 'Online Platforms & Documentation',
    date: '2023 — Present',
    title: 'Self-Paced Web Development Learning',
    desc: 'Completed in-depth studies in modern frontend engineering — HTML5, CSS3, JavaScript (ES6+), and React.js. Focused on clean architecture, component composition, and responsive design systems.',
    skills: ['JavaScript', 'React.js', 'HTML5', 'CSS3']
  },
  {
    icon: Trophy,
    color: 'var(--accent-orange)',
    org: 'College & Tech Communities',
    date: '2024',
    title: 'Hackathon & Technical Workshops',
    desc: 'Participated in college hackathons and collaborative workshops. Practiced rapid problem decomposition, agile brainstorming, and peer programming with fellow engineering students.',
    skills: ['Teamwork', 'Problem Decomposition', 'Collaboration']
  },
  {
    icon: GitFork,
    color: 'var(--accent-green)',
    org: 'GitHub Community',
    date: '2024 — Present',
    title: 'Version Control & Open Source Collaboration',
    desc: 'Practicing standard Git workflows: branching, rebasing, pull requests, issue tracking, and repository documentation to build professional software engineering discipline.',
    skills: ['Git', 'GitHub', 'Collaboration']
  }
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header fade-in-element visible">
          <div className="section-tag">My Journey</div>
          <h2 className="section-title">Experience & <span>Training</span></h2>
          <p className="section-subtitle">
            As a fresher, my journey is rooted in consistent problem-solving practice, structured self-learning, and competitive coding milestones.
          </p>
          <div className="divider"></div>
        </div>

        <div className="timeline">
          {TIMELINE_DATA.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div key={idx} className="timeline-item fade-in-element visible">
                <div className="timeline-dot" style={{ color: item.color }}>
                  <IconComponent size={20} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-org">{item.org}</span>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                  <div className="timeline-skills">
                    {item.skills.map((s, sIdx) => (
                      <span key={sIdx} className="timeline-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
