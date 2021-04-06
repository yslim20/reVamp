import React from 'react';
import SingleLocation from '../comps/SingleLocation'

export default {
  title: "Single Location",
  component: <SingleLocation></SingleLocation>
}

export const DefaultSingleLocation = () => <SingleLocation></SingleLocation>
export const SecondSingleLocation = () => <SingleLocation
  title = "wildlife thrift store"
  src = "/image_map02.png"
  address = "1295 Granville St, Vancouver, BC V6Z 1M5"
  day = "Daily"
  hours = "10am - 8pm"
  phone = "(604) 682-0381"   
></SingleLocation>
export const ThirdSingleLocation = () => <SingleLocation
  title = "the salvation army - belkin house"
  src = "/image_map03.png"
  address = "555 Homer St, Vancouver, BC V6B 1K8"
  day = "Daily"
  hours = "24 Hours"
  phone = "(604) 681-3405"  
></SingleLocation>
