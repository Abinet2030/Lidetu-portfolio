import React from 'react'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadSlim } from '@tsparticles/slim'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <section className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            color: { value: '#2bd4ff' },
            links: { enable: true, color: '#2bd4ff', distance: 130, opacity: 0.2 },
            move: { enable: true, speed: 0.9 },
            number: { value: 40 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      />

      <div className="hero-bg" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="hero-title"
            >
              Hi, I'm Abinet
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <TypeAnimation
                sequence={[
                  'Web Developer', 1800,
                  'System Admin', 1800,
                  'Tech Enthusiast', 1800,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="hero-sub"
              />
            </motion.div>
            <p className="hero-meta">
              I build high-performance web interfaces and reliable systems that scale. Focused on clean design,
              motion, and maintainable code.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects">View Projects</a>
              <a className="btn btn-outline" href="#contact">Work With Me</a>
            </div>
          </div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 140, damping: 18 }}
            style={{ justifySelf: 'end', width: '100%', maxWidth: 340 }}
            className="hero-visual"
          >
            <div className="card avatar-card">
              <div className="avatar-ring">
                <img src="/profile.svg" alt="Abinet Avatar" />
              </div>
              <div style={{ fontWeight: 700, fontSize: 20 }}>Abinet</div>
              <div style={{ color: 'var(--muted-foreground)', marginTop: 4 }}>Software Developer</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
