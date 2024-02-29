import React,{useState} from 'react'
import style from '../AddPost/addPost.module.css'

const PostForm = ({ onSubmit }) => {
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ description, type, image });
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
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Post</button>
            </form>
        </div>
        </section>
    );
};

export default PostForm;