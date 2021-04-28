import Head from 'next/head'
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';

//importing comps
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import DRButton from '../comps/DRButtons';
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
import Para from '../comps/Paragraph';

const HomeCont = styled.div``;

export default function Home() {

  const router = useRouter();   

  return <HomeCont>
    <Head>
      <title className = "title">About Us</title>
    </Head>

    <div className="container flex_col">
      <BackImage />
      <TopNav />
      <Background padding="40px 20px">
        <div className = "flex_col">
        <Header text="about us"></Header>
        <p>Meet our team!</p>
        <img src="/team.svg" alt="Youn Soo, Maria, Irene, Montana" className="margin-20"></img>
        <Para className="alignCenter">Our group came up with reVamp because we all 
          care about sustainability, and how things are recycled.
          reVamp is meant to help people who are unsure about what
          to do with their old clothes, whether its how to recycle
          or where to donate. We are here to help you! With donation 
          locations as well as ways to upcycle your old clothes, 
          we have you covered. We hope you enjoy reVamp as much 
          as we do.
        </Para>
        </div>
      </Background>
      <BottomNav />
    </div>
  </HomeCont>
  
}