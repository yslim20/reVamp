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
        <title className = "title">Donate</title>
      </Head>
      
      <div className="inner_container flex_col">
          <TopNav></TopNav>
            <Background />
  
        <div className = "menu_container fixedB">
          <BottomNav />
        </div>
      </div>
    </HomeCont>
    )
  }