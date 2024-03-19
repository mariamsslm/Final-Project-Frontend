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
// import Sidebar from '../pages/dashboard'
import SingleProfile from '../layout/singleProfile/single'
import EditForm from '../components/FormPost/EditPost/editPost'
import ProtectedRoute from '../routes/potectedRoute'
import AllProfile from '../pages/AllProfiles'
import LayoutWithSidebar from './withSideBar'
import PostTable from '../components/dashboard/tableUser' 
import UserTable from '../components/dashboard/user/userTable'
import Navbar from '../components/Navbar/navbar'
import Overview from '../components/dashboard/overview/overview'
// import  UserTable from '../components/dashboard/tableUser'


function AppRoutes() {
    return(
    <Routes>
         
        <Route exact path="/" element={<Container />}>
        <Route path='/' element={<HomePage/>} />
        <Route path='/oneArtist' element={<Portfolio/>} />
        <Route path='/profil' element={< AllProfile/>} />


            <Route path='/about' element={<AbouUs/>} />
            <Route path='/gallery' element={<GalleryPage/>} />

           
            
            <Route path='/posts' element={<PostPage/>} />
            
            
            <Route path="/user/:_id" element={<SingleProfile/>} />
            
        </Route>


          {/* without navbar and footer */}
        <Route path="/user/:_id" element={<SingleProfile/>} />
        <Route path="/post/:_id" element={<EditForm/>} />


        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/add' element={<PostForm/>} />
        <Route path="/nav" element={<Navbar/>}></Route>
        {/* <Route path="/dodo" element={<Overview/>}></Route> */}


        




        {/* with sideBar */}
        <Route
        path="/dashboard"
        element={
          
            <LayoutWithSidebar>
              {" "}
              <Overview/>
             
            </LayoutWithSidebar>
          
        }
      ></Route>
        <Route
        path="/postTable"
        element={
          
            <LayoutWithSidebar>
              {" "}
              <PostTable/>
             
            </LayoutWithSidebar>
          
        }
      ></Route>
      <Route
        path="/userTable"
        element={
          
            <LayoutWithSidebar>
              {" "}
              <UserTable/>
             
            </LayoutWithSidebar>
          
        }
      ></Route>


    </Routes>
    )
}

export default AppRoutes;
