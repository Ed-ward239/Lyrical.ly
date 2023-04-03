import React from 'react';
import './NavigationBar.css';

export default function NavigationBar() {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>Lyrical.ly</div>
      <div className="navbar-items">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
