import React, { useState } from 'react'
import { useSearch } from '../providers/SearchProvider'

export default function Header() {
  const { setQuery } = useSearch()
  const [local, setLocal] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setQuery(local.trim())
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Portfolio</div>
        <form className="search" onSubmit={onSubmit}>
          <input
            className="search-input"
            placeholder="Search projects, skills..."
            aria-label="Search"
            value={local}
            onChange={(e)=>setLocal(e.target.value)}
          />
        </form>
        <div className="header-right"></div>
      </div>
    </header>
  )
}
