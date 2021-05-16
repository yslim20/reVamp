import Head from 'next/head'
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';

//importing comps
import Previews from "../comps/DIYPreviews"
import Previews2 from "../comps/DIYPreviews2"
import PopularDIY from '../comps/MostPopular';
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';

const HomeCont = styled.div`
  .header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    font: 32px 'Lexend Giga';
    color: #14455A;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } 

`;

const Info = styled.p`
  text-align:center;

`;

const Click = styled.div`
  width: 233px;
  text-decoration: underline;
  color: #14455A;
  font-size: 16px;
  text-align: center;
  margin-top:15px;
  `;

  const Text = styled.p`

  font-size:12px;
  text-align:center;

  `;


export default function Home() {  

    const router = useRouter();
    const {tutorials} = router.query;

  
  return <HomeCont>
    <Head>
      <title className = "title">Welcome</title>
    </Head>

    <div className="container flex_col">
      <BackImage /> 
      <TopNav />

      <Background>    
        <div className = "flex_col paddingB-40">
          <Header text = "diy collection"></Header>
          <Info className = "subText">Here you can find our DIY collections where you can turn your old <br/> clothes into something new! <br/> Go through and try it out.</Info>

          <div className = "flex_col">  
            <PopularDIY onClick = {() => router.push("/tops_beginner/tutorials2")}/>   
            <Previews2 stars="/4-star-level.svg" Title="tops diys" pic="/sweater-beanie-preview.svg" DiyTitle = "Sweater Beanie" pic2="/pillow-preview.svg" DiyTitle2 = "PillowCase" stars2="/2-star-level.svg"/>      
            <Previews/> 
          </div> 
        </div> 

        {/* did you know component here */}

        <div className = "flex_col paddingB-40">
            <img src = "/map-icon.svg" onClick = {() => router.push("donate")}></img>
            <Click onClick = {() => router.push("donate")} className="textHov">Look for Donation Centers near you!</Click>
            <Text> Donating your clothes is also a god way to upcycle.</Text>
        </div>
      </Background>
      <BottomNav />
    </div>
  </HomeCont>
}