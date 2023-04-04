import React from 'react';
import Typewriter from 'typewriter-effect';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-page">
      <div className="SiteSlogan">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Feel the rhythm \nEmbrace the beat...")
              .stop()
              .start();
              Option={
                autoStart: true,
                loop: true,
              }
          }}
        />
      </div>
      
      <div>
        <button className="StartBtn">{'->'} Let's get started</button>
      </div>
    </div>
    
  );
}