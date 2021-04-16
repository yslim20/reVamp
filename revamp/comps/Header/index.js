import React from 'react';
import styled from 'styled-components';

const HeaderCont = styled.div`
justify-content: center;
text-align: center;
color:#14455A;
max-width: 260px;
margin-top: 20px;
padding: 5px;
`;

const HeaderInput = styled.h2`
font-family: 'Lexend Giga', sans-serif;
color:#14455A;
font-size: 2em;
line-height: 1.5em;
text-align: center;
margin: 0;
`;

const Header = ({
text="hello world"

}) =>{
    return <HeaderCont>
        <HeaderInput>
        {text}
        </HeaderInput>
        </HeaderCont>
}

export default Header;