import Head from 'next/head'

import Background from '../comps/Background';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import DRButton from '../comps/DRButtons';

import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

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

  .locationCont{
    display: flex;      
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  }

  .singleLo{
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  }  
`;

export default function Home() {

  const router = useRouter();
  const {places} = router.query;

  return (<HomeCont>
    <Head>
      <title className = "title">Welcome</title>
    </Head>

    <div className="container flex_col">
        <TopNav></TopNav>

      <div className="welcome flex_col">   
        <div className = "inner_container flex_col">
          <Background />

          <Header text = "welcome!" h2Size = "2.5em"></Header>
          <div className = "welcome_sub">
            click the button below to learn about the impact of fast fashion on Sustainability.
          </div>

          <DRButton 
            onClick = {() => router.push("infographic")}
            shadow = "0px 2px 4px rgba(0,0,0,.25)" text = "sustainability Infographic" size = "1em">
          </DRButton>


          <div className = "skip">
            <Link href ="/recycle">
              <a className = "skipTxt">click here to skip to donate or repurpose</a>
            </Link>            
          </div>
        </div> 
      </div>

        <BottomNav />
    </div>

  </HomeCont>
  )
}