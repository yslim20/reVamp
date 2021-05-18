// import React from 'react'
import styled from 'styled-components';
import React, {useState} from 'react';

const DIYMainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;
const DIYCont = styled.div `
    display: flex;
    flex-direction: column;
    width: 295px;
`;
const DIYTitle = styled.h2`
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 400;
    color: #50514F;
    letter-spacing: ${props=>props.spacing}px;
`;
const DIYBigDiv = styled.div`
    display:flex;
    flex-direction: column;
    border-style: solid;
    border-color: #CCCCCC;
    border-width: 1px;
    border-radius: 11px;
    width: 295px;
    cursor: pointer;
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

const DIYs = ({
    titleDIY="sweater beanie",
    picture="/sweater-beanie.svg",
    stars="/4-star-level.svg",
    spacing="",
    onClick = () => {}
}) =>{

    return <DIYMainCont>
    <DIYCont>
        <DIYTitle spacing = {spacing}>{titleDIY}</DIYTitle>
        <DIYBigDiv>
            <DIYPic onClick = {onClick} src={picture}></DIYPic>
            <DIYSmallDiv>
                <DIYTextLevel>Difficulty Level</DIYTextLevel>
                <DIYStars src={stars}></DIYStars>
            </DIYSmallDiv>
        </DIYBigDiv>
    </DIYCont>
    </DIYMainCont>

}

export default DIYs;