import React, { useState,useEffect } from 'react'
import axios from 'axios'
import FacebookPost from './facebook';


const PostsOldPost=()=>{
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getall`);
                setPosts(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <section>
            {posts.map((post, index) => (
                <FacebookPost key={index} post={post} />
            ))}
        </section>
    );
};
export default PostsOldPost; 