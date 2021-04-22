import Head from 'next/head';
import React, {useState} from 'react';
import styled from 'styled-components';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import BAButton from '../comps/BAButtons';
import Background from '../comps/Background';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
`;

export default function Repurpose() {

  const router = useRouter();
  const {choices} = router.query;

    return <div>

    <Head>
      <title className = "title">Repurpose - Bottoms</title>
    </Head>

    <div className="container flex_col">
      <TopNav />
      
      <Background padding="40px 20px 40px 20px">
        <div className = "flex_col">
          <Header text="what is your skill level of crafting?"></Header>
          <ButtonCont>
          <BAButton 
            text="beginner"
            src="/beginner.svg"
            margin="auto"
            marginb="10px"
            onClick={()=>router.push("/tutorials_page/bottoms_beginner")}
          />
          <BAButton 
            text="advanced"
            src="/advanced.svg"
            marginb="10px"
            onClick={()=>router.push("/tutorials_page/bottoms_advanced")}
          />
          </ButtonCont>
        </div>
      </Background>

      <BottomNav />
      </div>
    </div>
  }

