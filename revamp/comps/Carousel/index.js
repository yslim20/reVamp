import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

//importing comps
import PopularDIY from '../../comps/MostPopular';

const default_data = [  
  <PopularDIY
    stars="/1-star-level.svg"
    popularTitle="cropped sweater"
    pic="/pop_sweater.svg"
    //onClick = {() => router.push("/tops_beginner/tutorials2")}
  />,

  <PopularDIY
    stars="/2-star-level.svg"
    popularTitle="cat tent"
    pic="/pop_cattent.svg"
    //onClick = {() => router.push("/tops_beginner/tutorials1")}
  />,

  <PopularDIY
    stars="/4-star-level.svg"
    popularTitle="knee-length skirt"
    pic="/pop_skirt.svg"
    //onClick = {() => router.push("/bottom_advanced/tutorials3")}
  />
]

const MainCont = styled.div`
    display: inline-flex;
    flex-direction: column;    
    margin-bottom: 30px;    
`

const PopTitle = styled.h6`
  font-family: 'Lexend Giga', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  text-indent:5px;
  margin: 0;
  margin-bottom:10px;    
`

const Cont = styled.div`
  display: inline-flex;
  flex-direction: row;
  text-align: center;
  max-width: 305px; height: auto;
  overflow: hidden;
  position: relative;
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
`

const Carousel = ({
  data = default_data, 
  left = "5px",
  right = "5px",
}) =>{

  const [ind, setInd] = useState(0);
  const [le, setle] = useState(0);

  const HandleImgChange = (i) => {
    if(i < 0){      
      i = data.length-1
    }
    if(i > data.length-1){
      i = 0;
    }
    setInd(i)
  } 

  const router = useRouter();
  const {tutorials} = router.query;  

  const RouteTut = () => {
    if(data[0]){
      router.push("/tops_beginner/tutorials2")
    }
    if(data[1]){
      router.push("/tops_beginner/tutorials1")
    }
    if(data[2]){
      router.push("/bottom_advanced/tutorials3")
    }
  }

  return <MainCont>  
    <PopTitle>most popular</PopTitle>
      <Cont>
          {data.map((o,i)=><Card 
            left={ind*-305}
            children={o}
            key={i}  
            onClick = {RouteTut}          
          />)}
          <CtrlButtons bkImg = "/icon_pre.svg" left={left} onClick={()=>HandleImgChange(ind - 1)}></CtrlButtons>
          <CtrlButtons bkImg = "/icon_fwd.svg" right={right} onClick={()=>HandleImgChange(ind + 1)}>&rsaquo;</CtrlButtons>
      </Cont>
  </MainCont>
}

export default Carousel;