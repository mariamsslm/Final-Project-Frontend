import React, { useState } from 'react';
import style from '../facebook/facebook.module.css';
import { Link } from 'react-router-dom';

const FacebookPost = ({ post }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    const toggleLike = () => {
        setIsLiked(prevState => !prevState);
    };

    return (
        <section className={style.post}>
            <div className={style.header}>
                <img src={`http://localhost:5000/images/${post.userID?.image}`} alt="Profile Picture" className={style.picture} />
                <div className={style.info}>
                    <h2 className={style.name}>{post.userID?.name}</h2>
                    <p className={style.date}>Posted on {post.createdAt.split("T")[0]}</p>
                </div>
                <div className={style.menu} onClick={toggleMenu}>
                    <i className="ri-more-2-fill"></i>
                    {showMenu && (
                        <div className={style.dropdown}>
                            <Link to={`/post/${post._id}`}>
                                <button>Edit</button>
                            </Link>
                            <button>Delete</button>
                        </div>
                    )}
                </div>
            </div>
            <div className={style.content}>
                <p className={style.text}>{post.description}</p>
                <img src={`http://localhost:5000/images/${post.image}`} alt='' className={style.image} />
            </div>
            <div className={style.actions}>
                <i
                    className={`ri-heart-fill ${isLiked ? style.redHeart : ''}`}
                    style={{ fontSize: '2rem', fontWeight: 500 }}
                    onClick={toggleLike}
                ></i>
                <p>{post.likes}<i className="ri-heart-fill" style={{ color: 'red' }}></i></p>
            </div>
        </section>
    );
};

export default FacebookPost;
