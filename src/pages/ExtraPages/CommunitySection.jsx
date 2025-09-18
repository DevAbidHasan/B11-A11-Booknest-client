import React from 'react';

import years from "../../../public/years.png";
import books from "../../../public/book-card.png"
import CountUp from 'react-countup';
import events from "../../../public/event.png";
import members from "../../../public/members.png";

const CommunitySection = () => {
    return (
        <div className='w-11/12 mx-auto mt-18'>
            <h2 className='poppins font-black text-2xl md:text-4xl text-center text-blue-600 mb-10'>Our Community & Milestones</h2>
            <p className='text-lg text-gray-500 md:text-center text-justify'>We’re more than just a library — we’re a growing community of readers, learners, and dreamers. Take a look at the milestones we’ve achieved together.
            </p>

            {/* community milestone 4 cards */}
             <div className="md:grid-cols-4 my-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="flex text-center space-y-2 items-center border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:shadow-purple-100 justify-center flex-col border p-5">
                       <img src={books} className='w-[70px]' alt="" />
                       <h2 className="lg:text-3xl text-xl sm:text-2xl poppins font-black text-center text-blue-600">
                             <CountUp enableScrollSpy={true} scrollSpyOnce={true}  end={25000} duration={3}/>+
                       </h2>
                       <p className="inter text-gray-500">Books Available</p>
                    </div>
                    <div className="flex text-center space-y-2 items-center border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:shadow-green-100 justify-center flex-col border p-5">
                       {/* <PiPottedPlantFill className="text-green-600" size={80}/> */}
                       <img src={members} className='w-[70px]' alt="" />
                       <h2 className="lg:text-3xl text-xl sm:text-2xl poppins font-black text-center text-blue-600">
                             <CountUp enableScrollSpy={true} scrollSpyOnce={true}  end={1000} duration={3}/>+
                       </h2>
                       <p className="inter text-gray-500">Active Members</p>
                    </div>
                    <div className="flex text-center space-y-2 items-center border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-100 justify-center flex-col border p-5">
                       {/* <IoWater className="text-blue-600" size={80}/> */}
                       <img src={events} className='w-[70px]' alt="" />
                       <h2 className="lg:text-3xl text-xl sm:text-2xl poppins font-black text-center text-blue-600">
                             <CountUp enableScrollSpy={true} scrollSpyOnce={true}  end={150} duration={3}/>+
                       </h2>
                       <p className="inter  text-gray-500">Events Hosted</p>
                    </div>
                    <div className="flex text-center space-y-2 items-center border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:shadow-amber-100 justify-center flex-col border p-5">
                       {/* <RiUserCommunityLine className="text-amber-600" size={80}/> */}
                       <img src={years} className='w-[70px]' alt="" />
                       <h2 className="lg:text-3xl text-xl sm:text-2xl poppins font-black text-center text-blue-600">
                             <CountUp enableScrollSpy={true} scrollSpyOnce={true}  end={7} duration={3}/>+
                       </h2>
                       <p className="inter  text-gray-500">Years of Service</p>
                    </div>
                </div>
        </div>
    );
};

export default CommunitySection;