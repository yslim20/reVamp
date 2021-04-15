import Head from 'next/head'
import Steps from '../comps/Steps/index';

export default function StepsPage() {
    return <div>
      <Steps boldtext="Step 1:" text=" Cut the tops off of your hangers using pliers." images="/step1cat.svg"/>
      <Steps boldtext="Step 10:" text="Introduce your cat to its new upcycled cat tent!" images="/cattent.svg"/>
    </div>
  }
