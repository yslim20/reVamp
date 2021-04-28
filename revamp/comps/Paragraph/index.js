import React from 'react';
import styled from 'styled-components';

const ParaCont = styled.div`
  justify-content: center;
  text-align: center;
  color:#14455A;
  max-width: 270px;
`;

const ParaInput = styled.p`
  font-family: 'Montserrat', sans-serif;
  color:#000;
  font-size: ${props => props.pSize};
  line-height: ${props => props.pLineH};
  text-align: center;
  margin: 0;
  position: relative;
  transition: all 0.35s;
  animation: opacity 1.5s;
  -webkit-animation: opacity 1.5s;
`;


const Para = ({
  children=null,
  pSize = "1em",
  pLineH = "1.5em"
}) =>{
    return <ParaCont>
      <ParaInput className = "item"
        pSize = {pSize} pLineH = {pLineH}
      >
        {children}
      </ParaInput>
    </ParaCont>
}

export default Para;