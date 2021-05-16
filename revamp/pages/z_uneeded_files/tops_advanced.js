import Head from 'next/head';
import React from 'react';
import {useRouter} from 'next/router';

//importing comps
import Header from '../comps/Header';
import DIYs from '../comps/DIYs';
import TopNav from '../comps/TopNav';
import Background from '../comps/Background';
import BackImage from '../comps/BackImage';
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
                <BackImage />
                <TopNav />
                <Background padding="40px 20px 0px 20px">

                    <div className = "flex_col paddingB-40">
                        <MainCont>
                            <Header text="advanced"/>
                            <div className="sub_title_diy">-  DIYS -</div>
                            <DIYs titleDIY="one shoulder shirt" picture="/One-Shoulder-Shirt.svg" stars="/3-star-level.svg"
                                onClick = {() => router.push("/tops_advanced/tutorials1")}/>
                            <DIYs onClick = {() => router.push("/tops_advanced/tutorials2")}/>
                            <DIYs titleDIY="sweater slippers" picture="/Sweater-Slippers.svg" stars="5-star-level.svg"
                                onClick = {() => router.push("/tops_advanced/tutorials3")}/>
                        </MainCont>
                    </div>
                </Background>
                <BottomNav/>
            </div>
        </div>
    )
}