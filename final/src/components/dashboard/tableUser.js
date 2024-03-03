import React, { useState, useEffect } from 'react';
import style from '../dashboard/table.module.css'; 
import axios from 'axios';

const PostTable = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getlastest`); 
                setPosts(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleDeletePost = async (postId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND}/post/delete/${postId}`);
            setPosts(posts.filter(post => post._id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleDeleteAllPosts = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND}/post/deleteAll`); // Assuming endpoint for deleting all posts
            setPosts([]);
        } catch (error) {
            console.error('Error deleting all posts:', error);
        }
    };

    return (
        <div className={style.container}>
            <h2>Post Table</h2>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(posts) ? (
                        posts.map(post => (
                            <tr key={post._id}>
                                <td>{post._id}</td>
                                <td>{post.description}</td>
                                <td>{post.type}</td>
                                <td><img src={`${process.env.REACT_APP_BACKEND}/images/${post.image}`} alt="Profile Picture" className={style.picture} />
</td>
                                <td>
                                    <i class="ri-delete-bin-7-line" onClick={() => handleDeletePost(post._id)}></i>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No posts found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={handleDeleteAllPosts}>Delete All Posts</button>
        </div>
    );
};

export default PostTable;
