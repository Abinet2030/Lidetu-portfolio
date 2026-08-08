import React, { useState } from 'react'
import { useSearch } from '../providers/SearchProvider'
import { useTheme } from '../providers/ThemeProvider'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

export default function Header() {
  const { query, setQuery } = useSearch()
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const [menuOpen, setMenuOpen] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <div className="brand">Lidu Tech</div>
        <nav className="header-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <form className="search" onSubmit={onSubmit}>
          <input
            className="search-input"
            placeholder="Search projects, skills..."
            aria-label="Search"
            value={query}
            onChange={onChange}
          />
        </form>
        <div className="header-actions">
          <button
            className="menu-toggle icon-link"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          <a className="btn btn-outline" href="#contact">Let's Talk</a>
        </div>
      </div>
      <div className="mobile-panel">
        <nav className="mobile-nav" aria-label="Mobile">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <form className="search" onSubmit={onSubmit}>
          <input
            className="search-input"
            placeholder="Search projects, skills..."
            aria-label="Search"
            value={query}
            onChange={onChange}
          />
        </form>
        <button type="button" className="btn btn-outline mobile-theme" onClick={toggleTheme}>
          {isDark ? <FiMoon /> : <FiSun />}
          <span>{isDark ? 'Dark' : 'Light'} Mode</span>
        </button>
        <a className="btn btn-primary" href="#contact" onClick={() => setMenuOpen(false)}>Let's Talk</a>
      </div>
    </header>
  )
}
