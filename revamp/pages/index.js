import Head from 'next/head';
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import DRButton from '../comps/DRButtons';

const HomeCont = styled.div``;  


export default function Home() {

  const router = useRouter();
  const {places} = router.query;

  return <HomeCont>
    <Head>
      <title className = "title">reVamp</title>
    </Head>
    
    <div className="container home_cont flex_col"> 

      <img className = "backG topL" src = "/Index_01_TopL.svg" alt = "background image" />
      <img className = "backG topR" src = "/Index_02_TopR.svg" alt = "background image" />
      <img className = "backG bttmL" src = "/Index_03_BttmL.svg" alt = "background image" />
      <img className = "backG bttmR" src = "/Index_04_BttmR.svg" alt = "background image" />     

      <div className="logo_cont flex_col">          
          <img className = "logo" src = "/homeLogo.svg" alt = "logo" />
      </div>

      <DRButton
        onClick = {() => router.push("welcome")}
        shadow = "0px 2px 4px rgba(0,0,0,.25)" border = "none" text = "start" size = "1.25em" zIndex = "10">
      </DRButton>

    </div>
  </HomeCont>
};

