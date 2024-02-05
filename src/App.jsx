import React, { useState } from 'react';
import Hero from './components/Hero';
import Register from './components/Register';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import MarqueeComponent from './components/Carousel2';
import About from './components/About';
import Events from './components/Events/Events';
import './App.css';
import Navbar from './components/Navbar';



const App = () => {
  // const [showLogoZoom, setShowLogoZoom] = useState(true);
  // const [showHero, setShowHero] = useState(false);

  // const handleLogoZoomEnd = () => {
  //   setShowLogoZoom(false);
  //   setShowHero(true);
  // };

  return (
   <>
   <Navbar/>
    <Hero/> 
   <About/>
    <Events/>

   <Sponsor/>
   {/* <Timeline /> */}
    <MarqueeComponent></MarqueeComponent>
    <Footer/>
   </>
  );
};

export default App;
