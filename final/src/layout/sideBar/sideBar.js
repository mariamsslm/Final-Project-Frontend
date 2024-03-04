import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../sideBar/sideBar.module.css';

const SideBar = () => {
    const [activeLink, setActiveLink] = useState('/postTable'); // Default active link is 'Posts'

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return (
        <div className={style.sidebar}>
            <NavLink to='/dashboard' activeClassName={style.active} onClick={() => handleSetActiveLink('/postTable')}>
                <button className={style.btn} style={activeLink === '/postTable' ? { backgroundColor: '#ffa343', color: '#fff' } : {}}>Posts</button>
            </NavLink>
            <NavLink to='/userTable' activeClassName={style.active} onClick={() => handleSetActiveLink('/userTable')}>
                <button className={style.btn} style={activeLink === '/userTable' ? { backgroundColor: '#ffa343', color: '#fff' } : {}}>User</button>
            </NavLink>
            <NavLink exact to='/' activeClassName={style.active} onClick={() => handleSetActiveLink('/')}>
                <button className={style.btn} style={activeLink === '/' ? { backgroundColor: '#ffa343', color: '#fff' } : {}}>Home</button>
            </NavLink>
        </div>
    );
};

export default SideBar;
