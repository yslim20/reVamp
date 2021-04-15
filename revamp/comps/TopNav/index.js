import React from 'react';
import styled from 'styled-components';

const TopCont = styled.div`
display: flex;
background-color: #CCE6F4;
font-family: 'Lexend Giga', sans-serif;
width: 375px;
height: 81px;
margin: 0 auto;
&>* {
    color: #50514F;
}
`;

const HamMenu = styled.img`
width: 38px;
height: 32px;
margin-left: 20px;
margin: 25px;
`

const LogoCont = styled.div`
margin-top:21px;
margin-left: 35px;
`


const Logo = styled.img`
width: 44px;
height: 35px;
`



const Revamp = styled.p`
font-family: 'Lexend Giga', sans-serif;
font-size: 24px;
color: #247BA0;
text-align: center;
margin-left: 10px;

`

const TopNav = () => {

    return <TopCont>
        <HamMenu src="/hammenu.svg" />
            <LogoCont>
            <Logo src="/fashionrecycle.svg"></Logo>
            </LogoCont>
            <Revamp>reVamp</Revamp>
    </TopCont>

}


export default TopNav;