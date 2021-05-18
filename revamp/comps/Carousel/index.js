import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

//importing comps
import PopularDIY from '../../comps/MostPopular';


const MainCont = styled.div`
    display: inline-flex;
    flex-direction: column;    
    margin-bottom: 20px;    
`
const PopTitle = styled.h6`
  font-family: 'Lexend Giga', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  text-indent:5px;
  margin: 0;
  margin-bottom:7px;    
`
const Cont = styled.div`
  display: inline-flex;
  flex-direction: row;
  text-align: center;
  max-width: 305px; height: auto;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 4px rgba(0,0,0,0.25);
  border-radius: 10px;
`;
const Card = styled.div`
  width: 305px; height: auto;
  display: flex;
  position: relative;
  left:${props=>props.left}px;
  transition: left 1s;
`
const CtrlButtons = styled.button` 
  width: 40px; height: 40px;
  background-color: rgba(255,255,255,0.7);
  border: none;
  border-radius: 20px;
  background-image: url(${props => props.bkImg});
  background-repeat: no-repeat;
  background-size: 10px 20px; 
  background-position: center center;
  cursor: pointer;
  position: absolute;
  top: 50%; margin-top: -20px;
  left: ${props => props.left};
  right: ${props => props.right};
`;
const CtrlDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: -85px;
`;

const Carousel = ({
  left = "5px",
  right = "5px",
}) =>{

  const [ind, setInd] = useState(0);

  const HandleImgChange = (i) => {
    var populars = document.getElementsByClassName("popular")
    if (i<0) {
      i = populars.length-1
    }
    else if(i>populars.length-1) {
      i=0;
    }
    setInd(i)
  } 

  const router = useRouter(); 

  const default_data = <Card left={ind*-305}>
    <PopularDIY
      stars="/1-star-level.svg"
      popularTitle="Cropped Sweater"
      pic="/pop_sweater.svg"
      onClick = {() => router.push("/tops_beginner/tutorials2")}
    />
    <PopularDIY
      stars="/2-star-level.svg"
      popularTitle="Cat Tent"
      pic="/pop_cattent.svg"
      onClick = {() => router.push("/tops_beginner/tutorials1")}
    />
    <PopularDIY
      stars="/4-star-level.svg"
      popularTitle="Knee-length Skirt"
      pic="/pop_skirt.svg"
      onClick = {() => router.push("/bottom_advanced/tutorials3")}
    />
  </Card>


  return <MainCont>  
    <PopTitle>most popular</PopTitle>
      <Cont>
        {default_data}
      </Cont>
      <CtrlDiv>
        <CtrlButtons bkImg = "/icon_pre.svg" left={left} onClick={()=>HandleImgChange(ind - 1)}></CtrlButtons>
        <CtrlButtons bkImg = "/icon_fwd.svg" right={right} onClick={()=>HandleImgChange(ind + 1)}></CtrlButtons>
      </CtrlDiv>
  </MainCont>
}

export default Carousel;