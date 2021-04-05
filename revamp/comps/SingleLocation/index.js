import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const LocPageCont = styled.div`
  min-width: 305px;  
  display: flex;  
  flex-direction: column;    
  justify-contents: center;
  align-items: center;  
  margin-bottom: 50px;
`;

const LocPageTitle = styled.h3`
  max-width: 305px;
  flex: 1;
  font-family: 'Lexend Giga';
  font-size: 1.625em;
  font-weight: 400;
  line-height: 1.625em;
  color: #14455A;  
  text-align: center;
  margin: 0;
  margin-bottom: 20px;  
`;

const LocPageMap = styled.img`
  display: block;
  max-width: 305px;
  flex: 1;
  height: 220px;
  margin-bottom: 25px;  
`

const LocPageTextCont = styled.div`
  display: flex;
  max-width: 305px;
  min-width: 305px;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  margin-bottom: 20px;
  &>* {
    color:#000;
  }
`;

const LocPageTextTit = styled.p`
  font-family: "Montserrat";
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5em;
  margin: 0;
  color: #000;
  text-align: left;
  width: 100%;
`;


const LocPageText = styled.p`
  font-family: "Montserrat";
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
  text-align: left;
  width: 100%;
`;

const SingleLocation = ({
  title = "charitable impact",
  src = "/image_map01.png",
  address = "1500 W Georgia St #1250, Vancouver, BC V6G 2Z6",
  day = "Monday - Friday",
  hours = "9am - 5pm",
  phone = "1-877-531-0580"
}) => {

  return <LocPageCont> 
    <LocPageTitle>{title}</LocPageTitle>

    <LocPageMap src={src}/>

    <LocPageTextCont>
      <LocPageTextTit>
        Address:
      </LocPageTextTit>
      <LocPageText>
        {address}
      </LocPageText> 
    </LocPageTextCont>

    <LocPageTextCont>
      <LocPageTextTit>
        Hours of Operation:
      </LocPageTextTit>
      <LocPageText>
        {day}<br></br>
        {hours}
      </LocPageText> 
    </LocPageTextCont>

    <LocPageTextCont>
      <LocPageTextTit>
        Phone Number:
      </LocPageTextTit>
      <LocPageText>
        {phone}
      </LocPageText> 
    </LocPageTextCont>

  </LocPageCont>  
}

export default SingleLocation;
