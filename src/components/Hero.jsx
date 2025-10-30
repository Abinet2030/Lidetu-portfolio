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
    <section style={{ position: 'relative', minHeight: '100vh', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            color: { value: '#60a5fa' },
            links: { enable: true, color: '#60a5fa', distance: 120, opacity: 0.2 },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      />

      {/* coding image background with gradient overlay (behind particles) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `linear-gradient(180deg, rgba(11,18,32,.7), rgba(11,18,32,.7)), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80), url(/coding.jpg), url(/coding-bg.svg)`,
          backgroundSize: 'cover, cover, cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 16px' }}>
        <div style={{ display: 'grid', placeItems: 'center', gap: 24, gridTemplateColumns: '1fr', maxWidth: 1100, margin: '0 auto', minHeight: 'calc(100vh - 80px)' }}>
          <div className="hero-copy" style={{ textAlign: 'center', maxWidth: 780 }}>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="hero-title"
              style={{ fontSize: 'clamp(2rem,6vw,3.5rem)', marginBottom: 12 }}
            >
              Hi, I’m Lidetu 👋
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 1800,
                  'System Admin', 1800,
                  'Tech Enthusiast', 1800,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                style={{ fontSize: 'clamp(1rem,3.5vw,1.5rem)', color: 'var(--hero-subtitle)' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
