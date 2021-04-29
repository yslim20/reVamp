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
import BAButton from '../comps/BAButtons';

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

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
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

          <ButtonCont>
            <BAButton
              text="donate"
              src="/icon_donate.svg"
              alt="donate icon"
              onClick={()=>router.push("/donate")}
            >
            </BAButton>
         
            <BAButton
              text="repurpose"
              src="/icon_repurpose.svg"
              alt="repurpose icon"
              onClick={()=>router.push("/repurpose")}
            >
            </BAButton>
          </ButtonCont>

        </div> 
      </Background>
      <BottomNav />
    </div>
  </HomeCont>
}