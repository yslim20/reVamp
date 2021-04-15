import React from 'react';
import BAButton from '../comps/BAButtons';

export default {title: "Beginner and Advanced Buttons", component: <BAButton/>}

export const BeginnerButton = () => <BAButton/>

export const AdvancedButton = () => (
    <BAButton 
        text="advanced"
        src="/advanced.svg"
        alt="advanced"/>
)