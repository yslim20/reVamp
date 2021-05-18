import React, { Children } from 'react'
import styled from 'styled-components';

const BackgroundCont = styled.div`
  width: 100vw;
  min-height: 460px;
  position: fixed; 
  bottom: 0;
  margin-bottom: ${props=>props.marginB};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  background-image: url("${props=>props.bgImg}");
  background-size: 1920px 460px;
  background-repeat: no-repeat;
  background-position: bottom center;
`;

const ImgContL = styled.div`
  display: block;
  position: absolute; 
  left: 0; bottom: 0;
  width: 325px; 
  height: 258px;
`

const ImgContR = styled.div`
  display: block;
  position: absolute;
  right: 0; bottom: 0;
  width:484px; 
  height: 344px;  
`

const Img = styled.img`
  object-fit: contain;  
`

const BackImage = ({
    marginB= "75px",
    bgImg = "/background_wave.svg",
}
) =>{

    return <BackgroundCont marginB={marginB} bgImg={bgImg}>
      <ImgContL>
        <Img src = "/background_left.svg" alt ="background image" />
      </ImgContL>

      <ImgContR>
        <Img src = "/background_right.svg" alt ="background image" />
      </ImgContR>
    </BackgroundCont>
}

export default BackImage;