import React,{useState,useEffect} from 'react'
import axios from 'axios';

const ClinicPage = () => {

    const [clinics,setClinics] = useState([]);

    const getData = async ()=>{
        const {data} = await axios.get('http://localhost:4000/clinics');
        setClinics(data);
    }

    useEffect(()=>{
    
        getData();
    

    },[])

    return ( 
        <div className="contianer">
            <div className="row">
                <div className="col-md-12">
                    <h1>Clinics</h1>
                </div>
            </div>

            <div className="row">
                {clinics.map(clinic=>(
                    <div className="col-md-4" key={clinic.id}>
                        <h3>{clinic.title}</h3>
                        <h5>clinic's details</h5>
                        <p><strong>Address: </strong>{clinic.clinic_address}, {clinic.clinic_city}</p>
                        <p><strong>Phone: </strong>{clinic.clinic_phone}</p>
                        <p><strong>Email: </strong>{clinic.clinic_email}</p>
                        <hr/>
                        <p><strong>Hours: </strong>{clinic.clinic_houres}</p>

                    </div>
                ))}
            
            </div>
        </div>
     );
}
 
export default ClinicPage;