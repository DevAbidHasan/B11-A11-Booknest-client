import React from 'react';
import { Helmet } from 'react-helmet';
import { PiPlant } from "react-icons/pi";
import { Link, NavLink } from 'react-router';

const DeveloperResources = () => {
    return (
        <div className='my-10 mb-25 w-11/12 mx-auto'>
            <Helmet>
                <title>
                    BookNest || Developer Resources
                </title>
            </Helmet>
            <h2 className='text-center mb-5 md:text-3xl sm:text-2xl text-xl poppins font-black'>Developer Resources</h2> <hr/>
            <p className='text-center mt-5 inter'>Welcome developers ! 🌿
                If you want to integrate or build on top of <span className='font-bold text-blue-600'>BookNest</span>, here are some resources:</p>
            <ol className='my-12 space-y-3 list-decimal list-inside'>
                <li ><span className='font-bold poppins'>API Access (Future Release) :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>We plan to provide APIs for plant data, reminders, and care tips.</li>
                    <li className='inter'>Endpoints will be secured via API keys.</li>
                </ul>
                </li>
                 <li ><span className='font-bold poppins'>Open Source Contributions :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>We may open source certain components of PlantPal.</li>
                    <li className='inter'>Developers can contribute via GitHub.</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Documentation :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>Guides for authentication, endpoints, and integrations will be published soon.</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Support :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>For questions, email us at [<span className='italic text-blue-600 hover:underline'>developer@plantpal.com</span>
].</li>
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

export default DeveloperResources;