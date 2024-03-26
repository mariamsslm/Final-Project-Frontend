import React, { useState, useEffect } from 'react';
import style from '../../layout/singleProfile/single.module.css';
import { useParams } from 'react-router-dom';
import FacebookPost from '../../components/facebook/facebook';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loading from '../../assets/loading.gif'


const SingleProfile = () => {
    const { _id } = useParams();
    const [data, setData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const [posts, setPosts] = useState([]);
    const [showUnauthorizedPopup, setShowUnauthorizedPopup] = useState(false);
    const [showUpdateSuccessPopup, setShowUpdateSuccessPopup] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true); 
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [showUnauthorizedDeletePopup, setShowUnauthorizedDeletePopup] = useState(false);
    const [showDeleteSuccessPopup, setShowDeleteSuccessPopup] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirmationModal(true);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getbyUserId/${_id}`);
                setPosts(response.data.data);
                
            } catch (error) {
                console.error('Error fetching posts:', error.message);
                setError('Failed to fetch posts. Please try again later.');
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
                    setIsLoading(false)
                    
                } else {
                    setError('User not found');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                setError('Failed to fetch user. Please try again later.');
            }
        };

        fetchData();
    }, [_id]);

    const handleEdit = () => {
        setEditMode(true);
        setEditedData({ ...data });
    };

    const handleSave = async () => {
        try {
            const formData = new FormData();
            formData.append('name', editedData.name);
            formData.append('bio', editedData.bio);
            formData.append('email', editedData.email);
            formData.append('phone', editedData.phone);

            if (newImage) {
                formData.append('image', newImage);
            }

            const response = await axios.put(`${process.env.REACT_APP_BACKEND}/user/updateProfile/${_id}`, formData, {
                withCredentials: true,
            });

            if (response.status === 200) {
                setData(editedData);
                setEditMode(false);
                setShowUpdateSuccessPopup(true);
                setTimeout(() => {
                    setShowUpdateSuccessPopup(false);
                    navigate(`/user/${_id}`);
                }, 1000);
            } else {
                setError('Error saving edited data.');
            }
        } catch (error) {
            console.error('Error saving edited data:', error.message);
            setError('Error saving edited data. You are not authorized.');
            setShowUnauthorizedPopup(true);
            setTimeout(() => {
                setShowUnauthorizedPopup(false);
                setEditMode(false);
            }, 1000);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND}/user/deleteUserAccount/${_id}`, {
                withCredentials: true,
            });
            setShowConfirmationModal(false);
            setShowDeleteSuccessPopup(true);
            setTimeout(() => {
                setShowDeleteSuccessPopup(false);
                navigate('/profil');
            }, 1000);
        } catch (error) {
            console.error('Error deleting profile:', error.message);
            if (error.response && error.response.status === 403) {
                setError("You don't have access to delete this profile.");
                setShowConfirmationModal(false)
                setShowUnauthorizedDeletePopup(true);
                setTimeout(() => {
                    
                    setShowUnauthorizedDeletePopup(false);
                }, 1000);
            } else {
                setError('Error deleting profile. Please try again later.');
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
            {showUnauthorizedPopup && <div className={style.popup}><h2>You don't have access to edit this profile!</h2></div>}
            {showUpdateSuccessPopup && <div className={style.popup}><h2>Profile updated successfully.</h2></div>}
            {showDeleteSuccessPopup && <div className={style.popup}><h2>Profile deleted successfully.</h2></div>}
{showUnauthorizedDeletePopup && <div className={style.popup}><h2>You don't have access to delete this profile!</h2></div>}
           {isLoading ? (<div>
            <img src={loading} alt='....Loading' style={{width:'100px'}}></img>
            
        </div>) :(
           
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
                                Bio :{' '}
                                <p>
                                    
                                    {editMode ? (
                                        <textarea className={style.textarea} type="textarea" name="bio" value={editedData.bio} onChange={handleChange} />
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
                                <i className="ri-delete-bin-line" onClick={handleDeleteClick}></i>
                            </>
                        )}
                    </div>
                </div>
            </article>
            )}

           
            <div className={style.posts}>
                
            {posts.map((post, index) => (
                <FacebookPost key={index} post={post} />
            ))}
        </div>

        {showConfirmationModal && (
            <div className={style.modal}>
                <div className={style.modalContent}>
                    <h2>Are you sure to delete this profile?</h2>
                    <div className={style.modalButtons}>
                        <button onClick={handleConfirmDelete}>Yes</button>
                        <button onClick={() => setShowConfirmationModal(false)}>No</button>
                    </div>
                </div>
            </div>
        )}
         {showUnauthorizedPopup && <div className={style.popup}><h2>You don't have access to edit this profile!</h2></div>}
            {showUpdateSuccessPopup && <div className={style.popup}><h2>Profile updated successfully.</h2></div>}
            {showDeleteSuccessPopup && <div className={style.popup}><h2>Profile deleted successfully.</h2></div>}
{showUnauthorizedDeletePopup && <div className={style.popup}><h2>You don't have access to delete this profile!</h2></div>}
           
            
            
            
           
        </section>
        
      
    );
};

export default SingleProfile;
