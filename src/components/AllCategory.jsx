import React from "react";
import { Link } from "react-router";

const AllCategory = () => {
  return (
    <div className="py-15 poppins bg-indigo-600 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-15 text-white text-center poppins">
        All Categories
      </h2>
      <div className="my-7 w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        <Link to={`/books/Novel`}>
          <h2 className="px-5 py-7 border border-gray-200 hover:bg-white hover:cursor-pointer hover:text-blue-600 hover:border-gray-300 rounded-lg bg-gray-100  font-bold text-2xl text-center">
            Novel
          </h2>
        </Link>
        <Link to={`/books/Thriller`}>
            <h2 className="px-5 py-7 border border-gray-200 hover:bg-white hover:cursor-pointer hover:text-blue-600 hover:border-gray-300 rounded-lg bg-gray-100  font-bold text-2xl text-center">
            Thriller
        </h2>
        </Link>
       <Link to={`/books/History`}>
             <h2 className="px-5 py-7 border border-gray-200 hover:bg-white hover:cursor-pointer hover:text-blue-600 hover:border-gray-300 rounded-lg bg-gray-100  font-bold text-2xl text-center">
          History
        </h2>
       </Link>
        <Link to={`/books/Drama`}>
             <h2 className="px-5 py-7 border border-gray-200 hover:bg-white hover:cursor-pointer hover:text-blue-600 hover:border-gray-300 rounded-lg bg-gray-100  font-bold text-2xl text-center">
          Drama
        </h2>
       </Link>
        <Link to={`/books/Sci-Fi`}>
             <h2 className="px-5 py-7 border border-gray-200 hover:bg-white hover:cursor-pointer hover:text-blue-600 hover:border-gray-300 rounded-lg bg-gray-100  font-bold text-2xl text-center">
          Sci - Fi
        </h2>
       </Link>
        <Link to={`/books/Fantasy`}>
             <h2 className="px-5 py-7 border border-gray-200 hover:bg-white hover:cursor-pointer hover:text-blue-600 hover:border-gray-300 rounded-lg bg-gray-100  font-bold text-2xl text-center">
          Fantasy
        </h2>
       </Link>
      </div>
    </div>
  );
};

export default AllCategory;
