import React from 'react'
import styled from 'styled-components';

const BackgroundDiv = styled.div`
    // min-
    width:342px;
    min-height:600px;
    background-color: #fff;
    border-style: solid;
    border-color: #CCCCCC;
    border-width: 1px;
    position: relative;    
    top: 110px;
    bottom: 110px;
    padding: ${props=>props.padding};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin-bottom: 210px;
`;

const Background = ({
    contents = "contents",
    padding = "40px 20px"
}
) =>{

    return <BackgroundDiv padding={padding}>
        {contents}
    </BackgroundDiv>

}

export default Background;