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
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

export default function Home() {

    const router = useRouter();
    const {tutorials} = router.query;
    
        return (
        <div>
        
            <div className = "header fixedT">
                    <TopNav/>
            </div>
            <div className="margin-125">
                <MainCont>
                    <Header text="advanced"/>
                    <div className="sub_title_diy">- pants DIYS -</div>
            <DIYs title="one shoulder shirt" picture="/One-Shoulder-Shirt.svg" stars="/3-star-level.svg"/>
            <DIYs />
            <DIYs title="sweater slippers" picture="/Sweater-Slippers.svg" stars="5-star-level.svg"/>
            <Background></Background>
            </MainCont>
        </div>
        <div className = "menu_container fixedB">
            <BottomNav/>
        </div>
    </div>
    )
}