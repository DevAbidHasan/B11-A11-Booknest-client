import React from 'react';
import { Helmet } from 'react-helmet';
import { PiPlant } from "react-icons/pi";
import { Link, NavLink } from 'react-router';

const CookiesPolicy = () => {
    return (
        <div className='my-10 mb-25 w-11/12 mx-auto'>
            <Helmet>
                <title>
                    BookNest || Cookies Policy
                </title>
            </Helmet>
            <h2 className='text-center mb-5 md:text-3xl sm:text-2xl text-xl poppins font-black'>Cookies Policy</h2> <hr/>
            <p className='text-center mt-5 inter'><span className='font-bold  text-blue-600'>BookNest </span>uses cookies to improve your browsing experience.</p>
            <ol className='my-12 space-y-3 list-decimal list-inside'>
                <li ><span className='font-bold poppins'>What Are Cookies? :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>Cookies are small files stored on your device to remember preferences and enhance your experience.</li>
                </ul>
                </li>
                 <li ><span className='font-bold poppins'>Types of Cookies We Use :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>Essential Cookies: Required for login and basic functionality.</li>
                    <li className='inter'>Performance Cookies: Help us analyze how users interact with PlantPal.</li>
                    <li className='inter'>Preference Cookies: Remember your settings (e.g., theme, language).</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Managing Cookies :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>You can manage or disable cookies in your browser settings.</li>
                    <li className='inter'>Some features may not work properly without cookies.</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Updates :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>We may update our cookie policy from time to time.</li>
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

export default CookiesPolicy;