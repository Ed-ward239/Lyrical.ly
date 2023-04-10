import React, { useState } from "react";
import "./Navbar.css";
import { FaSpotify } from "react-icons/fa";
import Hamburger from "hamburger-react";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate('/');
  }
  function clickAbout(event){
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
    navigate('/TnS');
  }
  function clickCntSpotify(event) {
    event.preventDefault();
    navigate('/connectSpotify');
  }


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleClick}>
        Lyrical.ly
      </div>
      <div className="navbar-items">

      /* you can add CSS transition properties to the navbarMenu */
        <div className={`navbarMenu ${isMenuOpen ? "show" : ""}`}>
          <a href="#" onClick={clickAbout}>Who We Are</a>
          <a href="#" onClick={clickGuide}>Guide</a>
          <a href="#" onClick={clickPrivacy}>Privacy Policy</a>
          <a href="#" onClick={clickTnS}>Terms of Use</a>
          <button className="SpotifyBtn" onClick={clickCntSpotify}>
            Connect
            <FaSpotify className="spotify-icon" />
          </button>
        </div>

        <a href="#" onClick={toggleMenu}>
          <Hamburger direction="left" color="white" rounded toggled={isOpen} toggle={setOpen} />
        </a>
      </div>
    </nav>
  );
}