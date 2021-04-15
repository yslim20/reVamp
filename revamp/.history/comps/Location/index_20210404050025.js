import React from 'react';
import styled from 'styled-components';
import locationIcon from "./../../public/icon_location.svg"


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
  flex-direction: column;
  flex: 1;
  margin-right: 20px;
`;

const LocationTitle = styled.h6`
  font-family: 'Lexend Giga';
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
  margin-bottom: 5px;
`;

const LocationText = styled.p`
  font-family: "Montserrat";
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
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

const Icon = styled.div`
  width: 68px;
  height: 56px;
  background-image: url(${locationIcon});
  background-size: cover;
  background-repeat: no-repeat;
 `



const Location = () => {

  return <LocationCont>
    
    <TextCont>
      <LocationTitle>Location 1</LocationTitle>    
      <LocationText>Charitable Impact<br></br>Vancouver, West End</LocationText>
    </TextCont>

    <IconCont>
      <IconA>
        <Icon></Icon>

      </IconA>
    </IconCont>

  </LocationCont>
}

export default Location;
