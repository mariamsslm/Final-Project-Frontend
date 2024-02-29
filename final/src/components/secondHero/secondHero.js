import React from 'react';
import style from '../secondHero/secondHero.module.css';
// import item1Image from '../../assets/item5.jpg';
import draw from '../../assets/item3.jpg';
import item3Image from '../../assets/item4.jpg';
import phot from '../../assets/phot.jpg'
import { usePostContext } from '../../context/PostContext';

const SecondHero = () => {

    const { handleSwitchSectionClick, handleSwitchDrawingClick, handleSwitchPhotographClick, handleSwitchWritingClick } = usePostContext()

    const moveNext = () => {
        const slide = document.getElementById('slide');
        const firstItem = slide.firstElementChild;
        slide.appendChild(firstItem);
    };

    const movePrev = () => {
        const slide = document.getElementById('slide');
        const lastItem = slide.lastElementChild;
        slide.insertBefore(lastItem, slide.firstChild);
    };

    return (
        <section className={style.container}>
            <div id="slide" className={style.slide}>
                <div className={style.item} style={{backgroundImage: `url(${phot})`}}>
                    <div className={style.content}>
                        <h2>Photographs</h2>
                        <p>create your own photographs</p>
                        <a href='#' className={style.btn} onClick={handleSwitchPhotographClick}>See more</a>
                    </div>
                </div>
                <div className={style.item} style={{backgroundImage: `url(${draw})`}}>
                    <div className={style.content}>
                        <h2>Drawing</h2>
                        <p>create your own Drawing</p>
                        <a href='#' className={style.btn} onClick={handleSwitchDrawingClick}>See more</a>
                    </div>
                </div>
                <div className={style.item}  style={{backgroundImage: `url(${item3Image})`}}>
                    <div className={style.content}>
                        <h2>Writings</h2>
                        <p>Whrite you feels</p>
                        <a href='#' className={style.btn} onClick={handleSwitchWritingClick}>See more</a>
                    </div>
                </div>
            </div>
            <div className={style.buttons}>
                <div className={style.button} id="prev" onClick={movePrev}>
                    <i className="ri-arrow-left-s-line"></i>
                </div>
                <div className={style.button} id="next" onClick={moveNext}>
                    <i className="ri-arrow-right-s-line"></i>
                </div>
            </div>
        </section>
    );
};

export default SecondHero;
