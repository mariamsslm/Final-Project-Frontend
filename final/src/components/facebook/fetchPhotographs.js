import React, { useState,useEffect } from 'react'
import axios from 'axios'
import FacebookPost from './facebook';


const FacebookPhotographs=()=>{
    const [photographs, setPhotographs] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/post/getallphoto');
                setPhotographs(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {photographs.map((post, index) => (
                <FacebookPost key={index} post={post} />
            ))}
        </div>
    );
};
export default FacebookPhotographs; 