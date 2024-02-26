import React, { useState } from 'react';
import style from '../components/Card.module.css';
// import image from '../assets/sah.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDownload } from '@fortawesome/free-solid-svg-icons';

const Card = ({post}) => {
    const { image, text } = post;
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className={style.card}>
      <div className={style.profile}>
        <div className={style.profileImage}>
          <img src={image} alt='profile' className={style.profileImg} />
        </div>
        <span className={style.profileName}>{text}</span>
      </div>
      <img src={image} alt="Sample Image" />
      <div className={style.details}>
        <div className={style.actions}>
          <button className={style.likeButton} onClick={handleLikeClick}>
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: '30px', color: liked ? 'red' : '#ffffff', outline: 'none' }} />
          </button>
          <button className={style.iconButton}>
            <FontAwesomeIcon icon={faDownload} style={{ fontSize: '30px', color:'#ffffff' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
