import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';

// DIY PREVIEW
const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 305px;
    margin-bottom: ${props => props.marginB};
`;

// title div
const TopDiv = styled.div`
    width: 96%;
    display: flex;
    flex-directaion: row;
    margin: 0;
    margin-bottom:-5px;   
    align-items: center;
    justify-content: space-between;
`;

const Text = styled.h2`
    font-size: 13px;
    font-weight: 600;
    color: #000000;    
`;

const ViewMore = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #000000;
    text-decoration: underline;
    cursor: pointer;
`;

// images
const DoubleDiv = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    width: 305px;    
`;

const ImgCont = styled.div`
    width: 48%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`
const Img = styled.img`
    width: 100%;
    height: auto;    
`

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 45px;
    position: absolute;
    bottom: 0;
    left: 5px;
`

const DIYTitle = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: white;
    margin: 0;
`

const DIYSmallDiv = styled.div`
    display:flex;
    flex-direction: row;  
`

const DIYTextLevel = styled.p`
    color:white;
    font-size:12px;
    flex-basis: 1;
    margin: 0;
    margin-right: 10px;
`;

const DIYStars = styled.img`
    height: 16px;
    width: 50px;
`;


//props
const Previews = ({
    marginB = null,
    stars="/4-star-level.svg",
    Title="bottoms diys",
    pic="/resized-jeans-preview.svg",
    DiyTitle = "Resized Jeans",
    pic2="/flower-preview.svg",
    DiyTitle2 = "Denim Flower",
    stars2="/3-star-level.svg",
    onClick1 = () => {},
    onClick2 = () => {},
    onClick3 = () => {}

}) => {

    const router = useRouter();
    const {tutorials} = router.query;

    return <MainCont marginB = {marginB}>
        <TopDiv>
            <Text>{Title}</Text>
            <ViewMore className="textHov"onClick = {onClick1}> view more</ViewMore>
        </TopDiv>

        <DoubleDiv>
            <ImgCont>
                <Img src={pic} onClick = {onClick2}/>
                <InfoDiv>
                        <DIYTitle>{DiyTitle}</DIYTitle>
                        <DIYSmallDiv>
                            <DIYTextLevel>DIFFICULTY:</DIYTextLevel>
                            <DIYStars src={stars}></DIYStars>
                        </DIYSmallDiv>
                </InfoDiv>
            </ImgCont>

            <ImgCont>
                <Img src={pic2 } onClick = {onClick3} />
                <InfoDiv>
                        <DIYTitle>{DiyTitle2}</DIYTitle>
                        <DIYSmallDiv>
                            <DIYTextLevel>DIFFICULTY:</DIYTextLevel>
                            <DIYStars src={stars2}></DIYStars>
                        </DIYSmallDiv>
                </InfoDiv> 
            </ImgCont>
        </DoubleDiv>
    </MainCont>
}

export default Previews;