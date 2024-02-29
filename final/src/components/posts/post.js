import React, { useState } from 'react';
import style from '../posts/post.module.css';
import image from '../../assets/onee.webp';

const Post = () => {
    const [data, setData] = useState([
        {
            image: image,
            likes: "30"
        },
        {
            image: image,
            description: 'hi all',
            date: "12.3.2020",
            likes: "30"
        },
        {
            image: image,
            description: 'hi all',
            date: "12.3.2020",
            likes: "30"
        },
        {
            image: image,
            description: 'hi all',
            date: "12.3.2020",
            likes: "30"
        },
        {
            image: image,
            description: 'hi all',
            date: "12.3.2020",
            likes: "30"
        },
        {
            image: image,
            description: 'hi all',
            date: "12.3.2020",
            likes: "30"
        }
    ]);

    return (
        <section className={style.posts}>
            <div className={style.text}>
                <h2>Posts</h2>
            </div>
            <div className={style.content}>
                {data.map((post, index) => (
                    <div className={style.box} key={index}>
                        <img src={post.image} alt="Post" />
                        <p>{post.likes} <i class="ri-heart-line"></i></p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Post;
