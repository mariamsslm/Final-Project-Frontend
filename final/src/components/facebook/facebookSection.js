import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacebookPost from './facebook';
// import style from '../facebook/facebookSection.module.css';
import loading from '../../assets/loading.gif'

const FacebookSection = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getall`);
                setPosts(response.data.data);
                setFilteredPosts(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setIsLoading(false); 
            }
        };
        fetchPosts();
    }, []);

    if (isLoading) {
        return <div>
            <img src={loading} alt='....Loading' style={{width:'100px'}}></img>
            
        </div>; 
    }

    return (
        <section >
            {filteredPosts.map((post, index) => (
                <div key={index}>
                    <FacebookPost post={post} />
                </div>
            ))}
        </section>
    );
};

export default FacebookSection;
