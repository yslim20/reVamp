import Head from 'next/head'
import styled from 'styled-components';
import React, {useState} from 'react';
import SingleLocation from '../comps/SingleLocation';

const HomeCont = styled.div``;
  


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
};