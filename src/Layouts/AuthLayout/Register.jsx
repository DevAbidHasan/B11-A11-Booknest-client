import React, { use, useContext, useState } from 'react';

import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router';

import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';




const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {createUser, updateUser, setUser}=useContext(AuthContext);
    
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [res, setRes] = useState("");

    const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(value)) {
        setRes("");
      setError(
        "Password must be 5+ chars, include uppercase, lowercase, and a number."
      );
    } else {
        setError("")
      setRes("Password is okay Now.")
    }
  };


    const handleRegistration=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photoURL.value;
        // console.log(email, password);

        // setUser("");
        createUser (email, password)
        .then(res => {
            const user = res.user;
            // console.log(user);

            // update user while creating

            updateUser({displayName:name,photoURL:photo})
            .then((result)=>{
                    setUser({...user, displayName:name, photoURL:photo});
                    Swal.fire({
                        title:"Congratulations ",
                        text :"Registration Successful",
                        icon :"success",
                        button:"OK"
                    })
                    navigate("/");   
            })
            .catch((error)=>{
                // console.log(error);
                    Swal.fire({
                        title :"Failure",
                        text :"Registration Failed, try again !",
                        icon :"error",
                        button :"OK"
                    })
                    setUser(user);
            })
            
        })
        .catch((error)=>{
             Swal.fire({
                        title :"Failure",
                        text :"Registration Failed, try again !",
                        icon :"error",
                        button :"OK"
                    })
                
        })
        
    }

    return (
        <div className="card bg-base-100 mt-10 -mb-20 mx-auto w-full rounded-xs max-w-sm shrink-0 shadow-2xl">
            <Helmet>
                <title>
                   BookNest || User Registration
                </title>
            </Helmet>
                        <h2 className='text-center poppins text-blue-500 font-semibold py-5  mx-7 border-gray-300 border-dashed border-b text-xl'>Register your account</h2>
                        <form onSubmit={handleRegistration} className="card-body inter mx-5">
                            <fieldset className="fieldset">
                                <label className="font-semibold text-md -mt-1 mb-2">Your Name</label>
                            <ToastContainer/>
                            {/* name */}
                            <ToastContainer/>
                            <input name="name" type="text" required className="input w-full rounded-xs bg-base-100 border" placeholder="Enter your name" />
                            <label className="font-semibold text-md -mt-1 mb-2">Photo URL</label>

                            {/* email */}

                            <input name="photoURL" required type="text" className="input w-full rounded-xs bg-base-100 border" placeholder="Enter your Photo URL" />                            
                             <label className="font-semibold text-md -mt-1 mb-2">Email address</label>

                            {/* email */}
                           
                            <input name="email" required type="email" className="input w-full rounded-xs bg-base-100 border" placeholder="Enter your email address" />
                            
                            <label className="font-semibold text-md -mt-1 mb-2">Password</label>

                            {/* email */}

                            <input onChange={handlePasswordChange} name="password" required type="text" className="input w-full rounded-xs bg-base-100 border" placeholder="Enter your password" />
                             {error && <p className="text-red-500 mt-2 text-xs">{error}</p>}
                             {res && <p className="text-green-600 mt-2 text-xs">{res}</p>}
                            <button type="submit" className="btn btn-primary my-1">Register</button>
                            <p className='text-center font-semibold text-md text-accent'>Already Registered ? <Link className='font-bold text-secondary' to="/login">Login</Link></p>
                            </fieldset>
                        </form>
        </div>
    );
};

export default Register;