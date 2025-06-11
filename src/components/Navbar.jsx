import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>

          <Link
            to={{ pathname: '/' }}
            state={{ scrollTo: 'work' }}
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>

          <Link
            to={{ pathname: '/' }}
            state={{ scrollTo: 'contact' }}
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
