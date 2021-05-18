import React, {useState} from 'react';
import styled from "styled-components";
import AdvMenuLink from '../AdvMenuLink';
import {useRouter} from 'next/router';

const MainCont = styled.div`
    min-width: 375px;
    height: 97vh;
    display: flex;
    position: fixed;
    flex-direction: row;
`;
const PanelCont = styled.div`
    height: 90%;
    width: 275px;
    background-color: #E9F1F5;
    display: flex;
    flex-direction: column;
`;
const ImgDecoCont = styled.div`
    display: flex;
    width: 275px;
    height: 90%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
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
    left: 30px;
    z-index: 4;
`;
const Link = styled.a`
    text-decoration: none;
    color: #14455A;
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
    routeToBadges="/badges",
    routeToDonate="/donate",
    routeToAbout="/about",
}) => {

    const router = useRouter();

    return <MainCont> 
        <PanelCont>
            <MenuCont>
                <AdvMenuLink />
                <ColumnCont>
                    <Link onClick={()=>router.push(routeToInfo)}>info on <br/>sustainability</Link>
                    <Link onClick={()=>router.push(routeToBadges)}>badges</Link>
                    <Link onClick={()=>router.push(routeToDonate)}>donation centers</Link>
                    <Link onClick={()=>router.push(routeToAbout)}>about us</Link>
                </ColumnCont>
            </MenuCont>
            <ImgDecoCont>
                <TopImg src="/top-designs.svg" alt="menu decoration" />
                <BotImg src="/bot-designs.svg" alt="menu decoration" />
            </ImgDecoCont>
        </PanelCont>
    </MainCont>
}

export default MenuPanel;