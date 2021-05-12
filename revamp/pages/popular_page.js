import Head from 'next/head'
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

//importing comps
import Previews from "../comps/DIYPreviews"
import PopularDIY from '../comps/MostPopular';
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import Tips from '../comps/Tips';

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

const Info = styled.p`
  text-align:center;
`;

const Click = styled.a`
  width: 233px;
  text-decoration: underline;
  color: #14455A;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  `;

  const Text = styled.p`
  width: 100%;
  font-size:12px;
  text-align:center;
  margin: 0;
  `;
  
  const Icon = styled.div`
  width: 68px;
  height: 56px;  
  margin-bottom: 10px;  
 `
  // const default_data = [
  //   <PopularDIY
  //     stars="/1-star-level.svg"
  //     popularTitle="cropped sweater"
  //     pic="/pop_sweater.svg"
  //     onClick = {() => router.push("/tops_beginner/tutorials2")}
  //   />,
  //   <PopularDIY
  //     stars="/2-star-level.svg"
  //     popularTitle="cat tent"
  //     pic="/pop_cattent.svg"
  //     onClick = {() => router.push("/tops_beginner/tutorials1")}
  //   />,
  //   <PopularDIY
  //     stars="/4-star-level.svg"
  //     popularTitle="knee-length skirt"
  //     pic="/pop_skirt.svg"
  //     onClick = {() => router.push("/bottom_advanced/tutorials3")}
  //   />,
  // ]

  // const Carousel = ({
  //   imgdata = default_data
  // }) =>{
  //   return <Carousel>
  //     Carousel
  //   </Carousel>
  // }


export default function Home() {  

    const router = useRouter();
    const {tutorials} = router.query;

  
  return <HomeCont>
    <Head>
      <title className = "title">diy collection</title>
    </Head>

    <div className="container flex_col">
      <BackImage /> 
      <TopNav />

      <Background>    
        <div className = "flex_col paddingB-40">
          <Header h2Margin = "0 0 20px" text = "diy collection"></Header>
          <Info className = "subText">Here you can find our DIY collections where you can turn your old <br/> clothes into something new! <br/> Go through and try it out.</Info>

          <div className = "flex_col mostP__cont">  
            <PopularDIY onClick = {() => router.push("/tops_beginner/tutorials2")} /> 
            <Previews  
              // marginB="10px"
              Title="tops diys" 
              pic="/sweater-beanie-preview.svg" 
              DiyTitle = "sweater beanie" 
              stars="/3-star-level.svg" 
              pic2="/pillow-preview.svg" 
              DiyTitle2 = "pillow case" 
              stars2="/2-star-level.svg"
              onClick1 = {() => router.push("/tutorials_page/tops_beginner")}
              onClick2 = {() => router.push("/tops_advanced/tutorials2")}
              onClick3 = {() => router.push("/tops_beginner/tutorials3")}            
            />      
            <Previews
              onClick1 = {() => router.push("/tutorials_page/bottoms_beginner")}
              onClick2 = {() => router.push("/bottom_advanced/tutorials2")}
              onClick3 = {() => router.push("/bottom_advanced/tutorials1")}
            /> 
          </div> 
        </div> 

        <Tips
          marginT = "0px" marginB = "40px"
        />
        <div className = "flex_col paddingB-40 pop_donate">
            <Icon className = "pop_icon"/>
            <Click className = "" onClick = {() => router.push("donate")} className="textHov">Look for Donation Centers near you!</Click>            
            <Text>
              Donating your clothes is also<br/>a good way to upcycle.
            </Text>
        </div>
      </Background>
      <BottomNav />
    </div>
  </HomeCont>
}