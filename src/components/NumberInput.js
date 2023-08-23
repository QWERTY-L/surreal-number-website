import React, { useState, createContext, useRef } from 'react';
import { Input, Col, Row, Button } from 'antd';

function NumberInput(props){
    const leftInput = useRef();
    const rightInput = useRef();

    var updateValues = () => {
        var left = leftInput.current.input.value.split(",").map(Number);
        var right = rightInput.current.input.value.split(",").map(Number);

        // Empty Set Case
        if(leftInput.current.input.value.trim() === '') left = [];
        if(rightInput.current.input.value.trim() === '') right = [];

        props.setSNumber({left: left, right: right})
      }

    return (
        <>
        <Row style={{marginLeft: 'auto', marginRight: 'auto'}} justify="center" align="center" >
            <Col span={1} style={{fontSize: 40}}>
                <b>&#123;</b>
            </Col>
            <Col span={7}>
                <br/>
                <Input id='left' ref={leftInput} placeholder="∅" size='large' onPressEnter={updateValues} />
            </Col>
            <Col span={2}>
                <b style={{fontSize: 40}}>|</b>
            </Col>
            <Col span={7}>
                <br/>
                <Input id='right' ref={rightInput} placeholder="∅" size='large' onPressEnter={updateValues} />
            </Col>
            <Col span={1} style={{fontSize: 40}}>
                <b>&#125;</b>
            </Col>
      </Row>

      <br/><br/>
      <Button size='large' type='primary' htmlType='submit' onClick={updateValues}><b>=</b></Button>
      </>
    )
}

export default NumberInput;
