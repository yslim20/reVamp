import React from 'react';
import styled from 'styled-components';

const HeaderCont = styled.div`
justify-content: center;
text-align: center;
color:#14455A;
font-family: 'Lexend Giga', sans-serif;
padding: 30px;
max-width: 250px;
margin: 0 auto;
`;

const HeaderInput = styled.h2`
font-family: 'Lexend Giga', sans-serif;
color:#14455A;
text-align: center;
margin: 0 auto;
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