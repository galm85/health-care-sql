import React,{useState} from 'react'
import axios from 'axios';

const Register = () => {

    const [user,setUser] = useState({});

    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleImage = (e)=>{
        setUser({...user,image:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:4000/users',user);
            
        }catch(error){
            console.log(error.data.data.sqlMessage);
        }
        
        
    }


    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Register</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="form-group" onSubmit={handleSubmit}>
                        <input placeholder="First Name" type="text" name="firstName" className="form-control mt-3" onChange={handleChange}/>
                        <input placeholder="Last Name" type="text" name="lastName" className="form-control mt-3" onChange={handleChange}/>
                        <input placeholder="Email" type="email" name="email" className="form-control mt-3" onChange={handleChange}/>
                        <input placeholder="Password" type="password" name="password" className="form-control mt-3" onChange={handleChange}/>
                        <input placeholder="Phone" type="text" name="phone" className="form-control mt-3" onChange={handleChange}/>
                        <input placeholder="Address" type="text" name="address" className="form-control mt-3" onChange={handleChange}/>
                        <input placeholder="City" type="text" name="city" className="form-control mt-3" onChange={handleChange}/>
                        <input placeholder="Birth Year (4 digits)" type="number" name="birthYear" className="form-control mt-3" onChange={handleChange}/>
                        <input placeholder="Image" type="file" name="image" className="form-control mt-3" onChange={handleImage}/>
                        <label className="mt-3" htmlFor="role">Role:</label>
                        <select className="form-control " name="role" id="role" onChange={handleChange}>
                            <option value="user">User</option>
                            <option value="doctor">Doctor</option>
                            <option value="admin">Admin</option>
                        </select>
                        <div className="mt-5 text-center">
                        <button className="btn btn-primary" type="submit mt-3">Register</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Register;