import * as React from 'react';
// import { Link } from 'react-router-dom';

import MainPage from './MainPage';
import Navbar from './Navbar';
import Footer from './Footer';
import Particle from './Particle';

function Home() {
    return (
        <>

            <Particle />
            <Navbar />
           
            <MainPage />
            <Footer />
        </>
    )
}

export default Home;