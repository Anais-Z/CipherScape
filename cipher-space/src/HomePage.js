import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Page1 from './Page1';
import { useNavigate } from 'react-router-dom';


function HomePage(){
    const navigate = useNavigate();

    function navigateToAboutPage() {
        navigate('/page1');
      }
    

    return(
        <>
        <p> Home Page</p>
 
        <button onClick={navigateToAboutPage}>Go to Page 1</button>
        </>
    )
}

export default HomePage;