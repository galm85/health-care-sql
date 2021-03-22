import React from 'react';
import axios from 'axios';

const UsersTable = ({users}) => {

    const removeUser = async(id)=>{
        await axios.delete(`http://localhost:4000/users/${id}`)
        window.location = 'admin';
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Birth Year</th>
                    <th>Role</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={user.id}>
                        <td>{index+1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address}</td>
                        <td>{user.city}</td>
                        <td>{user.birthYear}</td>
                        <td>{user.role}</td>
                        <td><button className="btn btn-danger" onClick={()=>removeUser(user.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default UsersTable;