import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Location from '../comps/Location';
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
  return (<HomeCont>
    <Head>
      <title className = "title">Donate</title>
    </Head>
    
    <div className="container flex_col">
      <div className = "header fixedT">
        {/* hamberger menu */}
      </div>

      <div className="location  margin-125">
        <div className = "inner_container flex_col">
          <div className = "title_cont fixedT">
            {/* h2 comes here */}
          </div>

          <div className = "options_cont flex_col">
            <Location></Location>
            <Location title="Location 2:" text = "Wildlife Thrift Store Downtown Vancouver" ></Location>
            <Location title="Location 3:" text = "The Salvation Army -Belkin House Downtown Vancouver" marginB = "0"></Location>
          </div>
        </div>        
      </div>

      <div className = "menu_container fixedB">
        {/* menu bar comes here */}
      </div>
    </div>
  </HomeCont>
  )
}