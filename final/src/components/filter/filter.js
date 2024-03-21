import React, { useState } from 'react';
import { usePostContext } from '../../context/PostContext';
import style from '../filter/filter.module.css';
import { Link } from "react-router-dom";



const Filter = () => {
    const { handleSwitchSectionClick, handleSwitchDrawingClick, handleSwitchPhotographClick, handleSwitchWritingClick, handleSwitchOldClick } = usePostContext();
    const [activeFilter, setActiveFilter] = useState('all');

    const handleClick = (filterType) => {
        if (activeFilter === filterType) {
            setActiveFilter('all');
        } else {
            setActiveFilter(filterType);
            switch (filterType) {
                case 'all':
                    handleSwitchSectionClick();
                    break;
                case 'photographs':
                    handleSwitchPhotographClick();
                    break;
                case 'writings':
                    handleSwitchWritingClick();
                    break;
                case 'drawings':
                    handleSwitchDrawingClick();
                    break;
                case 'oldPosts':
                    handleSwitchOldClick();
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <section className={style.filter}>
            <div className={style.filterOptions}>
                <button
                    className={`${style.btn} ${activeFilter === 'all' ? style.active : style.inactive}`}
                    onClick={() => handleClick('all')}
                >
                    All Posts
                </button>
                <button
                    className={`${style.btn} ${activeFilter === 'photographs' ? style.active : style.inactive}`}
                    onClick={() => handleClick('photographs')}
                >
                    Photographs
                </button>
                <button
                    className={`${style.btn} ${activeFilter === 'writings' ? style.active : style.inactive}`}
                    onClick={() => handleClick('writings')}
                >
                    Writings
                </button>
                <button
                    className={`${style.btn} ${activeFilter === 'drawings' ? style.active : style.inactive}`}
                    onClick={() => handleClick('drawings')}
                >
                    Drawings
                </button>
                <Link to="/add">
                <button className={style.btnAdd}>Add Post</button>
                </Link>
            </div>
        </section>
    );
};

export default Filter;
