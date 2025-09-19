import React from 'react';
import ratingImg from "../../public/rating.png"
import { FaUserEdit } from "react-icons/fa";
import viewImg from "../../public/details.png"
import { Link } from 'react-router';

const BorrowedBook = ({book}) => {
    const {photo, book_name, author_name, quantity, rating, category, description, content} = book;
    return (
        <div >
            <div className='hover:border space-y-2 hover:border-blue-300 border border-gray-200 hover:bg-white p-5 bg-gray-50 rounded-xl'>
                <h2 className='text-center font-bold text-xl text-blue-500 my-2'>{book_name}</h2>
                <div>
                    <img className='w-[140px] border border-gray-300 bg-white mx-auto rounded-sm h-[170px] object-cover' src={photo} alt="" />
                   
                </div>
                <p className='text-center text-green-600 font-bold inter'>{category}</p>
                <div className='flex items-center justify-around'>
                    
                        <Link className='btn btn-info hover:btn-secondary' to={`/book-details/${book._id}`}>Details</Link>
                        <button className='btn hover:btn-warning btn-primary'>Return Book</button>
                        {/* <FaUserEdit title='Update Book' size={22}/> */}
                       
                  
                </div>
            </div>
        </div>
    );
};

export default BorrowedBook;