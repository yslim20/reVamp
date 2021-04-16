import React from 'react';
import Steps from '../comps/Steps';

export default {
    title:"DIY Steps",
    component:<Steps />
}

export const DefaultSteps = () => <Steps />
export const StepsWithCat = () => <Steps boldtext="Step 1:" text=" Cut the tops off of your hangers using pliers." images="/step1cat.svg"/>
