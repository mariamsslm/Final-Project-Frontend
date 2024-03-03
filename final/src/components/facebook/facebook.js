import React, { useState } from 'react';
import style from '../facebook/facebook.module.css';
import axios from 'axios';

const FacebookPost = ({ post }) => {
    const [editedPost, setEditedPost] = useState({ ...post });
    const [likesInfo, setLikesInfo] = useState(null);
    const [error, setError] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const toggleLike = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND}/like/toggle/${post._id}`);
            setIsLiked(prevState => !prevState);
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this post?');
        if (confirmDelete) {
            try {
                await axios.delete(`${process.env.REACT_APP_BACKEND}/post/delete/${post._id}`);
                window.location.href = '/posts'; 
            } catch (error) {
                console.error('Error deleting post:', error);
            }
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${process.env.REACT_APP_BACKEND}/post/update/${post._id}`, editedPost);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <div>
            <div className={style.post}>
                <div className={style.header}>
                    <img src={`${process.env.REACT_APP_BACKEND}/images/${post.userID?.image}`} alt="Profile Picture" className={style.picture} />
                    <div className={style.info}>
                        <h2 className={style.name}>{post.userID?.name}</h2>
                        <p className={style.date}>Posted on {post.createdAt.split("T")[0]}</p>
                    </div>
                    <div className={style.menu} onClick={() => setShowMenu(!showMenu)}>
                        <i className="ri-more-2-fill"></i>
                        {showMenu && (
                            <div className={style.dropdown}>
                                <button onClick={handleEdit}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                            </div>
                        )}
                    </div>
                </div>
                <div >
                    {isEditing ? (
                        <form onSubmit={handleSubmit} className={style.content}>
                            <textarea
                                className={style.text}
                                name="description"
                                value={editedPost.description}
                                onChange={handleChange}
                            />
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                            />
                            <button type="submit">Update</button>
                        </form>
                    ) : (
                        <>
                            <p className={style.text}>{post.description}</p>
                            <img src={`${process.env.REACT_APP_BACKEND}/images/${post.image}`} alt='' className={style.image} />
                        </>
                    )}
                </div>
                <div className={style.actions}>
                    <i
                        className={`ri-heart-fill ${isLiked ? style.redHeart : ''}`}
                        style={{ fontSize: '2rem', fontWeight: 500 }}
                        onClick={toggleLike}
                    ></i>
                    <div>
                        {error && <p>Error: {error}</p>}
                        {likesInfo && (
                            <p>
                                {likesInfo.numberOfLikes}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacebookPost;
