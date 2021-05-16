import React, { useState } from 'react';
import styled from 'styled-components';
import MenuPanel from '../MenuPanel';
import {useRouter} from 'next/router';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`;
const TopCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   
    background-color: #CCE6F4;
    font-family: 'Lexend Giga', sans-serif;
    height: 81px;
    margin: 0 auto;
    width: 100%;

    &>* {
        color: #50514F;
    }
`;
const TopNavCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    font: 32px 'Lexend Giga';
    color: #14455A;
    position: fixed;
    margin: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 2px 4px rgba(0,0,0,.25);
`;
const HamMenu = styled.img`
    width: 38px;
    height: 32px;
    margin-left: 20px;
    margin: 25px;
    cursor: pointer;
`

const LogoCont = styled.div`
    margin-top:15px;
    margin-left: 25px;
`

const Logo = styled.img`

    display: inline;
    width: 44px;
    height: 35px;
    cursor: pointer;
`

const Revamp = styled.p`
    font-family: 'Lexend Giga', sans-serif;
    font-size: 24px;
    color: #247BA0;
    text-align: center;
    margin-left: 10px;
    margin-right: 80px;
    cursor: pointer;
`
const SideMenuCont = styled.div`
    position: relative;
    left: ${props=>props.left}px;
    opacity: ${props=>props.opacity};
    // display: ${props=>props.display};
    // height: ${props=>props.height}px;
    width: 275px;
    transition: left 0.5s, opacity 0.5s;
    top: 75px;
    z-index: 10;

    // background-color: rgba(163,163,163,0.6);
`;


const TopNav = ({
    routeToHome="/popular_page"
}) => {
    // onClick = {() => router.push("/location/places3")}

    const router = useRouter();

    const [menustate, setMenuState] = useState(false);
    const [opaque, setOpacity] = useState(false);
    // const [disp, setDisplay] = useState(false);
    // const [expand, setHeight] = useState(false);

    const HandleClick = () => {
        setMenuState(!menustate);
        setOpacity(!opaque);
        // setHeight(!expand);
        // setDisplay(!disp);
    }
    // var display = "none";
    // if(disp){display = "block";}
    console.log(menustate)

    return <MainCont>
    <TopNavCont>
        <TopCont>
            <HamMenu src="/hammenu.svg" onClick={HandleClick}/>
                <LogoCont>
                    <Logo src="/fashionrecycle.svg" onClick={()=>router.push(routeToHome)}></Logo>
                </LogoCont>
                <Revamp onClick={()=>router.push(routeToHome)}>reVamp</Revamp>
        </TopCont>
    </TopNavCont>
    <SideMenuCont
        left = {menustate ? 0 : -300}
        opacity = {opaque ? 1 : 0}
        // height = {expand ? "auto" : 0}
        // display = {display}
        >
            <MenuPanel/>
        </SideMenuCont>
    
    </MainCont>

}


export default TopNav;