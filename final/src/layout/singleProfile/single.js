import React, { useState, useEffect } from 'react';
import style from '../../layout/singleProfile/single.module.css';
import { useParams } from 'react-router-dom';
import FacebookPost from '../../components/facebook/facebook'
import axios from 'axios';

const SingleProfile = () => {
    const { _id } = useParams();
    const [data, setData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const [posts , setPosts] = useState([])
   



    
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getbyUserId/${_id}`)
                setPosts(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
        fetchPosts();
    }, [_id]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/get/${_id}`);

                if (response.data) {
                    setData(response.data.data);
                    console.log('Data:', response.data.data);
                } else {
                    setData(null);
                    console.error('Failed to fetch user:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchData();
    }, [_id]);

    const handleEdit = () => {
        setEditMode(true);
        // Initialize edited data with the current data
        setEditedData({ ...data });
    };

    const handleSave = async () => {
        try {
            if (newImage) {
                const formData = new FormData();
                formData.append('image', newImage);
                await axios.put(`${process.env.REACT_APP_BACKEND}/user/uploadImage/${_id}`, formData);
            }
            await axios.put(`${process.env.REACT_APP_BACKEND}/user/update/${_id}`, editedData);
            setData(editedData);
            setEditMode(false);
        } catch (error) {
            console.error('Error saving edited data:', error);
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this profile?');
        if (confirmDelete) {
            try {
                await axios.delete(`${process.env.REACT_APP_BACKEND}/user/delete/${_id}`);
                window.location.href = '/profil'; 
            } catch (error) {
                console.error('Error deleting profile:', error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    

    return (
        <section>
            <article className={style.about}>
                <div className={style.image}>
                    {editMode ? (
                        <input type="file" onChange={handleImageChange} />
                    ) : (
                        data && <img src={`${process.env.REACT_APP_BACKEND}/images/${data.image}`} alt="Profile" />
                    )}
                </div>
                <div className={style.text}>
                    <div>
                        {data && (
                            <>
                                <h2>
                                    Name :{' '}
                                    {editMode ? (
                                        <input type="text" name="name" value={editedData.name} onChange={handleChange} />
                                    ) : (
                                        data.name
                                    )}
                                </h2>
                                <p>
                                    Bio :{' '}
                                    {editMode ? (
                                        <input className={style.textarea} type="textarea" name="bio" value={editedData.bio} onChange={handleChange} />
                                    ) : (
                                        data.bio
                                    )}
                                </p>
                                <p>
                                    Email :{' '}
                                    {editMode ? (
                                        <input type="text" name="email" value={editedData.email} onChange={handleChange} />
                                    ) : (
                                        data.email
                                    )}
                                </p>
                                <p>
                                    Phone :{' '}
                                    {editMode ? (
                                        <input type="text" name="phone" value={editedData.phone} onChange={handleChange} />
                                    ) : (
                                        data.phone
                                    )}
                                </p>
                            </>
                        )}
                    </div>
                    <div className={style.actions}>
                        {editMode ? (
                            <>
                                <button onClick={handleSave}>Save</button>
                                <button onClick={() => setEditMode(false)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <i className="ri-pencil-line" onClick={handleEdit}></i>
                                <i className="ri-delete-bin-line" onClick={handleDelete}></i>
                            </>
                        )}
                    </div>
                </div>
            </article>
            <article>
            <div>
                <p>kjfftrvubjv</p>
            {posts.map((post, index) => (
                <FacebookPost key={index} post={post} />
            ))}
        </div>
            </article>
            
            
            
           
        </section>
        
      
    );
};

export default SingleProfile;
