import { useState, useEffect } from 'react'
import { ways, showList } from './components/data'
import WaysToTeach from './components/ways'
import Button from './components/button/Button'
import './App.css'
import Intro from "./components/introSection";
import TabSection from './components/TabSection'
import BackSection from './components/BackSection'
import EffectSection from './components/EffectSection'



export default  function App() {
  const [active, setActive] = useState('')
  const [nowTime, setNowTime] = useState(new Date())
  const [tab, setTab] = useState('Effect')
  


  function hadleClick(params) {
    console.log("click", params);
    setActive(params)
  }
  
  
useEffect(()=>{
  const interval = setInterval(() => {
    setNowTime(new Date())
  }, 1000);
  return ()=>{
    clearInterval(interval)
  }
},[])

  return (
    <>
   <header>
    <h3>something</h3>
    <div className='center'>Время сейчас: {nowTime.toLocaleTimeString()}</div>
   </header>
   <Intro />
   <TabSection Onchange={(erent)=>{
    setTab(erent)
   }} isActive={tab} />
   { tab === 'feedBack' && <BackSection /> }
   { tab === 'FrontFeed' && <>
    <section>
    <section style={{marginTop: '20px'}}>
      {ways.map((even)=>{return <WaysToTeach  {...even} />})}
    </section>
    
   </section>
   <section>
    <Button Button={active === 'way'} onclick={() => hadleClick('way')}>ways</Button>
    <Button Button={active === 'easy'} onclick={() => hadleClick('easy')}>easy</Button>
    <Button Button={active === 'program'} onclick={() => hadleClick('program')}>program</Button>
    
    {active ? <p>{showList[active]}</p> : <p>нажмите на кнопку</p>}
   </section>
   </>}
   { tab === 'Effect' && <EffectSection /> }
   

   
   
   
    </>
   )
}

