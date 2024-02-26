import React from 'react'
import style from '../pages/HomePage.module.css'
import Hero from '../components/hero';
// import TopFive from '../components/topFive';
import  AboutUs from '../components/AboutUs';
// import Card from '../components/Card'
import  PostSection from '../components/postSection'
// import SpeechBubble from '../components/writingsCard'
import WrittingsSection from '../components/writingSection'
import TopFive from '../components/topFive'

const HomePage =()=>{
    return(
        <div>
            <Hero/>
            <div className={style.container}>
            <div className={style.content} >
            
            <TopFive/>
            <PostSection/>
            <AboutUs/>
            {/* <SpeechBubble/> */}
            <WrittingsSection/>

            </div>
            </div>
        </div>

    )
}
export default HomePage;