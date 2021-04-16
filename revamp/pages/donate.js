import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Location from '../comps/Location';
import Background from '../comps/Background';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';

import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';


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
  
  .location{
    display: flex;      
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    padding: 10px;
    flex: 1;
  }
`;

export default function Home() {  

  const router = useRouter();
  const {places} = router.query;

  return (<HomeCont>
    <Head>
      <title className = "title">Donate</title>
    </Head>
    
    <div className="container flex_col">
      <div className = "header fixedT">
        <TopNav></TopNav>
      </div>

      <div className="location  margin-125">
        <div className = "inner_container flex_col">

          <Background />

            <Header text = "locations"></Header>
            <p className = "subText">select a dropoff location</p>

            <div className = "options_cont flex_col">              
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

      <div className = "menu_container fixedB">
        <BottomNav />
      </div>
    </div>
  </HomeCont>
  )
}