import React, { useEffect } from 'react'
import BG1 from '../assets/banner-2.png'
import FormLoginAdmin from './components/FormLoginAdmin'

function AdminLoginPages() {
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
        <FormLoginAdmin/>
    </div>
  )
}

export default AdminLoginPages
