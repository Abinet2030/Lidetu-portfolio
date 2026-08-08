import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FaRobot, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import bot from '../data/bot.json'

function answer(question) {
  const q = question.toLowerCase()
  // Custom greeting handler
  if (/\b(hi|hello|hey|good\s*morning|good\s*afternoon|good\s*evening|what's\s*up)\b/i.test(question)) {
    return "Hey! 👋 I'm here to help. Ask me anything about my skills, projects, experience, or how to get in touch!"
  }
  for (const item of bot.faqs) {
    if (item.q.some(k => q.includes(k.toLowerCase()))) return item.a
  }
  return bot.fallback
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: "Hi! 👋 I'm Abinet's AI assistant. Ask me anything about my skills, projects, or how to reach out!" }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const onSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { role: 'user', text: input }
    setMessages(m => [...m, userMsg])
    setInput('')

    // Simulate bot typing delay for more natural feel
    setIsTyping(true)
    setTimeout(() => {
      const botMsg = { role: 'bot', text: answer(input) }
      setMessages(m => [...m, botMsg])
      setIsTyping(false)
    }, 300)
  }

  const widget = (
    <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 9999, pointerEvents: 'auto' }}>
      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen(o => !o)}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
          color: 'var(--background)',
          boxShadow: '0 10px 24px rgba(43, 212, 255, 0.35)',
          border: 'none',
          cursor: 'pointer',
          fontSize: 24,
          fontWeight: 600
        }}
      >
        {open ? <FaTimes size={22} /> : <FaRobot size={24} />}
      </motion.button>

      {/* Conversation card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 80,
              width: 'min(380px, calc(100vw - 40px))',
              minWidth: 0,
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--background-alt)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '16px 20px',
              borderBottom: '1px solid var(--border)',
              background: 'linear-gradient(135deg, rgba(43, 212, 255, 0.1), rgba(42, 211, 138, 0.05))'
            }}>
              <FaRobot size={18} style={{ color: 'var(--accent-1)' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Chat with me!</div>
                <div style={{ fontSize: 11, color: 'var(--muted-foreground)', marginTop: 2 }}>Ask about skills, projects & more</div>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              height: 320,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              padding: '16px 14px',
              background: 'linear-gradient(180deg, var(--background-alt), rgba(15, 23, 42, 0.5))'
            }}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                    background: m.role === 'user'
                      ? 'linear-gradient(135deg, var(--accent-1), var(--accent-2))'
                      : 'rgba(255, 255, 255, 0.08)',
                    color: m.role === 'user' ? 'var(--background)' : 'var(--foreground)',
                    borderRadius: 14,
                    padding: '10px 14px',
                    maxWidth: '85%',
                    wordWrap: 'break-word',
                    fontSize: 14,
                    lineHeight: 1.4,
                    boxShadow: m.role === 'user'
                      ? '0 4px 12px rgba(43, 212, 255, 0.25)'
                      : '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {m.text}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    alignSelf: 'flex-start',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: 14,
                    padding: '10px 14px',
                    display: 'flex',
                    gap: 6,
                    alignItems: 'center'
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: 'var(--accent-1)'
                    }}
                  />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: 'var(--accent-1)'
                    }}
                  />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: 'var(--accent-1)'
                    }}
                  />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={onSend}
              style={{
                display: 'flex',
                gap: 10,
                padding: '14px 14px',
                borderTop: '1px solid var(--border)',
                background: 'linear-gradient(180deg, rgba(10, 18, 32, 0.5), var(--background-alt))',
                minWidth: 0
              }}
            >
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me anything..."
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: '10px 12px',
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'var(--muted)',
                  color: 'var(--foreground)',
                  fontFamily: 'inherit',
                  fontSize: 13,
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                type="submit"
                style={{
                  padding: '10px 16px',
                  fontSize: 13
                }}
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  // Render via portal to avoid parent stacking/overflow issues
  const body = typeof document !== 'undefined' ? document.body : null
  return body ? createPortal(widget, body) : widget
}
