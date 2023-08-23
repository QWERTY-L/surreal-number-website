import React, { useEffect, useState, createContext, useContext } from 'react';
import { Card } from 'antd';

import Navbar from '../components/Navbar';

function HomePage(props){
    useEffect(() => { // Change Title
        document.title = 'The Surreal Number Website';
    }, []);
    
    return (
        <div className="App" style={{textAlign: 'center', width: '60%', margin: 'auto'}}>
            <Navbar active='home' />

            <h1>Welcome to the Surreal Number Website!</h1>

            <br/><br/>
            <p><em>The #1 Place for answers to all your questions about Surreal Numbers</em></p>

            <Card title="The Original Surreal Number Calculator">
                <ul style={{textAlign: 'left'}}>
                    <li>Compute surreal numbers from their set representation! Convert surreal numbers to real numbers!</li>
                    <li>Get important information like birthdays, and canonical forms!</li>
                    <li>It all runs in your browser!</li>
                </ul>

                <h2><a href='/calc'>Try Now!</a></h2>
            </Card>

            <br/><br/>

            <Card title="Learn About Surreal Numbers">
                <ul style={{textAlign: 'left'}}>
                    <li>A simple guide that avoids unnecessary formalism while providing comprehensive information.</li>
                </ul>

                <h2><a href='/what-is-a-surreal-number'>Start Learning!</a></h2>
            </Card>

        </div>
    )
}

export default HomePage;