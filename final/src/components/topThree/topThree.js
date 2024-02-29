import React from 'react'
import style from '../topThree/topThree.module.css'
import one from '../../assets/one.jpeg'
import onee from '../../assets/onee.webp'
import oneee from '../../assets/oneee.webp'


const Top=()=>{
    return(
        <section className={style.top}>
            <div className={style.text}>
                <h2>The Top Three</h2>

            </div>
            <div className={style.content}>
                <div className={style.box}>
                    <img src={one}  />
                    <h6>20</h6>
                    <h4>likes</h4>
                </div>
                <div className={style.box}>
                    <img src={onee} />
                    <h6>30</h6>
                    <h4>likes</h4>
                </div>
                <div className={style.box}>
                    <img src={oneee}  />
                    <h6>40</h6>
                    <h4>likes</h4>
                </div>

            </div>

        </section>

    )
}
export default Top;