import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Nav from '../components/nav'
// import Footer from '../components/footer'
// import TopFive from '../components/topFive'
// import Hero from '../components/hero'
// import NavBar from '../layout/navBar'
import Container from '../outlet/layout'
import HomePage from '../pages/HomePage'
import Signup from '../components/signup'
import Login from '../components/login'
import Photographs from '../pages/Photographs'
import SmileyFace from '../pages/Drawing'

function AppRoutes() {
    return(
    <Routes>
         
        <Route exact path="/" element={<Container />}>
            <Route path='/' element={<HomePage/>} />
            <Route path='/photo' element={<Photographs/>} />
            <Route path='/profile' element={"<profile/>"} />
            <Route path='/draw' element={<SmileyFace/>} />
            <Route path='/writing' element={"<writing>"} />
           
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    )
}

export default AppRoutes;
