import React from 'react';
import { Helmet } from 'react-helmet';
import BookSlider from './BannerSlider';
import CommunitySection from '../../pages/ExtraPages/CommunitySection';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>
                    BookNest || Homepage
                </title>
            </Helmet>
            <BookSlider></BookSlider>
            <CommunitySection></CommunitySection>
           
        </div>
    );
};

export default Home;