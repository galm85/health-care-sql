import React,{useState,useEffect} from 'react'
import axios from 'axios';

const AddDoctor = () => {

    const [doctor,setDoctor] = useState({});
    const [clinics,setClinics] = useState([]);

    const getClinics = async()=>{
        const {data} = await axios.get('http://localhost:4000/clinics');
        setClinics(data);
    }

    useEffect(()=>{
        getClinics();
    },[])

    const handleChange = e=>{
        setDoctor({...doctor,[e.target.name]:e.target.value})
    }

    const handleSubmit =async e=>{
        e.preventDefault();
        try {
            const {data} = await axios.post('http://localhost:4000/doctors',doctor);
            alert (data);
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Add a Doctor</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" name="name" id="name" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="clinic_id">Clinic:</label>
                            <select name="clinic_id" id="clinic_id" className="form-control" onChange={handleChange}>
                                <option value="">Choose a clinic</option>
                                {clinics.map(clinic=>(
                                    <option key={clinic.id} value={clinic.id}>{clinic.title}</option>
                                ))}
                            </select>

                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input type="text" className="form-control" name="city" id="city" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" className="form-control" name="phone" id="phone" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" name="email" id="email" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type:</label>
                            <input type="type" className="form-control" name="type" id="type" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="houres">Hours:</label>
                            <textarea  className="form-control" rows="10" name="houres" id="houres" onChange={handleChange}></textarea>
                        </div>
                        <div className="text-center mt-4">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddDoctor;