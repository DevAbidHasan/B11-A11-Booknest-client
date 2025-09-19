import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const AddBook = () => {

    const handleAddBook =(e) =>{
        e.preventDefault();
        const form=e.target;
        const formData= new FormData(form);
        const newBook = Object.fromEntries(formData.entries());
        console.log(newBook);

        // send data to the server by axios

        axios.post("http://localhost:3000/books", newBook)
        .then(res => {
            console.log(res);
            Swal.fire({
                title : "Congratulations",
                text :"Book is added successfully !!!",
                icon :"success",
                button:"OK",
                timer : 2500
            });
        })
        .catch(error => {
            console.log(error);
             Swal.fire({
                title : "Error Occurred",
                text :"Book is not added, Try again !!!",
                icon :"failure",
                button:"CLOSE",
                timer : 2500
            });
        })
    }

    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-black mb-7 text-blue-600 text-center poppins'>Add Book</h2>
            <form onSubmit={handleAddBook} className='border p-5 border-gray-300 rounded-xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Book Image</label>
                    <input required type="url" name="photo" className="input w-full" placeholder="Enter book image" />
                    </fieldset>
                
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Book Name</label>
                    <input required type="text" name="book_name" className="input w-full" placeholder="Enter book name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Book Quantity</label>
                    <input required type="number" name="quantity" className="input w-full" placeholder="Enter book quantity" />
                    </fieldset>
                
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Author Name</label>
                    <input required type="text" name="author_name" className="input w-full" placeholder="Enter author name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Book Category</label>
                    <select name='category' className='border pl-3 border-gray-300 bg-white py-2.5 rounded-sm'>
                        <option defaultChecked>Select book category</option>
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>
                        <option value="History">History</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Fantasy">Fantasy</option>
                    </select>
                    </fieldset>
                
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Short Description</label>
                    <input required type="text" name="description" className="input w-full" placeholder="Enter short description" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Book Rating</label>
                     <select name='rating' className='border pl-3 border-gray-300 bg-white py-2.5 rounded-sm'>
                        <option defaultChecked>Select book rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </fieldset>
                
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Book Content</label>
                    <input required type="text" name="content" className="input w-full" placeholder="Enter book content" />
                    </fieldset>
                </div>
                <input className='btn mt-7 mb-2 btn-primary inter w-full' type="submit" value="Add Book" />

            </form>
        </div>
    );
};

export default AddBook;