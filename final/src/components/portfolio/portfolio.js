import React, { useState, useEffect } from 'react';
import style from '../portfolio/portfolio.module.css';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Portfoli= () => {
    const [data, setData] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/getlatest`);
                setData(response.data.latestUsers);
                console.log(response.data.latestUsers);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchData();
    }, []);
        

    return (
       
        <section >
            <div className={style.text}>
                <h2>New Artists</h2>
            </div>
            <div className={style.content}>
                    {data.map((profile, index) => (
                         <Link to={`/user/${profile._id}`} key={profile._id}>
                            <div className={style.row} key={index}>
                                <div className={style.images}>
                                <img src={`${process.env.REACT_APP_BACKEND}/images/${profile.image}`} alt={profile.name} />
                                </div>
                                <p>{profile.name}</p>
                        </div>
                        </Link>
                    ))}
            </div>
        </section>
       
    );
};

export default Portfoli;
