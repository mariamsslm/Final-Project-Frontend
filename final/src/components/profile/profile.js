import React from "react";
import style from '../profile/profile.module.css'
import image from '../../assets/profile4.jpg'

const Profiles = () => {
    return (
        <section className={style.profile}>
            <div className={style.image}>
                <img src={image} alt="Profile" />
            </div>
            <div className={style.informations}>
                <div className={style.content}>
                    <p className={style.title}>Artist</p>
                    <p>name: name</p>
                    <p>Bio : hi i am artist from</p>
                    <p>email: mariam@gmail.com</p>
                    <p>phone: 70/869083</p>
                </div>
                <div className={style.buttons}>
                <a href="#" className={style.btn}>Posts</a>
                <a href="#" className={style.btn}>Images</a>
                </div>
            </div>
        </section>
    );
}

export default Profiles;
