import React, { useState } from 'react';
import style from '../portfolio/portfolio.module.css';
import profile1 from '../../assets/profile1.jpeg';
import profile2 from '../../assets/profile2.jpeg';
import profile3 from '../../assets/profile3.jpeg';
import profile4 from '../../assets/profile4.jpg';

const Portfoli= () => {
    const [data, setData] = useState([
        {
            name: 'Mariam',
            image: profile1
        },
        {
            name: 'Ali',
            image: profile2
        },
        {
            name: 'Abudi',
            image: profile3
        },
       
    ]);

    return (
        <section className={style.profile}>
            <div className={style.text}>
                <h2>New Artists</h2>
            </div>
            <div className={style.content}>
                    {data.map((profile, index) => (
                            <div className={style.row} key={index}>
                                <div className={style.images}>
                                <img src={profile.image} alt={profile.name} />
                                </div>
                                <h4>{profile.name}</h4>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Portfoli;
