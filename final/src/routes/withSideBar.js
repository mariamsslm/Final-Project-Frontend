import React from "react";
// import Sidebar from '../layout/sideBar/sideBar';
import Sidebar from "../components/dashboard/Sidebar/Sidebar";


function LayoutWithSidebar({ children }) {
    return (
        <>
            <div


            >
                {" "}
                <Sidebar />
                {children}
            </div>
        </>
    );
}

export default LayoutWithSidebar;