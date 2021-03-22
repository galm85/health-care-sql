import React,{useState,useEffect} from 'react'
import axios from 'axios';
import DoctorCard from '../components/doctorCard';

const Doctors = () => {
    
    const [doctors,setDoctors] = useState([]);
    
    const getData = async()=>{
        const {data} = await axios.get('http://localhost:4000/doctors');
        setDoctors(data);
    }
    useEffect(()=>{
        getData();
    },[])

    return ( 
        <div className="div">
            <h1>Doctors</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem sunt doloribus, maiores recusandae vel ratione illum facilis tempore rerum a, molestias, expedita impedit nisi debitis commodi minima numquam nulla.
            </p>

                
            <div style={{display:"flex",justifyContent:"space-around",marginTop:'5rem'}}>
                {doctors.map(doctor=>(
                    <DoctorCard key={doctor.id} doctor={doctor}/>
                ))}
            </div>
                
        </div>
     );
}
 
export default Doctors;