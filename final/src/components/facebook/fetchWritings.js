import React, { useState,useEffect } from 'react'
import axios from 'axios'
import FacebookPost from './facebook';


const FacebookWritings=()=>{
    const [writings, setWritings] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/post/getallWritings');
                setWritings(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {writings.map((post, index) => (
                <FacebookPost key={index} post={post} />
            ))}
        </div>
    );
};
export default  FacebookWritings; 