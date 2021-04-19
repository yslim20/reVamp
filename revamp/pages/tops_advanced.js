import Head from 'next/head';
import React from 'react';
import {useRouter} from 'next/router';

//importing comps
import Header from '../comps/Header';
import DIYs from '../comps/DIYs';
import TopNav from '../comps/TopNav';
import Background from '../comps/Background';
import BottomNav from '../comps/BottomNav';
import styled from 'styled-components';

const MainCont = styled.div`
    // height: 80%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 5px;
`;

export default function Home() {

    const router = useRouter();
    const {tutorials} = router.query;
    
        return (
        <div>
            <Head>
                <title className = "title">Welcome</title>
            </Head>

            <div className="container flex_col">
                <TopNav />
                <div className="backgroundDiv">

                <div className = "flex_col">
                    <MainCont>
                        <Header text="advanced"/>
                        <div className="sub_title_diy">-  DIYS -</div>
                        <DIYs title="one shoulder shirt" picture="/One-Shoulder-Shirt.svg" stars="/3-star-level.svg"/>
                        <DIYs />
                        <DIYs title="sweater slippers" picture="/Sweater-Slippers.svg" stars="5-star-level.svg"/>
                    </MainCont>
                </div>
                </div>
                <BottomNav/>
            </div>
        </div>
    )
}