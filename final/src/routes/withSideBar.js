import React from "react";
import Sidebar from '../layout/sideBar/sideBar';


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