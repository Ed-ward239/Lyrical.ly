import React, {useState} from 'react';
import './Navbar.css';
import { FaSpotify } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
     <a className="MenuIcon" href="#" onClick={toggleMenu}>
     <FontAwesomeIcon icon={faBars} /></a>
>>>>>>> be4ce0db5bdee4935cafdfde5ecefb1806f96fb2
=======
     <a className="MenuIcon" href="#" onClick={toggleMenu}>
     <FontAwesomeIcon icon={faBars} /></a>
>>>>>>> be4ce0db5bdee4935cafdfde5ecefb1806f96fb2
      {isMenuOpen && (
        <div className="navbarMenu">
            <a href="#">Who We Are</a>
            <a href="#">Guide</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#"><button className='SpotifyBtn'>Connect<FaSpotify/></button></a>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      )

      }

     <a href="#" onClick={toggleMenu}>
     <FontAwesomeIcon icon={faBars} /></a>
       
=======
      )} 
>>>>>>> be4ce0db5bdee4935cafdfde5ecefb1806f96fb2
=======
      )} 
>>>>>>> be4ce0db5bdee4935cafdfde5ecefb1806f96fb2
      </div>
    </nav>
  );
}
