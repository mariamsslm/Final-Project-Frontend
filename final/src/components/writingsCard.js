import React from 'react';
import style from '../components/writingsCard.module.css'
import image from '../assets/pip.avif'
const SpeechBubble = ({ writ }) => {
    const { title, content, image, date } = writ;
  
    return (
      <div className={style.bubbleContainer}>
        <div className={style.profileCircle}>
          <img src={image} alt="Profile" className={style.profileImage} />
        </div>
        <div className={style.speechBubble}>
          <h2>{title}</h2>
          <p>{content}</p>
         
          <span className={style.date}>{date}</span>
        </div>
      </div>
    );
  };
  
  

export default SpeechBubble;

