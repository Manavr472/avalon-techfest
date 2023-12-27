import React, { useState } from 'react';
import Hero from './components/Hero';
import Register from './components/Register';
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import './App.css';

const App = () => {
  // const [showLogoZoom, setShowLogoZoom] = useState(true);
  // const [showHero, setShowHero] = useState(false);

  // const handleLogoZoomEnd = () => {
  //   setShowLogoZoom(false);
  //   setShowHero(true);
  // };

  return (
    <div className="app">
      <Hero />
      <Register />
      <Carousel />
      <Footer /> 
    </div>
  );
};

export default App;
