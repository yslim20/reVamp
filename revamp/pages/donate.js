import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Location from '../comps/Location';
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {locOptions} from '../data/texts'; 
//import Places from 'pages/location';

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
  
  .location{
    display: flex;      
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    padding: 10px;
    flex: 1;
  }
`;

export default function Home() {  

  // const [title, setTitle] = useState("charitable impact")
  // const [src, setSrc] = useState("/image_map01.svg")
  // const [address, setAddress] = useState("1500 W Georgia St #1250, Vancouver, BC V6G 2Z6")
  // const [day, setDay] = useState("Monday - Friday")
  // const [hours, setHours] = useState("9am - 5pm")
  // const [phone, setPhone] = useState("1-877-531-0580")

  // const HandlePlace1 = () => {
  //   setTitle(locOptions.location1.title)
  //   setSrc(locOptions.location1.src)
  //   setAddress(locOptions.location1.address)
  //   setDay(locOptions.location1.day)
  //   setHours(locOptions.location1.hours)
  //   setPhone(locOptions.location1.phone)
  // }

  // const HandlePlace2 = () => {
  //   setTitle(locOptions.location2.title)
  //   setSrc(locOptions.location2.src)
  //   setAddress(locOptions.location2.address)
  //   setDay(locOptions.location2.day)
  //   setHours(locOptions.location2.hours)
  //   setPhone(locOptions.location2.phone)
  // }

  // const HandlePlace3 = () => {
  //   setTitle(locOptions.location3.title)
  //   setSrc(locOptions.location3.src)
  //   setAddress(locOptions.location3.address)
  //   setDay(locOptions.location3.day)
  //   setHours(locOptions.location3.hours)
  //   setPhone(locOptions.location3.phone)
  // }

  const router = useRouter();
  const {places} = router.query;

  //var location = location1;

  if(places === "Location 1:"){
    locTitle = locOptions.place1.locTitle,
    title = locOptions.place1.title,
    src = locOptions.place1.src,
    address = locOptions.place1.address,
    day = locOptions.place1.day,
    hours = locOptions.place1.hours,
    phone = locOptions.place1.phone    
  }

  if(places === "Location 2:"){
    locTitle = locOptions.place2.locTitle,
    title = locOptions.place2.title,
    src = locOptions.place2.src,
    address = locOptions.place2.address,
    day = locOptions.place2.day,
    hours = locOptions.place2.hours,
    phone = locOptions.place2.phone 
  }

  if(places === "Location 3:"){
    locTitle = locOptions.place3.locTitle,
    title = locOptions.place3.title,
    src = locOptions.place3.src,
    address = locOptions.place3.address,
    day = locOptions.place3.day,
    hours = locOptions.place3.hours,
    phone = locOptions.place3.phone 
  }

  return (<HomeCont>
    <Head>
      <title className = "title">Donate</title>
    </Head>
    
    <div className="container flex_col">
      <div className = "header fixedT">
        {/* hamberger menu */}
      </div>

      <div className="location  margin-125">
        <div className = "inner_container flex_col">
          <div className = "title_cont fixedT">
            {/* h2 comes here */}
          </div>

          <div className = "options_cont flex_col">
            <Location 
              onPlace1Click = {() => router.push("location/places")}
            />
            <Location doTitle="Location 2:" text = "Wildlife Thrift Store Downtown Vancouver" 
              onPlace2Click = {() => router.push("/location/places")}
            />
            <Location doTitle="Location 3:" text = "The Salvation Army -Belkin House Downtown Vancouver" marginB = "0"
              onPlace3Click = {() => router.push("/location/places")}
            />
          </div>
        </div>        
      </div>

      <div className = "menu_container fixedB">
        {/* menu bar comes here */}
      </div>
    </div>
  </HomeCont>
  )
}