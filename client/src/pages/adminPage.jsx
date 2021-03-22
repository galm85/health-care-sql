import React,{useState,useEffect} from 'react';
import axios from 'axios';
import UsersTable from '../components/usersTable';
import DoctorsTable from '../components/doctorsTable';
import ClinicsTable from '../components/clinicsTable';

const AdminPage = () => {

    const [users,setUsers] = useState([]);
    const [doctors,setDoctors] = useState([]);
    const [clinics,setClinics] = useState([]);

    useEffect(()=>{
       async function getAllData(){
            let users = await axios.get('http://localhost:4000/users');
            setUsers(users.data);
            let doctors = await axios.get('http://localhost:4000/doctors');
            setDoctors(doctors.data);
            let clinics = await axios.get('http://localhost:4000/clinics');
            setClinics(clinics.data);
        }
        getAllData();
    },[])

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center mt-5">
                        Admin Panel
                    </h1>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-10">
                    <h3>Users</h3>
                   <UsersTable users={users}/>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-10">
                    <h3>Doctors</h3>
                   <DoctorsTable doctors={doctors}/>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-10">
                    <h3>Clinic</h3>
                   <ClinicsTable clinics={clinics}/>
                </div>
            </div>
        </div>
     );
}
 
export default AdminPage;