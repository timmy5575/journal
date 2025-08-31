import React, { useState } from 'react'
import './nav.css'

const Nav = () => {
  const [showNav, setShowNav] = useState(false); // ✅ put it inside

  return (
    <>
      <div className="layout">
        
        <button 
          className="nav-toggle" 
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? "✖ Close" : "☰ Menu"}
        </button>

        <header className={`sidebar ${showNav ? "open" : ""}`}>
          <div className='logo'>
            <h2>🙂 My Journal</h2>
          </div>

          <div className='nav'> 
            <ul>
              <li>dashboard</li>
              <li>task</li>
              <li>goals</li>
              <li>time</li>
              <li>calendar</li>
            </ul>
          </div>

          <div className='last'>
            <ul>
              <li>settings</li>
              <li>logout</li>
            </ul>
          </div>
        </header>
      </div>
    </>
  )
}

export default Nav
