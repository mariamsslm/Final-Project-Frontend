
// UserTable.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import style from '../dashboard/table.module.css'

// const UserTable = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/getall`); // Assuming endpoint for fetching users
//                 setUsers(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };

//         fetchUsers();
//     }, []);

//     return (
//         <div className={style.tableContainer}>
//             <h2>User Table</h2>
//             <table className={style.table}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Bio</th>
//                         <th>Image</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Array.isArray(users) && users.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.phone}</td>
//                             <td>{user.bio}</td>
//                             <td>{user.image}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
    
// };

// export default UserTable;
