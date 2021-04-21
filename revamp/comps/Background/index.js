import React, { Children } from 'react'
import styled from 'styled-components';

const BackgroundDiv = styled.div`
    width:342px;
    min-height:600px;
    background-color: #fff;
    border-style: solid;
    border-color: #CCCCCC;
    border-width: 1px;
    position: relative;    
    top: 110px;
    bottom: 110px;
    margin-bottom: 210px;
    padding: ${props=>props.padding};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin-bottom: 210px;
`;

const Background = ({
    children = null,
    padding="40px 20px"
}
) =>{

    return <BackgroundDiv padding={padding}>
        {children}    
    </BackgroundDiv>
}

export default Background;