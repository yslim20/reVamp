import Head from 'next/head'
import styled from 'styled-components';
import React, {useState} from 'react';

//importing comps
// import TopNav from '../comps/TopNav';
// import BottomNav from '../comps/BottomNav';
// import Header from '../comps/Header';
// import Background from '../comps/Background';
// import BackImage from '../comps/BackImage';

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

  return <HomeCont>
    {/* <Head>
      <title className = "title">Welcome</title>
    </Head>

    <div className="container flex_col">
      <BackImage />
      <TopNav />
      <Background>    */}

        {/*contents comes here*/}  
          
      {/* </Background>
      <BottomNav />
    </div> */}
  </HomeCont>  
}
