import React from 'react';
import Particle from '../Particle';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Edward from '../Images/Edward.jpeg';
import Devin from '../Images/Devin.png';
import './About.css';

function About() {
    return (
        <div>
            <Particle/>
            <Navbar/>
            <h1 className='whoweare'>"Who We Are"</h1>
            <div className='about-body'> 
         
            <div className='ProfilePictures'>
                <div>
                    <img src={Edward} className="pfpEdward" alt="Edward"/>
                    <h2 className="usernameED">Edward Lee</h2>
                    <p className='pfp-description'>Back-end </p>
                </div>
                <div>
                    <img src={Devin} className="pfpDevin" alt="Devin"/>
                    <h2 className="usernameDev">Devin Lin</h2>
                    <p className='pfp-description'>Front-end</p>
                </div>
            </div>

           
            </div>
            <div className='about-description'>
            <h3>lorem sump thing, it didnt pop up on my vsc lol </h3>
            </div>
            <Footer/>
        </div>
    )
}

export default About;