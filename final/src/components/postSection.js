import React ,{useState} from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import style from '../components/postSection.module.css'
import Card from '../components/Card' 
import image from '../assets/image1.jpg'
import imag from '../assets/image2.jpg'
import ima from '../assets/sah.jpg'
import im from '../assets/images.jpeg'
import i from '../assets/mariam.jpg'
import ii from '../assets/photo.jpg'

const PostSection=()=>{
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    //   };
    const [posts , setPosts] =useState([
        {
            id:1,
        image : image,
        text:'mariam'

        },
        {  id:2,
            image:imag,
            text:'mhamad'
        },
        {  id:3,
            image:ima,
            text:'Ahmad'
        },
        {   id:4,
            image:im,
            text:'Abudi'
        },
        {   id:5,
            image:i,
            text:'Jamal'
        },
        {   id:6,
            image:ii,
            text:'Samira'
        }

    ])
    return (
        <section className={style.container}>

            <h2 className={style.title}>Photographs</h2>
            <article className={style.content}>
            {/* <Slider {...settings}> */}
                {posts.map((post)=>(
                    <Card
                    key={post.id}
                    post={post}/>
                ))}
                {/* </Slider> */}

            </article>
        </section>

    )
}
export default PostSection;