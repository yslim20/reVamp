import Head from 'next/head'
import FinishedLook from '../comps/FinishedLook';
import Background from '../comps/Background';
import DIYs from '../comps/DIYs';

export default function Home() {
  return <div>
    <FinishedLook picture="/Denim-Flower.svg"/>
    <FinishedLook></FinishedLook>
    <Background></Background>
    <DIYs></DIYs>
    <DIYs title="demin flowers" picture="/Denim-Flower.svg"/>

  </div>
}
