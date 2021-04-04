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
    font: 32px 'Lexend Giga';
    color: #14455A;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .location{
      display: flex;      
      padding: 10px;
      flex: 1;
    }

    .locPage{
      padding: 10px;
      flex: 1;
    }
  }
`;

export default function Home() {
  return (<HomeCont>
    <Head>
      <title className = "title">Location</title>
    </Head>
    <div className="header">Location Comps</div>
    <div className="container">
      <div className="location">
        <Location></Location>
      </div>
      <div className="locPage"></div>
    </div>
  </HomeCont>
  )
}