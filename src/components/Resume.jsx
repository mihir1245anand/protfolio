import React from 'react'
import { FileText, Eye } from 'lucide-react'

export default function Resume({ scrollTo }) {
  const highlights = [
    '✓ 200+ DSA problems solved across platforms',
    '✓ CodeChef 1★ Rated Competitive Programmer',
    '✓ Strong foundation in C++, OOP & Problem Solving',
    '✓ Proficient in JavaScript, HTML5, CSS3 & React',
    '✓ Active LeetCode & GitHub Contributor',
    '✓ Actively seeking internship opportunities'
  ]

  return (
    <section className="section resume-section" id="resume">
      <div className="container">
        <div className="resume-inner fade-in-element visible">
          <div className="resume-card">
            <div className="resume-icon">
              <FileText size={36} />
            </div>
            <h2 className="resume-title">My Resume</h2>
            <p className="resume-subtitle">
              A concise snapshot of my skills, problem solving milestones, and academic background — crafted for tech internship applications.
            </p>
            <div className="resume-highlights">
              {highlights.map((tag, idx) => (
                <span key={idx} className="resume-highlight-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="resume-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
                <Eye size={16} />
                Request Full Resume / CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
