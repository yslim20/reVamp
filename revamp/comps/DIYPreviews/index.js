import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';


const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

const TopDiv = styled.div`
display: flex;
// flex-direction:row;
// justify-content: space-between;
margin-bottom:-5px;
width:303px;
align-items: center;

`;

const Text = styled.h2`
    font-size: 13px;
    font-weight: 600;
    color: #000000;
    margin-bottom:10px;
    margin-left:5px;
    margin-right:105px;
    width:175px;

`;

const ViewMore = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #000000;
    width:115px;
    text-decoration: underline;
   
  
`;

const ImgDiv = styled.img`
    border-radius:10px;
    width: 144px;
    height: 141.87px;
    position: relative;
`
const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 60px;
    position: relative;
    position: absolute;
    top:820px;
    left:25px;
`

const DIYTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: white;
    margin-bottom:-10px;
  
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
    width:50px;
    margin-left: 10px;
    margin-top:10px;
`;

const DoubleDiv = styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
width: 303px;
// position: relative;


`;

const InfoDiv2 = styled.div`
display: flex;
flex-direction: column;
height: 60px;
position: absolute;
top:820px;
left:185px;


`;


//props
const Previews = ({
    stars="/4-star-level.svg",
    Title="bottoms diys",
    pic="/resized-jeans-preview.svg",
    DiyTitle = "Resized Jeans",
    pic2="/flower-preview.svg",
    DiyTitle2 = "Demin Flower",
    stars2="/3-star-level.svg",

}) => {

    const router = useRouter();
    const {tutorials} = router.query;

    return <MainCont>
        <TopDiv>
            <Text>{Title}</Text>
            <ViewMore className="textHov"onClick = {() => router.push("/tutorials_page/bottoms_beginner")}> view more</ViewMore>
        </TopDiv>
        <DoubleDiv>

            <ImgDiv src={pic} onClick = {() => router.push("/bottom_advanced/tutorials2")}></ImgDiv>
            <InfoDiv>
                    <DIYTitle>{DiyTitle}</DIYTitle>
                    <DIYSmallDiv>
                        <DIYTextLevel>DIFFICULTY:</DIYTextLevel>
                        <DIYStars src={stars}></DIYStars>
                    </DIYSmallDiv>
            </InfoDiv>
            
            <ImgDiv src={pic2 } onClick = {() => router.push("/bottom_advanced/tutorials1")}></ImgDiv>
            <InfoDiv2>
                    <DIYTitle>{DiyTitle2}</DIYTitle>
                    <DIYSmallDiv>
                        <DIYTextLevel>DIFFICULTY:</DIYTextLevel>
                        <DIYStars src={stars2}></DIYStars>
                    </DIYSmallDiv>
            </InfoDiv2>
        </DoubleDiv>

    </MainCont>
}

export default Previews;