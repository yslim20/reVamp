import React from 'react';
import DIYs from '../comps/DIYs';


export default {
    title: "DIYs Component",
    component: <DIYs />

}

//beginner tops
export const CatTentComp = () => <DIYs title="cat tent" picture="/Cat-Tent.svg" stars="/2-star-level.svg"/>
export const CroppedSweaterComp = () => <DIYs title="cropped sweater" picture="/Cropped-Sweater.svg" stars="/1-star-level.svg"/>
export const SweaterPillowCaseComp = () => <DIYs title="sweater pillow case" picture="/Sweater-Pillow.svg" stars="/2-star-level.svg"/>


//beginner bottoms
export const DistressedJeansLook1Comp = () => <DIYs title="distressed jeans (look 1)" picture="/Distressed-Jeans-1.svg" stars="/2-star-level.svg"/>
export const DistressedJeansLook2Comp = () => <DIYs title="distressed jeans (look 2)" picture="/Distressed-Jeans-2.svg" stars="/2-star-level.svg"/>
export const FabricBasketComp = () => <DIYs title="fabric basket" picture="/Fabric-Basket.svg" stars="/2-star-level.svg"/>

//advanced tops
export const OneShoulderShirtComp = () => <DIYs title="one shoulder shirt" picture="/One-Shoulder-Shirt.svg" stars="/3-star-level.svg"/>
export const SweaterBeanieComp = () => <DIYs />
export const SweaterSlippersComp = () => <DIYs title="sweater slippers" picture="/Sweater-Slippers.svg" stars="5-star-level.svg"/>


//advanced bottoms
export const DenimFlowersComp = () => <DIYs title="demin flowers" picture="/Denim-Flower.svg"/>
export const ResizeYourJeansComp = () => <DIYs title="resize your jeans" picture="/Resize-Your-Jeans.svg"/>
export const KneeLengthSkirtComp = () => <DIYs title="knee-length skirt" picture="/Knee-Length-Skirt.svg"/>

