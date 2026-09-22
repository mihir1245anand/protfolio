import React from 'react'
import { Code, BookOpen, Trophy, GitFork } from 'lucide-react'

const TIMELINE_DATA = [
  {
    icon: Code,
    color: 'var(--accent-purple)',
    org: 'CodeChef · LeetCode · HackerRank',
    date: '2023 — Present',
    title: 'Competitive Programming & DSA Practice',
    desc: 'Solved 377+ DSA problems across platforms (297 on CodeChef, 80 on LeetCode: 33 Easy, 32 Med, 15 Hard with 55-day streak) covering arrays, strings, dynamic programming, trees, and recursion. Regularly competing in rated contests (1092 CodeChef peak rating).',
    skills: ['C++', 'DSA', 'Problem Solving', 'Algorithms']
  },
  {
    icon: BookOpen,
    color: 'var(--accent-blue)',
    org: 'Modern Web Development',
    date: '2023 — Present',
    title: 'Frontend & Full-Stack Web Development',
    desc: 'Engineering interactive web applications using React, JavaScript, Vite, HTML5, and CSS3. Focused on clean architecture, component design systems, and responsive user experiences.',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Vite']
  },
  {
    icon: Trophy,
    color: 'var(--accent-orange)',
    org: 'College & Tech Communities',
    date: '2024 — Present',
    title: 'Hackathons & Technical Build Sprints',
    desc: 'Participated in college hackathons and collaborative workshops. Practiced rapid problem decomposition, agile brainstorming, and team project delivery.',
    skills: ['Teamwork', 'Rapid Prototyping', 'Collaboration']
  },
  {
    icon: GitFork,
    color: 'var(--accent-green)',
    org: 'GitHub Community',
    date: '2024 — Present',
    title: 'Open-Source & Version Control Disciplines',
    desc: 'Maintained 12 public repositories implementing structured Git workflows: branching, rebasing, pull requests, and comprehensive documentation.',
    skills: ['Git', 'GitHub', 'CI/CD', 'Documentation']
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
