import React from 'react';
import axios from 'axios';

const DoctorsTable = ({doctors}) => {


    const removeDoctor = async(id)=>{
       
            await axios.delete(`http://localhost:4000/doctors/${id}`);
          
    }

    

    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Type</th>
                    <th>Clinic</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {doctors.map((doctor,index)=>(
                    <tr key={doctor.id}>
                        <td>{index+1}</td>
                        <td>{doctor.name}</td>
                        <td>{doctor.city}</td>
                        <td>{doctor.email}</td>
                        <td>{doctor.phone}</td>
                        <td>{doctor.type}</td>
                        <td>{doctor.title}</td>
                        <td><button className="btn btn-primary" onClick={()=>{removeDoctor(doctor.id)}}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default DoctorsTable;