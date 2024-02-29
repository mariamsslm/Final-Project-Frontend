import React, { useState } from 'react'
import SecondHero from '../components/secondHero/secondHero'
// import FacebookPost from '../components/facebook/facebook'
import CreatePost from '../components/CreatePost/CreatePost'
// import Profiles from '../components/profile/profile'
// import Post from '../components/posts/post'
import FacebookSection from '../components/facebook/facebookSection'
import FacebookDrawings from '../components/facebook/fetchDrawings'
import FacebookPhotographs from '../components/facebook/fetchPhotographs'
import  FacebookWritings from '../components/facebook/fetchWritings'
import { usePostContext } from '../context/PostContext'

const PostPage = ()=>{

    const { isSection, isDrawing, isPhotograph, isWriting } = usePostContext()

    return(
        <div>-
        <SecondHero/>
        <CreatePost/>
        { isSection && <FacebookSection/> }
        { isDrawing && <FacebookDrawings/> }
        { isPhotograph && <FacebookPhotographs/> }
        { isWriting && <FacebookWritings/> }

        
        {/* <Profiles/> */}
        {/* <Post/> */}
        </div>

    )
}

export default PostPage;