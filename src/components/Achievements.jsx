import React from 'react'
import { Award, Linkedin, Github, FileCheck, ExternalLink, Flame, Trophy, GitBranch, Sparkles } from 'lucide-react'

const PROFILES = [
  {
    platform: 'LeetCode',
    username: '@mihir1245anand',
    stat: '56 Solved',
    desc: '26 Easy · 20 Medium · 10 Hard',
    badge: '32-Day Streak 🔥',
    tags: ['26 Easy', '20 Medium', '10 Hard', '32d Streak', '75 Submissions'],
    url: 'https://leetcode.com/u/mihir1245anand/',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    iconBorder: 'rgba(245, 158, 11, 0.25)',
    iconColor: '#f59e0b',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    )
  },
  {
    platform: 'CodeChef',
    username: '@mihir1245anand',
    stat: '267 Solved',
    desc: '1★ Rated (Div 4) · 1020 Rating',
    badge: '1★ Coder ⭐',
    tags: ['1★ Rated', '1020 Rating', 'Div 4', '267 Solved', 'C++ Mastery'],
    url: 'https://www.codechef.com/users/mihir1245anand',
    iconBg: 'rgba(168, 85, 247, 0.1)',
    iconBorder: 'rgba(168, 85, 247, 0.25)',
    iconColor: '#a855f7',
    icon: <Award size={24} />
  },
  {
    platform: 'GitHub',
    username: '@mihir1245anand',
    stat: '10 Repos',
    desc: 'Full-Stack Apps, DSA & AI Tools',
    badge: 'Active Builder 🚀',
    tags: ['10 Repos', 'React 19', 'C++', 'JavaScript', 'Vite'],
    url: 'https://github.com/mihir1245anand',
    iconBg: 'rgba(59, 130, 246, 0.1)',
    iconBorder: 'rgba(59, 130, 246, 0.25)',
    iconColor: '#3b82f6',
    icon: <Github size={24} />
  },
  {
    platform: 'LinkedIn',
    username: 'in/mihir-anand-349a99424',
    stat: '500+ Network',
    desc: 'Tech Community & SDE Aspirant',
    badge: 'Open to Work 💼',
    tags: ['B.Tech CSE', '2029 Grad', 'ABES-EC', '500+ Conn'],
    url: 'https://www.linkedin.com/in/mihir-anand-349a99424/',
    iconBg: 'rgba(10, 102, 194, 0.12)',
    iconBorder: 'rgba(10, 102, 194, 0.3)',
    iconColor: '#0a66c2',
    icon: <Linkedin size={24} />
  }
]

const CERTIFICATIONS = [
  {
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Deloitte / Forage',
    year: '2026',
    url: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a79e5af02955c8d92d1af69_1786375962645_completion_certificate.pdf'
  },
  {
    title: 'Mastercard Cybersecurity Job Simulation',
    issuer: 'Mastercard / Forage',
    year: '2026',
    url: 'https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_6a79e5af02955c8d92d1af69_1786377433442_completion_certificate.pdf'
  },
  {
    title: 'Getting Started with AI',
    issuer: 'IBM / Cognitive Class',
    year: '2026',
    url: 'https://courses.cognitiveclass.ai/certificates/6e25445d8c894d708e49c8154bee86ac'
  },
  {
    title: 'Python 101 for Data Science',
    issuer: 'Cognitive Class / IBM',
    year: '2026',
    url: 'https://courses.cognitiveclass.ai/certificates/6e25445d8c894d708e49c8154bee86ac'
  },
  {
    title: 'Intermediate Coding In Python With AI',
    issuer: 'Unstop',
    year: '2024',
    url: 'https://unstop.com/certificate-preview/40e90122-22df-40bb-b8c3-bdc0441df655'
  }
]

export default function Achievements() {
  return (
    <section className="section section-alt" id="achievements">
      <div className="container">
        <div className="section-header fade-in-element visible">
          <div className="section-tag">Milestones</div>
          <h2 className="section-title">
            Achievements & <span>Coding Profiles</span>
          </h2>
          <p className="section-subtitle">
            My live verified coding activity across platforms — consistent algorithmic practice, problem solving, and open-source software development.
          </p>
          <div className="divider"></div>
        </div>

        {/* Highlight Milestone Summary Banner */}
        <div className="milestone-summary-bar fade-in-element visible">
          <div className="milestone-metric">
            <span className="milestone-metric-val">323+</span>
            <span className="milestone-metric-lbl">Total DSA Problems Solved</span>
          </div>
          <div className="milestone-metric">
            <span className="milestone-metric-val">267</span>
            <span className="milestone-metric-lbl">CodeChef Solved · 1★ (1020)</span>
          </div>
          <div className="milestone-metric">
            <span className="milestone-metric-val">56</span>
            <span className="milestone-metric-lbl">LeetCode Solved (20 Med · 10 Hard)</span>
          </div>
          <div className="milestone-metric">
            <span className="milestone-metric-val">10</span>
            <span className="milestone-metric-lbl">GitHub Repositories</span>
          </div>
        </div>

        {/* Coding Profiles Grid */}
        <div className="achievements-grid">
          {PROFILES.map((p, idx) => (
            <a
              key={idx}
              href={p.url}
              className="achievement-card fade-in-element visible"
              target="_blank"
              rel="noreferrer"
            >
              {p.badge && <span className="achievement-badge-pill">{p.badge}</span>}
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

              {p.tags && (
                <div className="achievement-tags-list">
                  {p.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="achievement-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="certs-section fade-in-element visible" style={{ marginTop: '56px' }}>
          <h3 className="certs-title">📜 Certifications & Courses</h3>
          <div className="certs-grid">
            {CERTIFICATIONS.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                className="cert-item"
                target="_blank"
                rel="noreferrer"
              >
                <div className="cert-icon">
                  <FileCheck size={16} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="cert-name">{cert.title}</div>
                  <div className="cert-meta">
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
                <ExternalLink size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

