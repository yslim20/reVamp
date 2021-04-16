import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import SingleLocation from '../comps/SingleLocation';
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

  .locationCont{
    display: flex;      
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    padding: 10px;
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
      <title className = "title">Location Comps - locations</title>
    </Head>
    <div className="header">Location Pages</div>
    <div className="container">
      <div className="locationCont">
        <SingleLocation className="singleLo"></SingleLocation>

        <SingleLocation  className="singleLo"
          title = "wildlife thrift store"
          src = "/image_map02.png"
          address = "1295 Granville St, Vancouver, BC V6Z 1M5"
          day = "Daily"
          hours = "10am - 8pm"
          phone = "(604) 682-0381"       
        ></SingleLocation>

        <SingleLocation  className="singleLo"
          title = "the salvation army - belkin house"
          src = "/image_map03.png"
          address = "555 Homer St, Vancouver, BC V6B 1K8"
          day = "Daily"
          hours = "24 Hours"
          phone = "(604) 681-3405" 
        ></SingleLocation>
      </div>
    </div>
  </HomeCont>
  )
}