import React from 'react';
import styled from "styled-components";

const ButtonCont = styled.span`

`;

const ButtonInput = styled.button`
    background-color: ${props => props.bg};
    color: black;
    min-width: 135px;
    max-width: 220px;
    min-height: 48px;
    padding: 14px 25px;
    cursor: pointer;
    border-radius: 20px;
    border:${props => props.bdr};
    box-shadow:${props => props.shadow};
    font-size: ${props => props.size};
    margin-right: ${props => props.marginR};
    margin-bottom: ${props => props.marginB};
    z-index: ${props => props.zIndex};
`;

const DRButton = ({

    text="repurpose",
    bgcolor="#CCE6F4",
    border="1px solid #247BA0",
    shadow="",
    size = "1em",
    marginR = "",
    marginB = "",
    zIndex = "",
    onClick =() => {}

}) => {
    return <ButtonInput 
            onClick = {onClick} 
            bg={bgcolor} bdr={border} 
            shadow ={shadow} 
            size = {size} 
            zIndex = {zIndex}
            className="ReButtons"
            marginR = {marginR}
            marginB = {marginB}>
            {text}
        </ButtonInput>
}

export default DRButton;