import React, { useState, useEffect } from 'react';
import style from '../AddPost/addPost.module.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
    const { _id } = useParams();
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getById/${_id}`);
                const postData = response.data.data;
                setDescription(postData.description);
                setType(postData.type);
                setImage(postData.image);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('description', description);
            formData.append('type', type);
            formData.append('image', image); 

            await axios.put(`${process.env.REACT_APP_BACKEND}/post/update/${_id}`, formData);
            navigate('/posts');
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <section>
            <div className={style.postForm}>
                <h2>Update Post</h2>
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
                    <button type="submit">Update</button>
                </form>
            </div>
        </section>
    );
};

export default EditForm;
