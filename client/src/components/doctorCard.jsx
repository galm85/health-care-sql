import React from 'react'
import '../styles/components.css';


const DoctorCard = ({doctor}) => {
    return ( 
        <div className="doctor-card">
            <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p><strong>Specialtie: </strong>{doctor.type}</p>
                <p><strong>Address: </strong>  {doctor.clinic_address}, {doctor.city}</p>
                <p><strong>Phone: </strong><a href={`tel:${doctor.phone}`}>{doctor.phone}</a></p>
                <p><strong>Email: </strong><a href={`mailto:${doctor.phone}`}>{doctor.email}</a></p>
                <p><strong>Hours: </strong><br/>{doctor.houres}</p>
                <p><strong>Clinic: </strong>{doctor.title}</p>
                <p><strong>Clinic Phone: </strong>{doctor.clinic_phone}</p>
                <div className="text-center">
                    <button className="btn btn-primary">Set an appointment</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default DoctorCard;