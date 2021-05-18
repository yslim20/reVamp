import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;  
    border-radius: 10px;  
    box-shadow: 0 2px 4px rgba(0,0,0,0.25);
`
const MainDiv = styled.div`
    width: 305px;
    border-radius: 10px;
    height: 175px;
    position: relative;  
` 
const ImgDiv = styled.img`
    border-radius: 10px;
    width: 100%;
    height: 100%;
    cursor: pointer;  
    box-shadow: 0 2px 4px rgba(0,0,0,0.25);
`
const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    position: absolute;
    bottom: 10px;
    left: 5%;    
    cursor: pointer;  
`
const DIYTitle = styled.p`
    font-size: 13px;
    text-align: left;
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
`
const DIYStars = styled.img`
    height:15px;
    margin-left: 10px;
`

const PopularDIY = ({
    stars="/1-star-level.svg",
    popularTitle="Cropped Sweater",
    pic="/pop_sweater.svg",
    onClick = () => {}    
}) => {

const router = useRouter();
const {tutorials} = router.query;

return <MainCont>
    <MainDiv onClick = {onClick} >
        <ImgDiv src={pic} className="popular" />
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

