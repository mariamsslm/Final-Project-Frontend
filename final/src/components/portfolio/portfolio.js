import React, { useState, useEffect } from 'react';
import style from '../portfolio/portfolio.module.css';
import axios from 'axios'


const Portfoli= () => {
    const [data, setData] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/user/getlatest');
                setData(response.data.latestUsers);
                console.log(response.data.latestUsers);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchData();
    }, []);
        

    return (
        <section className={style.profile}>
            <div className={style.text}>
                <h2>New Artists</h2>
            </div>
            <div className={style.content}>
                    {data.map((profile, index) => (
                            <div className={style.row} key={index}>
                                <div className={style.images}>
                                <img src={`http://localhost:5000/images/${profile.image}`} alt={profile.name} />
                                </div>
                                <h4>{profile.name}</h4>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Portfoli;
