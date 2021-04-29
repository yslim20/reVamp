import React from 'react';
import styled from 'styled-components';
import Para from '../../comps/Paragraph';

const StepCont = styled.div`
    max-width: 290px;
    padding-top:10px;
`;

const StepBold = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 12px;
    display:inline;
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
const StepImg = styled.div`
    display: block;
    margin: 0 auto;
    margin-bottom: ${props=>props.marginB}px;
    text-align: center;
`;

const Steps = ({
    text="Introduce your cat to its new upcycled cat tent!",
    boldtext="Step 10:",
    images="/cattent.svg",
}) => {

    return <StepCont>
        <Para pSize = "12px" pAlign = "justify" pMax = "290" pMarBttm = "20">
            <StepBold>{boldtext}</StepBold> 
            {text}
        </Para>
        <StepImg marginB = "20">
            {images !== null && <img src={images}/>}
        </StepImg>
    </StepCont>
}

export default Steps;