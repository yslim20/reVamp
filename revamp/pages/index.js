import Head from 'next/head'
import FinishedLook from '../comps/FinishedLook';
import Background from '../comps/Background';
import DIYs from '../comps/DIYs';

export default function Home() {
  return <div>
    <FinishedLook picture="/Denim-Flower.svg"/>
    <FinishedLook></FinishedLook>
    <Background></Background>
    <DIYs></DIYs>
    <DIYs title="demin flowers" picture="/Denim-Flower.svg"/>

  </div>
// import Header from '../comps/Header/index';
// import BottomNav from '../comps/BottomNav/index';
// import TopNav from '../comps/TopNav/index';

// export default function Home() {
//   return <div>
//     <TopNav />
//     <Header text="what would you like to repurpose?"/>
//     <BottomNav />
//   </div>
// }

// import styles from '../styles/Home.module.css'

// import styled from 'styled-components';
// import React, {useState} from 'react';

// import SingleLocation from '../comps/SingleLocation';

// const HomeCont = styled.div`
  


// export default function Home() {
//   return (<HomeCont>
//     <Head>
//       <title className = "title">reVamp</title>
//     </Head>

//     <div className="container home_cont flex_col">

//       <div className="logo_cont flex_col">          
//           <img className = "logo" src = "/homeLogo.svg" alt = "logo" />
//       </div>

//       <div className = "buttonCont flex_col">
//         button
//       </div>
//     </div>

//   </HomeCont>
//   )
// }

};