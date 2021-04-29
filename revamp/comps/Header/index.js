import React from 'react';
import styled from 'styled-components';

const HeaderCont = styled.div`
    justify-content: center;
    text-align: center;
    color:#14455A;
    width: 270px;
`;

const HeaderInput = styled.h2`
    font-family: 'Lexend Giga', sans-serif;
    color:#14455A;
    width: 270px;
    font-size: ${props => props.h2Size};
    line-height: ${props => props.h2LineH};
    text-align: center;
    margin: 0;
    transition: all 0.35s;
    animation: moveLeft 1.5s;
    -webkit-animation: moveLeft 1.5s;
`;

const Header = ({
    text="hello world",
    h2Size = "2em",
    h2LineH = "1.35em"
}) =>{
    return <HeaderCont>
        <HeaderInput
            h2Size = {h2Size} h2LineH = {h2LineH}
        >
        {text}
        </HeaderInput>
        </HeaderCont>
}

export default Header;