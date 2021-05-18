import Head from 'next/head'
import styled from 'styled-components';
import {useRouter} from 'next/router';

//importing comps
import FinishedLook from '../../comps/FinishedLook';
import DIYs from '../../comps/DIYs';
import TopNav from '../../comps/TopNav';
import Background from '../../comps/Background';
import BackImage from '../../comps/BackImage';
import BottomNav from '../../comps/BottomNav';
import Materials from '../../comps/Materials';
import DRButton from '../../comps/DRButtons';
import {tutorialOptions} from '../../data/topsB_text';
import DIYIcons from '../../comps/DIYIcons';


const MainCont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

export default function Tutorials(){

    var title="";
    var picture="";
    var mtext="";
    var ttext="";
    var ltext="";
    var bio="";
    var children="";

    var text="";
    var boldtext="";
    var images="";

    var titleDIY="";
    var picture="";
    var stars="";
    var steps="";
    var spacing=""


    const router = useRouter();
    const {tutorials} = router.query;
 

    if(tutorials === "tutorials1"){
        title = tutorialOptions.FinishedLook1.title;
        spacing= tutorialOptions.FinishedLook1.spacing;
        picture = tutorialOptions.FinishedLook1.picture;   

        mtext = tutorialOptions.FinishedLook1.mtext;
        ttext = tutorialOptions.FinishedLook1.ttext;  
        ltext = tutorialOptions.FinishedLook1.ltext; 
        bio =  tutorialOptions.FinishedLook1.bio; 

        children = tutorialOptions.FinishedLook1.children;
        steps = tutorialOptions.FinishedLook1.steps;

        text = tutorialOptions.FinishedLook1.text;
        boldtext = tutorialOptions.FinishedLook1.boldtext;
        images = tutorialOptions.FinishedLook1.images;

        titleDIY = tutorialOptions.FinishedLook1.titleDIY;
        picture = tutorialOptions.FinishedLook1.picture;
        stars = tutorialOptions.FinishedLook1.stars;
    }

    if(tutorials === "tutorials2"){
        title = tutorialOptions.FinishedLook2.title;
        spacing= tutorialOptions.FinishedLook2.spacing;
        picture = tutorialOptions.FinishedLook2.picture; 

        mtext = tutorialOptions.FinishedLook2.mtext;
        ttext = tutorialOptions.FinishedLook2.ttext;  
        ltext = tutorialOptions.FinishedLook2.ltext;  
        bio =  tutorialOptions.FinishedLook2.bio;   

        children = tutorialOptions.FinishedLook2.children;
        steps = tutorialOptions.FinishedLook2.steps;

        text = tutorialOptions.FinishedLook2.text;
        boldtext = tutorialOptions.FinishedLook2.boldtext;
        images = tutorialOptions.FinishedLook2.images;

        titleDIY = tutorialOptions.FinishedLook2.titleDIY;
        picture = tutorialOptions.FinishedLook2.picture;
        stars = tutorialOptions.FinishedLook2.stars;
    }

    if(tutorials === "tutorials3"){
        title = tutorialOptions.FinishedLook3.title;
        spacing= tutorialOptions.FinishedLook3.spacing;
        picture = tutorialOptions.FinishedLook3.picture;  

        mtext = tutorialOptions.FinishedLook3.mtext;
        ttext = tutorialOptions.FinishedLook3.ttext;  
        ltext = tutorialOptions.FinishedLook3.ltext; 
        bio =  tutorialOptions.FinishedLook3.bio;  
    
        children = tutorialOptions.FinishedLook3.children;
        steps = tutorialOptions.FinishedLook3.steps;
    
        text = tutorialOptions.FinishedLook3.text;
        boldtext = tutorialOptions.FinishedLook3.boldtext;
        images = tutorialOptions.FinishedLook3.images;
    
        titleDIY = tutorialOptions.FinishedLook3.titleDIY;
        picture = tutorialOptions.FinishedLook3.picture;
        stars = tutorialOptions.FinishedLook3.stars;
    }
 
    return (
    <div> 
        <Head>
        <title className = "title">Top Beginner - Tutorial</title>
        </Head>

        <div className="container flex_col">
            <BackImage />

            <TopNav />
            <Background padding="40px 20px">

                <div className = "flex_col">
                    <MainCont>

                    <DIYs
                        titleDIY={titleDIY}
                        picture={picture}
                        stars={stars}
                        spacing={spacing}
                    />

                    <DIYIcons
                    mtext={mtext}
                    ttext={ttext}
                    ltext={ltext}
                    bio={bio}
                    ></DIYIcons>

                    <Materials>
                        {children}
                    </Materials>

                    {steps}

                    <FinishedLook
                        title={title} 
                        picture={picture}  
                    />
                        <DRButton 
                            onClick = {() => router.push("/contribution/top")}
                            padding = "14px 45px"
                            shadow = "0px 2px 4px rgba(0,0,0,.25)" text = "Completed" size = "1em" marginB = "20px">
                        </DRButton>
                    </MainCont>
                </div>
            </Background>
            <BottomNav/>
        </div>
    </div>

    )
}

