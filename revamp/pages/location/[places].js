import Head from 'next/head'
import SingleLocation from '../../comps/SingleLocation';
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {locOptions} from '../../data/texts';
import BottomNav from '../../comps/BottomNav';

const HomeCont = styled.div`
  .header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    font: 32px 'Lexend Giga';
    color: #14455A;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }

  .locationCont{
    display: flex;      
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  }

  .singleLo{
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  }  
`;

export default function Places(){

  var locTitle="";
  var title=""; 
  var src="";
  var address="";
  var day=""; 
  var hours="";
  var phone=""; 
  
  const router = useRouter();
  const {places} = router.query;

  if(places === "places1"){
    locTitle = locOptions.place1.locTitle,
    title = locOptions.place1.title,
    src = locOptions.place1.src,
    address = locOptions.place1.address,
    day = locOptions.place1.day,
    hours = locOptions.place1.hours,
    phone = locOptions.place1.phone    
  }

  if(places === "places2"){
    locTitle = locOptions.place2.locTitle,
    title = locOptions.place2.title,
    src = locOptions.place2.src,
    address = locOptions.place2.address,
    day = locOptions.place2.day,
    hours = locOptions.place2.hours,
    phone = locOptions.place2.phone 
  }

  if(places === "places3"){
    locTitle = locOptions.place3.locTitle,
    title = locOptions.place3.title,
    src = locOptions.place3.src,
    address = locOptions.place3.address,
    day = locOptions.place3.day,
    hours = locOptions.place3.hours,
    phone = locOptions.place3.phone 
  }

  return <div>
    <HomeCont>
      <Head>
        <title className = "title">{locTitle}</title>
        {/* location title doesn't change */}
      </Head>

      <div className="container flex_col">
        <div className = "header fixedT">
          {/* hamberger menu */}
        </div>

        <div className="location margin-125">          
            <SingleLocation className="singleLo"
              title = {title}
              src = {src}
              address = {address}
              day = {day}
              hours = {hours}
              phone = {phone}           
            />
        </div>

        <BottomNav/>
      </div>
    </HomeCont>
  </div>
}

