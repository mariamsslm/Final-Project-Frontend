import React , {useState,useEffect} from 'react'
import style from '../components/hero.module.css'


const Hero=()=>{
    const welcomeText = "Welcome to our websitee";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % welcomeText.length);
        }, 350); 

        return () => clearInterval(intervalId);
    }, []);

    const displayedText = welcomeText.substring(0, index);

    return (
        <div className={style.hero}>
            <h1>{displayedText}</h1>
            <div className={style.content}>
                
                <p>Unlock Your Creative Potential</p>
                <a href='' className={style.btn}>Get Started</a>
            </div>
        </div>
    );
};
export default Hero;