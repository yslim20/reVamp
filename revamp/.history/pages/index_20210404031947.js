import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Location from '../comps/Location';
import styled from 'styled-components';

const HomeCont=styled.div`
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  title{
    font-family: 'Lexend Giga';
    font-size: 32px;
    color: #14455A;
  }


  .bottom {
    display: flex;

    .left{
      display: flex;
      flex-direction: column;
      padding: 10px;
    }

    .right{
      padding: 10px;
    }
  }
`;

export default function Home() {
  return (<HomeCont>
    <Head>
      <title>Location</title>
    </Head>
    <div className="header">Location comps</div>
    <div className="bottom">
      <div className="left">
        <Location></Location>
      </div>
    </div>
  </HomeCont>
  )
}