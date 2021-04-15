import React from 'react'
import styled from 'styled-components';


const DIYCont = styled.div `
    display: flex;
    flex-direction: column;
`;
const DIYTitle = styled.h2`
    color: black;
    font-size: 22px;
    margin-bottom: 5px;
    font-weight: 400;
`;
const DIYBigDiv = styled.div`
    display:flex;
    flex-direction: column;
    border-style: solid;
    border-color: #CCCCCC;
    border-width: 1px;
    border-radius: 11px;
    width: 295px;
`;

const DIYPic = styled.img`
    border-radius:10px;
    width: 295px;
`;
const DIYSmallDiv = styled.div`
    display:flex;
    flex-direction: row;
    padding: 10px;
    justify-content:center;
    height: 20px
`;
const DIYTextLevel = styled.p`
    color:black;
    font-size:16px;
    padding-right:20px;
    margin-top:0px;
`;

const DIYStars = styled.img`
    height:20px;
`;



//props
const DIYs = ({
    title="sweater beanie",
    picture="/sweater-beanie.svg",
    stars="/4-star-level.svg"
}) =>{

    return <DIYCont>
        <DIYTitle>{title}</DIYTitle>
        <DIYBigDiv>
            <DIYPic src={picture}></DIYPic>
            <DIYSmallDiv>
                <DIYTextLevel>Difficulty Level</DIYTextLevel>
                <DIYStars src={stars}></DIYStars>
            </DIYSmallDiv>
        </DIYBigDiv>
    </DIYCont>

}

export default DIYs;