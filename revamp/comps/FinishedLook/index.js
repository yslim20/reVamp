import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';


const FinishedLookCont = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const FinishedLookTitle = styled.h2`
    color: black;
    font-size: 22px;
    margin-bottom: 5px;
    font-weight: 400;
`;

const FinishedLookPic = styled.img`
    border-radius:10px;
    width: 295px;
    border-style: solid;
    border-color: #CCCCCC;
    border-width: 1px;
`;

//props
const FinishedLook = ({
    title="Finished Look!",
    picture="/sweater-beanie.svg",
}) =>{

    return <FinishedLookCont>
        <FinishedLookTitle>{title}</FinishedLookTitle>
        
        <FinishedLookPic src={picture}></FinishedLookPic>
      
    </FinishedLookCont>
}

export default FinishedLook;