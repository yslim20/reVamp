import Head from 'next/head'

import Background from '../comps/Background';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import DRButton from '../comps/DRButtons';

import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';

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

  .butCont {
    display: flex;      
    flex-direction: row;
    justify-contents: space-between;
    align-items: center;
  }

  .firstBtn {
    margin-right: 10px;
  }
`;

export default function Home() {

  const router = useRouter();
  const {places} = router.query;

  const recyclePageContent = 
  <div className = "flex_col">
    <Header text = "welcome!" h2Size = "2.5em"></Header>
    <div className = "recycle_sub">
      choose how <br/> you would like to recycle your clothing
    </div>

    <div className = "butCont">
      <DRButton
        onClick = {() => router.push("donate")}
        text = "donate" shadow = "0px 2px 4px rgba(0,0,0,.25)" size = "1em" marginR = "15px">
      </DRButton>

      <DRButton 
        onClick = {() => router.push("repurpose")}
        text = "repurpose" shadow = "0px 2px 4px rgba(0,0,0,.25)" size = "1em">
      </DRButton>
    </div>
  </div>

  return <HomeCont>
    <Head>
      <title className = "title">Recycle</title>
    </Head>

    <div className="container flex_col">
        <TopNav />
        <Background contents = {recyclePageContent}>          
        </Background>
        <BottomNav />
    </div>
  </HomeCont>
}