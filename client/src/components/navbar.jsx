import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {


    const [user,setUser] = useState(null);
    useEffect(()=>{
        const getUser = ()=>{
            if(localStorage.getItem('mediacalUser')){
                setUser(JSON.parse(localStorage.getItem('mediacalUser')));
            }
        }
        getUser();
    },[])

    return ( 
        <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Health <i class="fas fa-user-md"></i> Care</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample04">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/doctors">Doctors</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/clinics">Clinics</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav  mb-2 mb-md-0">
                        {user && (
                            <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/profile">{user.firstName}</Link>
                        </li>
                        )}
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/sign-in">Sign In</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register">Register</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/admin">Admin</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
     );
}
 
export default Navbar;