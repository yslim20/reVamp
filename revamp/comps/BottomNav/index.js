import React from 'react';
import styled from 'styled-components';

const BottomCont = styled.div`
display: flex;
justify-content: space-between;
color:#14455A;
font-family: 'Lexend Giga', sans-serif;
width: 375px;
height: 75px;
// box-shadow: 0px -2px 4px rgba(0,0,0,.25);
margin: 0 auto;
&>* {
    color: #50514F;
}
`;

const BackCont = styled.div`
text-align: center;
margin-left: 27px;
`

const BackImg = styled.img`
width: 37px;
height: 37px;
margin-top: 10px;
display: block;
`

const BackText = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 12px;
color: #50514F;
margin-bottom: 10px;
line-height: 5px;
`

const HomeCont = styled.div`
text-align: center;
`

const HomeImg = styled.img`
width: 37px;
height: 37px;
margin-top: 9px;
display: block;
`
const HomeText = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 12px;
color: #50514F;
margin-bottom: 10px;
line-height: 5px;
`
const UpCont = styled.div`
text-align: center;
margin-right: 27px;
`
const UpImg = styled.img`
width: 37px;
height: 37px;
margin-top: 10px;
display: block;
`
const UpText = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 12px;
color: #50514F;
margin-bottom: 10px;
line-height: 5px;
`

const BottomNav = () => {
    return <BottomCont>
        
        <BackCont>
        <BackImg src="/back.svg" />
        <BackText>back</BackText>
        </BackCont>
        <HomeCont>
        <HomeImg src="/home.svg" />
        <HomeText>home</HomeText>
        </HomeCont>
        <UpCont>
        <UpImg src="/uparrow.svg" />
        <UpText>top</UpText>
        </UpCont>
        </BottomCont>
}

export default BottomNav;