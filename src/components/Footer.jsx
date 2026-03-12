import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">Lidu Tech</div>
            <p>
              Web developer focused on clean interfaces, motion, and systems that scale.
            </p>
            <div className="footer-socials">
              <a className="icon-link" href="https://github.com/Abinet2030?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a className="icon-link" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a className="icon-link" href="mailto:mabinet22@gmail.com" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-title">Quick Links</div>
            <a className="footer-link" href="#about">About</a>
            <a className="footer-link" href="#projects">Projects</a>
            <a className="footer-link" href="#skills">Skills</a>
            <a className="footer-link" href="#resume">Resume</a>
          </div>
          <div className="footer-col">
            <div className="footer-title">Services</div>
            <div className="footer-text">Web Apps</div>
            <div className="footer-text">UI/UX & Motion</div>
            <div className="footer-text">System Administration</div>
            <div className="footer-text">Maintenance</div>
          </div>
          <div className="footer-col">
            <div className="footer-title">Get In Touch</div>
            <div className="footer-text">mabinet22@gmail.com</div>
            <a className="btn btn-primary" href="#contact">Start a Project</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-note">(c) {new Date().getFullYear()} Lidetu. All rights reserved.</div>
          <div className="footer-note">Built with React + Vite</div>
        </div>
      </div>
    </footer>
  )
}
