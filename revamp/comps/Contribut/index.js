import React from 'react';
import styled from 'styled-components';

//importing comps
import Para from '../../comps/Paragraph';
import { Children } from 'react';

const ConCont = styled.div`
  height: 145px;
  display: flex;
  flex-direction: row;
  justify-contents: flex-start;
  align-items: center; 
  margin-bottom: 40px; 
`

const ContImg = styled.img`
  display: block;
  min-width: 140px;
  height: 145px;
  margin: 0 10px 0 0;
`
const Contribution = ({
  src = null,
  text = null
}) =>{

  return <ConCont>
    <ContImg src ={src} alt = "clothes" />
    <Para pAlign = "left" pSize = "22px" pWeight = "500" pMargin = "0">
        {text}
    </Para> 
  </ConCont>
}
export default Contribution;
