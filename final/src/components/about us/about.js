import React from 'react'
import style from '../about us/about.module.css'
import image from '../../assets/images.jpeg'


const About=()=>{
    return(
        <section className={style.about}>
            <div className={style.text}>
                <h5>About Us</h5>
                <h2>Our wevsite for you</h2>
                <p>We are a world that loves new passion for new ideas. This website was created to shed light on buried talents, highlight them, and give the opportunity to their owners to benefit from them. Our goal is to continue sharing ideas and creativity among us and a creative, effective, and sophisticated society</p>
                 <a href='/about' className={style.btn}>Read more</a>

            </div>
            <div className={style.image}>
                <img src={image} />
            </div>

        </section>
    )
}

export default About;