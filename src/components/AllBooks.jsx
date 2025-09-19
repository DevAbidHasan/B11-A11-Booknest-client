import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const AllBooks = () => {
  const books = useLoaderData();
  const [activeTab, setActiveTab]=useState("tab-1");
  const handleTab=(id)=>{
    setActiveTab(id);
  }
  return (
    <div className="w-11/12 mx-auto mt-5">
     <Tabs className=" ">
      <div className="md:grid-cols-4 hidden md:grid gap-5 h-[500px]">
        {/* Left Side: Tabs */}
        <div className="col-span-1 bg-gray-100 p-4 rounded-l-lg">
          <TabList className="flex pt-3 flex-col items-center space-y-4">
            <Tab onClick={()=>handleTab("tab-1")} className={`p-2 text-center ${activeTab === "tab-1" ? "bg-blue-600 text-white" : "bg-white"}  rounded font-bold inter cursor-pointer w-full hover:bg-blue-400 hover:text-white`}>
               All Books
            </Tab>
            <Tab onClick={()=>handleTab("tab-2")} className={`p-2 text-center ${activeTab === "tab-2" ? "bg-green-600 text-white" : "bg-white"} inter rounded font-bold w-full hover:text-white cursor-pointer hover:bg-green-400`}>
               Available Books
            </Tab>
          </TabList>
        </div>

        {/* Right Side: Tab Panels */}
        <div className="col-span-3  bg-white p-6 rounded-r-lg shadow overflow-y-auto">
          <TabPanel>
            <h2 className="text-2xl text-center text-blue-600 font-bold poppins mb-4">All Books</h2>
            <div className='grid grid-cols-2 gap-6'>
                {
                    books.map((book, index) => <Book key={index} book={book}></Book>)
                }
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="text-2xl text-center text-blue-600 font-bold poppins mb-4">Available Books</h2>
          </TabPanel>
        </div>
      </div>
    </Tabs>
    </div>
  );
};

export default AllBooks;
