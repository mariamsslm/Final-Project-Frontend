import React, { useState, useEffect } from 'react';
import style from '../user/userTable.module.css'; // Import your CSS styles
import axios from 'axios';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [editedUser, setEditedUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bio: '',
        role: ''
    });

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

    const handleEditUser = (user) => {
        setEditedUser(user);
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone,
            bio: user.bio,
            role: user.role
        });
        setEditMode(true);
    };

    const handleCancelEdit = () => {
        setEditedUser(null);
        setFormData({
            name: '',
            email: '',
            phone: '',
            bio: '',
            role: ''
        });
        setEditMode(false);
    };

    const handleSubmitEdit = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_BACKEND}/user/updateByAdmin/${editedUser._id}`, formData);

            if (response.status === 200) {
                setEditMode(false);
                // Refresh data after successful update
                const refreshedResponse = await axios.get(`${process.env.REACT_APP_BACKEND}/user/getall`);
                setUsers(refreshedResponse.data.Users);
            } else {
                console.error('Error updating user:', response.data.error);
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h2>User Table</h2>
                <div className={style.buttons}>
                    <button>Add user</button>
                    <button onClick={handleDeleteAllUsers}>Delete all</button>
                </div>

                {editMode && editedUser ? (
                    <div className={style.editForm}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                        <input type="text" name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" />
                        <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role" />

                        <button onClick={handleSubmitEdit}>Update</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    </div>
                ) : (
                    <table className={style.table}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Bio</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) && users.length > 0 ? (
                                users.map(user => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td><img src={`${process.env.REACT_APP_BACKEND}/images/${user.image}`} alt="Profile Picture" className={style.picture} /></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.bio}</td>

                                        <td>
                                            <i className="ri-pencil-line" onClick={() => handleEditUser(user)}></i>
                                            <i className="ri-delete-bin-7-line" onClick={() => handleDeleteUser(user._id)}></i>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No Users found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default UserTable;
