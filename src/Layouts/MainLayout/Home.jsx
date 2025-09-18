import React from 'react';
import { Helmet } from 'react-helmet';
import BookSlider from './BannerSlider';
import CommunitySection from '../../pages/ExtraPages/CommunitySection';
import FAQ from '../../pages/ExtraPages/FAQ';
import Contact from '../../pages/ExtraPages/Contact';

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
            <FAQ></FAQ>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;