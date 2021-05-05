import React from 'react';
import styled from "styled-components";

const TipCont = styled.div `
display: flex;
max-width: 295px;
`

const TipImg = styled.img `

`

const Tips = ({
   src="/lightbulb.svg",
}
) =>{

    return <TipCont>
          <TipImg src={src} />
    </TipCont>
}

export default Tips;