import React from 'react';
import styled from "styled-components";

const ButtonCont = styled.span`
    margin: 15px;
`;

const ButtonInput = styled.button`
    background-color: ${props => props.bg};
    color: black;
    min-width: 135px;
    max-width: 220px;
    min-height: 48px;
    padding: 14px 25px;
    border-radius: 20px;
    border:${props => props.bdr};
    box-shadow:${props => props.shadow};
    font-size: ${props => props.size}
`;

const DRButton = ({
    text="repurpose",
    bgcolor="#CCE6F4",
    border="1px solid #247BA0",
    shadow="",
    size = "1em",
    onClick =() => {}
}) => {
    return <ButtonCont className = "button-index">
        <ButtonInput onClick = {onClick} bg={bgcolor} bdr={border} shadow ={shadow} size = {size} className="ReButtons">
            {text}
        </ButtonInput>
    </ButtonCont>
}

export default DRButton;