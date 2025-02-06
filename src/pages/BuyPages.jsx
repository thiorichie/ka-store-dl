import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FormBeli from './components/FormBeli';
import BG1 from '../assets/gt-background_1.png';

function BuyPages() {
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
      <FormBeli/>
      <div style={{marginTop: '50px'}}>
        <Footer/>
      </div>
    </div>
  )
}

export default BuyPages
