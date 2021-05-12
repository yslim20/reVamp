import Head from 'next/head'
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';

//importing comps
import Location from '../comps/Location';
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';

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

  const router = useRouter();
  const {places} = router.query;
  
  return <HomeCont>
    <Head>
      <title className = "title">Welcome</title>
    </Head>

    <div className="container flex_col">
      <BackImage /> 
      <TopNav />

      <Background>    
        <div className = "flex_col paddingB-40">
          <Header text = "locations"></Header>
          <p className = "subText">select a dropoff location</p>

          <div className = "flex_col">              
            <Location 
              onClick = {() => router.push("/location/places1")}
            />
            <Location doTitle="location 2:" text = "Wildlife Thrift Store Downtown Vancouver" 
              onClick = {() => router.push("/location/places2")}
            />
            <Location doTitle="location 3:" text = "The Salvation Army -Belkin House Downtown Vancouver" marginB = "0"
              onClick = {() => router.push("/location/places3")}
            />
          </div> 
        </div> 
      </Background>
      <BottomNav />
    </div>
  </HomeCont>
}