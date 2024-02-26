import React, { useState } from 'react';
import style from '../pages/Drawing.module.css';
import image1 from '../assets/drawing/image1.jpeg';
import image2 from '../assets/drawing/image2.jpeg';
import image3 from '../assets/drawing/image3.jpeg';
import image4 from '../assets/drawing/image4.jpeg';
import image5 from '../assets/drawing/image5.jpeg';
import image6 from '../assets/drawing/image6.jpeg';
import image7 from '../assets/drawing/imag1.jpeg';
import image8 from '../assets/drawing/imag2.jpeg';
import image9 from '../assets/drawing/imag2.jpeg';
import image10 from '../assets/drawing/imag3.jpeg';
import image11 from '../assets/drawing/imag6.jpeg';

const Drawing = () => {
  const [bigImage, setBigImage] = useState(image1); // Setting default image to image1

  const images = [image1, image2, image3, image4, image5, image6, image6, image7, image8, image9, image10, image10, image11];

  const showImage = (imageSrc) => {
    setBigImage(imageSrc);
  };

  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Drawings</h2> 
        <div className={style.card}>
          <img className={style.image} src={bigImage} alt="Big Image" />
        </div>
        <div className={style.cardes}>
          {images.map((image, index) => (
            <div key={index} className={style.carde} onClick={() => showImage(image)}>
              <img src={image} alt={`Image ${index + 1}`} className={style.images} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Drawing;