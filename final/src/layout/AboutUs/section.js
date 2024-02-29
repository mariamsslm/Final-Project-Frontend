import React from 'react'
import style from '../AboutUs/section.module.css'
import image from '../../assets/gallery.jpg'


const GalleryAbout=()=>{
    return(
        <section className={style.about}>
            <div className={style.text}>
                <h5>Gallery</h5>
                <h2>Our Gallery</h2>
                <p>Our gallery offers a curated collection of captivating artworks, from vibrant paintings to intricate sculptures, allowing visitors to explore and experience the beauty and power of visual expression, whether they're seasoned art enthusiasts or curious.</p>
                 <a href='/gallery' className={style.btn}>See more</a>

            </div>
            <div className={style.image}>
                <img src={image} />
            </div>

        </section>
    )
}

export default GalleryAbout;