import Head from 'next/head'
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

//importing comps
import Previews from "../comps/DIYPreviews"
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import Tips from '../comps/Tips';
import Carousel from '../comps/Carousel'

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

const Click = styled.a`
  width: 233px;
  text-decoration: underline;
  color: #14455A;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  font-family: montserrat;
  `;

  const Text = styled.p`
  width: 100%;
  font-size:12px;
  text-align:center;
  margin: 0;
  `;
  
  const Icon = styled.div`
  width: 68px;
  height: 56px;  
  margin-bottom: 10px;  
 `

export default function Home() {  

    const router = useRouter();
    const {tutorials} = router.query;
  
  return <HomeCont>
    <Head>
      <title className = "title">diy collection</title>
    </Head>

    <div className="container flex_col">
      <BackImage /> 
      <TopNav />

      <Background>    
        <div className = "flex_col paddingB-40">
          <Header h2Margin = "0 0 20px" text = "diy collection"></Header>
          <Info className = "subText">Here you can find our DIY collections where you can turn your old <br/> clothes into something new! <br/> Go through and try it out.</Info>

          <div className = "flex_col">  
            <Carousel/>
            <Previews  
              marginB="10px"
              Title="tops diys" 
              pic="/sweater-beanie-preview.svg" 
              DiyTitle = "Sweater Beanie" 
              stars="/3-star-level.svg" 
              pic2="/pillow-preview.svg" 
              DiyTitle2 = "Pillow Case" 
              stars2="/2-star-level.svg"
              onClick1 = {() => router.push("/tutorials_page/tops_beginner")}
              onClick2 = {() => router.push("/tops_advanced/tutorials2")}
              onClick3 = {() => router.push("/tops_beginner/tutorials3")}            
            />      
            <Previews
              onClick1 = {() => router.push("/tutorials_page/bottoms_beginner")}
              onClick2 = {() => router.push("/bottom_advanced/tutorials2")}
              onClick3 = {() => router.push("/bottom_advanced/tutorials1")}
            /> 
          </div> 
        </div> 

        <Tips
          marginT = "0px" marginB = "40px"
        />
        <div className = "flex_col paddingB-40 pop_donate hoverBox">
            <Icon className = "pop_icon"/>
            <Click onClick = {() => router.push("donate")} className="textHov">Look for Donation Centers near you!</Click>            
            <Text>
              Donating your clothes is also<br/>a good way to upcycle.
            </Text>
        </div>
      </Background>
      <BottomNav />
    </div>
  </HomeCont>
}