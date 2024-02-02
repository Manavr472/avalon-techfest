import React, { useState } from 'react';
import Hero from './components/Hero';
import Register from './components/Register';

import Footer from './components/Footer'
import Timeline from './components/Timeline'
import './App.css';



const App = () => {
  // const [showLogoZoom, setShowLogoZoom] = useState(true);
  // const [showHero, setShowHero] = useState(false);

  // const handleLogoZoomEnd = () => {
  //   setShowLogoZoom(false);
  //   setShowHero(true);
  // };

  return (
   <>
    {/* <Hero/> */}
   <div className='bg-black absolute top-0 h-screen'></div>
   <Timeline />
   {/* <Footer/> */}
   </>
  );
};

export default App;
