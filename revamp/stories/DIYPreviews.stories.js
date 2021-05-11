import React from 'react';
import { Component } from 'react';
import Previews from "../comps/DIYPreviews"

export default {
    title: "DIY Previews",
    component: <Previews />
}

export const TopPreviews = () => <Previews stars="/4-star-level.svg" Title="tops diys" pic="/sweater-beanie-preview.svg" DiyTitle = "Sweater Beanie" pic2="/pillow-preview.svg" DiyTitle2 = "Sweater PillowCase" stars2="/2-star-level.svg" />

export const BottomPreviews = () => <Previews />