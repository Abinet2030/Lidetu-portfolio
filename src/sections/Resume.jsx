import React from 'react'

export default function Resume() {
  return (
    <section id="resume" data-aos="fade-up" className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-head">
          <div className="section-kicker">Profile</div>
          <h2 className="section-title">Resume</h2>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 12, flexWrap: 'wrap' }}>
        <button type="button" className="btn btn-primary" onClick={() => { /* preview disabled for now */ }}>
          Preview
        </button>
        <a className="btn btn-outline" href="/resume.pdf" download>Download PDF</a>
      </div>
      </div>
    </section>
  )
}
