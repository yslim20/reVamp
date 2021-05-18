import React from 'react';
import styled from 'styled-components';

const StepCont = styled.div`
    max-width: 290px;
    padding-top:10px;
`;
const StepReg = styled.p`
    width: 100%;    
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    display:inline-block;
    text-align: justify;
    margin: 0;
    margin-bottom: ${props=>props.marginB}px;
`;
const StepImg = styled.img`
    display: block;
    margin: 0 auto;
    margin-bottom: ${props=>props.marginB}px;
`;

const ExtraStep = ({
    text="Introduce your cat to its new upcycled cat tent!",
    images={images},
    marginB = 20,
}) => {

    return <StepCont>
        <StepReg marginB={marginB}>
            {text}
        </StepReg>
        <StepImg src={images} marginB={marginB}/>
    </StepCont>
}

export default ExtraStep;