import React from 'react';
import styled from "styled-components";

const ButtonCont = styled.div`
    margin: 15px 30px;
    display: flex;
    flex-direction: column;
`;
const ButtonLink = styled.a`
    color: #14455A;
    text-align: center;
    margin-top: 8px;
`;
const ButtonImg = styled.img`
    height: 100px;
`;

const ReButton = ({
    text="tops",
    src="/sweaters.svg",
    alt="top",
    href="#"
}) => {
    return <ButtonCont>
        <ButtonImg src={src} alt={alt}/>
        <ButtonLink href={href}>
            {text}
        </ButtonLink>
    </ButtonCont>
}

export default ReButton;