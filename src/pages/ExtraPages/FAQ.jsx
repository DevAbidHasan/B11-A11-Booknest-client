import React from 'react';

const FAQ = () => {
    return (
        <div className='w-11/12 mx-auto mt-18'>
            <h2 className='poppins font-black text-2xl md:text-4xl text-center text-blue-600 mb-15'>Frequently Asked Questions</h2>
            {/* questions and answers */}
            <div className='inter'>
                {/* q-1 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 1 :</span> What is this platform about?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>This is an online library management website that allows registered users to borrow and return books easily from the comfort of their home.</h2>
                </div>
                {/* q-2 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 2 :</span> Who can use this platform?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>Any user who registers on the website can use the platform to borrow and return books.</h2>
                </div>
                 {/* q-3 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 3 :</span> How many books can I borrow at a time?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>Each registered user can borrow a maximum of 3 books at a time.</h2>
                </div>
                 {/* q-4 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 4 :</span> How do I borrow a book?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>Once logged in, browse the available books and click the “Borrow” button. The book will be added to your borrowed list immediately if you haven’t reached the limit.</h2>
                </div>
                 {/* q-5 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 5 :</span> How do I return a book?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>Go to your borrowed books list and click the “Return” button next to the book you want to send back. The book will become available for others.</h2>
                </div>
                {/* q-6 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 6 :</span> Is there a fee for using the platform?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>No, the platform is completely free for registered users. Borrowing and returning books does not cost anything.</h2>
                </div>
                
            </div>
        </div>
    );
};

export default FAQ;