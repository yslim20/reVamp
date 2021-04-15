import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Location from '../comps/Location';
import styled from 'styled-components';

const HomeCont=styled.div`
  .header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    padding: 20px; 
    font-family: 'Lexend Giga';
    font-size: 32px;
    color: #14455A;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .left{
      display: flex;      
      padding: 10px;
      flex: 1;
    }

    .right{
      padding: 10px;
    }
  }
`;

export default function Home() {
  return (<HomeCont>
    <Head>
      <title className = "title">Location</title>
    </Head>
    <div className="header">Location comps</div>
    <div className="container">
      <div className="left">
        <Location></Location>
      </div>
    </div>
  </HomeCont>
  )
}