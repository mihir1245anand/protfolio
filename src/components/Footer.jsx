import React from 'react'
import { Github, Linkedin, Award, Mail, Heart } from 'lucide-react'

export default function Footer({ scrollTo }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-box">MA</div>
              <span className="logo-text">Mihir<span style={{ color: 'var(--accent-blue)' }}>.dev</span></span>
            </div>
            <p className="footer-tagline">
              B.Tech CSE student practicing DSA, solving problems, and preparing for a career in software engineering. Open to internship opportunities.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><button onClick={() => scrollTo('home')}>Home</button></li>
              <li><button onClick={() => scrollTo('about')}>About</button></li>
              <li><button onClick={() => scrollTo('skills')}>Skills</button></li>
              <li><button onClick={() => scrollTo('experience')}>Experience</button></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Connect</div>
            <ul className="footer-links" style={{ marginBottom: 16 }}>
              <li><a href="https://github.com/raghav1245anand/raghav1245anand" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/mihir-anand-349a99424/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://www.codechef.com/users/mihir1245anand" target="_blank" rel="noreferrer">CodeChef</a></li>
              <li><a href="https://leetcode.com/u/mihir1245anand/" target="_blank" rel="noreferrer">LeetCode</a></li>
            </ul>
            <div className="footer-social-links">
              <a href="https://github.com/raghav1245anand/raghav1245anand" className="footer-social" target="_blank" rel="noreferrer" title="GitHub">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/mihir-anand-349a99424/" className="footer-social" target="_blank" rel="noreferrer" title="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://www.codechef.com/users/mihir1245anand" className="footer-social" target="_blank" rel="noreferrer" title="CodeChef">
                <Award size={16} />
              </a>
              <a href="mailto:raghavanand034@gmail.com" className="footer-social" title="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {currentYear} <span>Mihir Anand</span>. All rights reserved.
          </div>
          <div className="footer-made">
            Made with <Heart className="footer-heart" size={14} fill="currentColor" /> using React, JavaScript & CSS
          </div>
        </div>
      </div>
    </footer>
  )
}
