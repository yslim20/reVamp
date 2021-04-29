import Head from 'next/head'
import styled from 'styled-components';
import React, {useState} from 'react';

//importing comps
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import Para from '../comps/Paragraph';
import Reduce from '../comps/Reduce';


const HomeCont = styled.div`
  .header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    font: 32px 'Lexend Giga';
    color: #14455A;
    overflow: hidden;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    overflow: hidden;
  }
`;


const BgImg = styled.img`
width: 341px;
position: relative;

const Info = styled.p`
font-family: 'Montserrat', sans-serif;
text-align: center;
color: #333333;
max-width: 250px;
margin: 0;
`

const SubTitle = styled.p`
font-family: 'Montserrat', sans-serif;
text-align: center;
color: #333333;
max-width: 250px;
font-size: 22px;
font-weight: 550;
margin-bottom: 50px;
`

const PerCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 45px;
`

const Percent = styled.p`
font-family: 'Montserrat', sans-serif;
text-align: center;
color: #50514F;
max-width: 250px;
font-size: 48px;
font-weight: 700;
margin: 0;
`

const RnR = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 35px;
`

const ReRe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BoldT = styled.p`
font-family: 'Montserrat', sans-serif;
text-align: center;
font-weight: 700;
`

const Img = styled.img`
min-height: 110px;
min-width: 100px;
`

const Or = styled.p`
margin: 85px 35px 0 35px;
`

const BigRec = styled.img`
margin-top: 25px;
margin-bottom: 25px;
`

//const Pile = {backgroundImage: 'url(/pileofclothes.svg)'}

export default function Home() {

  return <HomeCont>
    <Head>
      <title className = "title">Infographic</title>
    </Head>

    <div className="container flex_col">

      <BackImage />
      <TopNav />
      <Background>      
        <div className = "flex_col">
          <Header text = "sustainability and fast fashion" h2Size = "1.75em"></Header>          
        </div> 
        <Para pMarTop = "1em">
          Producing fast fashion items is to get as many products as they can into the market quickly. It means that caring about the environment, and the effects they have on it don’t play a part.
        </Para>  
        <ImgCont>
        <BgImg src="/pileofclothes.svg" alt="background image" />
        </ImgCont>
      </Background>
      <BottomNav />

        <TopNav />
        <Background bgcol="#FFFFFF">      
          <div className = "flex_col">
            <Header text = "clothing waste" h2Size = "1.65em"></Header>
            <SubTitle>in North America,</SubTitle>
            <img src="thrownaway.svg" />   
            <PerCont>
            <Info>and</Info>
            <Percent>95%</Percent>
            <Info>could have been</Info>
            </PerCont>   
            <RnR>
            <ReRe>
            <BoldT>repurposed</BoldT>
            <Img src="repurp.svg"/>
            </ReRe>
            <Or>or</Or>
            <ReRe>
            <BoldT>recycled</BoldT>
            <Img src="rec.svg"/>
            </ReRe>
            </RnR>
            <Header text = "how to reduce environmental impact" h2Size = "1.65em"></Header>
            <BigRec src="/bigrec.svg" />
            <img src="/bigglobe.svg" className="globe_info"/>
            <Reduce></Reduce>
            <Reduce text="2. buy clothes with better quality so they last longer" 
            src="/badge.svg" alt="badge"></Reduce>
            <Reduce text="3. think twice before throwing out your clothes" 
            src="/thinker.svg" alt="thinking"></Reduce>
            <Reduce text="4. reduce the amount of times you do your laundry" 
            src="/laundry.svg" alt="laundry"></Reduce>
          </div> 

        </Background>
        <BottomNav />
    </div>
  </HomeCont>  
}
