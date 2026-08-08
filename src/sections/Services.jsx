import React from 'react'
import { motion } from 'framer-motion'
import { FiLayout, FiZap, FiSettings, FiShield } from 'react-icons/fi'

const services = [
  {
    title: 'Web App Development',
    desc: 'Modern, responsive interfaces with clean architecture and performance optimization. Build scalable solutions that grow with your business.',
    icon: FiLayout,
  },
  {
    title: 'UI/UX & Motion Design',
    desc: 'Interactive, polished experiences with thoughtful animations and UX flow. Create engaging interfaces that delight users.',
    icon: FiZap,
  },
  {
    title: 'System Administration',
    desc: 'Automation, monitoring, and reliable systems that keep products stable. Proactive infrastructure management and optimization.',
    icon: FiSettings,
  },
  {
    title: 'Security & Maintenance',
    desc: 'Updates, backups, and best practices to keep your stack secure and performant. Peace of mind with continuous improvement.',
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
          {services.map((s, idx) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="service-card card"
              >
                <div className="service-icon-wrapper">
                  <Icon className="service-icon" />
                </div>
                <div className="card-title" style={{ marginTop: 0 }}>{s.title}</div>
                <div className="card-sub">{s.desc}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
