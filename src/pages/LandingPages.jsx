import React, { useEffect } from 'react'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import RateInfo from './components/RateInfo';
import StoreDescription from './components/StoreDescription';
import Footer from './components/Footer';
import BG1 from '../assets/gt-background_1.png';

function LandingPages() {
    useEffect(() => {
    
        // Set background image for the body
        document.body.style.backgroundColor = 'black'
        document.body.style.backgroundImage = `url(${BG1})`
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
    
        // Cleanup function to remove the background image when component unmounts
        return () => {
          document.body.style.backgroundImage = "";
          document.body.style.backgroundSize = "";
          document.body.style.backgroundPosition = "";
          document.body.style.backgroundRepeat = "";
          document.body.style.backgroundAttachment = "";
        };
      }, []);
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <RateInfo/>
      <StoreDescription/>
      <div style={{marginTop: '50px'}}>
        <Footer/>
      </div>
    </div>
  )
}

export default LandingPages
