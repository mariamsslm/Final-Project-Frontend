import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Container from '../outlet/layout'
import HomePage from '../pages/HomePage'
import  PostPage from '../pages/posts'
import Portfolio from '../pages/portfolio'
import AbouUs from '../pages/AboutUs'
import Login from '../components/login/login'
import Signup from '../components/signup/signup'
import GalleryPage from '../pages/gallery'
import PostForm from '../components/FormPost/AddPost/addPost'
import Sidebar from '../pages/dashboard'
import Overview from '../components/Dashboard/overview/overview'
import SingleProfile from '../layout/singleProfile/single'
import EditForm from '../components/FormPost/EditPost/editPost'


function AppRoutes() {
    return(
    <Routes>
         
        <Route exact path="/" element={<Container />}>
            <Route path='/' element={<HomePage/>} />
            <Route path='/posts' element={< PostPage/>} />
            <Route path='/profil' element={<Portfolio/>} />
            <Route path='/about' element={<AbouUs/>} />
            <Route path='/gallery' element={<GalleryPage/>} />
        </Route>

        <Route path="/user/:id" element={<SingleProfile/>} />
        <Route path="/post/:id" element={<EditForm/>} />


        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/add' element={<PostForm/>} />
        <Route path='/dash' element={<Sidebar/>} />
        <Route path='/a' element={<Overview/>} />


    </Routes>
    )
}

export default AppRoutes;
