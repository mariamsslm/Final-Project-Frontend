import React from 'react'
import style from '../topThree/topThree.module.css'
import one from '../../assets/one.jpeg'
import onee from '../../assets/onee.webp'
import oneee from '../../assets/oneee.webp'


const Top=()=>{
    return(
        <section className={style.top}>
            <div className={style.text}>
                <h2>Gallery</h2>

            </div>
            <div className={style.content}>
                <div className={style.box}>
                    <img src={one}  />
                  
                </div>
                <div className={style.box}>
                    <img src={onee} />
                   
                </div>
                <div className={style.box}>
                    <img src={oneee}  />
                   
                </div>

            </div>

        </section>

    )
}
export default Top;