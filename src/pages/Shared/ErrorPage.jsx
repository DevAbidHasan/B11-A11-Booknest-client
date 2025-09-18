import React, { useEffect } from 'react';
import { NavLink } from 'react-router';
// import errorImage from '../../public/error.jpeg'
import { toast, ToastContainer } from 'react-toastify';
import img from "../../../public/error.json";
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    useEffect(()=>{
        toast.error("⚠️ ERROR, Webpage Not Found !!!");
    },[])
    return (
        
        <div className='flex inter items-center mt-10 md:mt-20 flex-col justify-center'>
            {/* <img className='max-w-[300px]' src={errorImage} alt="" /> */}
            <Helmet>
                <title>
                    BookNest || Page Not Found - 404
                </title>
            </Helmet>
            <div>
                <Lottie className='w-[320px] mb-4' animationData={img}></Lottie>
            </div>
            <ToastContainer/>
            <h2 className='text-center text-red-600'>404 Not Found 😵 ❌ ❌</h2>
            <div className="flex mt-10 justify-center items-center ">
                <NavLink to="/" className="btn btn-primary w-auto">
                    Go Back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;