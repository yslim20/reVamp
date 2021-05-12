import React from 'react';
import styled from "styled-components";

const TipCont = styled.div `
display: flex;
max-width: 292px;
margin-top: ${props => props.marginT};
margin-bottom: ${props => props.marginB};
`

const TipImg = styled.img `
padding-right: 15px;
`

const TipFact = styled.p`
font-size: 12px;
`

const Bold = styled.p`
font-weight: 800;
font-size: 12px;
line-height: 5px;
`

const Tips = ({
   src="/lightbulb.svg",
   bold="Did you know?",
   text="Donating your used clothing can help countless people in need, and it helps the environment!",
   marginT="15px",
   marginB = null
}
) =>{

    return <TipCont marginT={marginT} marginB={marginB}>
          <TipImg src={src} />
          <TipFact>
            <Bold>{bold}</Bold>
              {text}</TipFact>
    </TipCont>
}

export default Tips;