import React, {useState} from 'react';
import styled from "styled-components";
import AdvMenuLink from '../AdvMenuLink';
import MenuLink from '../MenuLink';
// import {FiMenu} from 'react-icons/fi';

const MainCont = styled.div`
    width: 375px;
    height: 730px;
    display: flex;
    flex-direction: row;
`;
const PanelCont = styled.div`
    height: 730px;
    width: 258px;
    background-color: #E9F1F5;
    display: flex;
    flex-direction: column;
`;
const ShadowCont = styled.div`
    height: 730px;
    width: 117px;
    background-color: rgba(163,163,163,0.6);
`;
const ImgDecoCont = styled.div`
    display: flex;
    height: 730px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`;
const TopImg = styled.img`
    width: 70px;
`;
const BotImg = styled.img``;

const MenuCont = styled.div`
    position: absolute;
    top: 33px;
    left: 40px;
`;


const MenuPanel = ({

}) => {

    return <MainCont> 
        <PanelCont>
            <ImgDecoCont>
                <TopImg src="/top-designs.svg" alt="menu decoration" />
                <BotImg src="/bot-designs.svg" alt="menu decoration" />
            </ImgDecoCont>
            <MenuCont>
                <MenuLink />
                <AdvMenuLink />
                <MenuLink 
                    text="info on sustainability"
                    src="#"
                    alt=""
                    display="none"
                    indexed="-10"
                    intext1=""
                />
                <MenuLink 
                    text="about us"
                    src="#"
                    alt=""
                    display="none"
                    intext1=""
                />
            </MenuCont>
        </PanelCont>
        <ShadowCont/>
    </MainCont>
}

export default MenuPanel;