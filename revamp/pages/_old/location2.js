import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import SingleLocation from '../comps/SingleLocation';
import styled from 'styled-components';
import React, {useState} from 'react';

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

  .locationCont{
    display: flex;      
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  }

  .singleLo{
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  }  
`;

export default function Home() {
  return (<HomeCont>
    <Head>
      <title className = "title">Location 2</title>
    </Head>

    <div className="container flex_col">
      <div className = "header fixedT">
        {/* hamberger menu */}
      </div>

      <div className="location margin-125">          
          <SingleLocation  className="singleLo"
            title = "wildlife thrift store"
            src = "/image_map02.svg"
            address = "1295 Granville St, Vancouver, BC V6Z 1M5"
            day = "Daily"
            hours = "10am - 8pm"
            phone = "(604) 682-0381"       
          ></SingleLocation>   
      </div>

      <div className = "menu_container fixedB">
        {/* menu bar comes here */}
      </div>
    </div>
  </HomeCont>
  )
}