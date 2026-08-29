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
                  <span><span className="about-info-label">Goal:</span>Software / Frontend Internship</span>
                </li>
              </ul>

              <div className="about-stats">
                <div className="stat-box">
                  <div className="stat-value">3+</div>
                  <div className="stat-label">Featured Projects</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">323+</div>
                  <div className="stat-label">DSA Problems</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">2+</div>
                  <div className="stat-label">Years Learning</div>
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
                Hey there! I'm <strong>Mihir Anand</strong>, a 2nd-year B.Tech Computer Science student at <strong>ABES Engineering College</strong> with a deep passion for software engineering, problem solving, and modern web development.
              </p>
              <p>
                Over the past two years, I've been on a consistent self-learning journey — mastering Data Structures and Algorithms in C++, practicing competitive programming on CodeChef and LeetCode, and developing a solid foundation in core Computer Science concepts and modern frontend technologies like React and JavaScript.
              </p>
              <p>
                I'm driven by curiosity, dedication, and a hunger to grow. Even in my 2nd year, I'm actively seeking internship opportunities where I can contribute to real-world software systems, learn from experienced engineers, and accelerate my career.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <CheckCircle2 size={18} />
                </span>
                Practicing DSA daily — 323+ problems solved across CodeChef (267) & LeetCode (56)
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <CheckCircle2 size={18} />
                </span>
                Strong in C++, Object-Oriented Programming, and algorithmic analysis
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <CheckCircle2 size={18} />
                </span>
                Building modern UI components with JavaScript, HTML5, CSS3 & React
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <CheckCircle2 size={18} />
                </span>
                Actively seeking SDE / Frontend developer internship opportunities
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
