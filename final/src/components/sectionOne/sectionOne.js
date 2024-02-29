import React from 'react'
import style from '../sectionOne/sectionOne.module.css'
import image from '../../assets/imagee.jpg'


const SectionOne=()=>{
    return(
        <section className={style.posts}>
            <div className={style.image}>
                <img src={image} alt='photo' />
            </div>
            <div className={style.text}>
                <h5>Art</h5>
                <h2>Have your own art</h2>
                <p>Welcome to our community of creative individuals, where individuals from all walks of life come together to share their passions for art, photography, and writing. Our website offers a platform for aspiring photographers, illustrators, and wordsmiths to showcase their work and connect with like-minded individuals, celebrating diversity and encouraging self-expression.</p>
                <a href='/about' className={style.btn}>Read more</a>

            </div>

        </section>
    )
}

export default SectionOne;