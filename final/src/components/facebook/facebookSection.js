import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacebookPost from './facebook';
import style from '../facebook/facebookSection.module.css';
// import { usePostContext } from '../../context/PostContext';

const FacebookSection = () => {

    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getall`);
                setPosts(response.data.data);
                setFilteredPosts(response.data.data); // Initially set filtered posts to all posts
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    

    return (
        <section className={style.stylle}>
            

            {filteredPosts.map((post, index) => (
                <div key={index}>
                    <FacebookPost post={post} />
                    
                </div>
            ))}
        </section>
    );
};

export default FacebookSection;
