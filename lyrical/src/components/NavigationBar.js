import React, { useState } from 'react';
import './NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavigationBar() {
  const handleLogoClick = () => {
    window.location.reload();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>Lyrical.ly</div>
      <div className="navbar-items">
        
        {isMenuOpen && (
          <div className="navbar-dropdown">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
            <a href="#">Option 4</a>
            <a href="#">Option 5</a>
          </div>
        )}
        <a href="#" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </nav>
  );
}
