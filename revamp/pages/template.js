import Head from 'next/head'

import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import DRButton from '../comps/DRButtons';

import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const HomeCont = styled.div``;

export default function Home() {

  const router = useRouter();

  return <HomeCont>
    <Head>
      <title className = "title">Welcome</title>
    </Head>

    <TopNav />
    <div className="container flex_col">
      {/* remove className "paddingBottom" if you dont like
      the extra padding at the bottom of the white container */}
      <div className="backgroundDiv paddingBottom">
        <div className = "flex_col">

{/* insert changes from here */}
          <Header text = "welcome!" h2Size = "2.5em"></Header>
          <div className = "welcome_sub">
            click the button below to learn about the impact of fast fashion on Sustainability.
          </div>
          <DRButton 
            onClick = {() => router.push("/infographic")}
            shadow = "0px 2px 4px rgba(0,0,0,.25)" text = "sustainability Infographic" size = "1em">
          </DRButton>
          <div className = "skip">
            <Link href ="/recycle">
              <a className = "skipTxt">click here to skip to donate or repurpose</a>
            </Link>            
          </div>
{/* to here */}

        </div>
      </div>
      <BottomNav />
    </div>
  </HomeCont>
  
}