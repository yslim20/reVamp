import React from 'react';
import Location from '../comps/Location';

export default {
  title: "Location",
  component: <Location></Location>
}

export const DefaultLocation  = () => <Location /> 
export const SecondLocation  = () => <Location doTitle="Location 2:" text = "Wildlife Thrift Store Downtown Vancouver" /> 
export const ThirdLocation  = () => <Location doTitle="Location 3:" text = "The Salvation Army -Belkin House Downtown Vancouver" /> 

