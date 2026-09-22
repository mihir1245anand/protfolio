import React from 'react'
import { BookOpen, Calendar, MapPin, Target, CheckCircle2, Linkedin } from 'lucide-react'

export default function About({ scrollTo }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header fade-in-element visible">
          <div className="section-tag">Who I Am</div>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-visual fade-in-element visible">
            <div className="about-card">
              <div className="about-avatar">MA</div>
              <div className="about-card-name">Mihir Anand</div>
              <div className="about-card-title">2nd Year B.Tech CSE Student</div>

              <ul className="about-info-list">
                <li className="about-info-item">
                  <BookOpen className="about-info-icon" size={18} />
                  <span><span className="about-info-label">College:</span>ABES ENGINEERING COLLEGE</span>
                </li>
                <li className="about-info-item">
                  <BookOpen className="about-info-icon" size={18} />
                  <span><span className="about-info-label">Degree:</span>B.Tech in Computer Science</span>
                </li>
                <li className="about-info-item">
                  <Calendar className="about-info-icon" size={18} />
                  <span><span className="about-info-label">Graduating:</span>2029</span>
                </li>
                <li className="about-info-item">
                  <MapPin className="about-info-icon" size={18} />
                  <span><span className="about-info-label">Location:</span>India</span>
                </li>
                <li className="about-info-item">
                  <Target className="about-info-icon" size={18} />
                  <span><span className="about-info-label">Goal:</span>Software / Full-Stack Internship</span>
                </li>
              </ul>

              <div className="about-stats">
                <div className="stat-box">
                  <div className="stat-value">3+</div>
                  <div className="stat-label">Featured Projects</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">377+</div>
                  <div className="stat-label">DSA Problems</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">12</div>
                  <div className="stat-label">Repositories</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">5</div>
                  <div className="stat-label">Certifications</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content fade-in-element visible">
            <div className="about-bio">
              <p>
                Hey there! I'm <strong>Mihir Anand</strong>, a 2nd-year B.Tech Computer Science student at <strong>ABES Engineering College</strong> with a deep passion for software engineering, web development, and algorithmic problem solving.
              </p>
              <p>
                Over the past two years, I've pursued a consistent learning journey — mastering Data Structures & Algorithms in C++, practicing competitive programming on CodeChef and LeetCode, and developing modern web applications using React, JavaScript, Node.js, and CSS3.
              </p>
              <p>
                I'm driven by curiosity, engineering discipline, and a hunger to build high-impact products. I'm actively seeking internship opportunities where I can contribute to production software, collaborate with experienced engineers, and deliver robust solutions.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <CheckCircle2 size={18} />
                </span>
                Practicing DSA daily — 377+ problems solved across CodeChef (297) & LeetCode (80)
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <CheckCircle2 size={18} />
                </span>
                Strong in C++, Object-Oriented Programming, and algorithmic problem solving
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <CheckCircle2 size={18} />
                </span>
                Building modern web applications with React, JavaScript, Vite, HTML5 & CSS3
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <CheckCircle2 size={18} />
                </span>
                Actively seeking SDE / Frontend / Software developer internship opportunities
              </div>
            </div>

            <div className="about-cta">
              <button className="btn btn-primary" onClick={() => scrollTo('skills')}>
                Explore Skills
              </button>
              <a
                href="https://www.linkedin.com/in/mihir-anand-349a99424/"
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
