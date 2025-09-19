import React from 'react';
import ratingImg from "../../public/rating.png"
import { FaUserEdit } from "react-icons/fa";
import viewImg from "../../public/details.png"

const Book = ({book}) => {
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
                    
                        <div className='flex items-center justify-center gap-2'>
                            <img title='Book Rating' src={ratingImg} alt="" />
                            <h2 className='font-bold poppins'>{rating}</h2>
                        </div>
                   
                    
                        <img className='w-[28px]' title="View Details" src={viewImg} alt="" />
                        <FaUserEdit title='Update Book' size={22}/>
                        <h2 className={quantity > 0 ? "text-green-600" : "text-red-500"}>
                            Quantity : {quantity}
                        </h2>
                  
                </div>
            </div>
        </div>
    );
};

export default Book;