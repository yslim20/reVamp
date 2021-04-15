import React from 'react';
import Header from '../comps/Header/index';

export default {
    title:"Header/Titles",
    component:<Header />
}

export const DefaultHeader = () => <Header />

export const HeaderWithTextProp = () => <Header text="what would you like to repurpose?"/>
