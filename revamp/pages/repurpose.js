import React, {useState} from 'react';
import styled from 'styled-components';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import ReButton from '../comps/ReButtons';
import Header from '../comps/Header';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
`;

export default function Repurpose() {

  const router = useRouter();
    return <div>
        <TopNav></TopNav>
        <Header text="what would you like to repurpose?"></Header>
        <ButtonCont>
    <ReButton
    text="tops"
    src="/sweaters.svg"
    alt="top"
    onClick={()=>router.push("/tops")}
    />
    <ReButton 
    text="pants"
    src="/pants.svg"
    alt="pant"
    onClick={()=>router.push("/bottoms")}
    />
    </ButtonCont>
    <BottomNav></BottomNav>
    </div>
  }

