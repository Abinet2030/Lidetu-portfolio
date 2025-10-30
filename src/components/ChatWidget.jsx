import React, { useState } from 'react'
import { FaRobot, FaTimes } from 'react-icons/fa'
import bot from '../data/bot.json'

function answer(question) {
  const q = question.toLowerCase()
  for (const item of bot.faqs) {
    if (item.q.some(k => q.includes(k.toLowerCase()))) return item.a
  }
  return bot.fallback
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
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
    <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 1000 }}>
      {/* Floating button */}
      <button
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen(o => !o)}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          background: 'linear-gradient(135deg, #60a5fa, #34d399)',
          color: '#0b1220',
          boxShadow: '0 10px 24px rgba(0,0,0,.35)',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {open ? <FaTimes size={22} /> : <FaRobot size={26} />}
      </button>

      {/* Conversation card */}
      {open && (
        <div
          className="card"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 74,
            width: 340,
            maxWidth: '90vw',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(90deg,#34d399,#a78bfa,#60a5fa) border-box'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>
            <FaRobot />
            <strong>Ask about me</strong>
          </div>
          <div style={{ height: 260, overflow: 'auto', display: 'grid', gap: 10, padding: 12 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  justifySelf: m.role==='user'?'end':'start',
                  background: m.role==='user'
                    ? 'linear-gradient(90deg,#34d399,#60a5fa)'
                    : 'linear-gradient(90deg,#a78bfa,#60a5fa)',
                  color: '#0b1220',
                  borderRadius: 14,
                  padding: '8px 12px',
                  maxWidth: '80%',
                  boxShadow: '0 8px 20px rgba(0,0,0,.15)'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>
          <form onSubmit={onSend} style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid var(--border)' }}>
            <input
              className="input"
              value={input}
              onChange={e=>setInput(e.target.value)}
              placeholder="Type a question..."
              style={{ flex: 1 }}
            />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  )
}
