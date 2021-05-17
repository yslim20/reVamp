import Head from 'next/head'
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';



//importing comps
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import Para from '../comps/Paragraph';
import Reduce from '../comps/Reduce';


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

    const BadgeText = styled.p`
    text-align: center;
    `

    const BadgeDiv = styled.div`
    min-height: 300px;
    background-color: pink;
    min-width: 275px;
    `

    const BadgeImg = styled.img`
    width: 65px;
    height: 65px; 
    display: flex;
    padding: 4px;
    `
    
    export default function Badges() {
      
          const [gift, setGift] = useState({
            badge:[]
            // badge: 0
          })
        
          useEffect(()=>{
            var unlocks = localStorage.getItem("unlocks");
            unlocks = JSON.parse(unlocks);
            setGift(unlocks);
            // console.log('hey')
          })

        return <HomeCont>
        <Head>
      <title className = "title">Your Badges</title>
    </Head>

    <div className="container flex_col">
      <BackImage />
      <TopNav />
      <Background>  
          <Header text="your badges"></Header>
          <BadgeText>Here are your hard earned badges you have collected from completing our DIY tutorials!</BadgeText>
          <BadgeDiv> 
              {/* this only shows one */}
          {/* {gift.badge && <BadgeImg src="/badge.svg" /> } */}

              {/* this freezes the web app after a minute */}
          {gift.badge.map((o,i)=><BadgeImg key={i} src="/badge.svg"/>)}


        </BadgeDiv>

      </Background>
      <BottomNav />
    </div>
  </HomeCont>  
}