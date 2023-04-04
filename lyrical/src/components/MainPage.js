import React from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function MainPage() {
  return (
    
    <div className="main-page">
      <h1 className="main-page-heading">Feel the rhythm <br></br>Embrace the beat...
</h1>
      <button className="main-page-button"><FontAwesomeIcon icon={faArrowRight} /> Let's get started</button>
    </div>
  );
}