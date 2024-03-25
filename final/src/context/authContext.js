import React, { createContext, useState , useEffect} from "react";
import axiosInstance from "../utils/axiosInstance";
import style from '../context/authcontext.module.css'

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [checkUser, setCheckUser] = useState(false);
    const [loading, setLoading] = useState(true); 
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate()

    // Function to fetch user data
    const fetchUserData = async (email,password) => {
        try {
            setCheckUser(true);
            const response = await axiosInstance.post("/user/login",{
                email,
                password,
            });
            console.log(response.data);
            setUser(response.data.token.data);
        } catch (error) {
            console.error("Error fetching user data", error);
            setUser(null);
        } finally {
            setCheckUser(false);
            setLoading(false); 
        }
    };


    const fetchUserDataone = async () => {
        try {
          console.log("authcontext process");
          setCheckUser(true);
          const response = await axiosInstance.get(
            `${process.env.REACT_APP_BACKEND}/user/getone`,
            {
              withCredentials: true,
            }
          );
          console.log("fetchuserdata", response);
          setUser(response.data);
        } catch (err) {
          console.log(err);
          setUser(null);
        } finally {
          setCheckUser(false);
        }
      };

      const logout = async () => {
        try {
          await axiosInstance.post("/user/logout");
          setUser(null);
          console.log('success')
          setShowPopup(true);
          setTimeout(() => {
                navigate("/");
                setShowPopup(false)
        }, 1000); 
        } catch (error) {
          console.error("Logout error:", error);
        }
      };
     
    

      useEffect(() => {
        fetchUserDataone();
      }, []);

    

    // Provide the context value to the children
    return (
        <AuthContext.Provider
            value={{ user, setUser, checkUser, fetchUserData , logout,loading,fetchUserDataone }}>
            {children}
            {showPopup && (
                <div className={style.popup}>
                    <div className={style.popupContent}>
                        <h2>Logout Successful!</h2>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </AuthContext.Provider>
    );
};