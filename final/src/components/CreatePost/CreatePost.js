import React from 'react';
import style from '../CreatePost/CreatePost.module.css'
import { Link } from 'react-router-dom';


const CreatePost=()=>{
    return(
        <div className={style.row}>
        <div className={style.image}>
            <Link to='/add'>
        <i class="ri-add-line"></i>
        </Link>
        </div>
        <h4>Add Post</h4>
    </div>

    )
}
export default CreatePost;

