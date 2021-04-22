import React, { Children } from 'react';
import styled from "styled-components";

const MaterialCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`;
const MaterialTit = styled.h6`
    color: #50514F;
    text-decoration: underline;
    margin-bottom: 0px;
    margin-top: 30px;
`;
const MaterialList = styled.div`
    font-size: 14px; 
`;

const Materials = ({
    children = null
}) => {

    return <MaterialCont>
        <MaterialTit>materials needed</MaterialTit> 
        <MaterialList>
          {children} 
        </MaterialList>             
      </MaterialCont>
}
export default Materials; 