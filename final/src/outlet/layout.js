import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from '../layout/nav';
import Footer from '../layout/footer'

function Container() {
  return (
    <div>
      <Nav/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Container;