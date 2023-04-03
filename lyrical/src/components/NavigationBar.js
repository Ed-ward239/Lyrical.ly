import React from 'react';
import './NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function NavigationBar() {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>Lyrical.ly</div>
      <div className="navbar-items">
       <a href="#"> <FontAwesomeIcon icon={faBars} /></a>
       
      </div>
    </nav>
  );
}
