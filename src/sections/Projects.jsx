import React, { useMemo, useState } from 'react'
import { useSearch } from '../providers/SearchProvider'
import { motion } from 'framer-motion'
import { FiEye } from 'react-icons/fi'
import data from '../data/projects.json'

const categories = ['All', 'Web Apps', 'Frontend', 'Backend']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const { query, setQuery } = useSearch()
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
    const q = query.trim().toLowerCase()
    if (!q) return byCategory
    return byCategory.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    )
  }, [filter, query])
  const clearSearch = () => {
    setQuery('')
    setFilter('All')
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <div className="section-kicker">Selected Work</div>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="btn-group" style={{ margin: '12px 0 24px' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`btn ${filter===c?'btn-primary':'btn-ghost'}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-center">
          {items.length === 0 ? (
            <div className="card" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              <div className="card-title" style={{ marginTop: 0 }}>No projects match your search.</div>
              <div className="card-sub">Try another keyword or clear the filters.</div>
              <div className="card-actions" style={{ justifyContent: 'center' }}>
                <button className="btn btn-outline" onClick={clearSearch}>Clear Search</button>
              </div>
            </div>
          ) : (
            items.map(p => (
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
                  {p.demo && (
                    <a className="icon-link" href={p.demo} target="_blank" rel="noreferrer" aria-label={`View ${p.title}`}>
                      <FiEye />
                    </a>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
