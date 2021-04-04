import React from 'react';
import styled from 'styled-components';


const LocationCont = styled.div`
  display: inline-flex;  
  flex-direction: row;
  padding: 5px;
  max-width: 300px;
  &>* {
    color:#000;
  }
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const LocationTitle = styled.h6`
  font-family: "Montserrat"
  font-size: 1em;
  font-weight: 400;
`;

const LocationText = styled.p`
  font-family: "Montserrat"
  font-size: 1em;
  font-weight: 400;
`;

const IconCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100px;
`;

const IconA = styled.a`
  display: block;  
  href = "#"
`


const Location

const Location = () => {

  return <LocationCont>
    
    <LocationTitle>Location 1</LocationTitle>
    <TextCont>
      <LocationText>Charitable Impact<br></br>Vancouver, West End</LocationText>
    </TextCont>

    <IconCont>
      <IconA>
        
      </IconA>

    </IconCont>

  </LocationCont>
}

export default Location;
