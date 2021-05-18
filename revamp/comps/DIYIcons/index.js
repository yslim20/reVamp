import React from 'react';
import styled from "styled-components";

const IconCont = styled.div `
display: flex;
max-width: 325px;
flex-direction: row;
text-align: center;
justify-content: center;
`
const IconNText = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin: 0 auto;
padding: 30px;
align-items: flex-end;
max-width: 125px;
`

const IconImg = styled.img `
margin: 0 auto;
margin-bottom: ${props=>props.mbot};
`

const Title = styled.p`
font-size: 12px;
margin: 0 auto;
padding-top: 15px;
`
const LineMaybe = styled.div`
background-color: #DCDCDC;
height: 1px;
text-align: center;
justify-content: center;
margin: 0 auto;
width: 290px;
`

const BioCont = styled.div`
max-width: 300px;
text-align: center;
justify-content: center;
margin: 0 auto;
`
const Bio = styled.p`
text-align: center;
`
const DIYIcons = ({
   src1="/materials.svg",
   src2="/time.svg",
   src3="/beg.svg",
   mtext="8 materials",
   ttext="90 minutes",
   ltext="advanced",
   mbot="13px",
   bio="Looking for a new way to make your home beautiful with old denim scraps? Then this is the DIY for you! Turn that denims into a stylish artificial roses by following these steps below."
}
) =>{

    return <div>
    <IconCont>

        <IconNText>
        <IconImg src={src1} />
        <Title>{mtext}</Title>
        </IconNText>

        <IconNText>
        <IconImg src={src2} />
        <Title>{ttext}</Title>
        </IconNText>

        <IconNText>
        <IconImg mbot={mbot} src={src3} />
        <Title>{ltext}</Title>
        </IconNText>

    </IconCont>

    <LineMaybe></LineMaybe>

    <BioCont>

    <Bio>{bio}</Bio>
    </BioCont>

    <div id="container">
            <div className="scrollarrow"></div>
            <div className="scrollarrow"></div>
            <div className="scrollarrow"></div>
        </div>
        <div id="scroll-text">
            <span>Steps Below</span>
        </div>
    </div>

}

export default DIYIcons;