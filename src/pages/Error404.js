import React, { useState, createContext, useContext } from 'react';
import Navbar from '../components/Navbar';

function Error404(props){
    
    return (
        <div className="App" style={{textAlign: 'center'}}>
            <Navbar />

            <h1>Error 404</h1>

            <br/><br/>
            <p>We searched the Proper Class of webpages but couldn't find what you were looking for. Try <a href='home'>Home</a> or <a href='calc'>The Surreal Number Converter</a></p>
        </div>
    )
}

export default Error404;