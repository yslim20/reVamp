import Head from 'next/head'
import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
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
    
    `
    
    export default function Badges() {

        const router = useRouter();
        const [badge, setBadges] = useState(null);
        
        useEffect(()=>{
            if(process.browser){
                var b = localStorage.getItem("contribution");
                setBadges(b)
            }
        }, []);
        
        return <HomeCont>
        <Head>
      <title className = "title">Your Badges</title>
    </Head>

    <div className="container flex_col">
      <BackImage />
      <TopNav />
      <Background>  
          <Header text="your badges"></Header> 

       {badge.map((value, index) =>{

       return <BadgeText>
           
       </BadgeText>

       }
       
       )};
          
      </Background>
      <BottomNav />
    </div>
  </HomeCont>  
}