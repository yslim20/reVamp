import React, {useState} from 'react';
import styled from "styled-components";

const LinksCont = styled.div`
    // background-color: #bddbc5;
    margin-top: 18px;
    width: 200px;
`;
const MenuLinkCont = styled.div`
    margin: 0;
    z-index: 5;
`;
const Link = styled.a`
    text-decoration: none;
    color: #14455A;
    z-index: 3;
    font-size: 16px;
    font-family: 'Lexend Giga';
`;
const ColumnCont = styled.div`
    display: flex;
    flex-direction: column;
`;

const ArrowImg = styled.img`
    transform: ${props=>props.transform};
    transition: transform 0.3s;
    margin-left: 7px;
`;
const HiddenCont = styled.div`
    position: relative;
    top: ${props=>props.top}px;
    overflow: hidden;
    height: ${props=>props.height};
    left: 15px;
    transition: top 0.5s, opacity 0.7s;
    opacity: ${props=>props.opacity}; 

    // background-color: #b4e0cb;
`;

const SecLink = styled.a`
    text-decoration: none;
    color: #14455A;
    display: ${props=>props.display};
    margin-top: 12px;
    font-size: 16px;
    font-family: 'Lexend Giga';

    // background-color: #bdd7db;

`;
const SecArrowImg = styled.img`
    transform: ${props=>props.transform2};
    transition: transform 0.3s;
    margin-left: 7px;

    // background-color: #bdd7db;
`;
const SecHiddenCont = styled.div`
    position: relative;
    top: ${props=>props.top2}px;
    left: 15px;
    transition: top 0.5s, opacity 0.7s;
    opacity: ${props=>props.opacity2}; 
`;
const SecMenuLinkCont = styled.div`
    margin: 0;
    display: ${props=>props.display3};
`;

const TrdLink = styled.a`
    text-decoration: none;
    color: #14455A;
    margin-top: 12px;
    font-size: 16px;
    font-family: 'Lexend Giga';
`;
const TrdArrowImg = styled.img`
    transform: ${props=>props.transform3};
    transition: transform 0.3s;
    margin-left: 7px;
`;
const TrdHiddenCont = styled.div`
    position: relative;
    top: ${props=>props.top3}px;
    left: 15px;
    transition: top 0.5s, opacity 0.7s;
    opacity: ${props=>props.opacity3}; 
`;
const TrdMenuLinkCont = styled.div`
    margin: 0;
    display: ${props=>props.display4};
`;

const AdvMenuLink = ({
    src="/down-arrow.svg",
    text="repurpose",
    intext1="beginner",
    src1="/down-arrow.svg",
    intext2="advanced",
    src2="/down-arrow.svg",
    innertext1="tops diys",
    innertext2="bottoms diys",
    onClick =() => {}
}) => {

    const [menustate, setMenuState] = useState(false);
    const [disp, setDisplay] = useState(false);
    const [uparrow, setRotation] = useState(false);
    const [opaque, setOpacity] = useState(false);
    const [expand, setHeight] = useState(false);

    const [menustate2, setMenuState2] = useState(false);
    const [disp2, setDisplay2] = useState(false);
    const [uparrow2, setRotation2] = useState(false);
    const [opaque2, setOpacity2] = useState(false);
    
    const [menustate3, setMenuState3] = useState(false);
    const [disp3, setDisplay3] = useState(false);
    const [uparrow3, setRotation3] = useState(false);
    const [opaque3, setOpacity3] = useState(false);
    const [disp4, setDisplay4] = useState(false);

    const HandleClick = () => {
        setMenuState(!menustate);
        setDisplay(!disp);
        setDisplay2(!disp2);
        setRotation(!uparrow);
        setOpacity(!opaque);
        setHeight(!expand);
      }

    const SecHandleClick = () => {
        setMenuState2(!menustate2);
        setDisplay3(!disp3);
        setRotation2(!uparrow2);
        setOpacity2(!opaque2);
    }

    const TrdHandleClick = () => {
        setMenuState3(!menustate3);
        setDisplay4(!disp4);
        setRotation3(!uparrow3);
        setOpacity3(!opaque3);
    }
      var display = "none";
      if(disp){display = "block";}
      var display2 = "none";
      if(disp2) {display2 = "block";}
      var display3 = "none";
      if(disp3) {display3 = "block";}
      var display4 = "none";
      if(disp4) {display4 = "block";}
      var transform = "";
      if(uparrow) {transform = 'rotate(-180deg)';}
      var transform2 = "";
      if(uparrow2) {transform2 = 'rotate(-180deg)';}
      var transform3 = "";
      if(uparrow3) {transform3 = 'rotate(-180deg)';}

      return <LinksCont onClick={onClick}>
        <MenuLinkCont>
            {/* repurpose */}
            <Link onClick={HandleClick}>{text}
                <ArrowImg
                    transform = {transform}
                    src={src}
                    alt="arrow"/>
                </Link>
        </MenuLinkCont>
            <HiddenCont
                top = {menustate ? 0 : -36}
                opacity = {opaque ? 1 : 0}
                height = {expand ? "auto" : 0}>

                <MenuLinkCont>
                    <SecLink onClick={SecHandleClick}
                    display = {display}>
                        {/* beginner */}
                        {intext1}
                        <SecArrowImg
                            transform2 = {transform2}
                            src={src1} 
                            alt="arrow"/>
                    </SecLink>
                    
                </MenuLinkCont>

                <SecHiddenCont
                    top2 = {menustate2 ? 0 : -36}
                    opacity2 = {opaque2 ? 1 : 0}>
                    <SecMenuLinkCont
                            display3 = {display3}>
                        <ColumnCont>
                            <SecLink onClick={onClick}>
                                {/* tops diys */}
                            {innertext1}</SecLink>
                            <SecLink onClick={onClick}>
                                {/* bots diys */}
                            {innertext2}</SecLink>
                        </ColumnCont>
                    </SecMenuLinkCont>
                </SecHiddenCont>

            </HiddenCont>

            
            <HiddenCont
                top = {menustate ? 0 : -36}
                opacity = {opaque ? 1 : 0}
                height = {expand ? "auto" : 0}>
                <MenuLinkCont>
                    <SecLink onClick={TrdHandleClick}
                    display = {display}>
                        {/* advanced */}
                        {intext2}
                        <TrdArrowImg
                            transform3 = {transform3}
                            src={src2}
                            alt="arrow"/>
                        </SecLink>
                </MenuLinkCont>

                <TrdHiddenCont
                    top3 = {menustate3 ? 0 : -36}
                    opacity3 = {opaque3 ? 1 : 0}>
                    <TrdMenuLinkCont
                            display4 = {display4}>
                        <ColumnCont>
                            <TrdLink onClick={onClick}>
                                {/* tops diys */}
                            {innertext1}</TrdLink>
                            <TrdLink onClick={onClick}>
                                {/* bots diys */}
                            {innertext2}</TrdLink>
                        </ColumnCont>
                    </TrdMenuLinkCont>
                </TrdHiddenCont>

            </HiddenCont>
      </LinksCont>

}

export default AdvMenuLink;