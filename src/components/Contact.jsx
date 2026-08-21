import React, { useState } from 'react'
import { Mail, Linkedin, Github, Award, Send, CheckCircle2, Loader2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1400))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header fade-in-element visible">
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-subtitle">
            Whether you're a recruiter, fellow developer, or startup founder — I'd love to hear from you. Let's connect!
          </p>
          <div className="divider"></div>
        </div>

        <div className="contact-grid">
          <div className="fade-in-element visible">
            <h3 className="contact-info-title">Let's Talk Internships</h3>
            <p className="contact-info-sub">
              I'm actively looking for internship opportunities in software engineering, web development, and frontend roles. If you're hiring or just want to connect, my inbox is always open!
            </p>

            <div className="contact-items">
              <a href="mailto:raghavanand034@gmail.com" className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">raghavanand034@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mihir-anand-349a99424/"
                className="contact-item"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-item-icon">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <div className="contact-item-value">linkedin.com/in/mihir-anand-349a99424</div>
                </div>
              </a>

              <a
                href="https://github.com/raghav1245anand/raghav1245anand"
                className="contact-item"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-item-icon">
                  <Github size={18} />
                </div>
                <div>
                  <div className="contact-item-label">GitHub</div>
                  <div className="contact-item-value">github.com/raghav1245anand</div>
                </div>
              </a>

              <a
                href="https://www.codechef.com/users/mihir1245anand"
                className="contact-item"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-item-icon">
                  <Award size={18} />
                </div>
                <div>
                  <div className="contact-item-label">CodeChef</div>
                  <div className="contact-item-value">codechef.com/users/mihir1245anand</div>
                </div>
              </a>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/raghav1245anand/raghav1245anand"
                className="contact-social-btn"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mihir-anand-349a99424/"
                className="contact-social-btn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href="mailto:raghavanand034@gmail.com" className="contact-social-btn">
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="fade-in-element visible">
            <div className="contact-form-card">
              <h3 className="form-title">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      className="form-input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    className="form-input"
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Internship Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    placeholder="Hi Mihir! I came across your portfolio and would love to connect..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="spinner" style={{ animation: 'rotate-slow 1s linear infinite' }} />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="form-success" style={{ display: 'flex' }}>
                    <CheckCircle2 size={18} />
                    Message sent! I'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
