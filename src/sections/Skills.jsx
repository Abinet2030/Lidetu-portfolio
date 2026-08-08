import React from 'react'
import { motion } from 'framer-motion'

const skillsByCategory = {
  'Frontend': [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 92 },
    { name: 'TypeScript', level: 85 },
    { name: 'CSS/SCSS', level: 90 },
    { name: 'Framer Motion', level: 88 },
    { name: 'Tailwind CSS', level: 89 },
  ],
  'Backend': [
    { name: 'Node.js', level: 82 },
    { name: 'Express', level: 80 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'MongoDB', level: 80 },
    { name: 'REST APIs', level: 85 },
    { name: 'Authentication', level: 82 },
  ],
  'Tools & DevOps': [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 78 },
    { name: 'Linux/Unix', level: 85 },
    { name: 'CI/CD', level: 80 },
    { name: 'Vite', level: 88 },
  ],
}

export default function Skills() {
  const radius = 48
  const C = 2 * Math.PI * radius

  return (
    <section id="skills" data-aos="fade-up" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        {Object.entries(skillsByCategory).map((category, categoryIdx) => (
          <motion.div
            key={category[0]}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: categoryIdx * 0.1 }}
          >
            <div className="skill-category">
              <h3 className="skill-category-title">{category[0]}</h3>
              <div className="grid grid-center">
                {category[1].map(s => {
                  const offset = C * (1 - s.level / 100)
                  return (
                    <motion.div
                      key={s.name}
                      whileHover={{ y: -8 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="skill-card card"
                      style={{ display: 'grid', placeItems: 'center', padding: 20 }}
                    >
                      <div style={{ position: 'relative', width: 120, height: 120 }}>
                        <svg width="120" height="120" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r={radius} stroke="var(--border)" strokeWidth="8" fill="transparent" />
                          <motion.circle
                            cx="60"
                            cy="60"
                            r={radius}
                            stroke="url(#grad-skill)"
                            strokeWidth="8"
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
                            <linearGradient id="grad-skill" x1="0" x2="1">
                              <stop offset="0%" stopColor="var(--accent-1)" />
                              <stop offset="100%" stopColor="var(--accent-2)" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 14 }}>{s.level}%</div>
                      </div>
                      <div style={{ marginTop: 12, fontWeight: 600, fontSize: 14, textAlign: 'center' }}>{s.name}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
