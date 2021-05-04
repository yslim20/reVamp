import Head from 'next/head';
import React from 'react';
import {useRouter} from 'next/router';

//importing comps
import Header from '../../comps/Header';
import DIYs from '../../comps/DIYs';
import TopNav from '../../comps/TopNav';
import Background from '../../comps/Background';
import BackImage from '../../comps/BackImage';
import BottomNav from '../../comps/BottomNav';
import styled from 'styled-components';
import {choiceOptions} from '../../data/choices_text';
import SliderButton from '../../comps/sliderButton';


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
      
    if(choices === "bottoms_beginner"){
		pageTitle = choiceOptions.bottoms_beginner.pageTitle,
		skillTitle = choiceOptions.bottoms_beginner.skillTitle,

		diyTitle1 = choiceOptions.bottoms_beginner.diyTitle1,
		src1 = choiceOptions.bottoms_beginner.src1,
		stars1 = choiceOptions.bottoms_beginner.stars1,
		diyRoute1 = choiceOptions.bottoms_beginner.diyRoute1,

		diyTitle2 = choiceOptions.bottoms_beginner.diyTitle2,
		src2 = choiceOptions.bottoms_beginner.src2,
		stars2 = choiceOptions.bottoms_beginner.stars2,
		diyRoute2 = choiceOptions.bottoms_beginner.diyRoute2,

		diyTitle3 = choiceOptions.bottoms_beginner.diyTitle3,
		src3 = choiceOptions.bottoms_beginner.src3,
		stars3 = choiceOptions.bottoms_beginner.stars3,
		diyRoute3 = choiceOptions.bottoms_beginner.diyRoute3

    }
  
    if(choices === "bottoms_advanced"){
		pageTitle = choiceOptions.bottoms_advanced.pageTitle,
		skillTitle = choiceOptions.bottoms_advanced.skillTitle,

		diyTitle1 = choiceOptions.bottoms_advanced.diyTitle1,
		src1 = choiceOptions.bottoms_advanced.src1,
		stars1 = choiceOptions.bottoms_advanced.stars1,
		diyRoute1 = choiceOptions.bottoms_advanced.diyRoute1,

		diyTitle2 = choiceOptions.bottoms_advanced.diyTitle2,
		src2 = choiceOptions.bottoms_advanced.src2,
		stars2 = choiceOptions.bottoms_advanced.stars2,
		diyRoute2 = choiceOptions.bottoms_advanced.diyRoute2,

		diyTitle3 = choiceOptions.bottoms_advanced.diyTitle3,
		src3 = choiceOptions.bottoms_advanced.src3,
		stars3 = choiceOptions.bottoms_advanced.stars3,
		diyRoute3 = choiceOptions.bottoms_advanced.diyRoute3
    }

    return <HomeCont>
        <Head>
          <title className = "title">{pageTitle}</title>
        </Head>
    
        <div className="container flex_col">
			<BackImage />

			<TopNav />
			<Background padding="40px 20px 40px 20px">
				<div className = "flex_col">
					<MainCont>
						{/* <Header text={skillTitle}/> */}
						<h3 class="h3">- bottoms DIYS -</h3>
						<SliderButton/>
						<DIYs titleDIY={diyTitle1} 
						picture={src1} 
						stars={stars1}
						onClick={()=>router.push(diyRoute1)}/>

						<DIYs titleDIY={diyTitle2} 
						picture={src2} 
						stars={stars2}
						onClick={()=>router.push(diyRoute2)}/>

						<DIYs titleDIY={diyTitle3} 
						picture={src3} 
						stars={stars3}
						onClick={()=>router.push(diyRoute3)}/>
					</MainCont>
				</div>
			</Background>
			<BottomNav/>
        </div>
    </HomeCont>
}