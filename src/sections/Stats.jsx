import React from 'react'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '5+', label: 'Happy Clients' },
  { value: '15+', label: 'Tools & Frameworks' },
]

export default function Stats() {
  return (
    <section className="section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="card stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
