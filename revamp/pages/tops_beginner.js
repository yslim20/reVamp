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


const HomeCont = styled.div``;
const MainCont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;


export default function Home() {

const router = useRouter();
const {tutorials} = router.query;
const beginnerTops = 
    <div className = "flex_col">
        <MainCont>
            <Header text="beginner"/>
            <div className="sub_title_diy">- tops DIYS -</div>
            <DIYs titleDIY="cat tent" picture="/Cat-Tent.svg" stars="/2-star-level.svg"/>
            <DIYs titleDIY="cropped sweater" picture="/Cropped-Sweater.svg" stars="/1-star-level.svg"
                onClick = {() => router.push("/tops_beginner/tutorials2")}/>
            <DIYs titleDIY="sweater pillow case" picture="/Sweater-Pillow.svg" stars="/2-star-level.svg"/>
        </MainCont>
    </div>

    return <HomeCont>
        <Head>
          <title className = "title">Welcome</title>
        </Head>
    
        <div className="container flex_col">
            <TopNav />
            <Background>
                <div className = "flex_col paddingB-40">
                    <MainCont>
                        <Header text="beginner"/>
                        <div className="sub_title_diy">- tops DIYS -</div>
                        <DIYs titleDIY="cat tent" picture="/Cat-Tent.svg" stars="/2-star-level.svg"/>
                        <DIYs titleDIY="cropped sweater" picture="/Cropped-Sweater.svg" stars="/1-star-level.svg"
                            onClick = {() => router.push("/tops_beginner/tutorials2")}/>
                        <DIYs titleDIY="sweater pillow case" picture="/Sweater-Pillow.svg" stars="/2-star-level.svg"/>
                    </MainCont>
                </div>
            </Background>
            <BottomNav/>
        </div>
    </HomeCont>
}