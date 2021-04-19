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

  const router = useRouter();

  return <HomeCont>
    <Head>
      <title className = "title">Welcome</title>
    </Head>

    <div className="container flex_col">
      <TopNav />
      <div className="backgroundDiv paddingBottom">

        <div className = "flex_col">
          <Header text = "locations"></Header>
          <p className = "subText">select a dropoff location</p>

          <div className = "flex_col">              
            <Location 
              onClick = {() => router.push("/location/places1")}
            />
            <Location doTitle="Location 2:" text = "Wildlife Thrift Store Downtown Vancouver" 
              onClick = {() => router.push("/location/places2")}
            />
            <Location doTitle="Location 3:" text = "The Salvation Army -Belkin House Downtown Vancouver" marginB = "0"
              onClick = {() => router.push("/location/places3")}
            />
          </div> 
        </div>
      </div>
      <BottomNav />
    </div>
  </HomeCont>
}