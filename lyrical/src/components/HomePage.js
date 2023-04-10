import * as React from 'react';
// import { Link } from 'react-router-dom';

import MainBody from './MainBody';
import Navbar from './Navbar';
import Footer from './Footer';
import Particle from './Particle';

function Home() {
    return (
        <>
            <Particle />
            <Navbar />
            <MainBody />
            <Footer />
        </>
    )
}

export default Home;