import React from 'react'
import { FiStar } from 'react-icons/fi'
import data from '../data/testimonials.json'

function Avatar({ name }) {
  const initials = name.split(' ').map(p => p[0]).join('').slice(0,2).toUpperCase()
  return (
    <div style={{ width: 40, height: 40, borderRadius: '999px', background: 'var(--muted)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', fontWeight: 700 }}>
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section data-aos="fade-up" className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Recommendations</h2>
        <div className="grid grid-center">
          {data.map((t, i) => (
            <div key={i} className="card" style={{ display: 'grid', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Avatar name={t.author} />
                <div>
                  <div style={{ fontWeight: 700 }}>{t.author}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{t.role}</div>
                </div>
              </div>
              <p style={{ fontStyle: 'italic', marginTop: 4 }}>“{t.quote}”</p>
              <div style={{ display: 'flex', gap: 4, color: '#fbbf24' }} aria-label="rating">
                {[...Array(5)].map((_, s) => (
                  <FiStar key={s} fill="#fbbf24" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
