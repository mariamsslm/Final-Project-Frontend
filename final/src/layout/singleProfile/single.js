import React, { useState, useEffect } from 'react';
import style from '../../layout/singleProfile/single.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Portfoli   from '../../components/portfolio/portfolio'

const SingleProfile = () => {
    const { _id } = useParams();
    const [data, setData] = useState(null);

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

    return (
        <section >
            <article className={style.about}>
            <div className={style.image}>
                {/* Uncomment and replace 'post.image' with the correct source */}
                {data && <img src={`${process.env.REACT_APP_BACKEND}/images/${data.image}`} alt="Profile" />}
            </div>
            <div className={style.text}>
                {data && (
                    <>
                        <h2>{data.name}</h2>
                        <p>{data.bio}</p>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                        <a href='#' className={style.btn}>See posts</a>
                    </>
                )}
            </div>
          
            </article>
            <article><Portfoli/></article>
        </section>
        
        
        
    );
};

export default SingleProfile;
