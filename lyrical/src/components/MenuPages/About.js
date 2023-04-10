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
            <h1>"Who We Are"</h1>
            <img src={Edward} className="pfpEdward" alt="Edward"/>
            <img src={Devin} className="pfpDevin" alt="Devin"/>
            <h3 className="usernameED">Edward Lee</h3>
            <h3 className="usernameDev">Devin Lin</h3>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
            <Footer/>
        </div>
    )
}

export default About;