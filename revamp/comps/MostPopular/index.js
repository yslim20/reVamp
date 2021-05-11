import styled from 'styled-components';
import React, {useState} from 'react';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    font-size: 20px;
    font-weight: 400;
    color: #000000;
    margin-bottom:5px;
    margin-left:5px;
`
const ImgDiv = styled.img`
    border-radius:10px;
    width: 303px;
    height: 173.68px;
    position: relative;
`
const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 60px;
    // position: absolute;
    position: relative;
    top: -70px;
    left: 10px;
    // top:455px;
    // left:30px;
    
`

const DIYTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: white;
    margin-bottom:-5px;
  
`

const DIYSmallDiv = styled.div`
    display:flex;
    flex-direction: row;
  
`

const DIYTextLevel = styled.p`
    color:white;
    font-size:12px;

`;

const DIYStars = styled.img`
    height:15px;
    margin-left: 10px;
    margin-top:10px;

`
// const MainDiv = styled.div`
//     position: relative;

// `;
    


//props
const PopularDIY = ({
    stars="/1-star-level.svg",
    popularTitle="Cropped Sweater",
    pic="/MostPopular.svg",
    onClick = () => {}
    
}) => {

return <MainCont>
    <Title> most popular </Title>
    {/* <MainDiv> */}
        <ImgDiv onClick = {onClick} src={pic}></ImgDiv>
        <InfoDiv>
                <DIYTitle>{popularTitle}</DIYTitle>
                <DIYSmallDiv>
                    <DIYTextLevel>DIFFICULTY:</DIYTextLevel>
                    <DIYStars src={stars}></DIYStars>
                </DIYSmallDiv>
        </InfoDiv>
    {/* </MainDiv> */}
</MainCont>


}

export default PopularDIY;

