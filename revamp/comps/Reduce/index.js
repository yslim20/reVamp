import React from 'react';
import styled from "styled-components";
import {useRouter} from 'next/router';

const NumberCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 15px;
`;
const NumText = styled.p`
  font-family: 'Lexend Giga', sans-serif;
  text-align: center;
  font-size: 16px;
`;
const Icon = styled.img`
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  max-width: 93px;
  max-height: 93px;
`;

const Reduce = ({
    text="1. buy clothes from sustainable brands",
    src="/light.svg",
    alt="lightbulb",
}) => {
    const router = useRouter();
    return <NumberCont className="number_cont">
        <NumText>{text}</NumText>
        <Icon src={src} alt={alt} className="icon_wiggle"/>
    </NumberCont>
}
export default Reduce; 