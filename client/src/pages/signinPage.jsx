import React,{useState} from 'react';
import axios from 'axios';

const SigninPage = () => {

    const [user,setUser] = useState({});

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post('http://localhost:4000/users/sign-in',user);
            localStorage.setItem('mediacalUser',JSON.stringify(data));
            alert(`Welcome Back ${data.firstName}`);
            window.location ='/';
        }catch(error){
            alert(error.response.data);
        }
    }


    return ( 
       <div className="container">
           <div className="row">
               <div className="col-md-12">
                   <h1 className="text-center">Sign In</h1>
               </div>
           </div>

           <div className="row justify-content-center">
               <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <input type="email" name="email" placeholder="Email" className="form-control mt-5" onChange={handleChange}/>
                            <input type="password" name="password" placeholder="Password" className="form-control mt-5" onChange={handleChange}/>
                            <div className="mt-5 text-center">
                                <button className="btn btn-outline-primary">Sign in</button>
                            </div>
                        </form>
               </div>
           </div>
       </div>
     );
}
 
export default SigninPage;