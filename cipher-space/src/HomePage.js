import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Page1 from './Page1';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css"

function HomePage(){
    const navigate = useNavigate();

    function navigateToAboutPage() {
        navigate('/page1');
      }

      function navigateToSnagPage() {
        navigate('/snag');
      }
    

    return(
        <div className='home-page'>
        <>
        <div className='home-elements'>

            <div className='title'>
              <p>CIPHER SCAPE</p>
            </div>

        <div className='level-buttons'>
    
              <button>EASY</button>
      

       
              <button >MEDIUM</button>
      

              <button >HARD</button>

             
        </div>
        
        <div>
              <button className='start'onClick={navigateToAboutPage} >START</button>
       </div>
         
       

        </div>
    
        </>
        </div>
    )
}

export default HomePage;

