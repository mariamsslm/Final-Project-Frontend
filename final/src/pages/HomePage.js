import React from 'react'
import Hero from '../components/heroSection/heroSection';
import Feature from '../components/feature/feature';
import SectionOne from '../components/sectionOne/sectionOne';
import Top from '../components/topThree/topThree';
import About from '../components/about us/about'
import ProfileHome from '../components/profileHome/profileHome'



const HomePage=()=>{
    return(
        <div>
            <Hero/>
            <Feature/>
            <SectionOne/>
            <Top/>
            <About/>
            <ProfileHome/>
        </div>
    )
}
export default HomePage;