import React from 'react';

const ClinicsTable = ({clinics}) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Clinic</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {clinics.map((clinic,index)=>(
                    <tr key={clinic.id}>
                        <td>{index+1}</td>
                        <td>{clinic.clinic_title}</td>
                        <td>{clinic.clinic_city}</td>
                        <td>{clinic.clinic_email}</td>
                        <td>{clinic.clinic_phone}</td>
                        <td>{clinic.clinic_address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default ClinicsTable;