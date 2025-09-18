import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router';

const TermsOfServices = () => {
    return (
        <div className='w-11/12 space-y-5 mx-auto'>
            <Helmet>
                <title>
                    BookNest || Terms of Services
                </title>
            </Helmet>
            <h2 className='my-10 poppins text-center font-black text-3xl'>Terms of Services</h2>
            <p className='inter text-gray-500'>Welcome to BookNest. By accessing or using our website, application, or services, you agree to be bound by the following Terms of Service. Please read them carefully.</p>
            <hr/>
            <h2>1. <span className='font-bold poppins'>Acceptance of Terms :</span> <span className='text-gray-500 inter'>By registering for an account, accessing, or using our services, you agree to comply with and be legally bound by these Terms. If you do not agree, you may not use our services.</span></h2>

            <h2>2. <span className='font-bold poppins'>Eligibility :</span> <span className='text-gray-500 inter'>You must be at least 13 years old (or the minimum legal age in your country) to use this site. By using our services, you confirm that you meet this requirement.</span></h2>

            <h2>3. <span className='font-bold poppins'>User Accounts :</span> <span  className='text-gray-500'>
                <li className='ml-5 inter md:ml-12'>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li className='ml-5 inter md:ml-12'>You agree to provide accurate and updated information during registration.</li>
                <li className='ml-5 inter md:ml-12'>You are solely responsible for all activities under your account.</li>
               
            </span></h2>

            <h2>4. <span className='font-bold poppins'>Use of Services :</span> <span className='text-gray-500'>
            <li className='ml-5 inter md:ml-12'>You may use this platform to search, borrow, manage, and return library resources in compliance with library policies.</li>    
            <li className='ml-5 inter md:ml-12'>You agree not to misuse the site (e.g., attempting unauthorized access, introducing malware, or scraping data).</li>    
            <li className='ml-5 inter md:ml-12'>We reserve the right to suspend or terminate accounts that violate these terms.</li>    
            </span></h2>

            <h2>5. <span className='font-bold poppins'>Content & Intellectual Property :</span> <span className='text-gray-500'>
            <li className='ml-5 inter md:ml-12'>All content on this site (including software, design, and database) belongs to BookNest or its licensors.</li>
            <li className='ml-5 inter md:ml-12'>You may not copy, modify, distribute, or exploit any part of the service without prior written permission.</li>
            </span></h2>

            <h2>6. <span className='font-bold poppins'>Limitation of Liability :</span> <span className='text-gray-500'>
            <li className='ml-5 inter md:ml-12'>We strive to provide reliable services, but we cannot guarantee uninterrupted or error-free access.</li>    
            <li className='ml-5 inter md:ml-12'>We are not responsible for any direct, indirect, or incidental damages arising from your use of our services.</li>    
            </span></h2>

            <h2>7. <span className='font-bold poppins'>Termination :</span> <span className='text-gray-500'>
            We may suspend or terminate your account if you:
            <li className='ml-5 inter md:ml-12'>Violate these Terms,</li>    
            <li className='ml-5 inter md:ml-12'>Misuse the platform, or</li>    
            <li className='ml-5 inter md:ml-12'>Engage in fraudulent or harmful activity.</li>    
            </span></h2>

            <h2>8. <span className='font-bold poppins'>Changes to Terms :</span> <span className='text-gray-500 inter'>We may update these Terms of Service at any time. Changes will be posted on this page with the “Effective Date” updated. Continued use of our services after changes means you accept the new terms.</span></h2>
            <div className="flex mt-10 justify-center items-center ">
                <NavLink to="/" className="btn btn-primary w-auto">
                    Go Back to Home
                </NavLink>
            </div>

           
        </div>
    );
};

export default TermsOfServices;