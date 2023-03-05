import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css"
import { useState, useEffect } from 'react';

function HomePage(){
    const navigate = useNavigate();
    const [level, setLevel] = useState("EASY")

    function navigateToAboutPage() {
        navigate('/page1', { state: { level } });
       //console.log(level)
      }

      function navigateToSnagPage() {
        navigate('/snag');
      }

      function levelSelect(selectedLevel){
         setLevel(selectedLevel)
       //  console.log(level)
      }

    
    

    return(
        <div className='home-page'>
        <>
        <div className='home-elements'>

            <div className='title'>
              <p className='title-name'>CIPHER SCAPE</p>
            </div>

            <div className='text-level'>
              <h2>DIFFICULTY LEVEL:</h2>
              <h2>{level}</h2>
            </div>

        <div className='level-buttons'>
    
              <button onClick={() => levelSelect("EASY")}>EASY</button>
      

       
              <button onClick={() => levelSelect("MEDIUM")} >MEDIUM</button>
      

              <button onClick={() => levelSelect("HARD")} >HARD</button>

             
        </div>
        
        <div>
              <button className='start'onClick={() => navigateToAboutPage(level)} >START</button>
       </div>
         
       

        </div>
    
        </>
        </div>
    )
}

export default HomePage;

