import React, { useState,useEffect } from 'react'
import axios from 'axios'
import FacebookPost from './facebook';
import loading from '../../assets/loading.gif'



const FacebookPhotographs=()=>{
    const [photographs, setPhotographs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getallphoto`);
                setPhotographs(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
            finally {
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
        <section>
            {photographs.map((post, index) => (
                <FacebookPost key={index} post={post} />
            ))}
        </section>
    );
};
export default FacebookPhotographs; 