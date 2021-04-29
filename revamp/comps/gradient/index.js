import React from 'react';
import styled from "styled-components";
import DRButton from '../DRButtons';

const GradientCont = styled.div`
    width: 332px;
    height: 170px;
    background-image: linear-gradient(rgba(255,255,255,0), rgba(0,0,0, 1));
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Gradient = ({

}) => {
    const scrollNext = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    return <GradientCont>
        <DRButton
            text="next step"
            onClick={scrollNext}

        ></DRButton>
    </GradientCont>
}
export default Gradient;