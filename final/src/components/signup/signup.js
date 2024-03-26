import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../signup/signup.module.css';
import axiosInstance from '../../utils/axiosInstance';
import { AuthContext } from '../../context/authContext';

const Signup = () => {

    const [showPopup, setShowPopup] = useState(false);
    const {setUser} = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState('user');
    const [bio, setBio] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('role', role);
            formData.append('bio', bio);
            formData.append('phone', phone);
            formData.append('image', image);
    
            const response = await axiosInstance.post("/user/signup", formData);
            setUser(response.data.token.data)
            console.log(setUser)
            console.log(response);
            console.log('success');
            setShowPopup(true);
            
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            console.error('Error during signup:', error);
        }
    
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setRole("user");
        setBio("");
        setPhone("");
        setImage("");
    };

    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <section className={style.container}>
            <div className={style.return}>
            <Link to='/'>
              <i class="ri-expand-left-fill">Home</i>
                
            </Link>
            </div>

            <article className={style.content}>
                <h1 className={style.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                <div className={style.scrollableContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={style.main}>
                        <div className={style.box}>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Name'
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className={style.box}>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email'
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className={style.box}>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='Password'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className={style.box}>
                            <input
                                type='text'
                                id='phone'
                                name='phone'
                                placeholder='Phone'
                                value={phone}
                                onChange={handlePhoneChange}
                            />
                        </div>
                        <div className={style.box}>
                            <textarea
                                id="bio"
                                name="bio"
                                placeholder="Bio"
                                value={bio}
                                onChange={handleBioChange}
                            />
                        </div>
                        <div className={style.box}>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                placeholder='Picture'
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className={style.btn}>
                        <input type='submit' value='Sing up' disabled={loading} />
                    </div>
                </form>
               
                <div className={style.toggle}>
                    <p>If you have an account</p>
                <Link to='/login'>
                    <p className={style.toggleButton} onClick={toggleForm}>{isSignUp ? 'Sign In' : 'Sign Up'}</p>
                </Link>
            </div>
            </div>
            </article>
            {showPopup && (
                <div className={style.popup}>
                    <div className={style.popupContent}>
                        <h2>Register Successful!</h2>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}

          
        </section>
    );
};

export default Signup;
