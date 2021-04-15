import Head from 'next/head'
import Header from '../comps/Header/index';
import BottomNav from '../comps/BottomNav/index';
import TopNav from '../comps/TopNav/index';

export default function Home() {
  return <div>
    <TopNav />
    <Header text="what would you like to repurpose?"/>
    <BottomNav />
  </div>
}
