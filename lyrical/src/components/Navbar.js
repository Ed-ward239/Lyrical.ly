import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Navbar.css";
import { FaSpotify } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import Hamburger from "hamburger-react";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
 // Menu Navigation functions
  function handleLogoClick(event) {
    event.preventDefault();
    navigate('/');
  }
  function clickAbout(event) {
    event.preventDefault();
    navigate('/About');
  }
  function clickGuide(event) {
    event.preventDefault();
    navigate('/Guide');
  }
  function clickPrivacy(event) {
    event.preventDefault();
    navigate('/Privacy');
  }
  function clickTnS(event) {
    event.preventDefault();
    navigate('/Tns');
  }
  function clickSpotify(event) {
    event.preventDefault();
    navigate('/connectSpotify');
  }

  // Menu toggle function
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isOpen, setOpen] = useState(false);
  
  // Navbar return
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>
        Lyrical.ly
      </div>
      <div className="navbar-items">

      
      <div className="navbarMenu"></div>

        <div className={`navbarMenu ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li href="#" onClick={clickAbout}>Who We Are</li>
            <li href="#" onClick={clickGuide}>Guide</li>
            <li href="#" onClick={clickPrivacy}>Privacy Policy</li>
            <li href="#" onClick={clickTnS}>Terms of Use</li>
            <li><button className="SpotifyBtn" onClick={clickSpotify}>
              Connect
              <FaSpotify className="spotify-icon" />
            </button></li>
          </ul>


        </div>

        <a href="#" onClick={toggleMenu}>
          <Hamburger direction="left" color="white" rounded toggled={isOpen} toggle={setOpen} />
        </a>
      </div>
    </nav>
  );
}
