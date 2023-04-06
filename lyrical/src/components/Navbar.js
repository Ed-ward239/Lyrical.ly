import React, { useState } from "react";
import "./Navbar.css";
import { FaSpotify } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import Hamburger from "hamburger-react";

export default function Navbar() {
  const handleLogoClick = () => {
    window.location.reload();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>
        Lyrical.ly
      </div>
      <div className="navbar-items">

      /* you can add CSS transition properties to the navbarMenu */
      <div className="navbarMenu"></div>

        <div className={`navbarMenu ${isMenuOpen ? "show" : ""}`}>
          <a href="#">Who We Are</a>
          <a href="#">Guide</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <button className="SpotifyBtn">
            Connect
            <FaSpotify className="spotify-icon" />
          </button>
        </div>

        <a href="#" onClick={toggleMenu}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </a>
      </div>
    </nav>
  );
}
