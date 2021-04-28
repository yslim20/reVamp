import Head from 'next/head'
import styled from 'styled-components';
import {useRouter} from 'next/router';

//importing comps
import FinishedLook from '../../comps/FinishedLook';
import DIYs from '../../comps/DIYs';
import TopNav from '../../comps/TopNav';
import Background from '../../comps/Background';
import BackImage from '../comps/BackImage';
import BottomNav from '../../comps/BottomNav';
import Materials from '../../comps/Materials';
import {tutorialOptions} from '../../data/topsB_text';

const MainCont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

export default function Tutorials(){

    var title="";
    var picture="";
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

                    <Materials>
                        {children}
                    </Materials>

                    {steps}

                    <FinishedLook
                        title={title} 
                        picture={picture}  
                    />
                    </MainCont>
                </div>
            </Background>
            <BottomNav/>
        </div>
    </div>

    )
}

