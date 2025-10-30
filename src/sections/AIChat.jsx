import React, { useMemo, useState } from 'react'
import bot from '../data/bot.json'

function answer(question) {
  const q = question.toLowerCase()
  for (const item of bot.faqs) {
    if (item.q.some(k => q.includes(k.toLowerCase()))) return item.a
  }
  return bot.fallback
}

export default function AIChat() {
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Hi! Ask me about Lidetu.' }])
  const [input, setInput] = useState('')

  const onSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const userMsg = { role: 'user', text: input }
    const botMsg = { role: 'bot', text: answer(input) }
    setMessages(m => [...m, userMsg, botMsg])
    setInput('')
  }

  return (
    <section data-aos="fade-up" className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Ask about me (AI Chat)</h2>
        <div
          style={{
            border: '1px solid transparent',
            borderRadius: 16,
            padding: 16,
            background:
              'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(90deg,#34d399,#a78bfa,#60a5fa) border-box',
          }}
        >
          <div style={{ height: 260, overflow: 'auto', display: 'grid', gap: 10, padding: 8 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  justifySelf: m.role==='user'?'end':'start',
                  background: m.role==='user'
                    ? 'linear-gradient(90deg,#34d399,#60a5fa)'
                    : 'linear-gradient(90deg,#a78bfa,#60a5fa)',
                  color: '#0b1220',
                  borderRadius: 16,
                  padding: '10px 14px',
                  maxWidth: '80%',
                  boxShadow: '0 8px 20px rgba(0,0,0,.15)'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>
          <form onSubmit={onSend} style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <input className="input" value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a question..." style={{ flex: 1 }} />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
