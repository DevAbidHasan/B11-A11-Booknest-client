import React from 'react';
import { Helmet } from 'react-helmet';
import { PiPlant } from "react-icons/pi";
import { Link, NavLink } from 'react-router';

const PrivacyPolicy = () => {
    return (
        <div className='my-10 mb-25 w-11/12 mx-auto'>
            <Helmet>
                <title>
                    BookNest || Privacy Policy
                </title>
            </Helmet>
            <h2 className='text-center mb-5 md:text-3xl sm:text-2xl text-xl poppins font-black'>Privacy Policy</h2> <hr/>
            <p className='text-center text-gray-500 mt-5 inter'>At BookNest, we respect your privacy and are committed to protecting your personal data.</p>
            <ol className='my-12 space-y-3 list-decimal list-inside'>
                <li ><span className='font-bold poppins'>Information We Collect :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter text-gray-500'>Account Info - Name, email, and password.</li>
                    <li className='inter text-gray-500'>Plant Data - Plant names, care logs, reminders.</li>
                    <li className='inter text-gray-500'>Usage Data - Analytics to improve features.</li>
                </ul>
                </li>
                 <li ><span className='font-bold poppins'>How We Use Your Information :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter text-gray-500'>To provide plant care tracking services.</li>
                    <li className='inter text-gray-500'>To send reminders and updates.</li>
                     <li className='inter text-gray-500'>To improve user experience and fix issues.</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Data Protection :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter text-gray-500'>We use secure technologies to store and protect your data.</li>
                    <li className='inter text-gray-500'>We do not sell or rent your data to third parties.</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Third-Party Services :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter text-gray-500'>We may use analytics or hosting providers (e.g., Google Firebase, AWS).</li>
                    <li className='inter text-gray-500'>These services have their own privacy policies.</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Your Rights :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter text-gray-500'>You can request access, correction, or deletion of your data anytime by contacting us.</li>
                    
                </ul>
                </li>
            </ol>
          <div className="flex mt-10 justify-center items-center ">
                <NavLink to="/" className="btn btn-primary w-auto">
                    Go Back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default PrivacyPolicy;