import React, { useContext, useState, useEffect } from 'react';
import style from '../AddPost/addPost.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../context/authContext';


const PostForm = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { user } = useContext(AuthContext)
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

            await axios.post(`${process.env.REACT_APP_BACKEND}/post/add`, formData, {
                withCredentials: true
            });
            setShowPopup(true)
            setTimeout(() => {
                navigate("/posts");
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log('hello', user);
    });

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
                    <div className={style.buttons}>
                    <button type="submit">Post</button>
                    <button type="button" onClick={() => navigate('/posts')}>Cancel</button>
                    </div>
                    

                </form>
            </div>
            {showPopup && (
                <div className={style.popup}>
                    <div className={style.popupContent}>
                        <h2>Post added successfully!</h2>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PostForm;
