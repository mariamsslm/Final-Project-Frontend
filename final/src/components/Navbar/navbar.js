import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import useLocation
import style from '../Navbar/navbar.module.css';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Use useLocation to get location

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <header className={`${style.header} ${isSticky ? style.sticky : ''}`}>
      <NavLink to='/' className={style.logo}>Art<span className={style.span}>mood</span></NavLink>
      <ul className={`${style.navbar} ${isOpen ? style.open : ''}`} >
        <li>
          <NavLink exact to='/' className={location.pathname === "/" ? style.active__link : ""} onClick={toggleMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/posts' className={location.pathname === "/posts" ? style.active__link : ""} onClick={toggleMenu}>Posts</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={location.pathname === "/about" ? style.active__link : ""} onClick={toggleMenu}>About Us</NavLink>
        </li>
        <li>
          <NavLink to='/profil' className={location.pathname === "/profil" ? style.active__link : ""}onClick={toggleMenu}>Artists</NavLink>
        </li>
        <li>
          <NavLink to='/gallery'className={location.pathname === "/gallery" ? style.active__link : ""} onClick={toggleMenu}>Gallery</NavLink>
        </li>
      </ul>
      <div className={style.right}>
        {user ? (
          <NavLink to='/' className={style.logout} onClick={logout}>Logout</NavLink>
        ) : (
          <NavLink to='/login'>Signin</NavLink>
        )}
        <a href='https://web.whatsapp.com/#'><i className="ri-whatsapp-fill"></i></a>
        <a href='#'><i className="ri-instagram-fill"></i></a>
        <a href='#'><i className="ri-facebook-fill"></i></a>
        <div className={`${style.menu}`} onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
