import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
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
          {showNav ? "✖ " : "☰ "}
        </button>

        <header className={`sidebar ${showNav ? "open" : ""}`}>
          <div className='logo'>
            <h2>🙂 My Journal</h2>
          </div>

          <div className='nav'> 
            <ul>
              <li>
               <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              home </NavLink>
              </li>
              <li>  
                <NavLink to="/weather" className={({ isActive }) => (isActive ? "active" : "")}>
              Weather </NavLink></li>
              <li>
                <NavLink to="/goals" className={({ isActive }) => (isActive ? "active" : "nav-link")}>
                  Goals
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" className={({ isActive }) => (isActive ? "active" : "nav-link")}>
                  Calendar
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='last'>
            <ul>
              <li>settings</li>
            </ul>
          </div>
        </header>
      </div>
    </>
  )
}

export default Nav
