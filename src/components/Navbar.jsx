import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">🌌 Astronomy Club</div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
