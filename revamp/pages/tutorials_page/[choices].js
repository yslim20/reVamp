import Head from 'next/head';
import React from 'react';
import {useRouter} from 'next/router';

//importing comps
import Header from '../../comps/Header';
import DIYs from '../../comps/DIYs';
import TopNav from '../../comps/TopNav';
import Background from '../../comps/Background';
import BottomNav from '../../comps/BottomNav';
import styled from 'styled-components';
import {choiceOptions} from '../../data/choices_text';


const HomeCont = styled.div``;
const MainCont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;


export default function Home() {
	const router = useRouter();
	const {choices} = router.query;

    var pageTitle = "";
    var skillTitle = ""; 
		var diyTitle1 = "";
		var src1 = "";
		var stars1 = "";
		var diyRoute1 = "";
		var diyTitle2 = "";
		var src2 = "";
		var stars2 = "";
		var diyRoute2 = "";
		var diyTitle3 = "";
		var src3 = "";
		var stars3 = "";
		var diyRoute3 = "";
      
    if(choices === "pants_beginner"){
			pageTitle = choiceOptions.pants_beginner.pageTitle,
			skillTitle = choiceOptions.pants_beginner.skillTitle,

			diyTitle1 = choiceOptions.pants_beginner.diyTitle1,
			src1 = choiceOptions.pants_beginner.src1,
			stars1 = choiceOptions.pants_beginner.stars1,
			diyRoute1 = choiceOptions.pants_beginner.diyRoute1,

			diyTitle2 = choiceOptions.pants_beginner.diyTitle2,
			src2 = choiceOptions.pants_beginner.src2,
			stars2 = choiceOptions.pants_beginner.stars2,
			diyRoute2 = choiceOptions.pants_beginner.diyRoute2,

			diyTitle3 = choiceOptions.pants_beginner.diyTitle3,
			src3 = choiceOptions.pants_beginner.src3,
			stars3 = choiceOptions.pants_beginner.stars3,
			diyRoute3 = choiceOptions.pants_beginner.diyRoute3

    }
  
    if(choices === "pants_advanced"){
			pageTitle = choiceOptions.pants_advanced.pageTitle,
			skillTitle = choiceOptions.pants_advanced.skillTitle,

			diyTitle1 = choiceOptions.pants_advanced.diyTitle1,
			src1 = choiceOptions.pants_advanced.src1,
			stars1 = choiceOptions.pants_advanced.stars1,
			diyRoute1 = choiceOptions.pants_advanced.diyRoute1,

			diyTitle2 = choiceOptions.pants_advanced.diyTitle2,
			src2 = choiceOptions.pants_advanced.src2,
			stars2 = choiceOptions.pants_advanced.stars2,
			diyRoute2 = choiceOptions.pants_advanced.diyRoute2,

			diyTitle3 = choiceOptions.pants_advanced.diyTitle3,
			src3 = choiceOptions.pants_advanced.src3,
			stars3 = choiceOptions.pants_advanced.stars3,
			diyRoute3 = choiceOptions.pants_advanced.diyRoute3
    }

    return <HomeCont>
        <Head>
          <title className = "title">{pageTitle}</title>
        </Head>
    
        <div className="container flex_col">
            <TopNav />
            <Background padding="40px 20px 0px 20px">
                <div className = "flex_col paddingB-40">
                    <MainCont>
                        <Header text={skillTitle}/>
                        <div className="sub_title_diy">- pants DIYS -</div>
                        <DIYs titleDIY={diyTitle1} 
													picture={src1} 
													stars={stars1}
													onClick={diyRoute1}/>
                        <DIYs titleDIY={diyTitle2} 
													picture={src2} 
													stars={stars2}
                          onClick={diyRoute2}/>
                        <DIYs titleDIY={diyTitle3} 
													picture={src3} 
													stars={stars3}
													onClick={diyRoute3}/>
                    </MainCont>
                </div>
            </Background>
            <BottomNav/>
        </div>
    </HomeCont>
}