import React from 'react';
import ReButton from '../comps/ReButtons';

export default {title: 'Repurpose Clothing Options', component: <ReButton/>}

export const TopsButton = () => <ReButton/>

export const BottomsButton = () => (
    <ReButton
        text="bottoms"
        src="/pants.svg"
        alt="bottoms"
        href="#"/>
)