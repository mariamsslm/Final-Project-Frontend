import React from 'react'
import style from '../footer/footer.module.css'

const Footer = () => {
    return (
        <footer>
        <section className={style.footer}>
            
            
            <div className={style.box}>
                <h3>Services</h3>
                <a href='/posts'>Photographs</a>
                <a href='/posts'>Drawings</a>
                <a href='/posts'>Writings</a>
                <a href='/profil'>Profiles</a>

            </div>
            <div className={style.box}>
                <h3>About</h3>
                <a href='/about'>Our story</a>
                <a href='/about'>Benefits</a>
                <a href='/about'>Team</a>
                <a href='/about'>Careers</a>

            </div>
            <div className={style.box}>
                <h3>Help</h3>
                <a href='#'>FAQs</a>
                <a href='#'>Contact us</a>

            </div>
            <div className={style.box}>
                <h3>Social</h3>
                <div className={style.social}>
                    <a href='https://web.whatsapp.com'><i className="ri-whatsapp-fill"></i></a>
                    <a href='#'><i className="ri-instagram-fill"></i></a>
                    <a href='#'><i className="ri-facebook-fill"></i></a>

                </div>


            </div>
          
           

        </section>
        <div className={style.copy}>
                <p>Copyright 2024 By Art Mood</p>
            </div>
        </footer>
    )
}
export default Footer;