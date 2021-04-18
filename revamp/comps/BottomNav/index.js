import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 75px;
    background-color: white;
    position: fixed;
    margin: 0;
    bottom: 0;
    z-index: 999;
    box-shadow: 0px -2px 4px rgba(0,0,0,.25);
`;

const BottomCont = styled.div`
display: flex;
justify-content: space-between;
align-items: center; 
color:#14455A;
font-family: 'Lexend Giga', sans-serif;
width: 375px;
height: 75px;
background-color: white;
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
cursor: pointer;
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
cursor: pointer;
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
cursor: pointer;
`
const UpText = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 12px;
color: #50514F;
margin-bottom: 10px;
line-height: 5px;
`

const BottomNav = ({
    routeToHome="/recycle"
}) => {
    
    const router = useRouter();
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
    return <MainCont>
        <BottomCont>
            <BackCont>
                <BackImg src="/back.svg" onClick={()=>router.back()}/>
                <BackText>back</BackText>
            </BackCont>
            <HomeCont>
                <HomeImg src="/home.svg" onClick={()=>router.push(routeToHome)}/>
                <HomeText>home</HomeText>
            </HomeCont>
            <UpCont>
                <UpImg 
                    src="/uparrow.svg" 
                    className="scrollTop" 
                    onClick={scrollTop} />
                <UpText>top</UpText>
                </UpCont>
        </BottomCont>
    </MainCont>
}

export default BottomNav;