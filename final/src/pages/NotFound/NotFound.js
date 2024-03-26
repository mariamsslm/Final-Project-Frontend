import React from 'react'
import style from '../NotFound/NotFound.module.css'
import { Link } from 'react-router-dom'


const NotFound = () =>{
   return (

    <div className={style.container}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        {/* <a href="/">Go to Home Page</a>  */}
        <Link to='/'>
        Go to <span>Home Page</span></Link>
    </div>
   
   )
}
export default NotFound