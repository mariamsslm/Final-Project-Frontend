import React, { useState, useEffect } from 'react';
import style from '../../layout/singleProfile/single.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProfile = () => {
    const {_id}  = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/user/get/${_id}`);
                if (response.data.success) {
                    setData(response.data.data);
                } else {
                    setData(null);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchData();
    }, [_id]);

    return (
        <section className={style.about}>
            <div className={style.image}>
                {/* <img src={post.image} alt="Profile" />  */}
            </div>
            <div className={style.text}>
                {data && ( // Only render if data is not null
                    <>
                        <h2>{data.name}</h2>
                        <p>{data.bio}</p>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                        <a href='#' className={style.btn}>Posts</a>
                    </>
                )}
            </div>
        </section>
    );
};

export default SingleProfile;
