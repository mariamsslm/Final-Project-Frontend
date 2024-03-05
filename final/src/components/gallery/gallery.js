import React, { useState , useEffect } from 'react';
import axios from 'axios'
import style from '../gallery/gallery.module.css';
import imagee from '../../assets/item1.jpg'


const Gallery = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (index) => {
        setCurrentIndex(index);
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getall`);
                setImages(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);
   

    
    return (
        <section className={style.container}>
            <div className={style.header}>
                <h3>Photo<span>Gallery</span></h3>
            </div>
            <div className={style.box}>
                <div className={style.images}>
                   
                    {images.map((image, index) => (
                       
                        <img
                            key={index}
                            src={`${process.env.REACT_APP_BACKEND}/images/${image.image}`}
                            alt=''
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>

            {showPopup && (
                <div className={style.popup}>
                    <span className={style.close} onClick={handleClose}>
                        &times;
                    </span>
                    <img src={`${process.env.REACT_APP_BACKEND}/images/${images[currentIndex].image}`} alt={images._id} />
                    <div className={style.prev} onClick={handlePrev}>
                        &#10094;
                    </div>
                    <div className={style.next} onClick={handleNext}>
                        &#10095;
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
