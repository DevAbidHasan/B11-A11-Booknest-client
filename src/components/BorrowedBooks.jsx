import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import BorrowedBook from './BorrowedBook';


const BorrowedBooks = () => {
    const books = useLoaderData();
   
    const {borrowed, setBorrowed} = useContext(AuthContext);
    setBorrowed(books);
    
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-2xl md:text-3xl mb-9 lg:text-4xl font-black text-blue-600 text-center poppins'>Borrowed Books : {borrowed.length}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    borrowed.map((book, index) =><BorrowedBook book={book} key={index}></BorrowedBook>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;