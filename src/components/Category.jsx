import React from 'react';
import { useLoaderData } from 'react-router';
import Book from './Book';

const Category = () => {
    const data = useLoaderData();
    return (
        <div className='w-11/12 mx-auto my-10'>
             <h2 className='text-2xl md:text-3xl mb-9 lg:text-4xl font-black text-blue-600 text-center poppins'>{data[0].category}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    data.map((book, index) => <Book key={index} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Category;