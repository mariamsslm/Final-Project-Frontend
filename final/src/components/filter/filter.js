import React, { useState } from 'react';
import { usePostContext } from '../../context/PostContext';
import style from '../filter/filter.module.css';

const Filter = () => {
    const {handleSwitchSectionClick, handleSwitchDrawingClick, handleSwitchPhotographClick, handleSwitchWritingClick,handleSwitchOldClick } = usePostContext();
    const [showOptions, setShowOptions] = useState(false); // State to control whether options are shown or hidden
    const [activeFilter, setActiveFilter] = useState('all'); // State to keep track of the active filter, default to 'all'

    const handleClick = (filterType) => {
        if (activeFilter === filterType) {
            setActiveFilter('all'); // Toggle off if the same filter is clicked again
        } else {
            setActiveFilter(filterType); // Set the active filter
            // Call the appropriate context function based on the filter type
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
        <div className={style.filter}>
            <div className={style.filterIcon} onClick={() => setShowOptions(!showOptions)}>
                Filter <i className="ri-filter-line"></i>
            </div>
            {showOptions && (
                <div className={style.filterOptions}>
                    <button
                        style={{
                            backgroundColor: activeFilter === 'all' ? '#ffffffab' : 'transparent',
                            color: activeFilter === 'all' ? '#000' : '#fff'
                        }}
                        onClick={() => handleClick('all')}
                    >
                        All Posts
                    </button>
                    <button
                        style={{
                            backgroundColor: activeFilter === 'photographs' ? '#ffffffab' : 'transparent',
                            color: activeFilter === 'photographs' ? '#000' : '#fff'
                        }}
                        onClick={() => handleClick('photographs')}
                    >
                        Photographs
                    </button>
                    <button
                        style={{
                            backgroundColor: activeFilter === 'writings' ? '#ffffffab' : 'transparent',
                            color: activeFilter === 'writings' ? '#000' : '#fff'
                        }}
                        onClick={() => handleClick('writings')}
                    >
                        Writings
                    </button>
                    <button
                        style={{
                            backgroundColor: activeFilter === 'drawings' ? '#ffffffab' : 'transparent',
                            color: activeFilter === 'drawings' ? '#000' : '#fff'
                        }}
                        onClick={() => handleClick('drawings')}
                    >
                        Drawings
                    </button>
                    <button
                        style={{
                            backgroundColor: activeFilter === 'oldPosts' ? '#ffffffab' : 'transparent',
                            color: activeFilter === 'oldPosts' ? '#000' : '#fff'
                        }}
                        onClick={() => handleClick('oldPosts')}
                    >
                        Old Posts
                    </button>
                    <button
                        style={{
                            backgroundColor: activeFilter === 'likes' ? '#ffffffab' : 'transparent',
                            color: activeFilter === 'likes' ? '#000' : '#fff'
                        }}
                        onClick={() => handleClick('likes')}
                    >
                        Number of Likes
                    </button>
                </div>
            )}
        </div>
    );
};

export default Filter;
