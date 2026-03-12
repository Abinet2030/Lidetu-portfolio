import React from 'react'
import { FiLayout, FiZap, FiSettings, FiShield } from 'react-icons/fi'

const services = [
  {
    title: 'Web App Development',
    desc: 'Modern, responsive interfaces with clean architecture and performance in mind.',
    icon: FiLayout,
  },
  {
    title: 'UI/UX & Motion',
    desc: 'Interactive, polished experiences with thoughtful animations and UX flow.',
    icon: FiZap,
  },
  {
    title: 'System Administration',
    desc: 'Automation, monitoring, and reliable systems that keep products stable.',
    icon: FiSettings,
  },
  {
    title: 'Security & Maintenance',
    desc: 'Updates, backups, and best practices to keep your stack safe.',
    icon: FiShield,
  },
]

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Services</div>
          <h2 className="section-title">What I Do</h2>
        </div>
        <div className="grid grid-center">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="card" style={{ display: 'grid', gap: 10 }}>
                <div className="service-icon">
                  <Icon />
                </div>
                <div className="card-title" style={{ marginTop: 0 }}>{s.title}</div>
                <div className="card-sub">{s.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
