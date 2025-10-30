import React from 'react'

export default function About() {
  return (
    <section data-aos="fade-up" style={{ padding: '64px 16px', maxWidth: 1100, margin: '0 auto' }}>
      <h2>About Me</h2>
      <div className="no-scrollbar" style={{ overflowX: 'auto', whiteSpace: 'nowrap', paddingTop: 16 }}>
        <div style={{ display: 'inline-flex', gap: 24 }}>
          {[{
            year: '2021', title: 'Started CS', desc: 'Began learning fundamentals'
          },{
            year: '2022', title: 'Frontend Track', desc: 'React, UI/UX, animations'
          },{
            year: '2023', title: 'System Admin', desc: 'Automation & tooling'
          },{
            year: '2024', title: 'Projects', desc: 'Built web apps and dashboards'
          }].map(m => (
            <div key={m.year} style={{ minWidth: 240, border: '1px solid var(--border)', borderRadius: 12, padding: 16 }}>
              <strong>{m.year}</strong>
              <div style={{ fontSize: 18, margin: '6px 0' }}>{m.title}</div>
              <div style={{ color: 'var(--muted-foreground)' }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
