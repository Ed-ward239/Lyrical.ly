import React from 'react';
import MainPage from './components/MainPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Particle from './components/Particle';

function App() {
    return (
      <>
      <Particle/>
      <NavigationBar/>
      <MainPage />
      <Footer/>
      </>
    )
}

export default App;
