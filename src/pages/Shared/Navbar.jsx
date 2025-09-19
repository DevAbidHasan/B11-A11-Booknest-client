import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

import Swal from 'sweetalert2';
import { FaUserSecret } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {

  const {user, logout}=useContext(AuthContext);

  const handleLogOut=()=>{
    logout()
    .then((result)=>{
      Swal.fire({
        title: "Logout Successful",
        icon: "warning",
        timer: 1500,
        draggable: false
      });
    })
    .catch((error)=>{
      Swal.fire({
        title: "Logout Failed",
        icon: "error",
        timer: 1500,
        draggable: false
      });
    })
  }

  const [isOpen, setIsOpen]=useState(false);
  const toggleMenu=()=>{
    setIsOpen(!isOpen);
    
  }

  useEffect(()=>{
    if(isOpen) {
      document.body.classList.add("no-scroll");
    }
    else {
      document.body.classList.remove("no-scroll");
    }
  },[isOpen])

  useEffect(()=>{
    const handleResize=()=>{
        if(window.innerWidth>=768){
          setIsOpen(false);
        }
    }
    window.addEventListener('resize', handleResize);

    return () =>{
      window.removeEventListener('resize', handleResize);
    }
  },[])

  return (
   <div className='bg-gray-900 poppins py-2.5'>
     <nav className=' w-11/12 mx-auto text-white'>
      <div className='flex items-center justify-between'>
        <div className='z-20  text-2xl font-bold'>
         <Link to="/">📚Book<span className="text-blue-500 ">Nest</span></Link>
        </div>
        <div className='flex items-center justify-center gap-3 sm:gap-6'>
          
          {
              user && (
                <img className='border z-20 md:hidden flex bg-green-500 object-cover rounded-full h-[30px] w-[30px] border-green-800' title={user.displayName} src={user ? user.photoURL: "https://i.ibb.co.com/qYbhkjWj/image.png"}  alt="" onError={(e) => { e.target.src = "https://i.ibb.co/qYbhkjWj/image.png"; }} />
              ) 
            }
        {
          !isOpen && (
            <div onClick={toggleMenu} className='cursor-pointer hover:text-green-500 md:hidden'>
              <HiMenu size={30}/>
            </div>
          )
        }
        {
          isOpen && (
            <div onClick={toggleMenu} className='cursor-pointer hover:text-red-500 z-20 md:hidden '>
              
              <IoCloseSharp size={30}/>
            </div>
          )
        }
        </div>
       {
        isOpen ? <div className='bg-gray-700 overflow-y-hidden fixed z-10 top-0 pt-10 left-0 w-screen flex flex-col items-center justify-center gap-5 duration-300 ease-in min-h-[380px] max-h-screen'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/all-books">All Books</NavLink>
          <NavLink to="/add-book">Add Book</NavLink>
          <NavLink to="/borrowed-books">Borrowed Books</NavLink>
          <div >
            
            {
              user ? (<Link to="/dashboard" className="btn btn-primary">
                Dashboard
              </Link>) : ("")
            }
          </div>
          <div  className="">{user ? (<button onClick={handleLogOut} className='btn btn-warning'>Logout</button>) : (<Link className='btn' to="/login">Login</Link>)}</div>
          <div>
            {
              !user ? (<Link to="/register" className="btn btn-success">Register</Link>) : ("")
            }
          </div>
        </div> : <div className='bg-gray-800 overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen flex flex-col items-center justify-center gap-5 duration-300 ease-in min-h-[380px] max-h-screen'></div>
       }
        <div className='md:flex text-gray-300  md:gap-5 lg:gap-11 items-center justify-center hidden '>
          <NavLink to="/" className="hover:text-white ">Home</NavLink>
          <NavLink  className="hover:text-white " to="/all-books">All Books</NavLink>
          <NavLink to="/add-book" className="hover:text-white ">Add Book</NavLink>
          <NavLink to="/borrowed-books" className="hover:text-white ">Borrowed Books</NavLink>
          {/* <NavLink>{user.email}</NavLink> */}
          
        </div>
        <div className='md:flex hidden items-center gap-5 justify-between'>
          <div className='flex items-center justify-center gap-4'>
            {
              user && (
                <img className='border bg-green-500 object-cover rounded-full h-[40px] w-[40px] border-green-800' title={user.displayName} src={user ? user.photoURL: "https://i.ibb.co.com/qYbhkjWj/image.png"}  alt="" onError={(e) => { e.target.src = "https://i.ibb.co/qYbhkjWj/image.png"; }} />
              ) 
            }
            {
              user ? (<Link to="/dashboard" className="btn btn-primary">
                Dashboard
              </Link>) : ("")
            }
            {/* <ThemeToggle /> */}
          </div>
          <div  className="">{user ? (<button onClick={handleLogOut} className='btn '>Logout</button>) : (<Link className='btn' to="/login">Login</Link>)}</div>
          <div>
            {
              !user ? (<Link to="/register" className="btn btn-success">Register</Link>) : ("")
            }
          </div>

          
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;