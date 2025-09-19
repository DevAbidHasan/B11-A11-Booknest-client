import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
    const book = useLoaderData();
    console.log(book);
     const {photo, book_name, author_name, quantity, rating, category, description, content} = book;
    return (
        <div className='w-11/12 mx-auto my-10'>
           <h2 className='text-2xl md:text-3xl mb-9 lg:text-4xl font-black text-blue-600 text-center poppins'>{book_name}</h2>
          <div className='border border-gray-200 rounded-lg p-8 bg-gray-50'>
             <div className='flex flex-col gap-8 md:flex-row items-center justify-evenly'>
                <img className='w-[200px] rounded-sm h-[250px] object-cover' src={photo} alt="" />
                <div className='md:space-y-5 inter space-y-2 '>
                    <h2>Category : <span className='text-blue-600 font-bold'>{category}</span></h2>
                    <h2>Quantity : <span className='text-green-600 font-bold'>{quantity}</span></h2>
                    <h2>Author : <span className='text-indigo-600'>{author_name}</span></h2>
                    <h2>Rating : <span className='text-amber-600'>{rating} out of 5</span></h2>
                    <button className='btn btn-primary w-full hover:btn-secondary'>Borrow this Book</button>
                </div>
             </div>
          </div>
          <div className='border px-6 py-8 mt-10 space-y-4 border-gray-100 bg-gray-100 rounded-md'>
            <h2>Description : <span className='text-blue-800'>{description}</span></h2>
            <h2>Short Content : <span className='text-blue-800'>{content}</span></h2>
          </div>
        </div>
    );
};

export default BookDetails;