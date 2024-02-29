import React from 'react'
import style from '../AboutUs/aboutUs.module.css'

const AboutHero=()=>{
    return(
        <section className={style.home}>
            <div className={style.text}>
                <h5>Let's </h5>
                <h1>Read more about us </h1>
                
                {/* <a href='#' className={style.btn} >Get Started</a> */}
            </div>
          

        </section>
    )
}
export default AboutHero;