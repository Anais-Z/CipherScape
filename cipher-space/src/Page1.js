import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import "./Easy.css"


function Page1() {
    const location = useLocation();
    const { level } = location.state;

    return (
        <>
            <p>Page 1</p>
      <p>This mode is on: {level}</p>
        </>
    )
}

export default Page1;