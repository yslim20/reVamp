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
    return <ButtonCont>
        <ButtonImg src={src} alt={alt} margin={margin} marginb={marginb}/>
        <ButtonInput bg={bgcolor} bdr={border} className="ReButtons" onClick={onClick}>
            {text}
        </ButtonInput>
    </ButtonCont>
}

export default BAButton;