import React from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";


const Footer = () => {
    const handleClick = () => {
    Navigate("/");           
    window.scrollTo(0, 0);    // scroll to top
  };
    return (
       <div>
        
         <div className='mt-40 pt-20 pb-5  text-white bg-gray-950'>
            <div className='w-11/12 pb-10 border-b border-dashed border-gray-500 flex md:flex-row flex-col gap-10 items-center justify-between px-5 mx-auto'>
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <Link onClick={handleClick} to="/">
                        <GiOpenBook className='pb-3 text-blue-500 border-white border-b' size={50}/>
                    </Link>
                    <Link onClick={handleClick} to="/">
                        <a className='font-bold poppins text-xl banner-title lg:text-3xl  md:text-2xl'>Book <span className='text-blue-500 '>Nest</span></a>
                    </Link>
                    <p className='flex inter text-sm gap-2 items-center'> <IoCall className='text-blue-600'/> : +8801305208832</p>
                    <p className='flex inter text-sm items-center gap-2'><MdOutlineMarkEmailUnread className='text-yellow-500'/> : abidhasanplabon80@gmail.com</p>
                </div>

                <div className='flex items-center inter gap-1.5 flex-col'>
                    <Link className='hover:underline hover:text-gray-400' to="/terms-of-services"><small>Terms of Services</small></Link>
                    <Link className='hover:underline hover:text-gray-400' to="/privacy-policy"><small>Privacy Policy</small></Link>
                    <Link className='hover:underline hover:text-gray-400' to="/developer-resources"><small>Developer Resources</small></Link>
                    <Link className='hover:underline hover:text-gray-400' to="/cookies-policy"><small>Cookies Policy</small></Link>
                </div>
                
                <div>
                    <h2 className='font-semibold inter text-center lg:text-start text-xl md:text-2xl pb-3 border-b'>Follow Me</h2>
                    <div className='flex mt-4 items-center gap-6'>
                        <a className='text-blue-500  hover:cursor-pointer' href='https://www.facebook.com/plabon48' target='_blank'>
                            <FaFacebook size={23}/>
                        </a>
                        <a className='text-violet-500 hover:cursor-pointer' href='https://github.com/DevAbidHasan' target='_blank'>
                            <IoLogoGithub size={25}/>
                        </a>
                        <a className='text-blue-300 hover:cursor-pointer' href='https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/' target='_blank'>
                            <FaLinkedin size={23}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='pt-5 poppins text-center'>
                <p>&copy; <small>2025 Abid Hasan Plabon. All rights reserved.</small></p>
               
            </div>
        </div>
       </div>
    );
};

export default Footer;