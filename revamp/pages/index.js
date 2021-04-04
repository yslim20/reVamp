import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import styled from 'styled-components';

const HomeCont = styled.div`
  
`;

export default function Home() {
  return (<HomeCont>
    <Head>
      <title className = "title">reVamp</title>
    </Head>
  </HomeCont>
  )
}