import React, { useState } from 'react';
import style from '../pages/Photographs.module.css';
// import Card from '../components/Card';

import image from '../assets/pip.avif';
import mas from '../assets/layla.jpg';
import saha from '../assets/Shuksan.jpg';
import sama from '../assets/hero.avif';
import sala from '../assets/image1.jpg';
import saka from '../assets/image2.jpg';
import awa from '../assets/images.jpeg';
import rawa from '../assets/flower4.jpeg';
import taha from '../assets/flower3.jpg';
import yara from '../assets/flower2.jpeg';
import halima from '../assets/flower.jpg';

const Photographs = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [displayCount, setDisplayCount] = useState(8); // State to track number of images to display

    const galleryItems = [image, mas, saha, sama, sala, saka,  awa, rawa, taha, yara, halima];

    const handleClick = (index) => {
        setCurrentIndex(index);
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    };

    const handleShowMore = () => {
        // Increment the display count by, for example, 8 images each time the button is clicked
        setDisplayCount(prevCount => prevCount + 8);
    };

    const handleShowLess = () => {
        // Decrease the display count by, for example, 8 images each time the button is clicked
        setDisplayCount(prevCount => Math.max(prevCount - 8, 8)); // Ensure minimum of 8 images displayed
    };

    return (
        <section>
            <div className={style.hero}>
                <h2 className={style.title}>Photographs</h2>
                <input type='button' value='Add your' className={style.btn}/>
            </div>
            <div className={style['gallery-container']}>
                <div className={style.gallery}>
                    {/* Map through galleryItems array up to the current displayCount */}
                    {galleryItems.slice(0, displayCount).map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            alt={`Image ${index + 1}`}
                            className={style['gallery-item']}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
                
                {displayCount < galleryItems.length ? (
                    <button onClick={handleShowMore} className={style.bttun}>Show More</button>
                ) : (
                    <button onClick={handleShowLess} className={style.bttun}>Show Less</button>
                )}
            </div>
            {showPopup && (
                <div className={style.popup} id="popup">
                    <span className={style.close} id="close" onClick={handleClose}>&times;</span>
                    <img src={galleryItems[currentIndex]} alt={`Image ${currentIndex + 1}`} className={style['popup-image']} id="popup-image" />
                    <span className={style.prev} id="prev" onClick={handlePrev}>&#10094;</span>
                    <span className={style.next} id="next" onClick={handleNext}>&#10095;</span>
                </div>
            )}
        </section>
    );
};

export default Photographs;