import React from 'react'
import style from '../heroSection/heroSection.module.css'

const Hero=()=>{
    return(
        <section className={style.home}>
            <div className={style.text}>
                <h5>Let's </h5>
                <h1>Creating your own Art</h1>
                <p>Unlock Your Creative Potential</p>
                <a href='/signup' className={style.btn} >Get Started</a>
            </div>
          

        </section>
    )
}
export default Hero;