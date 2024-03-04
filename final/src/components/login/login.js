import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../login/login.module.css';
import useApi from '../../hooks/useApi';
import axios from 'axios'
import { AuthContext } from '../../context/authContext';

const Login = () => {

    const {setUser, fetchUserData, fetchUserDataone ,user } = useContext(AuthContext)
    const navigate = useNavigate();
    const { apiCall } = useApi();
    const [isPending, setIsPending] = useState(false);
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

    async function getUser() {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND}/user/login`,
            formData
          );
          if (response) {
            console.log(response.data);
            setUser(response.data.token.data);
          }
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        getUser();
      }, []);



      const handleSubmit = async (event) => {
        event.preventDefault();
        setIsPending(true);
        if (!formData.email || !formData.password) {
          setIsPending(false);
    
          return;
        }
    
        setFormData({
          email: "",
          password: "",
        });
    
        try {
          const res = await apiCall({
            url: "/user/login",
            method: "post",
            data: {
              email: formData.email,
              password: formData.password,
            },
          });
          setUser(res.token.data.role);
          console.log("user:", user);
          console.log("resis", res);
          console.log("role", res.token.data.role);
          console.log("call auth");
          // fetchUserData();
          fetchUserDataone();
          console.log('loged successfule');
          setIsPending(false);
          if (res.token.data.role === "admin") {
            navigate("/dashboard");
          } else if (res.token.data.role === "user") {
            navigate("/");
        }} 
        catch (error) {
          if (error.response && error.response.data && error.response.data.errors) {
            const { errors } = error.response.data;
    
            if (errors.email) {
              const emailError = errors.email;
              console.log(emailError);
            }
            if (errors.password) {
              const passwordError = errors.password;
              console.log(passwordError);
            }
          } else {
            console.log(error.message);
          }
          setIsPending(false);
        }
      };
    





    
    

    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <section className={style.container}>
          <div className={style.return}>
            <Link to='/'>
              <i class="ri-expand-left-fill" style={{color:'white'}}>Home</i>
                
            </Link>
            </div>

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
