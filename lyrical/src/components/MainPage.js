import React from 'react';
import Typewriter from 'typewriter-effect';
import {HiArrowRight} from 'react-icons/hi';
import './MainPage.css';

export default function MainPage() {

// this is for javascript, not suitable to react

  // var typewriter = new Typewriter(MainPage,{
  //   delay: 1,
  // });

  return (
    <div className="main-page">
      
      <div className="SiteSlogan">
      
      <Typewriter

        options={{
          delay: 75,
          loop:false,
        }}

        onInit={(typewriter) => {
          typewriter
            .typeString("Feel the rhythm")
            .pauseFor(300)
            .typeString('\n<span style="color: #52B2BF;">Embrace</span> the beat')
            .callFunction(() => {
              const cursor = document.querySelector('.Typewriter__cursor');
              cursor.style.color = "transparent";
            })
            
            .start();
        }}
        
      />
    
      </div>
      
      <div>
        <button className="StartBtn">Let's get started<HiArrowRight className='hiarrow'/></button>
      </div>
    </div>
    
  );
}