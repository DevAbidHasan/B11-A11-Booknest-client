import React from 'react';
import contactImage from "../../../public/contact.json"
import Lottie from 'lottie-react';

const Contact = () => {
    return (
        <div className='my-15 w-11/12 mx-auto'>
            <h2 className='text-center text-2xl poppins md:text-3xl text-blue-600 mb-16 mt-10 font-black'>Get In Touch</h2>
           
           {/* copied */}
           <div className='flex items-center lg:flex-row flex-col gap-10 justify-center lg:justify-between'>
              <div className='w-full'>
                <Lottie className='max-w-[320px] mx-auto' animationData={contactImage}></Lottie>
            </div>
            
            <div className='w-full inter'>
                <form action="" className=' border space-y-2 border-gray-300 rounded-md py-4 px-4 md:px-8'>
                    <label>Your Name</label><br/>
                    <input name="name" required className='md:py-2 py-1 bg-white border border-gray-300 px-2 md:px-5 w-full' placeholder="Enter your name"/><br/>
                    <label>Your Email</label><br/>
                    <input name="email" required className='md:py-2 py-1 bg-white border border-gray-300 px-2 md:px-5 w-full' placeholder="Enter your email" type="email"/><br/>
                    <label>Your Message</label><br/>
                    <textarea rows="3" required className="md:py-2 py-1 px-2 md:px-5 border bg-white border-gray-300 w-full" type="text" name="message" placeholder="Enter your message"></textarea><br/>
                    <input className="w-full banner-title btn btn-primary" type="submit" value="Send Message"/>
                </form>
            </div>
          
            </div>
        </div>
    );
};

export default Contact;