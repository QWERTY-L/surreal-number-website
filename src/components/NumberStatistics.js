import React, { useState, createContext, useContext } from 'react';
import {Row, Col} from 'antd';
import { MinusSquareOutlined, CalculatorOutlined } from '@ant-design/icons';

import { isValidSurreal, surrealToReal, birthday, realToSurreal_d, inputIsValid, findDiadicRational } from '../functions/surrealParser';

function NumberStatistics(props){
    var [n, k] = findDiadicRational(Math.max(...props.number.left), Math.min(...props.number.right)); // k/2^n

    // TO DO: rewrite fraction form section in MathJax
    return (
        <>
            <h3 style={{fontSize: 30}}>Stats</h3>
            <div>
                <Row>
                    <Col span={9}></Col>
                    <Col span={3} style={{fontSize: 20, textAlign: 'right'}}>Birthday 🎂</Col>
                    <Col span={3} style={{fontSize: 20, textAlign: 'left'}}>:   {birthday(props.number)}</Col>
                </Row>
                <br/>
                <Row>
                    <Col span={9}></Col>
                    <Col span={3} style={{fontSize: 20, textAlign: 'right'}}>Simplest Form 🌐</Col>
                    <Col span={3} style={{fontSize: 20, textAlign: 'left'}}>:   &#123; {realToSurreal_d(surrealToReal(props.number)).left.join(", ")} | {realToSurreal_d(surrealToReal(props.number)).right.join(", ")} &#125;</Col>
                </Row>
                <br/>
                <Row>
                    <Col span={9}></Col>
                    <Col span={3} style={{fontSize: 20, textAlign: 'right'}}>Fraction Form <CalculatorOutlined /></Col>
                    <Col span={3} style={{fontSize: 20, textAlign: 'left'}}>:   {Number.isInteger(surrealToReal(props.number)) ? surrealToReal(props.number) : <>{k} &#8260; 2<sup>{n}</sup></>}</Col>
                </Row>
            </div>

        </>
    )
}

export default NumberStatistics;

