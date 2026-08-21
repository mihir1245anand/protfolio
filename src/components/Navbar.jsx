import React, { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'

export default function Navbar({ activeSection, scrollTo }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (id) => {
    scrollTo(id)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <div className="navbar-logo" onClick={() => handleNavClick('home')}>
            <div className="logo-box">MA</div>
            <span className="logo-text">Mihir<span>.dev</span></span>
          </div>

          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <button className="btn btn-primary" onClick={() => handleNavClick('resume')}>
              <Download size={14} />
              Resume
            </button>

            <button
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-cta">
          <button className="btn btn-primary" onClick={() => handleNavClick('resume')}>
            <Download size={14} />
            Download Resume
          </button>
        </div>
      </div>
    </>
  )
}
