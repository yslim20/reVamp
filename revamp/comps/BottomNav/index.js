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
    
    .icon1 {
        background-image: url("/bot_nav/back_arrow.svg");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: 37px 74px;
    }
    .icon1:hover {
        background-position: bottom center;
    }

    .icon2 {
        background-image: url("/bot_nav/home_button.svg");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: 48px 74px;
    }
    .icon2:hover {
        background-position: bottom center;
    }

    .icon3 {
        background-image: url("/bot_nav/top_button.svg");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: 37px 74px;
    }
    .icon3:hover {
        background-position: bottom center;
    }
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
// margin-top: 200px;
&>* {
    color: #50514F;
}
`;

const BackCont = styled.div`
text-align: center;
margin-left: 27px;
`

const BackImg = styled.div`
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

const HomeImg = styled.div`
width: 48px;
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
const UpImg = styled.div`
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
    routeToHome="/welcome"
}) => {
    
    const router = useRouter();
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
    return <MainCont>
        <BottomCont>
            <BackCont>
                <BackImg 
                    // src="/bot_nav/back_arrow.svg" 
                    className="icon1"
                    onClick={()=>router.back()}/>
                <BackText>back</BackText>
            </BackCont>
            <HomeCont>
                <HomeImg 
                    // src="/bot_nav/home_button.svg" 
                    className="icon2"
                    onClick={()=>router.push(routeToHome)}/>
                <HomeText>home</HomeText>
            </HomeCont>
            <UpCont>
                <UpImg 
                    // src="/bot_nav/top_button.svg" 
                    className="scrollTop icon3" 
                    onClick={scrollTop} />
                <UpText>top</UpText>
                </UpCont>
        </BottomCont>
    </MainCont>
}

export default BottomNav;