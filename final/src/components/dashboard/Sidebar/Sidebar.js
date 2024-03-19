import React from 'react'
import style from './Sidebar.module.css'
import { NavLink , useLocation} from 'react-router-dom'


const Overview=()=>{
    const location = useLocation();
    return(
        <div className={style.sidebar}>
            <ul>
                <li>
                <NavLink exact to='/dashboard' className={location.pathname === "/dashboard" ? style.active__link : ""}>
                    <i class="ri-dashboard-line"></i>
                        <p>Overview</p></NavLink>
                </li>
                <li>
                <NavLink exact to='/userTable' className={location.pathname === "/userTable" ? style.active__link : ""}>
                    <i class="ri-user-line"></i> 
                     <p>Users</p></NavLink>
                </li>
                <li>
                <NavLink exact to='/postTable' className={location.pathname === "/postTable" ? style.active__link : ""}>
                    <i class="ri-gallery-line"></i>                
                       <p>Posts</p></NavLink>
                </li>
                <li>
                <NavLink exact to='/' className={location.pathname === "/" ? style.active__link : ""}>
                    <i class="ri-logout-box-r-line"></i>                      
                     <p>Logout</p></NavLink>
                </li>

            </ul>

        </div>
    )

}
export default Overview ;