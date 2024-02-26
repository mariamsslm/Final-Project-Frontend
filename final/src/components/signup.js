import React , {useState} from 'react'
import style from '../components/signup.module.css'
import { Link } from 'react-router-dom';


const Signup = () => {
    const [isSignUp, setIsSignUp] = useState(true); // State to track whether it's sign up or sign in

    const toggleForm = () => {
        setIsSignUp(!isSignUp); // Toggle between sign up and sign in
    };
    return (
        <section className={style.container}>
            
        <article className={style.content}>
            <h1 className={style.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
            <form>
                <div className={style.main}>
                    <div className={style.box}>
                        <label for=" name">Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='name'
                        />
                    </div>
                    <div className={style.box}>
                        <label for="email">Email</label>
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
                    <div className={style.box}>
                        <label for="phone">Phone</label>
                        <input
                            type='text'
                            id='phone'
                            name='phone'
                            placeholder='phone'
                        />
                    </div>
                    <div className={style.box}>
                        <label for="bio">Bio</label>
                        <input
                            type='text'
                            id='bio'
                            name='bio'
                            placeholder='bio'
                        />
                    </div>
                    <div className={style.box}>
                        <label for="image">Picture</label>
                        <input
                            type='file'
                            id='image'
                            name='image'
                            placeholder='picture'
                        />
                    </div>
                </div>
                <div className={style.submitt}>
                    <input type='submit' value='Add'/>
                </div>
            </form>

        </article>
        <div className={style.toggle}>
            <Link to='/login'>
                <button  className={style.toggleButton}  onClick={toggleForm}>{isSignUp ? 'Sign In' : 'Sign Up'}</button>
                </Link>
            </div>
        </section>
        

    )
}
export default Signup;