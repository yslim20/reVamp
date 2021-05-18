import React from 'react';
import styled from 'styled-components';

const ParaCont = styled.div`
  justify-content: center;
  text-align: center;
  color:#14455A;
  max-width: ${props => props.pMax}px;
`;

const ParaInput = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.pColor};
  font-size: ${props => props.pSize};
  font-size: ${props => props.pWeight};
  line-height: ${props => props.pLineH};
  text-align: ${props => props.pAlign};
  width = ${props => props.pWidth};
  margin: ${props => props.pMargin};
  margin-top: ${props => props.pMarTop}px;
  margin-bottom: ${props => props.pMarBttm}px;
  position: relative;
  transition: all 0.35s;
  animation: opacity 1.5s;
  -webkit-animation: opacity 1.5s;
`;

const Para = ({
  children=null,
  pMax = 270,
  pColor = "#000",
  pAlign = "center",
  pWidth = null,
  pWeight = null,
  pMarTop = null,
  pMarBttm = null,
  pMargin = null,
  pSize = "1em",
  pLineH = "1.5em"
}) =>{
    return <ParaCont pMax = {pMax}>
      <ParaInput className = "item"
        pSize = {pSize} pLineH = {pLineH} pColor = {pColor} pWidth = {pWidth} 
        pAlign = {pAlign} pMarTop={pMarTop} pMarBttm={pMarBttm} pMargin = {pMargin}
        pWeight = {pWeight}
      >
        {children}
      </ParaInput>
    </ParaCont>
}

export default Para;