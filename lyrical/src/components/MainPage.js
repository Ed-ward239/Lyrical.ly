import React from 'react';
import Typewriter from 'typewriter-effect';
import {HiArrowRight} from 'react-icons/hi';
import './MainPage.css';

export default function MainPage() {

  var typewriter = new Typewriter(MainPage,{
    loop: true,
    delay: 1000,
  });

  return (
    <div className="main-page">
      <div className="SiteSlogan">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Feel the rhythm \nEmbrace the beat...")
              .pauseFor(300)
              .start();
              Option={
                autoStart: true,
                loop: true,
              }
          }}
        />
      </div>
      
      <div>
        <button className="StartBtn">Let's get started<HiArrowRight /></button>
      </div>
    </div>
    
  );
}