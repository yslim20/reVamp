import styled from 'styled-components';
import React, {useState} from 'react';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;    
    margin-bottom: 30px;
`
const MainDiv = styled.div`
    width: 305px;
    height: 175px;
    position: relative;
` 
const PopTitle = styled.h6`
    font-family: 'Lexend Giga', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    text-indent:5px;
    margin: 0;
    margin-bottom:10px;    
`
const ImgDiv = styled.img`
    border-radius:10px;
    width: 100%;
    height: 100%;
    cursor: pointer;
`
const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    position: absolute;
    bottom: 10px;
    left: 5%;    
`

const DIYTitle = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: white;    
    margin: 0;
    margin-bottom: 3px;  
`

const DIYSmallDiv = styled.div`
    display:flex;
    flex-direction: row;  
    align-items: center;
`

const DIYTextLevel = styled.p`
    color:white;
    font-size:12px;
    margin: 0;
`;

const DIYStars = styled.img`
    height:15px;
    margin-left: 10px;
`

//props
const PopularDIY = ({
    stars="/1-star-level.svg",
    popularTitle="cropped sweater",
    pic="/pop_sweater.svg",
    onClick = () => {}    
}) => {

return <MainCont>
    <PopTitle>most popular</PopTitle>
    <MainDiv>
        <ImgDiv onClick = {onClick} src={pic}></ImgDiv>
        <InfoDiv>
                <DIYTitle>{popularTitle}</DIYTitle>
                <DIYSmallDiv>
                    <DIYTextLevel>DIFFICULTY:</DIYTextLevel>
                    <DIYStars src={stars}></DIYStars>
                </DIYSmallDiv>
        </InfoDiv>
    </MainDiv>
</MainCont>
}

export default PopularDIY;

