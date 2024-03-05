import React from 'react'
import styl from '../assets/Loading_icon.gif'
import style from './loading.module.css'

const LoadingPage = ()=>{
    return(
        <div className={style.loading}>
            <img src={styl} alt='loading page'/>
          
        </div>
    )
}
export default LoadingPage;