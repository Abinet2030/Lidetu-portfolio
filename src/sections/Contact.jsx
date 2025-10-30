import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Confetti from 'react-confetti'

const TO_EMAIL = 'mabinet22@gmail.com'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      // Force mail client (Option A): always open user's email app to send to your inbox
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name.value}`)
      const body = encodeURIComponent(`From: ${form.name.value} <${form.email.value}>%0D%0A%0D%0A${form.message.value}`)
      window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`
      setStatus('success')
      form.reset()
      setTimeout(()=> setStatus('idle'), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(()=> setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" data-aos="fade-up" className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Contact</h2>
        <div
          style={{
            border: '1px solid transparent',
            borderRadius: 16,
            padding: 16,
            background:
              'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(90deg,#60a5fa,#a78bfa,#34d399) border-box',
          }}
        >
          <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
            <input className="input" type="text" name="name" placeholder="Your name" required />
            <input className="input" type="email" name="email" placeholder="Your email" required />
            <textarea className="input" name="message" rows={5} placeholder="Your message" required />
            <button className="btn btn-primary" disabled={status==='sending'}>
              {status==='sending'?'Sending...':'Send'}
            </button>
          </form>
          {status==='success' && <div style={{ marginTop: 12, color: '#22c55e', fontWeight: 600 }}>Thank you! Message sent.</div>}
          {status==='success' && <Confetti numberOfPieces={120} recycle={false} />}
          {status==='error' && <div style={{ marginTop: 12, color: '#ef4444', fontWeight: 600 }}>Something went wrong. Try again.</div>}
        </div>
      </div>
    </section>
  )
}
