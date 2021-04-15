import Head from 'next/head'
import SingleLocation from '../../comps/SingleLocation';
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {locOptions} from '../../data/texts';

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
  //useRouter etc.

  const [locTitle, setLocTitle] = useState("Location 1")
  const [title, setTitle] = useState("charitable impact")
  const [src, setSrc] = useState("/image_map01.svg")
  const [address, setAddress] = useState("1500 W Georgia St #1250, Vancouver, BC V6G 2Z6")
  const [day, setDay] = useState("Monday - Friday")
  const [hours, setHours] = useState("9am - 5pm")
  const [phone, setPhone] = useState("1-877-531-0580")
  
  const router = useRouter();
  const {places} = router.query;

  //var location = location1;

  if(places === "Location 1:"){
    locTitle = locOptions.location1.locTitle,
    title = locOptions.location1.title,
    src = locOptions.location1.src,
    address = locOptions.location1.address,
    day = locOptions.location1.day,
    hours = locOptions.location1.hours,
    phone = locOptions.location1.phone    
  }

  if(places === "Location 2:"){
    locTitle = locOptions.location2.locTitle,
    title = locOptions.location2.title,
    src = locOptions.location2.src,
    address = locOptions.location2.address,
    day = locOptions.location2.day,
    hours = locOptions.location2.hours,
    phone = locOptions.location2.phone 
  }

  if(places === "Location 3:"){
    locTitle = locOptions.location3.locTitle,
    title = locOptions.location3.title,
    src = locOptions.location3.src,
    address = locOptions.location3.address,
    day = locOptions.location3.day,
    hours = locOptions.location3.hours,
    phone = locOptions.location3.phone 
  }

  return <div>
    (<HomeCont>
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

        <div className = "menu_container fixedB ">
          {/* menu bar comes here */}
        </div>
      </div>
    </HomeCont>
    )
  </div>
}

