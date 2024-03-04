import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../Navbar/navbar.module.css';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

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
    setIsOpen(prevState => !prevState); // Toggle the isOpen state
  };

  return (
    <header className={`${style.header} ${isSticky ? style.sticky : ''}`}>
      <Link to='/' className={style.logo}>Art<span className={style.span}>mood</span></Link>
      <ul className={`${style.navbar} ${isOpen ? style.open : ''}`}>
        <li>
          <Link to='/' className={activeLink === '/' ? style.active : ''} onClick={() => handleSetActiveLink('/')}>Home</Link>
        </li>
        <li>
          <Link to='/posts' className={activeLink === '/posts' ? style.active : ''} onClick={() => handleSetActiveLink('/posts')}>
            Posts
          </Link>
        </li>
        <li>
          <Link to='/about' className={activeLink === '/about' ? style.active : ''} onClick={() => handleSetActiveLink('/about')}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/profil' className={activeLink === '/profil' ? style.active : ''} onClick={() => handleSetActiveLink('/profil')}>
            Portfolio
          </Link>
        </li>
      </ul>
      <div className={style.right}>
        {user ? (
          <button className={style.logout} onClick={logout}>Logout</button>
        ) : (
          <Link to='/signup'>Join</Link>
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
