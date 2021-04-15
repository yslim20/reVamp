import Head from 'next/head'
<<<<<<< HEAD
import Header from '../comps/Header/index';
import BottomNav from '../comps/BottomNav/index';
import TopNav from '../comps/TopNav/index';

export default function Home() {
  return <div>
    <TopNav />
    <Header text="what would you like to repurpose?"/>
    <BottomNav />
  </div>
}
=======
// import styles from '../styles/Home.module.css'

import styled from 'styled-components';
import React, {useState} from 'react';

import SingleLocation from '../comps/SingleLocation';

const HomeCont = styled.div`
  
`;

export default function Home() {
  return (<HomeCont>
    <Head>
      <title className = "title">reVamp</title>
    </Head>

    <div className="container home_cont flex_col">

      <div className="logo_cont flex_col">          
          <img className = "logo" src = "/homeLogo.svg" alt = "logo" />
      </div>

      <div className = "buttonCont flex_col">
        button
      </div>
    </div>

  </HomeCont>
  )
}
>>>>>>> main
