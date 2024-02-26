import React ,{useState} from 'react'
import style from '../components/login.module.css'
import { Link } from 'react-router-dom';


const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp); 
    };
    return (
        <section className={style.container}>
            <article className={style.content}>
                <h1 className={style.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                <form>
                    <div className={style.main}>
                    <div className={style.box}>
                            <label htmlFor="email">Email</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='email'
                            />
                        </div>
                        <div className={style.box}>
                        <label for="password">Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                        
                    </div>
                    <div className={style.submitt}>
                    <input type='submit' value='Login'/>
                </div>
                </form>
            </article>
            <div className={style.toggle}>
                <Link to='/signup'>
                <button className={style.toggleButton} onClick={toggleForm}>{isSignUp ? 'Sign In' : 'Sign Up'}</button>
                </Link>
            </div>
        </section>
    );
};
export default Login;