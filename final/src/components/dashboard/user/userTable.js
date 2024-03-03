import React, { useState, useEffect } from 'react';
import style from '../user/userTable.module.css'; // Import your CSS styles
import axios from 'axios';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/getall`); 
                setUsers(response.data.Users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND}/user/delete/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleDeleteAllUsers = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND}/user/deleteAll`); 
            setUsers([]);
        } catch (error) {
            console.error('Error deleting all users:', error);
        }
    };

    return (
        <div className={style.container}>
            <h2>User Table</h2>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Bio</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                {Array.isArray(users) ? (
                        users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.bio}</td>
                            <td>{user.phone}</td>
                            <td><img src={`${process.env.REACT_APP_BACKEND}/images/${user.image}`} alt="Profile Picture" className={style.picture} /></td>

                            <td>
                            <i class="ri-delete-bin-7-line" onClick={() => handleDeleteUser(user._id)}></i>
                            </td>
                        </tr>
                   ))
                   ) : (
                       <tr>
                           <td colSpan="5">No Users found</td>
                       </tr>
                   )}
                </tbody>
            </table>
            <button onClick={handleDeleteAllUsers}>Delete All Users</button>
        </div>
    );
};

export default UserTable;
