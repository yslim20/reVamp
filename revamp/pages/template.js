import Head from 'next/head'

import Location from '../comps/Location';
import Background from '../comps/Background';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';

import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';

const HomeCont = styled.div``;

export default function Home() {  

  
    return (<HomeCont>
      <Head>
        <title className = "title"></title>
      </Head>
      
      <div className="inner_container flex_col">
          <TopNav></TopNav>
            <Background />

          {/* place ur content here!! u can delete the header+div thing below */}
            <Header text = "welcome!" h2Size = "2.5em"></Header>
            <div className = "recycle_sub">
              choose how <br/> you would like to recycle your clothing
            </div>
          {/* delete to here! */}

          <BottomNav />
      </div>
    </HomeCont>
    )
  }