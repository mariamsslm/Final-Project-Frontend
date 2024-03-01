import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../login/login.module.css';
import useApi from '../../hooks/useApi';

const Login = () => {
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const { apiCall } = useApi();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        if (!formData.email || !formData.password) {
            console.log('Insert Email or Password');
            setLoading(false);
            return;
        }
    
        try {
            // Make API call to login endpoint
            await apiCall({
                url: '/user/login',
                method: 'post',
                data: formData, // Directly use formData object
            });
    
            // Update login success state and navigate to homepage
            setLoginSuccess(true);
            setLoading(false);
            navigate('/');
        } catch (error) {
            // Handle API call errors
            console.error('Login failed:', error);
            setLoading(false);
            // Check for specific errors and display appropriate messages
            if (error.response && error.response.data && error.response.data.errors) {
                const { errors } = error.response.data;
                if (errors.email) {
                    console.log('Email error:', errors.email);
                }
                if (errors.password) {
                    console.log('Password error:', errors.password);
                }
            } else {
                console.log('Unexpected error occurred');
            }
        }
    };
    

    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <section className={style.container}>
            {loginSuccess && <p>Login Successful!</p>}
            <Link to='/'>
                <button className={style.return}>Home</button>
            </Link>

            <article className={style.content}>
                <h1 className={style.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                <form onSubmit={handleSubmit}>
                    <div className={style.main}>
                        <div className={style.box}>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.box}>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className={style.btn}>
                        <input type='submit' value='Login' />
                    </div>
                </form>
            </article>
            <div className={style.toggle}>
                <Link to='/signup'>
                    <p className={style.toggleButton} onClick={toggleForm}>
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </p>
                </Link>
            </div>
        </section>
    );
};

export default Login;
