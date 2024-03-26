import React, { useContext, useEffect, useState } from "react";
import style from "../facebook/facebook.module.css";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { Link , useNavigate } from "react-router-dom";

const FacebookPost = ({ post }) => {
  // const [showPopup, setShowPopup] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [editedPost, setEditedPost] = useState({ ...post });
  const [likesInfo, setLikesInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [showUnauthorizedDeletePopup, setShowUnauthorizedDeletePopup] = useState(false);
    const [showDeleteSuccessPopup, setShowDeleteSuccessPopup] = useState(false);

    const handleDeleteClick = () => {
      setShowConfirmationModal(true);
  };



  const toggleLike = async () => {
    try {
      if (isLiked) {
        setLikesInfo({
          ...likesInfo,
          numberOfLikes: likesInfo.numberOfLikes - 1,
        });
      } else {
        setLikesInfo({
          ...likesInfo,
          numberOfLikes: likesInfo.numberOfLikes + 1,
        });
      }
      await axios.post(
        `${process.env.REACT_APP_BACKEND}/like/add/${post._id}`,
        {},
        {
          withCredentials: true,
        }
      );
      setIsLiked((prevState) => !prevState);
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };



  const handleDelete = async () => {
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND}/post/deleteUserPost/${post._id}`, {
      withCredentials: true
    });
    setDeleted(true);
    setShowMenu(false);
    setShowConfirmationModal(false) 
    setShowDeleteSuccessPopup(true)
    
            setTimeout(() => {
                setShowDeleteSuccessPopup(false);
               
            
            }, 1000);
  } catch (error) {
    console.error("Error deleting post:", error);
    setShowConfirmationModal(false)
    setShowUnauthorizedDeletePopup(true);
                setTimeout(() => {
                  
                    setShowUnauthorizedDeletePopup(false);
                }, 1000);
  }
};





  useEffect(() => {
    console.log(user);
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setImageFile(e.target.files[0]); // Store the selected image file
    } else {
      const { name, value } = e.target;
      setEditedPost((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("description", editedPost.description);
      formData.append("image", imageFile);

      await axios.put(
        `${process.env.REACT_APP_BACKEND}/post/post/${post._id}`,
        formData,
        {
          withCredentials: true,
        }
      );

      setIsEditing(false);
      console.log("The post was updated successfully");
      // setShowPopup(true);
    } catch (error) {
      console.error("Error updating post:", error);
      setError("Error updating post. Please try again.");
    }
  };
 
  

  const fetchLikesInfo = async () => {
    console.log(`${process.env.REACT_APP_BACKEND}/like/get/${post._id}`);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/like/get/${post._id}`
      );
      setLikesInfo(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching likes info:", error);
    }
  };
  useEffect(() => {
    fetchLikesInfo(); // Call the fetchLikesInfo function when the component mounts or post ID changes
  }, [post._id]);


  if (deleted) {
    return null;
  }
  

  return (
  <>
    {showDeleteSuccessPopup && <div className={style.popup}><h2>Post deleted successfully.</h2></div>}
    {showUnauthorizedDeletePopup && <div className={style.popup}><h2>You don't have access to delete this post</h2></div>}
    
    
      <div className={style.post}>
        
        <div className={style.header}>
          <img
            src={`${process.env.REACT_APP_BACKEND}/images/${post.userID?.image}`}
            alt="Profile Pic"
            className={style.picture}
          />
          <div className={style.info}>
            <h2 className={style.name}>{post.userID?.name}</h2>
            <p className={style.date}>
              Posted on {post.createdAt.split("T")[0]}
            </p>
          </div>
          <div className={style.menu} onClick={() => setShowMenu(!showMenu)}>
            <i className="ri-more-2-fill"></i>
            {showMenu && (
              <div className={style.dropdown}>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={ handleDeleteClick}>Delete</button>
              </div>
            )}
          </div>
        </div>
        <div>
          {isEditing ? (
            <form onSubmit={handleSubmit} className={style.content}>
              <textarea
                className={style.text}
                name="description"
                value={editedPost.description}
                onChange={handleChange}
              />
              <input type="file" name="image" onChange={handleChange} />
              <div className={style.buttons}>
                <button type="submit">Update</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </form>
          ) : (
            <>
              <p className={style.text}>{post.description}</p>
              <img
                src={`${process.env.REACT_APP_BACKEND}/images/${post.image}`}
                alt=""
                className={style.image}
              />
            </>
          )}
        </div>
        {/* <div className={style.actions}>
          <i
            className={`ri-heart-fill ${isLiked ? style.redHeart : ""} ${style.icon}`}
            // style={{ fontSize: "2rem", fontWeight: 500, cursor: "pointer" }}
            onClick={toggleLike}
          ></i>
          <div>
            
            {likesInfo && (
              <p className={style.liked}>{likesInfo.numberOfLikes}</p>
            )}
          </div>
        </div> */}
        {showConfirmationModal && (
            <div className={style.modal}>
                <div className={style.modalContent}>
                    <h2>Are you sure to delete this post?</h2>
                    <div className={style.modalButtons}>
                        <button onClick={handleDelete}>Yes</button>
                        <button onClick={() => setShowConfirmationModal(false)}>No</button>
                    </div>
                </div>
            </div>
        )}
        
      </div>
      </>
   
  );
};

export default FacebookPost;
