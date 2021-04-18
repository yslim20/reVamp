import React from 'react'
import styled from 'styled-components';

const BackgroundDiv = styled.div`
    min-width: 342px;
    min-height:600px;
    height:100%;
    background-color: #fff;
    border-style: solid;
    border-color: #CCCCCC;
    border-width: 1px;
    position: absolute;    
    top: 110px;
    bottom: 110px;
    z-index: -99;  
    padding: 20px; 
    box-sizing: border-box;
    
`;

const Background = () =>{

    return <BackgroundDiv />

}

export default Background;