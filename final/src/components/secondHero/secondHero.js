import React, { useRef, useEffect } from 'react';
import style from '../secondHero/secondHero.module.css';
import draw from '../../assets/item3.jpg';
import item3Image from '../../assets/item4.jpg';
import phot from '../../assets/phot.jpg';

const SecondHero = () => {
    const slideRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(moveNext, 5000);
        return () => clearInterval(interval);
    }, []);

    const moveNext = () => {
        const slide = slideRef.current;
        const lastItem = slide.lastElementChild;
        slide.insertBefore(lastItem, slide.firstChild);
    };

    return (
        <section className={style.container}>
            <div ref={slideRef} id="slide" className={style.slide}>
                <div className={style.item} style={{ backgroundImage: `url(${phot})` }}>
                    <div className={style.content}>
                        <h2>Photographs</h2>
                        <p>Create your own photographs</p>
                    </div>
                </div>
                <div className={style.item} style={{ backgroundImage: `url(${draw})` }}>
                    <div className={style.content}>
                        <h2>Drawing</h2>
                        <p>Create your own Drawing</p>
                    </div>
                </div>
                <div className={style.item} style={{ backgroundImage: `url(${item3Image})` }}>
                    <div className={style.content}>
                        <h2>Writings</h2>
                        <p>Write your feelings</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondHero;
