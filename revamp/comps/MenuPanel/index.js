import React, {useState} from 'react';
import styled from "styled-components";
import AdvMenuLink from '../AdvMenuLink';
import MenuLink from '../MenuLink';
import {useRouter} from 'next/router';

const MainCont = styled.div`
    min-width: 375px;
    height: 100vh;
    display: flex;
    // position: absolute;
    position: fixed;
    flex-direction: row;
    
`;
const PanelCont = styled.div`
    // min-height: 730px;
    height: 90%;
    width: 275px;
    background-color: #E9F1F5;
    display: flex;
    flex-direction: column;
`;
const ShadowCont = styled.div`
    // height: 730px;
    height: 100vh;
    // min-width: 75px;
    // width: 100%;
    background-color: rgba(163,163,163,0.6);
`;
const ImgDecoCont = styled.div`
    display: flex;
    // min-height: 730px;
    width: 275px;
    height: 90%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    // top: 81px;

`;
const TopImg = styled.img`
    width: 70px;
`;
const BotImg = styled.img`
    width: 100%;
`;

const MenuCont = styled.div`
    position: relative;
    top: 10px;
    // top: 120px;
    // top: -300px;
    left: 30px;

    z-index: 4;
`;
const Link = styled.a`
    text-decoration: none;
    color: #14455A;
    // z-index: 3;
    margin-top: 18px;
    font-size: 16px;
    font-family: 'Lexend Giga';
    cursor: pointer;
`;
const ColumnCont = styled.div`
    display: flex;
    flex-direction: column;
`;


const MenuPanel = ({
    routeToInfo="/infographic",
    routeToAbout="/about",
}) => {

    const router = useRouter();

    return <MainCont> 
        <PanelCont>
            <MenuCont>
                <MenuLink/>
                <AdvMenuLink />
                <ColumnCont>
                    <Link onClick={()=>router.push(routeToInfo)}>info on <br/>sustainability</Link>
                    <Link onClick={()=>router.push(routeToAbout)}>about us</Link>
                </ColumnCont>
            </MenuCont>
            <ImgDecoCont>
                <TopImg src="/top-designs.svg" alt="menu decoration" />
                <BotImg src="/bot-designs.svg" alt="menu decoration" />
            </ImgDecoCont>
        </PanelCont>
        {/* <ShadowCont/> */}
    </MainCont>
}

export default MenuPanel;