import React from 'react'
import styled from 'styled-components';

const BackgroundDiv = styled.div`
    min-width:342px;
    min-height:600px;
    background-color: #fff;
    border-style: solid;
    border-color: #CCCCCC;
    border-width: 1px;
    position: absolute;    
    top: 110px;
    bottom: 110px;
    z-index: -99;  
    padding: 20px; 
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

const Background = ({
    contents = "contents"
}
) =>{

    return <BackgroundDiv>
        {contents}
    </BackgroundDiv>

}

export default Background;