import React, { useState, useEffect } from 'react';
import style from '../profileHome/profileHome.module.css';
import { Link } from 'react-router-dom';
// import Slider from "react-slick";
import axios from 'axios';
import loading from '../../assets/loading.gif'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ProfileHome = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Introducing loading state

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 3000,
    //     cssEase: "linear"
    // };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/getall`);
                setUsers(response.data.Users);
                setIsLoading(false);

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
            {isLoading ? (<div>
            <img src={loading} alt='....Loading' style={{width:'100px'}}></img>
            
        </div> ):(
            <div className={style.content}>
                {/* <Slider {...settings}> */}
                    {users.map((user, index) => (
                        <Link to={`/user/${user._id}`} key={user._id}>
                                <div className={style.row}>
                                    <img src={`${process.env.REACT_APP_BACKEND}/images/${user.image}`} alt={user.name} />
                                    <p>{user.name}</p>
                                </div>
                        </Link>
                    ))}
                {/* </Slider> */}
            </div>
            )}
        </section>
    );
};

export default ProfileHome;
