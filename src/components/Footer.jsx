import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{ marginTop: 48 }}>
      <div
        style={{
          borderTop: '1px solid transparent',
          background:
            'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(90deg,#60a5fa,#a78bfa,#34d399) border-box',
          borderImageSlice: 1,
        }}
      >
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '20px 16px' }}>
          <div style={{ opacity: .8 }}>© {new Date().getFullYear()} Lidetu. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a className="icon-link" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a className="icon-link" href="#contact" aria-label="Email"><FiMail /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
