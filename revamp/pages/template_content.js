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
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }
`;

export default function Home() {

  // the contents comes here
  const /*contentsName comes here; same as background contentsName*/ anyName = 
  <div className = "flex_col">
    {/* only this part changes: contents comes here */}
    <Header text = "sustainability and fast fashion" h2Size = "1.75em"></Header>          
  </div>

  return <HomeCont>
    <Head>
      <title className = "title">Welcome</title>
    </Head>

    <div className="container flex_col">
        <TopNav />
        <Background contents = {/*anyName - contentsName comes here*/}>          
        </Background>
        <BottomNav />
    </div>
  </HomeCont>  
}
