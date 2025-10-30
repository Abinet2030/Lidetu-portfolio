import React from 'react'

export default function Resume() {
  return (
    <section id="resume" data-aos="fade-up" style={{ padding: '64px 16px', maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Resume</h2>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 12 }}>
        <button type="button" className="btn btn-primary" onClick={() => { /* preview disabled for now */ }}>
          Preview
        </button>
        <a className="btn btn-outline" href="/resume.pdf" download>Download PDF</a>
      </div>
    </section>
  )
}
