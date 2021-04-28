import Head from 'next/head'
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';

//importing comps
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import DRButton from '../comps/DRButtons';

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
      <title className = "title">Recycle</title>
    </Head>
    
    
    <div className="container">
      <BackImage />
      <TopNav />        
      <Background>    
        <div className = "flex_col paddingB-40">
          <Header text = "welcome!" h2Size = "2.5em"></Header>
          <div className = "recycle_sub">
            choose how <br/> you would like to recycle your clothing
          </div>
          
          <div className = "flex_row bttn_cont">
            <div className = "flex_col marginR">
              <img className = "donate_icon bttn_icon" src = "/icon_donate.svg" alt = "donate icon" />
              <DRButton
                onClick = {() => router.push("donate")}
                text = "donate" shadow = "0px 2px 4px rgba(0,0,0,.25)" size = "1em">
              </DRButton>
            </div>

            <div className = "flex_col">
              <img className = "repurpose_icon bttn_icon" src = "/icon_repurpose.svg" alt = "repurpose icon" />
              <DRButton 
                onClick = {() => router.push("repurpose")}
                text = "repurpose" shadow = "0px 2px 4px rgba(0,0,0,.25)" size = "1em">
              </DRButton>
            </div>
          </div>
            
        </div> 
      </Background>
      <BottomNav />
    </div>
  </HomeCont>
}