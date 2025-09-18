import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>
                    BookNest || Homepage
                </title>
            </Helmet>
            <h2 className='my-15 poppins text-center font-black text-4xl'>this is home</h2>
           
        </div>
    );
};

export default Home;