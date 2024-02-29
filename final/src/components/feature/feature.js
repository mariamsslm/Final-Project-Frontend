import React from 'react'
import style from '../feature/feature.module.css'
import draw from  '../../assets/draw.jpeg'
import writ from '../../assets/image.jpeg'
import photo from '../../assets/photo.jpg'

const Feature=()=>{
    return(
        <section className={style.feature}>
            <div className={style.content}>
                <div className={style.row}>
                    <div className={style.image}>
                        <img src={photo} alt='photo' />
                    </div>
                    <h4>Photographs</h4>
                </div>
                <div className={style.row}>
                    <div className={style.image}>
                        <img src={draw} alt='draw' />
                    </div>
                    <h4>Drawings</h4>

                </div>
                <div className={style.row}>
                    <div className={style.image}>
                        <img src={writ} alt='writings' />
                    </div>
                    <h4>Writings</h4>

                </div>

            </div>

        </section>
    )
}
export default Feature;