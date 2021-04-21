import Head from 'next/head'

import Background from '../comps/Background';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';

import styled from 'styled-components';
import React, {useState} from 'react';

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

const Info = styled.p`
font-family: 'Montserrat', sans-serif;
text-align: center;
color: #333333;
max-width: 250px;
`

const BgImg = styled.img`
width: 341px;
position: relative;
`

const ImgCont = styled.div`
position: relative;
top: 45px;
`

//const Pile = {backgroundImage: 'url(/pileofclothes.svg)'}

export default function Home() {

  return <HomeCont>
    <Head>
      <title className = "title">Infographic</title>
    </Head>

    <div className="container flex_col">
        <TopNav />
        <Background>      
          <div className = "flex_col">
            <Header text = "sustainability and fast fashion" h2Size = "1.75em"></Header>          
          </div> 
          <Info>Producing fast fashion items is to get as many products as they can into the market quickly. It means that caring about the environment, and the effects they have on it don’t play a part.
</Info>  
<ImgCont>
<BgImg src="/pileofclothes.svg" alt="background image" />
</ImgCont>
        </Background>
        <BottomNav />
    </div>
  </HomeCont>  
}
