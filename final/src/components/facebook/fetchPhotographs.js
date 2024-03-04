import React, { useState,useEffect } from 'react'
import axios from 'axios'
import FacebookPost from './facebook';


const FacebookPhotographs=()=>{
    const [photographs, setPhotographs] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getallphoto`);
                setPhotographs(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <section>
            {photographs.map((post, index) => (
                <FacebookPost key={index} post={post} />
            ))}
        </section>
    );
};
export default FacebookPhotographs; 