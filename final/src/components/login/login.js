import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import style from '../login/login.module.css'


const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

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
                <form>
                    <div className={style.main}>
                    <div className={style.box}>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='email'
                            />
                        </div>
                        <div className={style.box}>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                        
                    </div>
                    <div className={style.btn}>
                    <input type='submit' value='Login'/>
                </div>
                </form>
            </article>
            <div className={style.toggle}>
                <Link to='/signup'>
                <p className={style.toggleButton} onClick={toggleForm}>{isSignUp ? 'Sign In' : 'Sign Up'}</p>
                </Link>
            </div>
        </section>
    );
};
export default Login;