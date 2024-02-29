import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../layout/footer/footer'

import Navbar from '../components/Navbar/navbar';

function Container() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
     
    </div>
  );
}

export default Container;