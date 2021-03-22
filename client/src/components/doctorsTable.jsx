import React from 'react';

const DoctorsTable = ({doctors}) => {
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
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default DoctorsTable;