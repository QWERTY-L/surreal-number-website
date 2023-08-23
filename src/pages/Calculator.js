import React, { useState, createContext, useContext, useEffect } from 'react';
import { Alert, Space } from 'antd';

import NumberInput from '../components/NumberInput';
import Navbar from '../components/Navbar';
import NumberStatistics from '../components/NumberStatistics';
import { isValidSurreal, surrealToReal, birthday, realToSurreal_d, inputIsValid } from '../functions/surrealParser';

function Calculator() {
    const [sNumber, setSNumber] = useState({left: [], right: []});

    useEffect(() => { // Change Title
      document.title = 'The Surreal Number Calculator';
    }, []);

    useEffect(()=>{ // Use MathJax
      if(typeof window?.MathJax !== "undefined"){
        window.MathJax.typeset()
      }
    },[]);
  
    return (
      <div className="App" style={{textAlign: 'center'}}>
  
        <Navbar active='calc' />
  
        <h1>Surreal Number Calculator</h1>

        <br/>
        <p>Given a <a href='/what-is-a-surreal-number'>surreal number</a>, this will calculate the real representation of said number. Enter the left and right sets, space seperated, and submit with the equal sign! <br/> To learn how to use the surreal number calculator, see <a href='/what-is-a-surreal-number'>What is a Surreal Number?</a></p>
        <br/>
  
        <Space direction="vertical" style={{ width: '60%' }}>
          { (!isValidSurreal(sNumber) && inputIsValid(sNumber)) && (<Alert message="Error: All elements of the left must be less that all elements to right [Add relevant link]" type="error" showIcon />)}
        </Space>
        <Space direction="vertical" style={{ width: '60%' }}>
          { !inputIsValid(sNumber) && (<Alert message="Error: Invalid Input. Please enter integers or decimals, but not fractions or letters." type="error" showIcon />)}
        </Space>
  
        <NumberInput sNumber={sNumber} setSNumber={setSNumber}/>
        
        <p style={{fontSize: 50}}>{surrealToReal(sNumber)}</p>
  
        <NumberStatistics number={sNumber} />

        <br/><br/>

        {/* Add Footer Here */}
      </div>
    );
  }

export default Calculator;