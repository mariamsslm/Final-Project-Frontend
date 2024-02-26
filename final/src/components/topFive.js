import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from '../components/topFive.module.css';
import image from '../assets/flower.jpg';
import imag from '../assets/flower2.jpeg';
import ima from '../assets/flower3.jpg';
import im from '../assets/flower4.jpeg';
import i from '../assets/images.jpeg';

const TopFive = () => {
    const [photos] = useState([
        { id: 1, image: image },
        { id: 2, image: imag },
        { id: 3, image: ima },
        { id: 4, image: im },
        { id: 5, image: i },
    ]);

    const settings = {
        dots: true,
        infinite: true,        
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5,
        cssEase: "linear"
    };

    return (
        <section className={style.content}>
            <h2 className={style.title}>The Top Five</h2>
            <Slider {...settings}>
                {photos.map((photo) => (
                    <div key={photo.id}>
                        <img src={photo.image} alt='image' className={style.image} />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default TopFive;
