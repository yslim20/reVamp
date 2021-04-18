import {useRouter} from 'next/router';
import React, {useState} from 'react';
import styled from 'styled-components';
import TopNav from '../../comps/TopNav';
import BottomNav from '../../comps/BottomNav';
import ReButton from '../../comps/ReButtons';
import Header from '../../comps/Header';

const ButtonCont = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
`;


export default function Repurpose() {

    const router = useRouter();
    const {options} = router.query;

    if(options === "bottoms"){
        text="what is your skill level of crafting?"
      }

      if(options === "tops"){
        text="what is your skill level of crafting?"
    }

    return <div>
        <TopNav></TopNav>
        <Header text="what would you like to repurpose?"></Header>
        <ButtonCont>
    <ReButton
    onTopClick={()=>router.push("/skills/tops")}
    />
    <ReButton
    src="/pants.svg"
    text="bottoms"
    onTopClick={()=>router.push("/skills/bottoms")}

    />
    </ButtonCont>
    <BottomNav></BottomNav>
    </div>
  }


