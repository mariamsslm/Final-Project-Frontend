import React, { useContext, useEffect, useState } from 'react';
import style from '../Navbar/navbar.module.css';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {

  const user = useContext(AuthContext)
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

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
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${style.header} ${isSticky ? style.sticky : ''}`}>
      <a href='#' className={style.logo}>Art<span className={style.span}>mood</span></a>
      <ul className={`${style.navbar} ${isOpen ? style.open : ''}`}>
        <li><a  href='/'>Home</a></li>
        <li><a href='posts'>Posts</a></li>
        <li><a href='/about'>About Us</a></li>
        <li><a href='/profil'>Portfolio</a></li>
      </ul>
      <div className={style.right}>
        <a href='/signup'>Join</a>
        <a href='https://web.whatsapp.com/#'><i className="ri-whatsapp-fill"></i></a>
        <a href='#'><i className="ri-instagram-fill"></i></a>
        <a href='#'><i className="ri-facebook-fill"></i></a>
        <div className={`${style.menu} ${isOpen ? style.open : ''}`} onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
