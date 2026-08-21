import React from 'react'
import { Award, Linkedin, Github } from 'lucide-react'

const PROFILES = [
  {
    platform: 'CodeChef',
    username: '@mihir1245anand',
    stat: '1★ Rated',
    desc: 'Active contest participant & problem solver',
    url: 'https://www.codechef.com/users/mihir1245anand',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    iconBorder: 'rgba(245, 158, 11, 0.25)',
    iconColor: '#f59e0b',
    icon: <Award size={24} />
  },
  {
    platform: 'LinkedIn',
    username: 'in/mihir-anand-349a99424',
    stat: '500+ Conn',
    desc: 'Sharing tech learnings & career milestones',
    url: 'https://www.linkedin.com/in/mihir-anand-349a99424/',
    iconBg: 'rgba(16, 185, 129, 0.1)',
    iconBorder: 'rgba(16, 185, 129, 0.25)',
    iconColor: 'var(--accent-blue)',
    icon: <Linkedin size={24} />
  },
  {
    platform: 'LeetCode',
    username: '@mihir1245anand',
    stat: '150+ Solved',
    desc: 'Solving daily — arrays, strings, DP, trees',
    url: 'https://leetcode.com/u/mihir1245anand/',
    iconBg: 'rgba(6, 182, 212, 0.1)',
    iconBorder: 'rgba(6, 182, 212, 0.25)',
    iconColor: '#06b6d4',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    )
  },
  {
    platform: 'GitHub',
    username: '@mihir1245anand',
    stat: 'Active Repos',
    desc: 'Code snippets, problem solutions & repositories',
    url: 'https://github.com/mihir1245anand',
    iconBg: 'rgba(59, 130, 246, 0.1)',
    iconBorder: 'rgba(59, 130, 246, 0.25)',
    iconColor: '#3b82f6',
    icon: <Github size={24} />
  }
]

export default function Achievements() {
  return (
    <section className="section section-alt" id="achievements">
      <div className="container">
        <div className="section-header fade-in-element visible">
          <div className="section-tag">Milestones</div>
          <h2 className="section-title">Achievements & <span>Coding Profiles</span></h2>
          <p className="section-subtitle">
            My coding activity across platforms — proof of consistent practice, problem-solving, and continuous growth.
          </p>
          <div className="divider"></div>
        </div>

        <div className="achievements-grid">
          {PROFILES.map((p, idx) => (
            <a
              key={idx}
              href={p.url}
              className="achievement-card fade-in-element visible"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="achievement-icon"
                style={{
                  background: p.iconBg,
                  border: `1px solid ${p.iconBorder}`,
                  color: p.iconColor
                }}
              >
                {p.icon}
              </div>
              <div className="achievement-platform">{p.platform}</div>
              <div className="achievement-username">{p.username}</div>
              <span className="achievement-stat">{p.stat}</span>
              <div className="achievement-desc">{p.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
