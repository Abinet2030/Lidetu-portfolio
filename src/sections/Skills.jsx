import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 88 },
  { name: 'CSS/Animations', level: 80 },
  { name: 'System Admin', level: 70 },
]

export default function Skills() {
  const radius = 48
  const C = 2 * Math.PI * radius

  return (
    <section data-aos="fade-up" className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Skills</h2>
        <div className="grid grid-center">
          {skills.map(s => {
            const offset = C * (1 - s.level / 100)
            return (
              <div key={s.name} className="card" style={{ display: 'grid', placeItems: 'center', padding: 24 }}>
                <div style={{ position: 'relative', width: 140, height: 140 }}>
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r={radius} stroke="var(--border)" strokeWidth="10" fill="transparent" />
                    <motion.circle
                      cx="70"
                      cy="70"
                      r={radius}
                      stroke="url(#grad)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="transparent"
                      strokeDasharray={C}
                      initial={{ strokeDashoffset: C }}
                      whileInView={{ strokeDashoffset: offset }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      style={{ rotate: '-90deg', transformOrigin: '50% 50%' }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" x2="1">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontWeight: 700 }}>{s.level}%</div>
                </div>
                <div style={{ marginTop: 10, fontWeight: 600 }}>{s.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
