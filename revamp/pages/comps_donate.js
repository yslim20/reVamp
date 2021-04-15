import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Location from '../comps/Location';
import styled from 'styled-components';

const HomeCont = styled.div`
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
      <title className = "title">Location Comps - donate</title>
    </Head>
    <div className="header">Donate</div>
    <div className="container">
      <div className="location">
        <Location></Location>
        <Location title="Location 2:" text = "Wildlife Thrift Store Downtown Vancouver" ></Location>
        <Location title="Location 3:" text = "The Salvation Army -Belkin House Downtown Vancouver" ></Location>
      </div>
    </div>
  </HomeCont>
  )
}