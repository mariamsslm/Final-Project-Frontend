import React, { useState } from 'react';
import style from '../AddPost/addPost.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const PostForm = ({ onSubmit }) => {
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('description', description);
            formData.append('type', type);
            formData.append('image', image);

            await axios.post(`${process.env.REACT_APP_BACKEND}/post/add`, formData);
            navigate('/posts');
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <section>
            <div className={style.postForm}>
                <h2>Create Post</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className={style.input}
                        placeholder="What's on your mind?"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select
                        className={style.input}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select Type</option>
                        <option value="photographs">Photographs</option>
                        <option value="drawing">Drawing</option>
                        <option value="writings">Writings</option>
                    </select>
                    <input
                        className={style.input}
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <button type="submit">Post</button>
                </form>
            </div>
        </section>
    );
};

export default PostForm;
