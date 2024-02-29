import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import style from '../signup/signup.module.css'
import useApi from '../../hooks/useApi';
import axiosInstance from '../../utils/axiosInstance';


const Signup = () => {

    const [loading, setLoading] = useState(false);
    const { apiCall } = useApi();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      role: 'user',
      bio:"",
      phone:"",
      image:"",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
          const response = await axiosInstance.post("/user/signup", formData);
          console.log(response)
          console.log('success')
          navigate("/")
        } catch (error) {
          if (error.response && error.response.data && error.response.data.errors) {
            const { errors } = error.response.data;
    
            if (errors.email) {
              const emailError = errors.email;
              console.log(emailError)
            }
            if (errors.password) {
              const passwordError = errors.password;
              console.log(passwordError)
            }
          } else {
            console.log('error')
          }
          setLoading(false);
        }
    
        setFormData({
            name: "",
            email: "",
            password: "",
            role: 'user',
            bio:"",
            phone:"",
            image:"",
        });
      };


    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };
    return (
        <section className={style.container}>
            <Link to='/'>
            <button className={style.return}>Home</button>
            </Link>

            <article className={style.content}>
                <h1 className={style.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                <form onSubmit={handleSubmit}>
                    <div className={style.main}>
                        <div className={style.box}>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Name'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.box}>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.box}>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='Password'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.box}>
                            <input
                                type='text'
                                id='phone'
                                name='phone'
                                placeholder='Phone'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.box}>
                            <textarea
                                id="bio"
                                name="bio"
                                placeholder="Bio"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.box}>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                placeholder='Picture'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className={style.btn}>
                        <input type='submit' value='Add' />
                    </div>
                </form>

            </article>
            <div className={style.toggle}>
                <Link to='/login'>
                    <p className={style.toggleButton} onClick={toggleForm}>{isSignUp ? 'Sign In' : 'Sign Up'}</p>
                </Link>
            </div>
        </section>


    )
}
export default Signup;