import React from 'react';
import style from '../components/AboutUs.module.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/images.jpeg'


const AboutUs = () => {

  return (
    <div className={style.aboutUs}>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
        Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Donec sed odio
        dui.
      </p>
      <div className={style.imageContainer}>
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
      </div>
    </div>
  );
};

export default AboutUs;
