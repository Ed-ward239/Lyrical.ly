import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        
        <ul className="social-media-links">
          
          <li className="iconFB"><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li className="iconTwt"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li className="iconIG"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li className="iconEmail"><a href="#"><FontAwesomeIcon icon={faEnvelope} /></a></li>
      
        </ul>
      </div>
    </div>
  );
}
