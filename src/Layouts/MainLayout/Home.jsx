import React from 'react';
import { Helmet } from 'react-helmet';
import BookSlider from './BannerSlider';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>
                    BookNest || Homepage
                </title>
            </Helmet>
            <BookSlider></BookSlider>
           
        </div>
    );
};

export default Home;