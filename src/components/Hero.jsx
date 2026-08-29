import React, { useState, useEffect } from 'react'
import { Code, ArrowRight, FileText, Mail, Github, Linkedin, Award } from 'lucide-react'

const ROLE_ITEMS = [
  { text: "Full-Stack Web Developer", icon: "⚡" },
  { text: "1★ CodeChef Problem Solver", icon: "🎯" },
  { text: "C++ & Algorithms Specialist", icon: "💻" },
  { text: "Modern React.js Engineer", icon: "🚀" },
  { text: "CSE Student @ ABES Ghaziabad", icon: "🎓" }
]

export default function Hero({ scrollTo }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = ROLE_ITEMS[roleIndex].text
    let timer

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1)
        }, 35)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLE_ITEMS.length)
      }
    } else {
      if (charIndex < currentText.length) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1)
        }, 65 + Math.random() * 30)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2200)
      }
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  const displayedText = ROLE_ITEMS[roleIndex].text.substring(0, charIndex)
  const currentIcon = ROLE_ITEMS[roleIndex].icon

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="hero-inner">
        <div className="fade-in-element visible">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Open to Internship Opportunities · 2025–26
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="hero-name-gradient">Mihir</span> <span className="wave-hand">👋</span>
          </h1>

          <div className="hero-title-wrapper">
            <span className="hero-title-prefix">Aspiring</span>
            <span className="dynamic-role-pill">
              <span className="role-icon">{currentIcon}</span>
              <span className="dynamic-role-text">{displayedText}</span>
              <span className="laser-cursor"></span>
            </span>
          </div>

          <p className="hero-description">
            B.Tech CSE student passionate about{' '}
            <strong style={{ color: 'var(--text-primary)' }}>software development</strong>,
            solving algorithmic challenges, and growing into a professional engineer.
            I practice DSA daily and write clean, scalable code.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              <Code size={16} />
              View Projects
              <ArrowRight size={14} />
            </button>

            <a
              href="https://flowcv.com/resume/4a6cn46cb2oc"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={15} />
              Resume
            </a>

            <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
              <Mail size={15} />
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <span className="hero-socials-label">Find me on:</span>
            <a
              href="https://github.com/mihir1245anand"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mihir-anand-349a99424/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.codechef.com/users/mihir1245anand"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              title="CodeChef"
            >
              <Award size={18} />
            </a>
            <a
              href="https://leetcode.com/u/mihir1245anand/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>
            <a href="mailto:raghavanand034@gmail.com" className="social-link" title="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Hero Code Visual */}
        <div className="hero-visual fade-in-element visible">
          <div className="hero-code-card">
            <div className="code-card-header">
              <div className="code-dots">
                <div className="code-dot red"></div>
                <div className="code-dot yellow"></div>
                <div className="code-dot green"></div>
              </div>
              <span className="code-filename">developer.js</span>
            </div>
            <div className="code-card-body">
              <div className="code-line"><span className="line-num">1</span><span className="line-content"><span className="kw">const</span> <span className="cl">developer</span> = &#123;</span></div>
              <div className="code-line"><span className="line-num">2</span><span className="line-content">&nbsp;&nbsp;<span className="prop">name</span>: <span className="str">"Mihir Anand"</span>,</span></div>
              <div className="code-line"><span className="line-num">3</span><span className="line-content">&nbsp;&nbsp;<span className="prop">college</span>: <span className="str">"ABES Engineering College"</span>,</span></div>
              <div className="code-line"><span className="line-num">4</span><span className="line-content">&nbsp;&nbsp;<span className="prop">role</span>: <span className="str">"CSE Student"</span>,</span></div>
              <div className="code-line"><span className="line-num">5</span><span className="line-content">&nbsp;&nbsp;<span className="prop">skills</span>: [<span className="str">"C++"</span>, <span className="str">"DSA"</span>, <span className="str">"React"</span>, <span className="str">"JS"</span>],</span></div>
              <div className="code-line"><span className="line-num">6</span><span className="line-content">&nbsp;&nbsp;<span className="prop">dsaProblems</span>: <span className="num">323</span>,</span></div>
              <div className="code-line"><span className="line-num">7</span><span className="line-content">&nbsp;&nbsp;<span className="prop">codechefSolved</span>: <span className="num">267</span>,</span></div>
              <div className="code-line"><span className="line-num">8</span><span className="line-content">&nbsp;&nbsp;<span className="prop">leetcodeSolved</span>: <span className="num">56</span>,</span></div>
              <div className="code-line"><span className="line-num">9</span><span className="line-content">&nbsp;&nbsp;<span className="prop">githubRepos</span>: <span className="num">10</span>,</span></div>
              <div className="code-line"><span className="line-num">10</span><span className="line-content">&nbsp;&nbsp;<span className="prop">openToWork</span>: <span className="kw">true</span>,</span></div>
              <div className="code-line"><span className="line-num">11</span><span className="line-content">&nbsp;&nbsp;<span className="prop">focus</span>: <span className="str">"Problem Solving & Clean Code 🚀"</span>,</span></div>
              <div className="code-line"><span className="line-num">12</span><span className="line-content">&#125;;</span></div>
              <div className="code-line"><span className="line-num">13</span><span className="line-content"></span></div>
              <div className="code-line"><span className="line-num">14</span><span className="line-content"><span className="cmt">// 🎯 Goal: Software / Frontend Internship</span></span></div>
              <div className="code-line"><span className="line-num">15</span><span className="line-content"><span className="kw">export default</span> developer;</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
