import React, { useState, useEffect } from 'react';
import style from '../profileHome/profileHome.module.css';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfileHome = () => {
    const [users, setUsers] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/user/getall`);
                setUsers(response.data.Users);

                console.log(response.data.Users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <section className={style.profile}>
            <h2 className={style.text}>Artists</h2>
            <div className={style.content}>
                <Slider {...settings}>
                    {users.map((user, index) => (
                        <Link to={`/user/${user._id}`} key={user._id}>
                                <div className={style.row}>
                                    <img src={`http://localhost:5000/images/${user.image}`} alt={user.name} />
                                    <h4 >{user.name}</h4>
                                </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ProfileHome;
