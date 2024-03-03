import React from 'react'
import style from '../sideBar/sideBar.module.css' 
import { Link } from 'react-router-dom'


const SideBar=()=>{
    return(
        <div className={style.sidebar}>

             
       <Link to='/postTable'><button className={style.btn}>Posts</button></Link> 
       <Link to='/userTable'><button className={style.btn}>User</button></Link> 
       <Link to='/'><button className={style.btn}>Home</button></Link> 
   

        </div>
    )
}
export default SideBar