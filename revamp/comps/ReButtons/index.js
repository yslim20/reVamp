import React from 'react';
import styled from "styled-components";
import {useRouter} from 'next/router';

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
    cursor: pointer;
`;

const ReButton = ({
    text="tops",
    src="/sweaters.svg",
    alt="top",
    href="#",
    className="textHov",
    onClick=()=>{}
}) => {
    const router = useRouter();
    return <ButtonCont>
        <ButtonImg src={src} alt={alt} onClick={onClick}/>
        <ButtonLink href={href} onClick={onClick} className={className}>
            {text}
        </ButtonLink>
    </ButtonCont>
}
export default ReButton; 