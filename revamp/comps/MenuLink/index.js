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

    // background-color: #bdd7db;

`;

const MenuLink = ({
    text="donate",
    src="/down-arrow.svg",
    alt="arrow",
    intext1="select a location",
    display="block",
    indexed="1"
}) => {

    const [menustate, setMenuState] = useState(false);
    const [disp, setDisplay] = useState(false);
    const [uparrow, setRotation] = useState(false);
    const [opaque, setOpacity] = useState(false);
    const [expand, setHeight] = useState(false);
    
    const HandleClick = () => {
        setMenuState(!menustate);
        setDisplay(!disp);
        setRotation(!uparrow);
        setOpacity(!opaque);
        setHeight(!expand);
      }
      var display = "none";
      if(disp){display = "block";}
      var transform = "";
      if(uparrow) {transform = 'rotate(-180deg)';}

    return <LinksCont>
        <MenuLinkCont>
            <Link onClick={HandleClick}>{text}
                <ArrowImg
                    transform = {transform}
                    src={src}
                    alt={alt}/>
            </Link>
        </MenuLinkCont>
            <HiddenCont
                top = {menustate ? 0 : -36}
                opacity = {opaque ? 1 : 0}
                height = {expand ? "auto" : 0}>

                <MenuLinkCont>
                    <SecLink display = {display}
                        z-index = {indexed}
                        >
                        {intext1}
                    </SecLink>
                    
                </MenuLinkCont>
            </HiddenCont>
    </LinksCont>

}

export default MenuLink;