import React, { useMemo, useState } from 'react'
import { useSearch } from '../providers/SearchProvider'
import { motion } from 'framer-motion'
import data from '../data/projects.json'

const categories = ['All', 'Web Apps', 'Frontend', 'Backend']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const { query } = useSearch()
  const fallbackFor = (title) => {
    const text = encodeURIComponent(title || 'Project')
    const bg = 'eef2f7'
    const fg = '2d3748'
    return `data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>\
  <rect width='100%' height='100%' fill='%23${bg}'/>\
  <g>\
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23${fg}' font-family='Arial, Helvetica, sans-serif' font-size='28' font-weight='600'>${text}</text>\
  </g>\
 </svg>`
  }
  const items = useMemo(() => {
    const byCategory = filter === 'All' ? data : data.filter(p => p.category === filter)
    if (!query) return byCategory
    const q = query.toLowerCase()
    return byCategory.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    )
  }, [filter, query])

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 data-aos="fade-up">Projects</h2>
        <div className="btn-group" style={{ margin: '12px 0 24px' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`btn ${filter===c?'btn-primary':'btn-ghost'}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-center">
          {items.map(p => (
            <motion.div
              key={p.id}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              className="card"
            >
              <div className="card-media">
                <img
                  src={p.image || `https://picsum.photos/seed/${encodeURIComponent(p.title)}/800/600`}
                  alt={p.title}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackFor(p.title) }}
                  style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8 }}
                />
              </div>
              <div className="card-title">{p.title}</div>
              <div className="card-sub">{p.description}</div>
              <div className="tags">
                {p.tags.map(t => <span key={t} className="tag">#{t}</span>)}
              </div>
              <div className="card-actions">
                {p.demo && <a className="btn btn-primary" href={p.demo} target="_blank" rel="noreferrer">Live</a>}
                {p.repo && <a className="btn btn-outline" href={p.repo} target="_blank" rel="noreferrer">Code</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
