import React from 'react'
import style from '../layout/footer.module.css'


const Footer = () =>{
    return(
        <footer className={style.footerContainer}>
            <div className={style.socialIcons}>
                <a href="#g"><i class='fa-brands fa-facebook'></i></a>
                <a href="#g"><i class='fa-brands fa-instagram'></i></a>
                <a href="#h"><i class='fa-brands fa-whatsapp'></i></a>
            </div>
            <div className={style.footerNav}>
                <ul>
                    <li><a href="#h">Home</a></li>
                    <li><a href="#f">About Us</a></li>
                    <li><a href="#f">Contact Us</a></li>

                </ul>
            </div>
            <div className={style.copy}>
                <p>Copyright &copy;2024 All rights reserved. <span className={style.art}>Art Mood</span></p>
            </div>

        </footer>
    )
}
export default Footer;