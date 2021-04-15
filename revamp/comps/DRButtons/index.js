import React from 'react';
import styled from "styled-components";

const ButtonCont = styled.span`
    margin: 15px;
`;

const ButtonInput = styled.button`
    background-color: ${props => props.bg};
    color: black;
    min-width: 135px;
    min-height: 48px;
    padding: 14px 25px;
    border-radius: 20px;
    border:${props => props.bdr}
`;

const DRButton = ({
    text="repurpose",
    bgcolor="#CCE6F4",
    border="1px solid #247BA0"
}) => {
    return <ButtonCont>
        <ButtonInput bg={bgcolor} bdr={border} className="ReButtons">
            {text}
        </ButtonInput>
    </ButtonCont>
}

export default DRButton;