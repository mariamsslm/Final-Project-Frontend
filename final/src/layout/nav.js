import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import style from '../layout/nav.module.css'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <body>
        <header className={style.header}>
            <nav className={style.navbar}>
                <div className={style.logo}>logo</div>
                <ul className={style.links}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/photo'>Photographs</a></li>
                    <li><a href='/draw'>Drawing</a></li>
                    <li><a href='/writing'>Writting</a></li>
                </ul>
                <div>
                    <button className={style.btn}><a className={style.butt} href='/signup'>Join</a></button>
                    <button className={style.btn}><a className={style.butt} href='/logout'>Logout</a></button>
                </div>
                <div className={style.toggle_btn} onClick={toggleDropdown}>
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>
            </nav>
            {isOpen && (
                <div className={style.dropdown}>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/photo'>Photographs</a></li>
                        <li><a href='/draw'>Drawing</a></li>
                        <li><a href='/writing'>Writting</a></li>
                    </ul>
                    <button className={style.btn}><a href='/signup'>Join</a></button>
                    <button className={style.btn}><a href='/logout'>Logout</a></button>
                </div>
            )}
        </header>
        {/* <main>
        <div className={style.hero}>
        <div className={style.content}>
            <h1>Unlock Your Creative Potential</h1>
            <a href='' className={style.btn}>Get Started</a>
        </div>

       </div>
        </main> */}
        </body>
    );
};

export default Nav;
