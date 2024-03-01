import React, { createContext, useState , useEffect} from "react";
import axiosInstance from "../utils/axiosInstance";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const [checkUser, setCheckUser] = useState(false);
    const [loading, setLoading] = useState(true); 

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
          await axiosInstance.get("/user/logout");
          setUser(null);
          console.log('success')
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
        </AuthContext.Provider>
    );
};