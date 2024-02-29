import React from 'react'
import style from '../sideBar/sideBar.module.css' 


const SideBar=()=>{
    return(
        <div className={style.sidebar}>
             
        <button className={style.btn}>Home</button>
        <button className={style.btn}>Users</button>
        <button className={style.btn}>Posts</button>
   

        </div>
    )
}
export default SideBar