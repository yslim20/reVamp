import React from 'react';
import styled from "styled-components";

const ButtonCont = styled.div`
    margin: 11px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 135px;
`;
const ButtonImg = styled.img`
    width: 105px;
    margin:${props => props.margin};
    margin-bottom:${props => props.marginb};
    max-height: 106px;
`;
const ButtonInput = styled.button`
    background-color: ${props => props.bg};
    color: black;
    width: 135px;
    height: 40px;
    margin-top: 17px;
    padding: 10px 25px;
    border-radius: 20px;
    border:${props => props.bdr};
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0,0,0,.25);
    font-size: 1em;
`;

const BAButton = ({
    text="beginner",
    bgcolor="#CCE6F4",
    border="1px solid #247BA0",
    src="/beginner.svg",
    alt="beginner",
    margin="auto",
    marginb="auto",
    onClick=()=>{}
}) => {
    return <ButtonCont className = "icon_tilt">
        <ButtonImg className="bttn_icon" src={src} alt={alt} margin={margin} marginb={marginb}/>
        <ButtonInput bg={bgcolor} bdr={border} className="ReButtons" onClick={onClick}>
            {text}
        </ButtonInput>
    </ButtonCont>
}

export default BAButton;