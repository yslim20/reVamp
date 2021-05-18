import React, {useState} from 'react';
import styled from "styled-components";
import {useRouter} from 'next/router';

const MainCont = styled.div`
    width: 305px;
    height: 34px;
    margin-bottom: 20px;
`;
const SliderCont = styled.div`
    width: 305px;
    height: 34px;
    border-radius: 20px;
    background-color: #F2F4FC;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.25)
`;
const ButtonCont = styled.div`
    width: 146px;
    height: 30px;
    background-color: #247BA0;
    border-radius: 20px;
    z-index: 1px;
    position: relative;
    top: -32px;
    left: ${props=>props.left};
    transition: left 0.5s;
`;
const InvizButtonCont = styled.div`
    width: 146px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    z-index: 5px;
    justify-content: center;
`;
const Text = styled.p`
    margin: 0;
    font-size: 10px;
    font-weight: 900;
    color: ${props=>props.color};
    z-index: 5;
    position: relative;
    top: 9px;
    user-select: none;
    transition: color 0.5s;
`;

const SliderButton = ({
    beginner="/tutorials_page/bottoms_beginner",
    advanced="/tutorials_page/bottoms_advanced",
}) => {
    const router = useRouter();

    const [sliderState, setSliderState] = useState(false);
    const [begText, setTextColor1] = useState(false);
    const [advText, setTextColor2] = useState(false);

    const HandleClick = () => {
        setSliderState(!sliderState);
        setTextColor1(!begText);
        setTextColor2(!advText);
        setTimeout(function() {
            if(window.location.href.includes(advanced))
            {
                router.push(beginner)
            }
            else if(window.location.href.includes(beginner))
            {
                router.push(advanced)
            }
        },1000)
    }

    return <MainCont>
    <SliderCont>
        <InvizButtonCont onClick={HandleClick}>
            <Text color = {begText ? "#636A79" : "white"}>
                beginner</Text>
        </InvizButtonCont>
        <InvizButtonCont onClick={HandleClick}>
            <Text color = {advText ? "white" : "#636A79"}>
                advanced</Text>
        </InvizButtonCont>
    </SliderCont>
        <ButtonCont 
            left = {sliderState ? "157px" : "2px"}/>
    </MainCont>
}
export default SliderButton;