import React from 'react';
import styled from 'styled-components';

const StepCont = styled.div`
max-width: 290px;
padding-top:10px;
`;

const StepBold = styled.p`
font-family: 'Montserrat', sans-serif;
font-weight: 600;
font-size: 12px;
display:inline;
`;

const StepReg = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 12px;
display:inline;
`;
const StepImg = styled.img`
padding-top: 10px;
width: 295px;
`;
const Steps = ({
    text="Introduce your cat to its new upcycled cat tent!",
    boldtext="Step 10:",
    images="/cattent.svg"

}) => {

    return <StepCont>
        <StepBold>{boldtext}</StepBold> <StepReg>{text}
</StepReg>
<StepImg src={images}/>
    </StepCont>
        

}


export default Steps;