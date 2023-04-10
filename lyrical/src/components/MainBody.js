import React from 'react';
import Typewriter from 'typewriter-effect';
import {HiArrowRight} from 'react-icons/hi';
import './MainBody.css';
import { useNavigate } from 'react-router-dom';

export default function MainBody() {

// this is for javascript, not suitable to react

  // var typewriter = new Typewriter(MainBody,{
  //   delay: 1,
  // });
  const navigate = useNavigate();

  function SearchClick(event) {
    event.preventDefault();
    navigate('/SearchPage');
  }
  return (
    <div className="main-page">
      
      <div className="SiteSlogan">
      
      <Typewriter

        options={{
          delay: 75,
          loop: true,
        }}

        onInit={(typewriter) => {
          typewriter
            .typeString("Feel the rhythm")
            .pauseFor(300)
            .typeString('\n<span style="color: #52B2BF;">Embrace</span> the beat')
            .pauseFor(3000)
            .callFunction(() => {
              const cursor = document.querySelector('.Typewriter__cursor');
              cursor.style.color = "transparent";
            })
            
            .start();
        }}
        
      />
    
      </div>
      
      <div>
        <button className="StartBtn" onClick={SearchClick}>Let's get started<HiArrowRight className='hiarrow'/></button>
      </div>
    </div>
    
  );
}