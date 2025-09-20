import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const BorrowedBook = ({ book, setInitialBooks, initialBooks }) => {
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

  const handleBookReturn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/borrowed-books/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your book has been deleted.",
                icon: "success",
              });

              // remove book from UI and update state
              const remainingBooks = initialBooks.filter((b) => b._id !== _id);
              setInitialBooks(remainingBooks);
            }
          })
          .catch((err) => {
            console.log("Delete failed:", err);
            Swal.fire({
              title: "Error!",
              text: "Failed to return the book.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="hover:border space-y-2 hover:border-blue-300 border border-gray-200 hover:bg-white p-5 bg-gray-50 rounded-xl">
        <h2 className="text-center font-bold text-xl text-blue-500 my-2">
          {book_name}
        </h2>
        <div>
          <img
            className="w-[140px] border border-gray-300 bg-white mx-auto rounded-sm h-[170px] object-cover"
            src={photo}
            alt=""
          />
        </div>
        <p className="text-center text-green-600 font-bold inter">{category}</p>
        <div className="flex items-center justify-around">
          <Link
            className="btn btn-info hover:btn-secondary"
            to={`/book-details/${book._id}`}
          >
            Details
          </Link>
          <button
            onClick={() => handleBookReturn(book._id)}
            className="btn hover:btn-warning btn-primary"
          >
            Return Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBook;
