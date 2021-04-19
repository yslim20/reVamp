import Head from 'next/head'
import styled from 'styled-components';
import {useRouter} from 'next/router';

//importing comps
import FinishedLook from '../../comps/FinishedLook';
import DIYs from '../../comps/DIYs';
import Steps from '../../comps/Steps';
import TopNav from '../../comps/TopNav';
import Background from '../../comps/Background';
import BottomNav from '../../comps/BottomNav';
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

    var text="";
    var boldtext="";
    var images="";

    var titleDIY="";
    var picture="";
    var stars="";


    const router = useRouter();
    const {tutorials} = router.query;
 
    if(tutorials === "tutorials2"){
    title = tutorialOptions.FinishedLook2.title;
    picture = tutorialOptions.FinishedLook2.picture;

    text = tutorialOptions.Steps2.text;
    boldtext = tutorialOptions.Steps2.boldtext;
    images = tutorialOptions.Steps2.images;
    
    // text2 = tutorialOptions.Steps2.text2;
    // boldtext = tutorialOptions.Steps2.boldtext;
    // images = tutorialOptions.Steps2.images;

    titleDIY = tutorialOptions.DIYs2.titleDIY;
    picture = tutorialOptions.DIYs2.picture;
    stars = tutorialOptions.DIYs2.stars;
    }

    const tutorialPageContents =
        <div className = "flex_col">
            <MainCont>
            <DIYs
                titleDIY={titleDIY}
                picture={picture}
                stars={stars}
            />
            <Steps
                text={text}
                boldtext={boldtext}
                images={images}
            />
            {/* <Steps
                text2={text2}
                boldtext={boldtext}
                images={images}
            /> */}
            <FinishedLook
                title={title} 
                picture={picture}  
            />
            </MainCont>
        </div>
 
    return (
    <div> 
        <Head>
        <title className = "title">Welcome</title>
        </Head>

        <div className="container flex_col">
            <TopNav />
            <Background 
                contents={tutorialPageContents}
                padding="30px 20px">
            </Background>
            <BottomNav/>
        </div>
    </div>

    )
}

