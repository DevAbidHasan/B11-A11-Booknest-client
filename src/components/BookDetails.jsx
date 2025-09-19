import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const BookDetails = () => {
  const book = useLoaderData();
  const { borrowed, setBorrowed, clicked, setClicked } =
    useContext(AuthContext);
  const { remainingQuantity, setRemainingQuantity } = useContext(AuthContext);
  console.log(book);
  const {
    photo,
    book_name,
    author_name,
    quantity,
    rating,
    category,
    description,
    content,
  } = book;
  setRemainingQuantity(quantity);

  const handleBorrowBook = () => {
    document.getElementById("my_modal_1").showModal();
    axios
      .post("http://localhost:3000/borrowed-books", book)
      .then((res) => {
        toast.success("Book is Borrowed Successfully !!!!!");
        setRemainingQuantity(remainingQuantity - 1);
        setClicked(true);
      })
      .catch((error) => {
        toast.error("Failed to borrow this book !!!");
      });
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-2xl md:text-3xl mb-9 lg:text-4xl font-black text-blue-600 text-center poppins">
        {book_name}
      </h2>
      <ToastContainer />
      <div className="border border-gray-200 rounded-lg p-8 bg-gray-50">
        <div className="flex flex-col gap-8 md:flex-row items-center justify-evenly">
          <img
            className="w-[200px] rounded-sm h-[250px] object-cover"
            src={photo}
            alt=""
          />
          <div className="md:space-y-5 inter space-y-2 ">
            <h2>
              Category :{" "}
              <span className="text-blue-600 font-bold">{category}</span>
            </h2>
            <h2>
              Quantity :{" "}
              <span className="text-green-600 font-bold">
                {remainingQuantity}
              </span>
            </h2>
            <h2>
              Author : <span className="text-indigo-600">{author_name}</span>
            </h2>
            <h2>
              Rating : <span className="text-amber-600">{rating} out of 5</span>
            </h2>
            <button
              disabled={clicked || remainingQuantity === 0}
              onClick={(book) => handleBorrowBook(book)}
             
              className="btn btn-primary w-full hover:btn-secondary"
            >
              Borrow Book
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                    <label className="label mr-3 text-center">Return Date</label>
                  <input className="input" type="date" placeholder="Enter the return date" />
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-success">Confirm</button>
                  </form>
                </div>
              </div>
            </dialog>
            
          </div>
        </div>
      </div>
      <div className="border px-6 py-8 mt-10 space-y-4 border-gray-100 bg-gray-100 rounded-md">
        <h2>
          Description : <span className="text-blue-800">{description}</span>
        </h2>
        <h2>
          Short Content : <span className="text-blue-800">{content}</span>
        </h2>
      </div>
    </div>
  );
};

export default BookDetails;
