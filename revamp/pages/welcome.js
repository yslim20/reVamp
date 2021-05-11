import Head from 'next/head'
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

//importing comps
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import DRButton from '../comps/DRButtons';
import Para from '../comps/Paragraph';

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

export default function Home() {

  const router = useRouter();
  const {places} = router.query;

  return <HomeCont>
    <Head>
      <title className = "title">Welcome</title>
    </Head>

    <div className="container flex_col">
      <BackImage /> 
      <TopNav />
      <Background>  
        <div className = "flex_col paddingB-40">
          <Header text = "welcome!" h2Size = "2.5em"></Header>
          
          <div className = "welcome_sub">
            <img className = "welcome_icon" src = "/icon_recycle_hand.svg" alt = "recycle icon" />
            <img className = "welcome_icon globe_icon" src = "/icon_globe.svg" alt = "globe icon" />
            <Para>
              on this app, you will be able to make sustainability your top priority by being able to learn how to repurpose your clothes, donate your old garments, or by simply learning about the impact of fast fashion on our planet.
            </Para>
          </div>

          <DRButton 
            onClick = {() => router.push("popular_page")}
            shadow = "0px 2px 4px rgba(0,0,0,.25)" text = "Get Started" size = "1em" marginB = "20px">
          </DRButton>

          <div className = "skip">
            <img className = "recycle_icon" src ="/icon_recycle.svg" alt = "recycle icon" />
            <Link href ="/infographic">
              <a className = "skipTxt">click here to learn more about sustainability</a>
            </Link>            
          </div>
        </div>
      </Background>
      <BottomNav />
    </div>
  </HomeCont>
}