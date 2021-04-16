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


  return (<HomeCont>
    <Head>
      <title className = "title">Infographic</title>
    </Head>

    <div className="container flex_col">
      <div className = "header fixedT">
        <TopNav></TopNav>
      </div>

      <div className="welcome margin-125">   
        <div className = "inner_container flex_col">
          <Background />
          <Header text = "sustainability and fast fashion" h2Size = "1.75em"></Header>          

        </div> 
      </div>

      <div className = "menu_container fixedB">
        <BottomNav />
      </div>
    </div>

  </HomeCont>
  )
}